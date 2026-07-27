// lib/stripe.js
// Stripe integration for 3-tier subscription model

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

// PRICING TIERS
export const TIERS = {
  FREE: {
    id: "free",
    name: "Free",
    price: 0,
    description: "View sample pages",
    features: [
      "View first 30 pages",
      "Standard image quality",
      "No access to transcriptions"
    ]
  },
  MONTHLY_BASIC: {
    id: "monthly_basic",
    name: "Monthly - Essentials",
    price: 999, // $9.99 in cents
    priceDisplay: "$9.99/month",
    description: "Full access, monthly",
    stripeId: process.env.STRIPE_MONTHLY_BASIC,
    features: [
      "All 144 pages",
      "Transcriptions & transliterations",
      "Maulana Muhammad Ali translations",
      "Scholarly annotations",
      "Ask questions (5/month)"
    ]
  },
  MONTHLY_PRO: {
    id: "monthly_pro",
    name: "Monthly - Professional",
    price: 1999, // $19.99 in cents
    priceDisplay: "$19.99/month",
    description: "Full access + direct author Q&A",
    stripeId: process.env.STRIPE_MONTHLY_PRO,
    features: [
      "All 144 pages",
      "Transcriptions & transliterations",
      "Maulana Muhammad Ali translations",
      "Scholarly annotations",
      "Unlimited questions to author",
      "Priority response to questions",
      "Monthly interpretive essays"
    ]
  },
  LIFETIME: {
    id: "lifetime",
    name: "Lifetime Access",
    price: 9900, // $99 in cents
    priceDisplay: "$99 one-time",
    description: "Permanent access",
    stripeId: process.env.STRIPE_LIFETIME,
    features: [
      "All 144 pages forever",
      "Transcriptions & transliterations",
      "Maulana Muhammad Ali translations",
      "Scholarly annotations",
      "Unlimited questions to author",
      "Priority response to questions",
      "All future updates included",
      "No monthly renewal needed"
    ]
  }
};

// CREATE CHECKOUT SESSION
export async function createCheckoutSession(email, tier, successUrl, cancelUrl) {
  try {
    const tierConfig = TIERS[tier];
    
    if (!tierConfig.stripeId) {
      throw new Error(`Invalid tier: ${tier}`);
    }

    let sessionParams = {
      payment_method_types: ["card"],
      customer_email: email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: tier === "LIFETIME" ? "payment" : "subscription",
    };

    if (tier === "LIFETIME") {
      sessionParams.line_items = [
        {
          price: tierConfig.stripeId,
          quantity: 1,
        },
      ];
    } else {
      sessionParams.line_items = [
        {
          price: tierConfig.stripeId,
          quantity: 1,
        },
      ];
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    
    return session;
  } catch (error) {
    console.error("Stripe session creation error:", error);
    throw error;
  }
}

// GET SUBSCRIPTION STATUS
export async function getSubscriptionStatus(customerId) {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1,
    });

    if (subscriptions.data.length > 0) {
      const sub = subscriptions.data[0];
      return {
        status: sub.status,
        tier: sub.items.data[0].price.id,
        currentPeriodEnd: new Date(sub.current_period_end * 1000),
        cancelAtPeriodEnd: sub.cancel_at_period_end,
      };
    }

    return null;
  } catch (error) {
    console.error("Stripe subscription status error:", error);
    return null;
  }
}

// GET PAYMENT STATUS (for lifetime purchases)
export async function getPaymentStatus(paymentIntentId) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    return {
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    };
  } catch (error) {
    console.error("Stripe payment status error:", error);
    return null;
  }
}

// CANCEL SUBSCRIPTION
export async function cancelSubscription(subscriptionId) {
  try {
    const canceledSub = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });

    return canceledSub;
  } catch (error) {
    console.error("Stripe cancellation error:", error);
    throw error;
  }
}

// WEBHOOK: Process Stripe events
export async function handleStripeEvent(event) {
  switch (event.type) {
    case "checkout.session.completed":
      // User completed checkout
      return handleCheckoutComplete(event.data.object);
      
    case "invoice.payment_succeeded":
      // Subscription payment succeeded
      return handlePaymentSucceeded(event.data.object);
      
    case "invoice.payment_failed":
      // Subscription payment failed
      return handlePaymentFailed(event.data.object);
      
    case "customer.subscription.deleted":
      // Subscription canceled
      return handleSubscriptionDeleted(event.data.object);
      
    default:
      console.log(`Unhandled Stripe event: ${event.type}`);
      return null;
  }
}

async function handleCheckoutComplete(session) {
  // Session contains customer_email and metadata
  // Update user tier in Redis
  console.log("Checkout completed:", session.customer_email);
  return true;
}

async function handlePaymentSucceeded(invoice) {
  // Payment succeeded for subscription
  console.log("Payment succeeded for:", invoice.customer_email);
  return true;
}

async function handlePaymentFailed(invoice) {
  // Payment failed for subscription
  console.log("Payment failed for:", invoice.customer_email);
  return true;
}

async function handleSubscriptionDeleted(subscription) {
  // Subscription was canceled
  console.log("Subscription deleted for customer:", subscription.customer);
  return true;
}

export default stripe;
