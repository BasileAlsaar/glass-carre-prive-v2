import { NextResponse } from "next/server";

// §14bis R13 — force Node runtime, Resend fetch incompatible with Edge.
export const runtime = "nodejs";

const TARGET_EMAIL = "caroline@glasscannes.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Glass Club <onboarding@resend.dev>";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  type: string;
  date?: string;
  guests?: string;
  message?: string;
  locale?: "fr" | "en";
};

function isValidPayload(p: unknown): p is ContactPayload {
  if (typeof p !== "object" || p === null) return false;
  const o = p as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    o.name.trim().length > 0 &&
    typeof o.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email) &&
    typeof o.type === "string" &&
    o.type.trim().length > 0
  );
}

function escape(s: string): string {
  return s.replace(/[<>&"']/g, (c) => {
    const m: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return m[c] ?? c;
  });
}

function renderHtml(p: ContactPayload): string {
  return `
    <h2 style="font-family:Georgia,serif">Nouvelle demande Glass Club</h2>
    <table style="font-family:Inter,sans-serif;font-size:14px;line-height:1.6">
      <tr><td><b>Nom</b></td><td>${escape(p.name)}</td></tr>
      <tr><td><b>Email</b></td><td>${escape(p.email)}</td></tr>
      <tr><td><b>Téléphone</b></td><td>${escape(p.phone ?? "—")}</td></tr>
      <tr><td><b>Type</b></td><td>${escape(p.type)}</td></tr>
      <tr><td><b>Date</b></td><td>${escape(p.date ?? "—")}</td></tr>
      <tr><td><b>Invités</b></td><td>${escape(p.guests ?? "—")}</td></tr>
    </table>
    <p style="font-family:Inter,sans-serif;font-size:14px;white-space:pre-wrap">${escape(
      p.message ?? "",
    )}</p>
  `;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Pas de backend mail configuré : on log et on retourne ok=true avec mode=logged.
    // Le client a un fallback mailto si la requête réussit ou échoue.
    // eslint-disable-next-line no-console
    console.log("[contact] form submitted (no RESEND_API_KEY):", body);
    return NextResponse.json({ ok: true, mode: "logged" });
  }

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TARGET_EMAIL,
        reply_to: body.email,
        subject: `Glass Club — ${body.type} — ${body.name}`,
        html: renderHtml(body),
      }),
    });
    if (!r.ok) {
      const text = await r.text();
      // eslint-disable-next-line no-console
      console.error("[contact] resend error", r.status, text);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, mode: "resend" });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[contact] fetch threw", e);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
