import OpenAI from "openai";

// createOpenRouterClient - creates client instance for OpenRouter API
export function createOpenRouterClient(apiKey: string): OpenAI {
  return new OpenAI({
    apiKey,
    baseURL: "https://openrouter.ai/api/v1",
  });
}

// generateWithFallback - tries GPT-4 first then Claude then fallback
export async function generateWithFallback(
  messages: Array<{ role: string; content: string }>,
  options?: {
    maxTokens?: number;
    temperature?: number;
    model?: string;
    fallbackModels?: string[];
  }
): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY!;
  const client = createOpenRouterClient(apiKey);

  const modelsToTry = [
    options?.model || "openai/gpt-4",
    "anthropic/claude-3-opus",
    "google/gemini-pro",
    ...(options?.fallbackModels || []),
  ];

  let lastError: Error | null = null;

  for (const model of modelsToTry) {
    try {
      const response = await client.chat.completions.create({
        model,
        messages: messages as any,
        max_tokens: options?.maxTokens || 1000,
        temperature: options?.temperature || 0.7,
      });

      return response.choices[0]?.message?.content || "";
    } catch (err) {
      lastError = err as Error;
      continue;
    }
  }

  throw lastError || new Error("All model fallbacks exhausted");
}

// generateStream - streaming response
export async function generateStream(
  messages: Array<{ role: string; content: string }>,
  options?: {
    maxTokens?: number;
    temperature?: number;
    model?: string;
  }
): Promise<ReadableStream<string>> {
  const apiKey = process.env.OPENROUTER_API_KEY!;
  const client = createOpenRouterClient(apiKey);

  const stream = await client.chat.completions.create({
    model: options?.model || "openai/gpt-4",
    messages: messages as any,
    max_tokens: options?.maxTokens || 1000,
    temperature: options?.temperature || 0.7,
    stream: true,
  });

  return new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          controller.enqueue(content);
        }
      }
      controller.close();
    },
  });
}

// PromptTemplate class
export class PromptTemplate {
  private template: string;
  private variables: Record<string, any>;

  constructor(template: string) {
    this.template = template;
    this.variables = {};
  }

  compile(variables: Record<string, any>): PromptTemplate {
    this.variables = variables;
    return this;
  }

  render(): string {
    let result = this.template;
    for (const [key, value] of Object.entries(this.variables)) {
      result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), String(value));
    }
    return result;
  }
}

// estimateTokens - rough token count (approximation: 4 chars per token)
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// estimateCost - cost estimation in USD
export function estimateCost(tokens: number, model: string): number {
  const pricing: Record<string, number> = {
    "openai/gpt-4": 0.00003, // per token
    "openai/gpt-3.5-turbo": 0.0000015,
    "anthropic/claude-3-opus": 0.000015,
    "anthropic/claude-3-sonnet": 0.000003,
    "google/gemini-pro": 0.0000005,
  };

  const pricePerToken = pricing[model] || 0.000001;
  return tokens * pricePerToken;
}

// retryWithBackoff - exponential backoff wrapper
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err as Error;
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s...
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError || new Error("Max retries exceeded");
}