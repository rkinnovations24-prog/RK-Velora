import ctaImage from "@/assets/cta-banner.jpg";
import type { ReactNode } from "react";
import { BtnLink } from "./Btn";
import { Reveal } from "./Reveal";

export function CtaBanner({
  title = "Transform Your Space with Velora",
  text = "Experience timeless elegance with premium kitchen and bathroom solutions crafted for modern lifestyles.",
  buttonLabel = "Explore Collection",
  to = "/products",
  actions,
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  to?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="section-y bg-background">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="relative isolate overflow-hidden rounded-xl">
          <img
            src={ctaImage}
            alt="Luxury spa bathroom with freestanding bathtub"
            width={1920}
            height={912}
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/25" />
          <div className="max-w-xl px-8 py-20 sm:px-14 lg:py-28">
            <h2 className="text-3xl leading-tight text-ink-foreground sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-foreground/70 sm:text-base">{text}</p>
            {actions ? (
              <div className="mt-9 flex flex-row flex-wrap items-center gap-4">{actions}</div>
            ) : (
              <BtnLink to={to} variant="gold" className="mt-9">
                {buttonLabel}
              </BtnLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}