import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Velora on WhatsApp"
        className="fixed bottom-6 left-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-ink shadow-[var(--shadow-lift)] transition-transform duration-500 [transition-timing-function:var(--ease-lux)] hover:scale-110 lg:h-14 lg:w-14"
      >
        <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.8} />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={cn(
          "fixed bottom-6 right-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-ink text-gold shadow-[var(--shadow-soft)] transition-all duration-500 [transition-timing-function:var(--ease-lux)] hover:bg-gold hover:text-ink lg:h-12 lg:w-12",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
