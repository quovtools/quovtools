import Stripe from "stripe";

// STRIPE_PRICE_IDS constant object
export const STRIPE_PRICE_IDS = {
  FREE: process.env.STRIPE_FREE_PRICE_ID || "price_free",
  STARTER: process.env.STRIPE_STARTER_PRICE_ID || "price_starter",
  PRO: process.env.STRIPE_PRO_PRICE_ID || "price_pro",
  AGENCY: process.env.STRIPE_AGENCY_PRICE_ID || "price_agency",
} as const;

// createStripeClient - stripe instance with secret key
export function createStripeClient(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY!;
  return new Stripe(secretKey, {
    apiVersion: "2024-06-20",
  });
}

// createCheckoutSession - creates Stripe checkout session
export async function createCheckoutSession(params: {
  priceId: string;
  customerId?: string;
  successUrl: string;
  cancelUrl: string;
  mode?: "payment" | "subscription";
  quantity?: number;
  metadata?: Record<string, string>;
}): Promise<Stripe.Checkout.Session> {
  const stripe = createStripeClient();

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    mode: params.mode || "subscription",
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    line_items: [
      {
        price: params.priceId,
        quantity: params.quantity || 1,
      },
    ],
    ...(params.customerId && { customer: params.customerId }),
    ...(params.metadata && { metadata: params.metadata }),
  };

  return stripe.checkout.sessions.create(sessionParams);
}

// createCustomerPortalSession - creates portal session
export async function createCustomerPortalSession(
  customerId: string,
  returnUrl?: string
): Promise<Stripe.BillingPortal.Session> {
  const stripe = createStripeClient();

  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl || process.env.NEXT_PUBLIC_APP_URL,
  });
}

// getSubscriptionStatus - fetches current subscription
export async function getSubscriptionStatus(customerId: string): Promise<{
  status: string;
  tier: string;
  currentPeriodEnd?: Date;
}> {
  const stripe = createStripeClient();

  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    status: "active",
    limit: 1,
  });

  if (subscriptions.data.length === 0) {
    return { status: "none", tier: "free" };
  }

  const subscription = subscriptions.data[0];
  const priceId = subscription.items.data[0]?.price?.id;

  let tier = "free";
  if (priceId === STRIPE_PRICE_IDS.STARTER) tier = "starter";
  else if (priceId === STRIPE_PRICE_IDS.PRO) tier = "pro";
  else if (priceId === STRIPE_PRICE_IDS.AGENCY) tier = "agency";

  return {
    status: subscription.status,
    tier,
    currentPeriodEnd: new Date(subscription.current_period_end * 1000),
  };
}

// handleWebhookEvent - handles Stripe webhooks
export function handleWebhookEvent(
  body: string | Buffer,
  signature: string
): Stripe.Event | null {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  const stripe = createStripeClient();

  try {
    return stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return null;
  }
}

// isFeatureAccessible - tier enforcement middleware logic
export function isFeatureAccessible(
  userSubscription: { tier: string; status: string },
  feature: string
): boolean {
  const featureTiers: Record<string, string[]> = {
    basic: ["free", "starter", "pro", "agency"],
    advanced: ["pro", "agency"],
    premium: ["agency"],
    unlimited: ["agency"],
  };

  const allowedTiers = featureTiers[feature] || [];
  return userSubscription.status === "active" && allowedTiers.includes(userSubscription.tier);
}