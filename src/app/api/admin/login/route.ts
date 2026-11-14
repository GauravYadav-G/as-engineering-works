import { newSessionCookie, verifyAdminPassword } from "@/lib/admin";

export const dynamic = "force-dynamic";

// Relative Location headers keep the redirect on whatever host the visitor used.
const redirect = (location: string, cookie?: string) =>
  new Response(null, {
    status: 303,
    headers: cookie ? { Location: location, "Set-Cookie": cookie } : { Location: location },
  });

export async function POST(request: Request) {
  let password = "";
  try {
    const form = await request.formData();
    password = String(form.get("password") ?? "");
  } catch {
    return redirect("/enquiries?error=1");
  }

  const cookie = verifyAdminPassword(password) ? newSessionCookie() : null;
  if (!cookie) {
    // Slow down repeated guesses a little.
    await new Promise((resolve) => setTimeout(resolve, 500));
    return redirect("/enquiries?error=1");
  }

  return redirect("/enquiries", cookie);
}
