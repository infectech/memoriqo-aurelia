"use client";

import { useState, type FormEvent } from "react";
import { WEDDING } from "@/lib/wedding-data";
import { submitRsvp } from "@/lib/rsvp";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function RSVPSection() {
  const [attending, setAttending] = useState<"accepts" | "declines" | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!WEDDING.rsvp.enabled) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const contact = String(form.get("contact") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your full name.";
    if (!attending) nextErrors.attending = "Please let us know if you will be joining us.";
    if (!contact) nextErrors.contact = "Please share an email or phone number so we can reach you.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitRsvp({
        name,
        attending: attending as "accepts" | "declines",
        guestCount: Number(form.get("guestCount")) || undefined,
        contact,
        dietary: String(form.get("dietary") || "") || undefined,
        message: String(form.get("message") || "") || undefined,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="rsvp" className="mx-auto max-w-[560px] px-6 text-center" style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}>
        <Reveal>
          <p
            className="mb-3 italic"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--antique-gold)" }}
          >
            Thank you.
          </p>
          <p style={{ color: "var(--espresso)" }}>
            Your response has been received. We cannot wait to celebrate with you.
          </p>
        </Reveal>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="mx-auto max-w-[640px] px-6"
      style={{ paddingTop: "clamp(3rem, 8vh, 5rem)", paddingBottom: "clamp(3rem, 8vh, 5rem)" }}
    >
      <Reveal className="mb-10 text-center">
        <h2 className="mb-3" style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)" }}>
          We Would Love to Celebrate With You
        </h2>
        <p style={{ color: "var(--taupe)" }}>Kindly let us know if you will be joining us.</p>
        {WEDDING.rsvp.deadlineDisplay && (
          <p className="mt-2 text-sm" style={{ color: "var(--olive)" }}>
            Please respond by {WEDDING.rsvp.deadlineDisplay}.
          </p>
        )}
      </Reveal>

      <Reveal>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <Field label="Full Name" name="name" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              className="rsvp-input"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
          </Field>

          <fieldset>
            <legend className="mb-2 text-sm" style={{ color: "var(--espresso)" }}>
              Will you be joining us?
            </legend>
            <div className="flex flex-wrap gap-3">
              {(["accepts", "declines"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAttending(value)}
                  className="rounded-sm border px-5 py-2.5 text-sm transition-colors"
                  style={{
                    borderColor: attending === value ? "var(--antique-gold)" : "var(--line)",
                    background: attending === value ? "var(--antique-gold)" : "transparent",
                    color: attending === value ? "var(--ivory)" : "var(--espresso)",
                  }}
                  aria-pressed={attending === value}
                >
                  {value === "accepts" ? "Joyfully accepts" : "Regretfully declines"}
                </button>
              ))}
            </div>
            {errors.attending && <p className="mt-2 text-sm" style={{ color: "#A8422E" }}>{errors.attending}</p>}
          </fieldset>

          {attending === "accepts" && (
            <Field label="Number of Attending Guests" name="guestCount">
              <input id="guestCount" name="guestCount" type="number" min={1} max={10} className="rsvp-input" />
            </Field>
          )}

          <Field label="Email or Phone Number" name="contact" error={errors.contact}>
            <input
              id="contact"
              name="contact"
              type="text"
              className="rsvp-input"
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={errors.contact ? "contact-error" : undefined}
            />
          </Field>

          <Field label="Dietary Requirements (optional)" name="dietary">
            <input id="dietary" name="dietary" type="text" className="rsvp-input" />
          </Field>

          <Field label="Message for the Couple (optional)" name="message">
            <textarea id="message" name="message" rows={3} className="rsvp-input resize-none" />
          </Field>

          {status === "error" && (
            <p className="text-sm" style={{ color: "#A8422E" }}>
              Something went wrong sending your response. Please try again in a moment.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 inline-flex items-center justify-center rounded-sm px-9 py-3.5 text-[0.78rem] tracking-[0.16em] uppercase transition-transform active:scale-[0.98] disabled:opacity-60"
            style={{ background: "var(--antique-gold)", color: "var(--ivory)" }}
          >
            {status === "submitting" ? "Sending..." : "Send RSVP"}
          </button>
        </form>
      </Reveal>

      <style jsx global>{`
        .rsvp-input {
          width: 100%;
          padding: 0.75rem 0.9rem;
          border: 1px solid var(--line);
          background: var(--ivory);
          color: var(--espresso);
          font-family: var(--font-body);
          font-size: 0.95rem;
          border-radius: 2px;
        }
        .rsvp-input:focus {
          outline: none;
          border-color: var(--antique-gold);
          box-shadow: 0 0 0 3px rgba(168, 137, 77, 0.18);
        }
        .rsvp-input::placeholder {
          color: var(--taupe);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm" style={{ color: "var(--espresso)" }}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-sm" style={{ color: "#A8422E" }}>
          {error}
        </p>
      )}
    </div>
  );
}
