import posthog from "posthog-js";
import { PostHog } from "@posthog/node";

let posthogClient: PostHog | null = null;
let posthogBrowserClient: typeof posthog | null = null;

// initPostHog - initializes browser client
export function initPostHog(apiKey: string, host: string): typeof posthog {
  if (typeof window !== "undefined") {
    posthog.init(apiKey, {
      api_host: host,
    });
    posthogBrowserClient = posthog;
    return posthog;
  }
  throw new Error("PostHog browser client can only be initialized in browser context");
}

// initPostHogServer - initializes server client
export function initPostHogServer(apiKey: string, host: string): PostHog {
  posthogClient = new PostHog(apiKey, {
    host,
  });
  return posthogClient;
}

// trackEvent
export function trackEvent(eventName: string, properties?: Record<string, any>): void {
  if (posthogBrowserClient) {
    posthogBrowserClient.capture(eventName, properties);
  }
}

// identifyUser
export function identifyUser(userId: string, properties?: Record<string, any>): void {
  if (posthogBrowserClient) {
    posthogBrowserClient.identify(userId, properties);
  }
}

// trackPageView
export function trackPageView(pageName: string): void {
  if (posthogBrowserClient) {
    posthogBrowserClient.capture("$pageview", { page: pageName });
  }
}

// isFeatureEnabled
export function isFeatureEnabled(featureKey: string): boolean {
  if (posthogBrowserClient) {
    return posthogBrowserClient.isFeatureEnabled(featureKey) || false;
  }
  return false;
}

// captureServerEvent
export function captureServerEvent(
  eventName: string,
  distinctId: string,
  properties?: Record<string, any>
): void {
  if (posthogClient) {
    posthogClient.capture({
      distinctId,
      event: eventName,
      properties,
    });
  }
}