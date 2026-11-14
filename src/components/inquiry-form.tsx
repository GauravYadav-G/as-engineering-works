"use client";

import { useState } from "react";

import { site } from "@/lib/site";
import { IconArrowRight, IconCheck, IconMail, IconPhone } from "@/components/icons";

type Machine = { slug: string; name: string };
type FormState = "idle" | "submitting" | "success" | "error";

const labelClass =
  "mb-1.5 block font-mono text-[9.5px] font-medium tracking-[0.14em] text-sage uppercase";

export function InquiryForm({
  machines = [],
  product,
  compact = false,
  title = "Tell us about your line",
  description = "Share your product, target output and location. Our team will respond with suitable equipment options.",
  tone = "light",
}: {
  machines?: Machine[];
  product?: { slug: string; name: string };
  compact?: boolean;
  title?: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState<number | null>(null);

  const dark = tone === "dark";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("submitting");
    setMessage("");

    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      country: String(data.get("country") ?? ""),
      quantity: String(data.get("quantity") ?? ""),
      message: String(data.get("message") ?? ""),
      productSlug: product?.slug ?? String(data.get("productSlug") ?? ""),
      productName: product?.name ?? String(data.get("productName") ?? ""),
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; id?: number; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error ?? "Unable to submit enquiry");
      setReference(result.id ?? null);
      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call us directly.",
      );
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={
          dark
            ? "rounded-2xl border border-white/12 bg-white/[0.04] p-8 text-white"
            : "rounded-2xl border border-forest/[0.08] bg-white p-8"
        }
      >
        <span className="grid h-11 w-11 place-items-center rounded-full bg-moss text-white">
          <IconCheck className="h-5 w-5" />
        </span>
        <h3 className={`mt-5 text-[22px] font-medium tracking-tight ${dark ? "text-white" : "text-forest"}`}>
          Enquiry received — thank you.
        </h3>
        <p className={`mt-2.5 text-[14px] leading-[1.7] ${dark ? "text-white/65" : "text-sage"}`}>
          Your requirement has reached the A.S. Engineering Works sales desk
          {reference ? ` (reference #AS-${1000 + reference})` : ""}. We will revert with technical
          equipment recommendations, pricing and a delivery schedule after reviewing your requirement.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={site.contact.phoneHref} className="btn btn-dark px-5 py-2.5 text-[12.5px]">
            <IconPhone className="h-3.5 w-3.5" /> Call now
          </a>
          <button
            type="button"
            onClick={() => setState("idle")}
            className={
              dark
                ? "btn btn-ghost-light px-5 py-2.5 text-[12.5px]"
                : "btn btn-outline px-5 py-2.5 text-[12.5px]"
            }
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        dark
          ? "rounded-2xl border border-white/12 bg-white/[0.04] p-6 sm:p-8"
          : compact
            ? "rounded-2xl border border-forest/[0.08] bg-white p-6"
            : "rounded-2xl border border-forest/[0.08] bg-white p-7 sm:p-9"
      }
    >
      <div>
        <h3 className={`text-[21px] font-medium tracking-[-0.025em] ${dark ? "text-white" : "text-forest"}`}>
          {title}
        </h3>
        <p className={`mt-1.5 text-[13px] leading-relaxed ${dark ? "text-white/60" : "text-sage"}`}>
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        {product && (
          <div
            className={`flex items-center justify-between rounded-lg border px-4 py-2.5 ${
              dark ? "border-white/15 bg-white/[0.04]" : "border-forest/[0.08] bg-bone"
            }`}
          >
            <span className="font-mono text-[9.5px] tracking-[0.14em] text-sage uppercase">
              Enquiry for
            </span>
            <span className={`text-[12.5px] font-medium ${dark ? "text-brasslight" : "text-forest"}`}>
              {product.name}
            </span>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">
              Your name *
            </label>
            <input id="name" name="name" required placeholder="Full name" className="field" />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Phone / WhatsApp *
            </label>
            <input
              id="phone"
              name="phone"
              required
              placeholder="+91 00000 00000"
              inputMode="tel"
              className="field"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" placeholder="you@company.com" className="field" />
          </div>
          <div>
            <label className={labelClass} htmlFor="company">
              Company
            </label>
            <input id="company" name="company" placeholder="Business name" className="field" />
          </div>
          <div>
            <label className={labelClass} htmlFor="country">
              City / country
            </label>
            <input id="country" name="country" placeholder="Noida, India" className="field" />
          </div>
          <div>
            <label className={labelClass} htmlFor="quantity">
              Required output
            </label>
            <input id="quantity" name="quantity" placeholder="e.g. 100 kg/hr" className="field" />
          </div>
        </div>

        {!product && machines.length > 0 && (
          <div>
            <label className={labelClass} htmlFor="productSlug">
              Machine of interest
            </label>
            <select id="productSlug" name="productSlug" className="field" defaultValue="">
              <option value="">Complete plant / not sure yet</option>
              {machines.map((machine) => (
                <option key={machine.slug} value={machine.slug}>
                  {machine.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className={labelClass} htmlFor="message">
            Your requirement *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={compact ? 3 : 4}
            placeholder="Products to be made, output per hour, existing setup, location…"
            className="field resize-none"
          />
        </div>

        {state === "error" && (
          <p className="rounded-lg border border-clay/25 bg-clay/[0.06] px-4 py-3 text-[12.5px] text-clay">
            {message} You can also call {site.contact.phone}.
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <button
            type="submit"
            disabled={state === "submitting"}
            className="btn btn-dark w-full px-6 py-3 text-[13px] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
          >
            {state === "submitting" ? "Sending enquiry…" : "Send enquiry"}
            <IconArrowRight className="h-4 w-4" />
          </button>
          <a
            href={site.contact.emailHref}
            className={`inline-flex items-center gap-2 text-[12px] transition ${
              dark ? "text-white/55 hover:text-white" : "text-sage hover:text-forest"
            }`}
          >
            <IconMail className="h-3.5 w-3.5" />
            {site.contact.email}
          </a>
        </div>
        <p className={`text-[11px] leading-relaxed ${dark ? "text-white/35" : "text-sage/75"}`}>
          Used only to respond to your enquiry. No newsletters, no third-party sharing.
        </p>
      </form>
    </div>
  );
}
