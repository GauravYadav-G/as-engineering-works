import { clearedSessionCookie } from "@/lib/admin";

export const dynamic = "force-dynamic";

export async function POST() {
  return new Response(null, {
    status: 303,
    headers: { Location: "/enquiries", "Set-Cookie": clearedSessionCookie() },
  });
}
