import Link from "next/link";

export function EnquiryDeskGate({ configured, failed }: { configured: boolean; failed: boolean }) {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="wrap max-w-lg">
        <p className="eyebrow text-sage">Internal · sales desk</p>
        <h1 className="display mt-4 text-[clamp(1.9rem,4vw,2.5rem)] text-forest">Enquiry desk</h1>
        <p className="mt-3 text-[14px] leading-[1.75] text-sage">
          Enquiries include buyers&apos; names, phone numbers and email addresses, so this page is restricted to
          A.S. Engineering Works staff.
        </p>

        {configured ? (
          <form
            method="post"
            action="/api/admin/login"
            className="mt-8 rounded-2xl border border-forest/[0.08] bg-white p-7"
          >
            <label htmlFor="admin-password" className="eyebrow block text-sage">
              Password
            </label>
            <input
              id="admin-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="field mt-2"
            />
            {failed && (
              <p role="alert" className="mt-3 text-[12.5px] font-medium text-clay">
                That password was not accepted. Please try again.
              </p>
            )}
            <button type="submit" className="btn btn-dark mt-5 w-full">
              Sign in
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-forest/[0.08] bg-white p-6 text-[13.5px] leading-[1.75] text-sage">
            <p className="font-medium text-forest">The enquiry desk is locked.</p>
            <p className="mt-1.5">
              To enable sign-in, set an{" "}
              <code className="rounded bg-bone px-1.5 py-0.5 font-mono text-[12px] text-forest">
                ADMIN_PASSWORD
              </code>{" "}
              of at least 16 characters in this site&apos;s environment settings and restart it. Enquiries submitted
              through the website are still being saved in the meantime.
            </p>
          </div>
        )}

        <Link href="/" className="mt-6 inline-block text-[13px] font-medium text-forest/70 transition hover:text-forest">
          ← Back to the website
        </Link>
      </div>
    </section>
  );
}
