import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { InquiryForm } from "@/components/inquiry-form";
import { IconArrowUpRight, IconCheck, IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { getProducts } from "@/lib/data";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact A.S. Engineering Works — Food Machinery Enquiries, Noida",
  description:
    "Contact A.S. Engineering Works, A-69, Sector 8, Noida. Call +91 98116 06544 or email akhtar@asenggworks.com for quotations on food processing machinery.",
};

export default async function ContactPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Contact & enquiries"
        title={
          <>
            Tell us what you <span className="text-brasslight">want to make.</span>
          </>
        }
        description="Share your product, target output and location. Our team will review your requirement and respond with suitable machinery options and a quotation."
        breadcrumb={[{ label: "Contact" }]}
        image="/images/pages-hero/Gemini_Generated_Image_nhg6psnhg6psnhg6.png"
      />

      <section className="bg-bone py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="grid content-start gap-4">
            <div className="rounded-2xl border border-forest/[0.08] bg-white p-6">
              <div className="flex items-start gap-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand text-forest">
                  <IconMapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="eyebrow text-sage">{site.contact.address.label}</p>
                  <p className="mt-2 text-[15.5px] leading-[1.7] font-medium text-forest">
                    {site.name}
                    {site.contact.address.lines.map((line) => (
                      <span key={line} className="block font-normal text-sage">
                        {line}
                      </span>
                    ))}
                  </p>
                  <a
                    href={site.contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-medium text-forest transition hover:opacity-70"
                  >
                    Get directions <IconArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-forest/[0.08] bg-white p-6">
              <p className="eyebrow text-sage">{site.contact.corporateOffice.label}</p>
              <p className="mt-2 text-[15.5px] leading-[1.7] text-sage">
                {site.contact.corporateOffice.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={site.contact.phoneHref}
                className="rounded-2xl border border-forest/[0.08] bg-white p-6 transition hover:border-forest/25"
              >
                <IconPhone className="h-4 w-4 text-sage" />
                <p className="eyebrow mt-4 text-sage">Call us</p>
                <p className="mt-1.5 text-[16.5px] font-medium text-forest">{site.contact.phone}</p>
              </a>
              <a
                href={site.contact.emailHref}
                className="rounded-2xl border border-forest/[0.08] bg-white p-6 transition hover:border-forest/25"
              >
                <IconMail className="h-4 w-4 text-sage" />
                <p className="eyebrow mt-4 text-sage">Write to us</p>
                <p className="mt-1.5 text-[15px] font-medium break-all text-forest">
                  {site.contact.email}
                </p>
              </a>
            </div>

            <div className="rounded-2xl bg-[#0e1113] p-6 text-white">
              <p className="eyebrow text-brasslight">{site.contact.designation}</p>
              <p className="mt-2 text-[19px] font-semibold">{site.contact.person}</p>
              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-4 font-mono text-[11.5px] text-white/55">
                <span>GST · 09AHNPK3689D1ZX</span>
                <span>IEC · 0504026763</span>
                <span>Proprietorship</span>
                <span>Est. 1984</span>
              </div>
            </div>
          </div>

          <div>
            <InquiryForm
              machines={products.map((product) => ({ slug: product.slug, name: product.name }))}
              title="Send a requirement"
              description="The more detail you share — product, hourly output, existing machines, location — the more precise our first response can be."
            />
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 px-2 text-[13px] text-sage">
              <span className="inline-flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-moss" /> No obligation quotation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-moss" /> Used only for your enquiry
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-moss" /> Brochure on request
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-forest/[0.06] bg-white py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="eyebrow text-sage">Before you write</p>
            <h2 className="display mt-3.5 text-[clamp(2rem,3.2vw,2.65rem)] text-forest">
              Questions buyers ask us
            </h2>
            <p className="mt-4 max-w-sm text-[15.5px] leading-[1.8] text-sage">
              Not sure which machine suits your product? Send a message with what you want to make
              and your target output.
            </p>
            <Link href="/products" className="btn btn-outline mt-7 text-[14.5px]">
              Review the catalogue
            </Link>
          </div>

          <div className="divide-y divide-forest/[0.08] border-y border-forest/[0.08]">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16.5px] font-semibold text-forest">
                  {faq.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-forest/15 text-forest/70 transition group-open:border-forest group-open:text-forest">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 transition group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-xl pr-8 text-[15px] leading-[1.8] text-sage">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
