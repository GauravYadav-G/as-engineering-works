"use server";

import { revalidatePath } from "next/cache";

import { isAdmin } from "@/lib/admin";
import { updateInquiryStatus } from "@/lib/data";

const allowed = new Set(["new", "contacted", "quoted", "won", "closed"]);

export async function setInquiryStatus(formData: FormData) {
  if (!(await isAdmin())) return;

  const id = Number(formData.get("id"));
  const status = String(formData.get("status") ?? "");

  if (!Number.isInteger(id) || id <= 0 || !allowed.has(status)) {
    return;
  }

  await updateInquiryStatus(id, status);
  revalidatePath("/enquiries");
}
