import { Resend } from "resend";
import React from "react";

// Type for email props
type EmailTemplateProps = {
  to: string;
  subject: string;
  reactElement: React.ReactElement;
};

// createResendClient
export function createResendClient(apiKey: string): Resend {
  return new Resend(apiKey);
}

// sendEmail helper
export async function sendEmail(
  to: string,
  subject: string,
  reactElement: React.ReactElement
): Promise<{ id: string } | null> {
  const resend = createResendClient(process.env.RESEND_API_KEY!);
  const from = process.env.RESEND_FROM_EMAIL || "noreply@quov.ai";

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      react: reactElement,
    });

    if (error) {
      console.error("Email send error:", error);
      return null;
    }

    return { id: data?.id || "" };
  } catch (err) {
    console.error("Email send error:", err);
    return null;
  }
}

// WELCOME_TEMPLATE - functional React component
export function WELCOME_TEMPLATE({ userName }: { userName: string }): React.ReactElement {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Welcome to Quov!</h1>
      <p>Hello {userName}, thanks for joining us!</p>
    </div>
  );
}

// PASSWORD_RESET_TEMPLATE
export function PASSWORD_RESET_TEMPLATE({ resetLink }: { resetLink: string }): React.ReactElement {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Password Reset</h1>
      <p>Click the link below to reset your password:</p>
      <a href={resetLink}>Reset Password</a>
    </div>
  );
}

// PAYMENT_CONFIRMATION_TEMPLATE
export function PAYMENT_CONFIRMATION_TEMPLATE({ 
  amount, 
  planName 
}: { 
  amount: string; 
  planName: string; 
}): React.ReactElement {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Payment Confirmation</h1>
      <p>Your payment of {amount} for {planName} has been processed successfully.</p>
    </div>
  );
}

// USAGE_ALERT_TEMPLATE
export function USAGE_ALERT_TEMPLATE({ usagePercent }: { usagePercent: number }): React.ReactElement {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Usage Alert</h1>
      <p>You have used {usagePercent}% of your monthly quota.</p>
    </div>
  );
}

// WEEKLY_DIGEST_TEMPLATE
export function WEEKLY_DIGEST_TEMPLATE({ stats }: { stats: Record<string, any> }): React.ReactElement {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Weekly Digest</h1>
      <pre>{JSON.stringify(stats, null, 2)}</pre>
    </div>
  );
}

// sendWelcomeEmail
export async function sendWelcomeEmail(userEmail: string, userName: string): Promise<{ id: string } | null> {
  return sendEmail(
    userEmail,
    "Welcome to Quov!",
    <WELCOME_TEMPLATE userName={userName} />
  );
}

// sendPasswordResetEmail
export async function sendPasswordResetEmail(userEmail: string, resetLink: string): Promise<{ id: string } | null> {
  return sendEmail(
    userEmail,
    "Password Reset Request",
    <PASSWORD_RESET_TEMPLATE resetLink={resetLink} />
  );
}

// sendPaymentConfirmation
export async function sendPaymentConfirmation(
  userEmail: string,
  amount: string,
  planName: string
): Promise<{ id: string } | null> {
  return sendEmail(
    userEmail,
    "Payment Confirmation",
    <PAYMENT_CONFIRMATION_TEMPLATE amount={amount} planName={planName} />
  );
}

// sendUsageAlert
export async function sendUsageAlert(userEmail: string, usagePercent: number): Promise<{ id: string } | null> {
  return sendEmail(
    userEmail,
    "Usage Alert",
    <USAGE_ALERT_TEMPLATE usagePercent={usagePercent} />
  );
}

// sendWeeklyDigest
export async function sendWeeklyDigest(userEmail: string, stats: Record<string, any>): Promise<{ id: string } | null> {
  return sendEmail(
    userEmail,
    "Your Weekly Digest",
    <WEEKLY_DIGEST_TEMPLATE stats={stats} />
  );
}