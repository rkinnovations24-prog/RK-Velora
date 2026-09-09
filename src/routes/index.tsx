import { createFileRoute, Link } from "@tanstack/react-router";
import { Gem, Sparkles, ShieldCheck, BadgeCheck, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bath.jpg";
import aboutImage from "@/assets/about-kitchen.jpg";
import { BtnAnchor, BtnLink } from "@/components/site/Btn";
import { Reveal } from "@/components/site/Reveal";
import { WhyChoose } from "@/components/site/WhyChoose";
import { CtaBanner } from "@/components/site/CtaBanner";
import { CtaSection } from "@/components/site/CtaSection";
import { CategoryCard } from "@/components/site/CategoryCard";
import { faqs, galleryImages, homeCategories, WHATSAPP_URL } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Velora Kitch 'N' Bath Co. | Premium Kitchen & Bathroom Solutions";
const description =
  "Premium faucets, showers, bathroom accessories, bathtubs and smart bathroom solutions crafted with elegance, innovation and lasting durability.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Velora Kitch 'N' Bath Co.",
          description,
          telephone: "+91-98407-62940",
          email: "info@velora.co.in",
        }),
      },
    ],
  }),
});

const aboutFeatures = [
  { icon: Gem, label: "Premium Quality" },
  { icon: Sparkles, label: "Elegant Design" },
  { icon: ShieldCheck, label: "Built To Last" },
  { icon: BadgeCheck, label: "Trusted Brand" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink">
        <img
          src={heroImage}
          alt="Luxury dark marble bathroom with freestanding bathtub and gold faucet"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-20 pt-36 lg:px-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Luxury That Defines Your Space</p>
            <h1 className="mt-6 text-4xl leading-[1.06] text-ink-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              <span className="text-gradient-gold">Premium</span> Kitchen &amp; Bathroom Solutions
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-ink-foreground/70 sm:text-base">
              Discover premium faucets, showers, bathroom accessories, bathtubs and smart bathroom
              solutions crafted with elegance, innovation and durability.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <BtnLink to="/products" variant="gold">
                Explore Products
              </BtnLink>
              <BtnLink to="/contact" variant="light">
                Contact Us
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="section-y bg-secondary">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 px-5 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-16 lg:px-10">
          <Reveal className="relative">
            <div className="absolute -bottom-5 -left-5 -z-10 hidden h-32 w-32 rounded-xl border border-gold/40 lg:block" />
            <div className="overflow-hidden rounded-xl shadow-[var(--shadow-lift)]">
              <img
                src={aboutImage}
                alt="Dark luxury kitchen with black marble countertop and gold mixer tap"
                width={1000}
                height={1000}
                loading="lazy"
                className="img-zoom aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">About Velora</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
              Crafted with Precision.
              <br />
              Designed for Timeless Living.
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Velora delivers premium kitchen and bathroom solutions combining elegant design,
              exceptional craftsmanship and long-lasting performance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {aboutFeatures.map(({ icon: Icon, label }) => (
                <div key={label} className="text-center sm:text-left">
                  <Icon className="mx-auto h-7 w-7 text-gold sm:mx-0" strokeWidth={1.4} />
                  <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-4">
              <BtnLink to="/about" variant="dark">
                Learn More
              </BtnLink>
              <BtnAnchor href={WHATSAPP_URL} variant="outline" arrow={false}>
                <MessageCircle className="h-4 w-4" />
                Chat with Expert
              </BtnAnchor>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal className="text-center">
            <p className="eyebrow">Our Product Collection</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem]">
              Explore Our Premium Collection
            </h2>
            <span className="gold-rule mx-auto mt-6" />
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              A perfect blend of style, innovation and durability for your kitchen and bathroom.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeCategories.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 80}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <BtnLink to="/products" variant="dark">
              View More Products
            </BtnLink>
          </div>
        </div>
      </section>

      <WhyChoose />
      <CtaBanner />

      {/* Gallery */}
      <section className="bg-secondary pb-14 pt-12 lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal className="text-center">
            <p className="eyebrow">Inspiration</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem]">Inspiration Gallery</h2>
            <span className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <Reveal key={img.alt} delay={i * 80}>
                <div className="overflow-hidden rounded-xl shadow-[var(--shadow-soft)]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="img-zoom aspect-square h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <BtnLink to="/gallery" variant="outline">
              View Gallery
            </BtnLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-background">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <Reveal className="text-center">
            <p className="eyebrow">Good to Know</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Frequently Asked Questions</h2>
            <span className="gold-rule mx-auto mt-6" />
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-medium hover:text-gold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem]">Ready to Upgrade Your Space?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-foreground/60">
              Connect with our experts for premium kitchen and bathroom solutions tailored to your
              requirements.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <BtnAnchor href={WHATSAPP_URL} variant="gold">
                Enquire Now
              </BtnAnchor>
              <BtnLink to="/contact" variant="light">
                Contact Us
              </BtnLink>
            </div>
          </Reveal>
      </CtaSection>

      <Link to="/products" className="sr-only">
        All products
      </Link>
    </>
  );
}
