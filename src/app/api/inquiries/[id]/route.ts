import { isAdmin } from "@/lib/admin";
import { updateInquiryStatus } from "@/lib/data";

export const dynamic = "force-dynamic";

const allowed = new Set(["new", "contacted", "quoted", "won", "closed"]);

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isAdmin())) {
    return Response.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;
  const numericId = Number(id);

  if (!Number.isInteger(numericId) || numericId <= 0) {
    return Response.json({ ok: false, error: "Invalid enquiry id." }, { status: 400 });
  }

  let status: unknown;
  try {
    const body = (await request.json()) as { status?: unknown };
    status = body.status;
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (typeof status !== "string" || !allowed.has(status)) {
    return Response.json({ ok: false, error: "Unknown status." }, { status: 400 });
  }

  const updated = await updateInquiryStatus(numericId, status);
  if (!updated) {
    return Response.json({ ok: false, error: "Could not update enquiry." }, { status: 500 });
  }

  return Response.json({ ok: true, id: numericId, status });
}
