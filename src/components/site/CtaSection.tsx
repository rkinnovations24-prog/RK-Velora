import type { ReactNode } from "react";
import ctaBg from "@/assets/cta-banner.jpg";
import { cn } from "@/lib/utils";

export function CtaSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-16 text-ink-foreground lg:py-20",
        className,
      )}
    >
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/85" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_50%_0%,rgba(201,164,76,0.22),transparent_65%)]" />
      <div className="mx-auto max-w-[1400px] px-5 text-center lg:px-10">{children}</div>
    </section>
  );
}
