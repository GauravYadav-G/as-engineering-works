import { createHmac, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

/*
 * Enquiry desk access.
 * The desk holds buyers' names, phone numbers and emails, so it is locked
 * unless ADMIN_PASSWORD (16+ characters) is set in the environment and the
 * visitor has signed in. Nothing here falls back to a default password.
 */
export const ADMIN_COOKIE = "as_engg_admin";
const SESSION_SECONDS = 60 * 60 * 12;

function secret() {
  const value = process.env.ADMIN_PASSWORD;
  return value && value.length >= 16 ? value : null;
}

function safeEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function sign(issuedAt: string, key: string) {
  return createHmac("sha256", key).update(`as-engg-works:${issuedAt}`).digest("hex");
}

export function adminConfigured() {
  return secret() !== null;
}

export function verifyAdminPassword(input: string) {
  const key = secret();
  return key !== null && safeEqual(input, key);
}

/** Set-Cookie header value for a fresh session, or null when no password is configured. */
export function newSessionCookie() {
  const key = secret();
  if (!key) return null;
  const issuedAt = String(Math.floor(Date.now() / 1000));
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${ADMIN_COOKIE}=${issuedAt}.${sign(issuedAt, key)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_SECONDS}${secure}`;
}

export function clearedSessionCookie() {
  return `${ADMIN_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}

export async function isAdmin() {
  const key = secret();
  if (!key) return false;
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!value) return false;
  const [issuedAt, token, extra] = value.split(".");
  if (!issuedAt || !token || extra !== undefined) return false;
  const age = Math.floor(Date.now() / 1000) - Number(issuedAt);
  if (!Number.isFinite(age) || age < 0 || age > SESSION_SECONDS) return false;
  return safeEqual(token, sign(issuedAt, key));
}
