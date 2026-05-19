import emailjs from "@emailjs/browser";

/*
 * =============================================================================
 * EMAILJS SETUP — follow these steps before the contact form will work
 * =============================================================================
 *
 * 1. Create a free account at https://www.emailjs.com/
 *
 * 2. Add an Email Service (Gmail, Outlook, etc.) and note the SERVICE ID.
 *
 * 3. Create an Email Template with these template variables:
 *    - {{from_name}}   — sender's name
 *    - {{from_email}}  — sender's email
 *    - {{subject}}     — message subject
 *    - {{message}}     — message body
 *
 * 4. In EmailJS → Account → API Keys, copy your PUBLIC KEY.
 *
 * 5. Create a Form in EmailJS (or use sendForm with your HTML form) and note
 *    the FORM ID if you use sendForm; for send() you only need SERVICE + TEMPLATE.
 *
 * 6. Add a `.env.local` file in the project root:
 *
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
 *
 * 7. Restart the dev server after changing env variables.
 *
 * =============================================================================
 */

export interface ContactFormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
}

function getConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const placeholders = new Set([
    "your_service_id",
    "your_template_id",
    "your_public_key",
  ]);

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local"
    );
  }

  if (
    placeholders.has(serviceId) ||
    placeholders.has(templateId) ||
    placeholders.has(publicKey)
  ) {
    throw new Error(
      "EmailJS still uses placeholder values in .env.local. Set your Public Key from EmailJS → Account → API Keys."
    );
  }

  return { serviceId, templateId, publicKey };
}

function getErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "text" in error) {
    const text = (error as { text?: string }).text;
    if (text) return text;
  }
  if (error instanceof Error) return error.message;
  return "Unknown error occurred";
}

export async function sendContactEmail(
  form: HTMLFormElement
): Promise<EmailResult> {
  try {
    const { serviceId, templateId, publicKey } = getConfig();

    await emailjs.sendForm(serviceId, templateId, form, {
      publicKey,
    });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to send message. ${getErrorMessage(error)}`,
    };
  }
}
