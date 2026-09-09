import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/velora-logo.png";
import { CONTACT, INSTAGRAM_URL } from "@/lib/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const productLinks = ["Faucets", "Showers", "Accessories", "Bath Tubs", "Water Softeners", "Floor Mats"];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 pt-16 pb-[15px] lg:px-10 lg:pt-20 lg:pb-[15px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <img src={logo} alt="Velora Kitch 'N' Bath Co." width={160} height={160} loading="lazy" className="h-20 w-auto lg:h-24" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              Premium kitchen and bathroom solutions crafted with precision, designed for elegance and
              built to perform for a lifetime.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Velora on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/70 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Quick Links">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors duration-300 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Products">
            {productLinks.map((l) => (
              <li key={l}>
                <Link to="/products" className="transition-colors duration-300 hover:text-gold">
                  {l}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Policies">
            {policyLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors duration-300 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contact Us">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={CONTACT.phoneHref} className="hover:text-gold">
                {CONTACT.phone}
              </a>
            </li>
            {CONTACT.emails.map((email) => (
              <li key={email} className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${email}`} className="hover:text-gold">
                  {email}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CONTACT.address}</span>
            </li>
          </FooterCol>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-[1400px] px-5 pt-4 pb-[15px] text-center text-xs text-ink-foreground/50 lg:px-10">
          <p>
            © 2026 VELORA. All rights reserved. Branding by Straight Circle, Developed by{" "}
            <a
              href="https://zhar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold transition-opacity duration-300 hover:opacity-80"
            >
              ZHAR TECH
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-ink-foreground/65">{children}</ul>
    </div>
  );
}