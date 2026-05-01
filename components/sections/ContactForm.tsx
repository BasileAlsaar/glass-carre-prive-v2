"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const TARGET_EMAIL = "caroline@glasscannes.com";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: string;
  date: string;
  guests: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  type: "",
  date: "",
  guests: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function buildMailtoFallback(s: FormState): string {
  const subject = `Glass Club — ${s.type || "Demande"} — ${s.name}`;
  const lines = [
    `Nom : ${s.name}`,
    `Email : ${s.email}`,
    `Téléphone : ${s.phone}`,
    `Type : ${s.type}`,
    `Date : ${s.date}`,
    `Invités : ${s.guests}`,
    "",
    s.message,
  ];
  const body = lines.join("\n");
  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function readTypeFromHash(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash;
  const q = hash.indexOf("?");
  if (q === -1) return null;
  const params = new URLSearchParams(hash.slice(q));
  return params.get("type");
}

export function ContactForm() {
  const { dictionary, locale } = useLocale();
  const t = dictionary.contact;
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  // §10 — pré-remplissage du type d'événement depuis le hash URL.
  useEffect(() => {
    const sync = () => {
      const type = readTypeFromHash();
      if (type) setForm((f) => ({ ...f, type }));
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!r.ok) throw new Error("send failed");
      setStatus("success");
    } catch {
      // §14bis fallback mailto — ouvre le client mail natif.
      window.location.href = buildMailtoFallback(form);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <ContactShell title={t.title} eyebrow={t.eyebrow}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-start gap-4 border border-glass-flame/40 bg-glass-flame/5 p-8"
          role="status"
        >
          <CheckCircle2 size={32} className="text-glass-flame" aria-hidden="true" />
          <h3 className="font-display tracking-display text-2xl text-glass-white">
            {t.successTitle}
          </h3>
          <p className="text-sm text-glass-mute">{t.successDescription}</p>
        </motion.div>
      </ContactShell>
    );
  }

  return (
    <ContactShell title={t.title} eyebrow={t.eyebrow} lede={t.lede}>
      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        onSubmit={onSubmit}
        className="grid gap-5"
        noValidate
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field id="name" label={t.nameLabel} required>
            <Input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="bg-glass-ink"
            />
          </Field>
          <Field id="email" label={t.emailLabel} required>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="bg-glass-ink"
            />
          </Field>
          <Field id="phone" label={t.phoneLabel}>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="bg-glass-ink"
            />
          </Field>
          <Field id="type" label={t.typeLabel} required>
            <Select value={form.type} onValueChange={(v) => update("type", v)}>
              <SelectTrigger className="bg-glass-ink" id="type">
                <SelectValue placeholder={t.typePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {t.typeOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field id="date" label={t.dateLabel}>
            <Input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className="bg-glass-ink"
            />
          </Field>
          <Field id="guests" label={t.guestsLabel}>
            <Input
              id="guests"
              name="guests"
              type="number"
              min={1}
              max={80}
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              className="bg-glass-ink"
            />
          </Field>
        </div>
        <Field id="message" label={t.messageLabel}>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder={t.messagePlaceholder}
            className="bg-glass-ink"
          />
        </Field>
        <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="tracking-label text-[10px] uppercase text-glass-mute">
            * {t.requiredHint}
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "tracking-label inline-flex h-12 items-center gap-2 bg-glass-flame px-7 text-xs font-medium uppercase text-glass-white transition-all hover:bg-glass-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-flame focus-visible:ring-offset-4 focus-visible:ring-offset-glass-black disabled:opacity-60",
            )}
          >
            {status === "submitting" ? t.submitting : t.submitButton}
            {status !== "submitting" && (
              <ArrowRight size={16} aria-hidden="true" />
            )}
          </button>
        </div>
        {status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 border border-glass-blood/50 bg-glass-blood/10 p-4 text-sm text-glass-white"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-glass-rose" aria-hidden="true" />
            <div>
              <p className="font-medium">{t.errorTitle}</p>
              <p className="text-glass-mute">{t.errorDescription}</p>
            </div>
          </div>
        )}
      </motion.form>
    </ContactShell>
  );
}

function ContactShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id="contact-form"
      aria-labelledby="contact-title"
      className="relative border-t border-white/5 bg-glass-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-20 md:px-10 md:py-28">
        <header className="mb-10 max-w-2xl md:mb-14">
          <p className="tracking-label text-[11px] uppercase text-glass-flame">{eyebrow}</p>
          <h2
            id="contact-title"
            className="font-display tracking-display mt-3 text-3xl text-glass-white md:text-5xl"
          >
            {title}
          </h2>
          {lede && (
            <p className="mt-5 max-w-xl text-sm text-glass-mute md:text-base">{lede}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="tracking-label text-[11px] uppercase text-glass-mute">
        {label}
        {required && <span aria-hidden="true" className="ml-1 text-glass-flame">*</span>}
      </Label>
      {children}
    </div>
  );
}
