"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { sendContactEmail } from "@/lib/emailjs";
import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

interface ContactFormValues {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

interface ContactField {
  key: string;
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
}

const socialIcons = {
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  github: (
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  ),
  email: (
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  ),
};

const contactFields: ContactField[] = [
  {
    key: "name",
    label: "Name",
    value: personalInfo.name,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    key: "location",
    label: "Location",
    value: personalInfo.location,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
      />
    ),
  },
  {
    key: "email",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    key: "phone",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    key: "education",
    label: "Education",
    value: personalInfo.education,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
      />
    ),
  },
  {
    key: "languages",
    label: "Languages",
    value: personalInfo.languages.join(", "),
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5h12M9 3v2m4 10a4 4 0 01-8 0M6 19h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z"
      />
    ),
  },
];

const inputClass =
  "contact-input px-4 py-2.5 text-sm sm:py-3 sm:text-fluid-body";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = handleSubmit(async () => {
    if (!formRef.current) return;
    setLoading(true);
    setStatus(null);

    const result = await sendContactEmail(formRef.current);
    setLoading(false);
    setStatus({ type: result.success ? "success" : "error", text: result.message });
    if (result.success) reset();
  });

  return (
    <div className="relative flex w-full min-h-0 flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 150%, var(--border) 22%, transparent 23%)",
          backgroundSize: "1.75rem 1.75rem",
        }}
      />

      <SectionHeading title="Contact" highlight="Form" compact />

      <div className="grid w-full auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <GlassCard className="flex h-full flex-col p-4">
            <h3 className="mb-2 text-fluid-sub font-semibold text-foreground">
              Let&apos;s work together
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted sm:text-fluid-body">
              Have a project in mind or want to discuss opportunities? Reach out — I&apos;ll get
              back to you as soon as I can.
            </p>

            <ul className="space-y-2.5 pb-4">
              {contactFields.map((field) => (
                <li key={field.key} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      {field.icon}
                    </svg>
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {field.label}
                    </p>
                    {field.href ? (
                      <a
                        href={field.href}
                        className="mt-0.5 block truncate text-sm text-muted transition-colors hover:text-accent sm:text-fluid-body"
                      >
                        {field.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-muted sm:text-fluid-body">{field.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-border/50 pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-primary/30 text-accent transition-colors hover:border-accent/50 hover:bg-accent/10"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      {socialIcons[link.icon]}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-col"
        >
          <GlassCard className="flex h-full flex-col p-4 sm:p-5">
            <h3 className="mb-3 text-fluid-sub font-semibold text-foreground">Send a message</h3>

            <form ref={formRef} onSubmit={onSubmit} className="flex flex-1 flex-col gap-3.5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("from_name", { required: "Name is required" })}
                    name="from_name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                  {errors.from_name && (
                    <p className="mt-1 text-xs text-red-500">{errors.from_name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("from_email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    name="from_email"
                    type="email"
                    placeholder="Your email"
                    className={inputClass}
                  />
                  {errors.from_email && (
                    <p className="mt-1 text-xs text-red-500">{errors.from_email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  name="subject"
                  placeholder="Subject"
                  className={inputClass}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div className="flex min-h-0 flex-1 flex-col">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className={`${inputClass} min-h-[5.5rem] flex-1 resize-none sm:min-h-[6rem]`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              {status && (
                <p
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.text}
                </p>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
