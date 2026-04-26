"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "loading" | "success" | "error";

const FIELD_LABEL =
  "block text-[11px] font-medium text-[var(--color-muted)] mb-2 tracking-wide uppercase";

const REQUIRED_MARK = <span className="text-[var(--color-accent)] ml-0.5">*</span>;

export function ContactForm() {
  const [state, setState] = React.useState<FormState>("idle");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    // Simulated submit — wire to API route or 3rd party (Resend/Formspree) when ready
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setState("idle"), 4500);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstname" className={FIELD_LABEL}>
            Prénom {REQUIRED_MARK}
          </label>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Jean"
          />
        </div>
        <div>
          <label htmlFor="lastname" className={FIELD_LABEL}>
            Nom {REQUIRED_MARK}
          </label>
          <Input
            id="lastname"
            name="lastname"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Dupont"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={FIELD_LABEL}>
            E-mail {REQUIRED_MARK}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="vous@exemple.fr"
          />
        </div>
        <div>
          <label htmlFor="phone" className={FIELD_LABEL}>
            Téléphone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+33 6 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={FIELD_LABEL}>
          Votre message {REQUIRED_MARK}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Parlez-nous de votre événement, dates, lieu, type d'effets envisagés…"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          variant="ink"
          size="lg"
          className="w-full"
          disabled={state === "loading" || state === "success"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {state === "loading" ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="h-4 w-4 animate-spin" />
                Envoi…
              </motion.span>
            ) : state === "success" ? (
              <motion.span
                key="success"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Check className="h-4 w-4" />
                Message envoyé
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Envoyer ma demande
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
        <p className="text-[11px] text-[var(--color-muted-soft)]">
          En envoyant ce formulaire, vous acceptez d&apos;être recontacté(e) par notre équipe.
        </p>
      </div>
    </form>
  );
}
