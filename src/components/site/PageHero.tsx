import banner from "@/assets/page-banner.jpg";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = banner,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[48vh] items-end overflow-hidden bg-ink pb-12 pt-36 lg:min-h-[54vh] lg:pb-16">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/50" />
      <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-10">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.08] text-ink-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <span className="gold-rule mt-7" />
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/65">{subtitle}</p>
        )}
      </div>
    </section>
  );
}