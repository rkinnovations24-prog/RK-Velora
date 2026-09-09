import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Check, Instagram } from "lucide-react";
import bannerImage from "@/assets/g-6.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Btn, BtnAnchor } from "@/components/site/Btn";
import { CtaSection } from "@/components/site/CtaSection";
import { CONTACT, WHATSAPP_URL, INSTAGRAM_URL, ENQUIRY_EMAIL } from "@/lib/site";

const title = "Contact Us | Velora Kitch 'N' Bath Co.";
const description =
  "Get in touch with Velora for premium kitchen and bathroom solutions — call, email, visit our showroom or send an enquiry.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const fieldClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-muted-foreground/70 focus:border-gold";

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Full Name: ${get("name")}`,
      `Email Address: ${get("email")}`,
      `Phone Number: ${get("phone")}`,
      `Subject: ${get("subject")}`,
      "",
      "Message:",
      get("message"),
    ].join("\n");
    const subject = get("subject") || "New Website Enquiry";
    window.open(
      `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
    setSent(true);
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Design Your Perfect Space"
        subtitle="Our specialists are ready to help you choose the right products for your home or project."
        image={bannerImage}
      />

      <section className="section-y bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal>
            <p className="eyebrow">Company Information</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Get in Touch</h2>
            <span className="gold-rule mt-6" />

            <ul className="mt-10 space-y-7">
              <InfoRow icon={Phone} label="Phone">
                <a href={CONTACT.phoneHref} className="hover:text-gold">
                  {CONTACT.phone}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                {CONTACT.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block hover:text-gold">
                    {email}
                  </a>
                ))}
              </InfoRow>
              <InfoRow icon={MapPin} label="Address">
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </InfoRow>
              <InfoRow icon={Clock} label="Business Hours">
                {CONTACT.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </InfoRow>
              <InfoRow icon={Instagram} label="Instagram">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  @_velora_.co
                </a>
              </InfoRow>
            </ul>

            <div className="mt-10 overflow-hidden rounded-xl border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Velora showroom location map"
                src="https://www.google.com/maps?q=Gangai+Amman+Koil+Street+Kodambakkam+Chennai+600024&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <h2 className="text-2xl sm:text-3xl">Send an Enquiry</h2>
              <span className="gold-rule mt-5" />

              <form className="mt-8 space-y-5" onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Full Name
                    </label>
                    <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Phone
                    </label>
                    <input id="phone" name="phone" required placeholder="Your phone number" className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Subject
                  </label>
                  <input id="subject" name="subject" placeholder="Product enquiry" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your requirement" className={fieldClass} />
                </div>

                <Btn type="submit" variant="gold" className="w-full sm:w-auto">
                  Submit Enquiry
                </Btn>

                {sent && (
                  <p className="flex items-center gap-2 text-sm text-gold">
                    <Check className="h-4 w-4 shrink-0" /> Thank you! Your enquiry has been submitted
                    successfully. Our team will contact you shortly.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Prefer a Faster Response?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-foreground/60">
              Message our team directly on WhatsApp for instant guidance and quotations.
            </p>
            <BtnAnchor href={WHATSAPP_URL} variant="gold" className="mt-10" arrow={false}>
              <MessageCircle className="h-4 w-4" />
              Enquire Now
            </BtnAnchor>
          </Reveal>
      </CtaSection>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-5">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/35">
        <Icon className="h-4.5 w-4.5 text-gold" strokeWidth={1.4} />
      </div>
      <div className="min-w-0">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-1.5 text-sm leading-relaxed text-foreground">{children}</div>
      </div>
    </li>
  );
}