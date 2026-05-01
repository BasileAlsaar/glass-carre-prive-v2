"use client";

import { AlertCircle, ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/utils";

const TARGET_EMAIL = "caroline@glasscannes.com";

type FormState = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  slot: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  guests: "",
  date: "",
  slot: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function buildMailto(s: FormState): string {
  const subject = `Glass Club — Réservation — ${s.name}`;
  const body = [
    `Nom : ${s.name}`,
    `Email : ${s.email}`,
    `Téléphone : ${s.phone}`,
    `Nb personnes : ${s.guests}`,
    `Date : ${s.date}`,
    `Créneau : ${s.slot}`,
  ].join("\n");
  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ReservationDialog({ trigger }: { trigger: React.ReactNode }) {
  const { dictionary, locale } = useLocale();
  const t = dictionary.reservation;
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          type: "reservation",
          date: form.date,
          guests: form.guests,
          message: `Créneau : ${form.slot}`,
          locale,
        }),
      });
      if (!r.ok) throw new Error("send failed");
      setStatus("success");
    } catch {
      window.location.href = buildMailto(form);
      setStatus("error");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setStatus("idle");
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-white/10 bg-glass-ink sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display tracking-display text-2xl">
            {dictionary.cta.bookTable}
          </DialogTitle>
          <DialogDescription className="text-glass-mute">{t.description}</DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div
            role="status"
            className="flex flex-col items-start gap-3 border border-glass-rose/40 bg-glass-rose/5 p-6"
          >
            <CheckCircle2 size={24} className="text-glass-rose" aria-hidden="true" />
            <h3 className="font-display text-lg text-glass-white">{t.successTitle}</h3>
            <p className="text-sm text-glass-mute">{t.successDescription}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4" noValidate>
            <div className="grid grid-cols-2 gap-3">
              <Field id="r-guests" label={t.guestsLabel} required>
                <Input
                  id="r-guests"
                  type="number"
                  min={1}
                  max={80}
                  required
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className="bg-glass-black"
                />
              </Field>
              <Field id="r-date" label={t.dateLabel} required>
                <Input
                  id="r-date"
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="bg-glass-black"
                />
              </Field>
            </div>
            <Field id="r-slot" label={t.slotLabel} required>
              <Select value={form.slot} onValueChange={(v) => update("slot", v)}>
                <SelectTrigger id="r-slot" className="bg-glass-black">
                  <SelectValue placeholder={t.slotPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {t.slotOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field id="r-name" label={t.nameLabel} required>
              <Input
                id="r-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="bg-glass-black"
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field id="r-email" label={t.emailLabel} required>
                <Input
                  id="r-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="bg-glass-black"
                />
              </Field>
              <Field id="r-phone" label={t.phoneLabel}>
                <Input
                  id="r-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="bg-glass-black"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={cn(
                "tracking-label mt-2 inline-flex h-11 items-center justify-center gap-2 bg-glass-rose px-6 text-[11px] font-medium uppercase text-glass-black transition-all hover:bg-glass-burgundy hover:text-glass-white disabled:opacity-60",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-blood focus-visible:ring-offset-4 focus-visible:ring-offset-glass-ink",
              )}
            >
              {status === "submitting" ? t.submitting : t.submitButton}
              {status !== "submitting" && <ArrowRight size={14} aria-hidden="true" />}
            </button>

            {status === "error" && (
              <p
                role="alert"
                className="flex items-start gap-2 border border-glass-blood/50 bg-glass-blood/10 p-3 text-xs text-glass-rose"
              >
                <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                {t.errorMessage}
              </p>
            )}

            <div className="border-t border-white/10 pt-4">
              <p className="text-[11px] text-glass-mute">{t.orContact}</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-glass-white">
                <li>
                  <a
                    href="tel:+33651662145"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-glass-rose"
                  >
                    <Phone size={12} aria-hidden="true" /> +33 6 51 66 21 45
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/33651662145"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-glass-rose"
                  >
                    <MessageCircle size={12} aria-hidden="true" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${TARGET_EMAIL}`}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-glass-rose"
                  >
                    <Mail size={12} aria-hidden="true" /> {TARGET_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
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
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="tracking-label text-[10px] uppercase text-glass-mute">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-glass-rose">
            *
          </span>
        )}
      </Label>
      {children}
    </div>
  );
}
