import { createFileRoute } from "@tanstack/react-router";
import bannerImage from "@/assets/g-3.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { BtnAnchor } from "@/components/site/Btn";
import { CtaSection } from "@/components/site/CtaSection";
import { categories, WHATSAPP_URL } from "@/lib/site";

const title = "Premium Products | Velora Kitch 'N' Bath Co.";
const description =
  "Explore Velora's full range: angle cocks, basin mixers, bib cocks, health faucets, showers, wall mixers, bath tubs, water softeners and more.";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Product Collection"
        title="Explore Our Premium Product Collection"
        subtitle="A complete portfolio of kitchen and bathroom solutions, finished to showroom standard."
        image={bannerImage}
      />

      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={(i % 5) * 70} className="h-full">
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]">
                  <div className="overflow-hidden bg-ink">
                    <img
                      src={c.image}
                      alt={c.name}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="img-zoom aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-5">
                    <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 group-hover:text-gold">
                      {c.name}
                    </h2>
                    <span className="gold-rule mt-3 w-8" />
                    {c.blurb && <p className="mt-3 text-[0.82rem] leading-relaxed text-muted-foreground">{c.blurb}</p>}
                    <BtnAnchor
                      href={WHATSAPP_URL}
                      variant="outline"
                      size="sm"
                      className="mt-5 w-full"
                      arrow={false}
                    >
                      Enquire Now
                    </BtnAnchor>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Looking for Premium Bathroom Solutions?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-foreground/60">
              Tell us about your project and our specialists will curate the right collection for you.
            </p>
            <BtnAnchor href={WHATSAPP_URL} variant="gold" className="mt-10">
              Enquire Now
            </BtnAnchor>
          </Reveal>
      </CtaSection>
    </>
  );
}