// lib/email.js
// HostGator SMTP email delivery

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.HOSTGATOR_SMTP_HOST,
  port: parseInt(process.env.HOSTGATOR_SMTP_PORT),
  secure: false, // Use TLS (port 587)
  auth: {
    user: process.env.HOSTGATOR_SMTP_USER,
    pass: process.env.HOSTGATOR_SMTP_PASS,
  },
});

// WELCOME EMAIL
export async function sendWelcomeEmail(email, tier) {
  const tierName = getTierName(tier);
  
  try {
    await transporter.sendMail({
      from: process.env.HOSTGATOR_SMTP_USER,
      to: email,
      subject: "Welcome to Elijah's Foundation — The First Quran",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Welcome, Brother/Sister</h1>
          
          <p>As-Salaam Alaikum,</p>
          
          <p>Your access to <strong>The First Quran Given to Elijah Muhammad</strong> is now active.</p>
          
          <p><strong>Your tier:</strong> ${tierName}</p>
          
          <p>You may now:</p>
          <ul>
            <li>View all 144 pages of the original manuscript</li>
            <li>Read Maulana Muhammad Ali's 1934 translation</li>
            <li>Study scholarly annotations and historical context</li>
            <li>Ask questions directly to the custodian</li>
          </ul>
          
          <p><a href="${process.env.NEXT_PUBLIC_APP_URL}" style="background: #8b7355; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Begin Your Study</a></p>
          
          <p>Questions? Reply to this email or use the Q&A feature on the platform.</p>
          
          <p>Your brother in the discipline,<br/>
          Amin Shabazz Muhammad</p>
        </div>
      `
    });
    
    return true;
  } catch (error) {
    console.error("Welcome email error:", error);
    return false;
  }
}

// QUESTION RECEIVED EMAIL
export async function sendQuestionReceivedEmail(email, questionId, question) {
  try {
    await transporter.sendMail({
      from: process.env.HOSTGATOR_SMTP_USER,
      to: email,
      subject: "Your Question Has Been Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Question Received</h2>
          
          <p>As-Salaam Alaikum,</p>
          
          <p>Your question has been received and logged:</p>
          
          <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b7355;">
            "${question}"
          </p>
          
          <p>The custodian will provide a response as soon as possible. You'll receive an email when your answer is ready.</p>
          
          <p>Question ID: ${questionId}</p>
          
          <p>Your brother in the discipline,<br/>
          Amin Shabazz Muhammad</p>
        </div>
      `
    });
    
    return true;
  } catch (error) {
    console.error("Question received email error:", error);
    return false;
  }
}

// QUESTION ANSWERED EMAIL
export async function sendQuestionAnsweredEmail(email, question, answer) {
  try {
    await transporter.sendMail({
      from: process.env.HOSTGATOR_SMTP_USER,
      to: email,
      subject: "Your Question Has Been Answered",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Your Answer Is Ready</h2>
          
          <p>As-Salaam Alaikum,</p>
          
          <p><strong>Your Question:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b7355;">
            "${question}"
          </p>
          
          <p><strong>The Answer:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b7355;">
            ${answer.replace(/\n/g, "<br/>")}
          </p>
          
          <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/questions" style="background: #8b7355; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View in Your Account</a></p>
          
          <p>Your brother in the discipline,<br/>
          Amin Shabazz Muhammad</p>
        </div>
      `
    });
    
    return true;
  } catch (error) {
    console.error("Question answered email error:", error);
    return false;
  }
}

// SUBSCRIPTION CONFIRMATION EMAIL
export async function sendSubscriptionConfirmationEmail(email, tier) {
  const tierName = getTierName(tier);
  const renewalInfo = tier === "LIFETIME" 
    ? "Your access is permanent and does not require renewal."
    : tier === "MONTHLY_PRO"
    ? "Your subscription renews monthly. You can cancel anytime before your next billing date."
    : "Your subscription renews monthly. You can upgrade to Professional tier at any time.";
  
  try {
    await transporter.sendMail({
      from: process.env.HOSTGATOR_SMTP_USER,
      to: email,
      subject: "Subscription Confirmed — Elijah's Foundation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Subscription Confirmed</h1>
          
          <p>As-Salaam Alaikum,</p>
          
          <p>Your subscription to <strong>Elijah's Foundation</strong> is now active.</p>
          
          <p><strong>Plan:</strong> ${tierName}</p>
          
          <p>${renewalInfo}</p>
          
          <p>Your access is available immediately. Log in to begin your study of The First Quran.</p>
          
          <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/login" style="background: #8b7355; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Access The Quran</a></p>
          
          <p>Your brother in the discipline,<br/>
          Amin Shabazz Muhammad</p>
        </div>
      `
    });
    
    return true;
  } catch (error) {
    console.error("Subscription confirmation email error:", error);
    return false;
  }
}

// ADMIN NOTIFICATION: NEW QUESTION
export async function notifyAdminNewQuestion(email, questionId, question) {
  try {
    await transporter.sendMail({
      from: process.env.HOSTGATOR_SMTP_USER,
      to: process.env.ADMIN_EMAIL || "amin@elijahs.foundation",
      subject: `New Question from ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Question Submitted</h2>
          
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Question ID:</strong> ${questionId}</p>
          
          <p><strong>Question:</strong></p>
          <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #8b7355;">
            ${question}
          </p>
          
          <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/admin/questions" style="background: #8b7355; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View All Questions</a></p>
        </div>
      `
    });
    
    return true;
  } catch (error) {
    console.error("Admin notification email error:", error);
    return false;
  }
}

// HELPER: Get tier display name
function getTierName(tier) {
  const tiers = {
    "MONTHLY_BASIC": "Monthly Essentials - $9.99/month",
    "MONTHLY_PRO": "Monthly Professional - $19.99/month",
    "LIFETIME": "Lifetime Access - $99 one-time"
  };
  return tiers[tier] || "Free";
}

// TEST EMAIL (for development)
export async function sendTestEmail(recipient) {
  try {
    await transporter.sendMail({
      from: process.env.HOSTGATOR_SMTP_USER,
      to: recipient,
      subject: "Test Email from Elijah's Foundation",
      html: `
        <p>This is a test email from Elijah's Foundation platform.</p>
        <p>SMTP is working correctly.</p>
      `
    });
    
    return true;
  } catch (error) {
    console.error("Test email error:", error);
    return false;
  }
}

export default transporter;
