import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btnVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-all duration-500 [transition-timing-function:var(--ease-lux)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        gold: "bg-gradient-gold text-ink shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:brightness-110",
        dark: "bg-ink text-ink-foreground hover:bg-ink/90",
        outline:
          "border border-ink/25 text-ink hover:border-gold hover:text-gold",
        light:
          "border border-ink-foreground/40 text-ink-foreground hover:border-gold hover:text-gold",
      },
      size: {
        default: "",
        sm: "px-5 py-2.5 text-[0.7rem]",
      },
    },
    defaultVariants: { variant: "gold", size: "default" },
  },
);

type BtnProps = VariantProps<typeof btnVariants> & {
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow !== false && (
        <ArrowRight className="h-4 w-4 transition-transform duration-500 [transition-timing-function:var(--ease-lux)] group-hover:translate-x-1" />
      )}
    </>
  );
}

export function BtnLink({
  to,
  variant,
  size,
  className,
  children,
  arrow,
}: BtnProps & { to: string }) {
  return (
    <Link to={to} className={cn(btnVariants({ variant, size }), className)}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

export function BtnAnchor({
  href,
  variant,
  size,
  className,
  children,
  arrow,
  external = true,
}: BtnProps & { href: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(btnVariants({ variant, size }), className)}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </a>
  );
}

export function Btn({
  variant,
  size,
  className,
  children,
  arrow,
  ...props
}: BtnProps & ComponentProps<"button">) {
  return (
    <button className={cn(btnVariants({ variant, size }), className)} {...props}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}