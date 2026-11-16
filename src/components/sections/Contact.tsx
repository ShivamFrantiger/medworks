"use client";

import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import type { FormErrors, FormState } from "@/types";
import { BRAND, CONTACT, TIME_SLOTS } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CONTAINER, FOCUS, HEADING } from "@/components/ui/tokens";

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  message: "",
};

function validate(f: FormState): FormErrors {
  const e: FormErrors = {};
  if (!f.firstName.trim()) e.firstName = "Enter your first name.";
  if (!f.lastName.trim()) e.lastName = "Enter your last name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email))
    e.email = "Enter a valid email address.";
  if (f.phone && f.phone.replace(/\D/g, "").length < 7)
    e.phone = "Enter a valid phone number.";
  if (f.message.trim().length < 10)
    e.message = "Tell us a little more (at least 10 characters).";
  return e;
}

const fieldBase =
  "w-full rounded-xl border bg-[#F7F7F8] px-4 py-3 text-[13px] text-[#0E0E10] placeholder:text-[#8A8F99] transition-colors focus:border-[#0A5CFF] focus:outline-none focus:ring-2 focus:ring-[#0A5CFF]/20";

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="sr-only">{label}</span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-[11px] text-[#D92D20]">
          {error}
        </span>
      )}
    </label>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const border = (k: keyof FormState) =>
    errors[k] ? "border-[#D92D20]" : "border-black/15";

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("submitting");
    // TODO: replace with a real endpoint, e.g. await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 900));
    console.log("[MedWorks] contact form submitted:", form);
    setStatus("success");
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="scroll-mt-4 pb-24 pt-16 sm:pt-24">
      <div className={CONTAINER}>
        <Reveal className="text-center">
          <p className="text-xs text-[#5B616C]">Contact Us</p>
          <h2
            className={`${HEADING} mx-auto mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] text-[#0E0E10] sm:text-[44px]`}
          >
            Get in Touch with Our Medical Technology Experts
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-xs leading-relaxed text-[#5B616C] sm:text-[11.5px]">
            Healthcare is the practice of promoting, protecting, and restoring
            health through medical services, preventive care, and patient
            support, enhancing quality of life.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-[900px] gap-12 md:grid-cols-[1fr_1.7fr] md:gap-16">
          <Reveal>
            <p className="max-w-xs text-xs leading-relaxed text-[#0E0E10]">
              Healthcare is about keeping people healthy through treatment,
              prevention, and wellness needs. Effortlessly schedule a demo of
              our equipment with our user-friendly appointment booking system.
            </p>
            <ul className="mt-6 space-y-4 text-xs text-[#0E0E10]">
              <li className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#0A5CFF] text-white">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    aria-hidden="true"
                  >
                    <path d="M8 14s4.5-3.9 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10.1 8 14 8 14Z" />
                    <circle cx="8" cy="6.5" r="1.6" />
                  </svg>
                </span>
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#0A5CFF] text-white">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    aria-hidden="true"
                  >
                    <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
                    <path d="m2.5 4.5 5.5 4 5.5-4" />
                  </svg>
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={`rounded transition-colors hover:text-[#0A5CFF] ${FOCUS}`}
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            {status === "success" ? (
              <div
                role="status"
                className="grid min-h-[420px] place-items-center rounded-3xl border border-[#0A5CFF]/20 bg-[#EEF3FF] p-10 text-center"
              >
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#0A5CFF] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 12.5 4.5 4.5L19 7.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3
                    className={`${HEADING} mt-5 text-2xl font-medium text-[#0E0E10]`}
                  >
                    Message sent
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-[#3A3D44]">
                    Thanks for reaching out. A {BRAND} specialist will reply
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className={`mt-6 rounded-full border border-black/15 bg-white px-5 py-2.5 text-xs font-medium transition-colors hover:bg-[#F0F2F6] ${FOCUS}`}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="grid gap-4 sm:grid-cols-2"
                aria-busy={status === "submitting"}
              >
                <Field label="First name" error={errors.firstName}>
                  <input
                    className={`${fieldBase} ${border("firstName")}`}
                    placeholder="First Name"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    aria-invalid={!!errors.firstName}
                  />
                </Field>
                <Field label="Last name" error={errors.lastName}>
                  <input
                    className={`${fieldBase} ${border("lastName")}`}
                    placeholder="Last Name"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                    aria-invalid={!!errors.lastName}
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    className={`${fieldBase} ${border("email")}`}
                    placeholder="Email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                </Field>
                <Field label="Phone number" error={errors.phone}>
                  <input
                    type="tel"
                    className={`${fieldBase} ${border("phone")}`}
                    placeholder="Number"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                  />
                </Field>
                <Field label="Preferred date">
                  <input
                    type="date"
                    min={today || undefined}
                    className={`${fieldBase} ${border("date")} ${form.date ? "" : "text-[#8A8F99]"}`}
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                  />
                </Field>
                <Field label="Preferred time">
                  <select
                    className={`${fieldBase} ${border("time")} ${form.time ? "" : "text-[#8A8F99]"}`}
                    value={form.time}
                    onChange={(e) => set("time", e.target.value)}
                  >
                    <option value="">Preferred Time:</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Message"
                  error={errors.message}
                  className="sm:col-span-2"
                >
                  <textarea
                    rows={6}
                    className={`${fieldBase} ${border("message")} resize-none`}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    aria-invalid={!!errors.message}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <PrimaryButton
                    type="submit"
                    disabled={status === "submitting"}
                    className="px-6 py-3"
                  >
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </PrimaryButton>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
