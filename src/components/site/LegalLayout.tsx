import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site";
import { BtnLink } from "./Btn";
import { Reveal } from "./Reveal";
import { CtaSection } from "./CtaSection";

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-2xl sm:text-[1.75rem]">{heading}</h2>
      <span className="gold-rule mt-4 w-10" />
      <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <div className="section-y bg-background">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <Reveal>{children}</Reveal>

        <Reveal className="mt-16 rounded-xl border border-border bg-secondary p-8">
          <h2 className="text-xl">Contact Information</h2>
          <span className="gold-rule mt-4 w-10" />
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li>
              Phone:{" "}
              <a href={CONTACT.phoneHref} className="text-foreground hover:text-gold">
                {CONTACT.phone}
              </a>
            </li>
            {CONTACT.emails.map((email) => (
              <li key={email}>
                Email:{" "}
                <a href={`mailto:${email}`} className="text-foreground hover:text-gold">
                  {email}
                </a>
              </li>
            ))}
            <li>Address: {CONTACT.address}</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

export function LegalCta({ title, text }: { title: string; text: string }) {
  return (
    <CtaSection>
      <Reveal>
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-foreground/60">{text}</p>
        <BtnLink to="/contact" variant="gold" className="mt-10">
          Contact Us
        </BtnLink>
      </Reveal>
    </CtaSection>
  );
}