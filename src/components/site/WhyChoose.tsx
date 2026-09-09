import { Gem, Sparkles, ShieldCheck, Boxes, Headset } from "lucide-react";
import { whyChoose } from "@/lib/site";
import { Reveal } from "./Reveal";

const icons = [Gem, Sparkles, ShieldCheck, Boxes, Headset];

export function WhyChoose() {
  return (
    <section className="section-y bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow">Why Choose Velora</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Engineered for Excellence</h2>
          <span className="gold-rule mx-auto mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 90} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/35">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ink-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/55">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}