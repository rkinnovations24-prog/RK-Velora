import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/velora-logo.png";
import { WHATSAPP_URL } from "@/lib/site";
import { BtnAnchor } from "./Btn";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 [transition-timing-function:var(--ease-lux)]",
        scrolled
          ? "bg-ink/80 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Velora Kitch 'N' Bath Co. logo"
            width={140}
            height={140}
            className="h-16 w-auto shrink-0 lg:h-20"
          />
          <span className="sr-only">Velora Kitch 'N' Bath Co.</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative text-[0.74rem] font-medium uppercase tracking-[0.2em] text-ink-foreground/80 transition-colors duration-300 hover:text-gold",
                  active && "text-gold",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gradient-gold transition-transform duration-500 [transition-timing-function:var(--ease-lux)]",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3 justify-self-end">
          <BtnAnchor href={WHATSAPP_URL} variant="gold" size="sm" arrow={false} className="hidden sm:inline-flex">
            Enquire Now
          </BtnAnchor>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-foreground/10 bg-ink/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-ink-foreground/10 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.2em] text-ink-foreground/85 last:border-0 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <BtnAnchor href={WHATSAPP_URL} variant="gold" size="sm" className="mt-4 self-start sm:hidden">
              Enquire Now
            </BtnAnchor>
          </nav>
        </div>
      )}
    </header>
  );
}