import { isAdmin } from "@/lib/admin";
import { getInquiries, createInquiry } from "@/lib/data";

export const dynamic = "force-dynamic";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  company?: unknown;
  country?: unknown;
  quantity?: unknown;
  message?: unknown;
  productSlug?: unknown;
  productName?: unknown;
};

const str = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = str(payload.name, 120);
  const phone = str(payload.phone, 40);
  const message = str(payload.message, 4000);

  if (name.length < 2) {
    return Response.json({ ok: false, error: "Please share your name." }, { status: 400 });
  }
  if (phone.replace(/[^\d]/g, "").length < 7) {
    return Response.json(
      { ok: false, error: "Please share a valid phone number." },
      { status: 400 },
    );
  }
  if (message.length < 5) {
    return Response.json(
      { ok: false, error: "Please describe your requirement in a little more detail." },
      { status: 400 },
    );
  }

  try {
    const inquiry = await createInquiry({
      name,
      phone,
      email: str(payload.email, 160) || null,
      company: str(payload.company, 160) || null,
      country: str(payload.country, 160) || null,
      quantity: str(payload.quantity, 120) || null,
      message,
      productSlug: str(payload.productSlug, 160) || null,
      productName: str(payload.productName, 200) || null,
    });

    return Response.json({ ok: true, id: inquiry.id }, { status: 201 });
  } catch {
    return Response.json(
      {
        ok: false,
        error: "We could not record your enquiry right now. Please call +91 98116 06544.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  // The list contains buyers' contact details: administrators only.
  if (!(await isAdmin())) {
    return Response.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const inquiries = await getInquiries();
  return Response.json({ ok: true, count: inquiries.length, inquiries });
}
