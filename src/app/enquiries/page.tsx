import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbStrip } from "@/components/page-hero";
import { IconArrowUpRight, IconMail, IconPhone } from "@/components/icons";
import { EnquiryDeskGate } from "@/components/enquiry-desk-gate";
import { adminConfigured, isAdmin } from "@/lib/admin";
import { getInquiries } from "@/lib/data";
import { setInquiryStatus } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Enquiry desk",
  description: "Internal enquiry inbox for A.S. Engineering Works.",
  robots: { index: false, follow: false },
};

const statusStyles: Record<string, string> = {
  new: "bg-sand text-forest border-forest/15",
  contacted: "bg-moss/10 text-moss border-moss/25",
  quoted: "bg-forest/8 text-forest border-forest/20",
  won: "bg-forest text-white border-forest",
  closed: "bg-bone text-sage border-forest/10",
};

const statuses = ["new", "contacted", "quoted", "won", "closed"];

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  if (!(await isAdmin())) {
    const failed = (await searchParams).error !== undefined;
    return <EnquiryDeskGate configured={adminConfigured()} failed={failed} />;
  }

  const inquiries = await getInquiries();

  const counts = statuses.reduce<Record<string, number>>((accumulator, status) => {
    accumulator[status] = inquiries.filter((inquiry) => inquiry.status === status).length;
    return accumulator;
  }, {});

  return (
    <>
      <BreadcrumbStrip items={[{ label: "Enquiry desk" }]} />
      <div className="border-b border-forest/[0.06] bg-white">
        <form method="post" action="/api/admin/logout" className="wrap flex justify-end py-2.5">
          <button
            type="submit"
            className="text-[12.5px] font-medium text-sage transition hover:text-forest"
          >
            Sign out
          </button>
        </form>
      </div>

      <section className="bg-bone py-14 md:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-sage">Internal · sales desk</p>
              <h1 className="display mt-3 text-[clamp(1.9rem,4vw,2.6rem)] text-forest">
                Enquiry inbox
              </h1>
              <p className="mt-2.5 max-w-xl text-[14px] leading-relaxed text-sage">
                Every requirement submitted from the website lands here. Update the status as the
                sales desk follows up.
              </p>
            </div>
            <Link href="/contact" className="btn btn-dark px-5 py-2.5 text-[12.5px]">
              Open public enquiry form
              <IconArrowUpRight className="h-3.5 w-3.5 opacity-75" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <div className="rounded-xl border border-forest/[0.08] bg-white p-5">
              <p className="font-mono text-[9.5px] tracking-[0.14em] text-sage uppercase">Total</p>
              <p className="display tabular mt-1.5 text-3xl text-forest">{inquiries.length}</p>
            </div>
            {statuses.map((status) => (
              <div key={status} className="rounded-xl border border-forest/[0.08] bg-white p-5">
                <p className="font-mono text-[9.5px] tracking-[0.14em] text-sage uppercase">
                  {status}
                </p>
                <p className="display tabular mt-1.5 text-3xl text-forest">
                  {counts[status] ?? 0}
                </p>
              </div>
            ))}
          </div>

          {inquiries.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-forest/[0.08] bg-white p-12 text-center">
              <h2 className="text-[20px] font-medium text-forest">No enquiries yet.</h2>
              <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-sage">
                Submit the form on the contact page or on any machine page and the enquiry will
                appear here instantly with its reference number.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn btn-dark px-5 py-2.5 text-[12.5px]">
                  Go to contact form
                </Link>
                <Link href="/products" className="btn btn-outline px-5 py-2.5 text-[12.5px]">
                  Browse machines
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-8 space-y-3.5">
              {inquiries.map((inquiry) => (
                <article
                  key={inquiry.id}
                  className="rounded-2xl border border-forest/[0.08] bg-white p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-[10px] tracking-[0.12em] text-sage uppercase">
                          #AS-{1000 + inquiry.id}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[9px] tracking-[0.12em] uppercase ${
                            statusStyles[inquiry.status] ?? statusStyles.new
                          }`}
                        >
                          {inquiry.status}
                        </span>
                        <span className="font-mono text-[10px] text-sage/75">
                          {new Date(inquiry.createdAt).toLocaleString("en-IN", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </span>
                      </div>
                      <h2 className="mt-2.5 text-[17px] font-medium text-forest">
                        {inquiry.name}
                        {inquiry.company ? (
                          <span className="font-normal text-sage"> · {inquiry.company}</span>
                        ) : null}
                      </h2>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-sage">
                        <a
                          href={`tel:${inquiry.phone}`}
                          className="inline-flex items-center gap-1.5 transition hover:text-forest"
                        >
                          <IconPhone className="h-3.5 w-3.5" /> {inquiry.phone}
                        </a>
                        {inquiry.email && (
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="inline-flex items-center gap-1.5 transition hover:text-forest"
                          >
                            <IconMail className="h-3.5 w-3.5" /> {inquiry.email}
                          </a>
                        )}
                        {inquiry.country && <span>{inquiry.country}</span>}
                      </div>
                      <div className="mt-4 rounded-xl bg-bone px-4 py-3.5">
                        {inquiry.productName && (
                          <p className="font-mono text-[9.5px] tracking-[0.12em] text-moss uppercase">
                            {inquiry.productName}
                            {inquiry.quantity ? ` · ${inquiry.quantity}` : ""}
                          </p>
                        )}
                        <p className="mt-1 text-[13px] leading-relaxed text-forest/75">
                          {inquiry.message}
                        </p>
                      </div>
                    </div>

                    <form action={setInquiryStatus} className="flex shrink-0 items-center gap-2">
                      <input type="hidden" name="id" value={inquiry.id} />
                      <label htmlFor={`status-${inquiry.id}`} className="sr-only">
                        Update status
                      </label>
                      <select
                        id={`status-${inquiry.id}`}
                        name="status"
                        defaultValue={inquiry.status}
                        className="field w-[130px] py-2 text-[12px]"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="btn btn-dark rounded-lg px-4 py-2 text-[12px]"
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
