import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Eye, Target } from "lucide-react";
import aboutImage from "@/assets/about-kitchen.jpg";
import bannerImage from "@/assets/g-7.jpg";
import { PageHero } from "@/components/site/PageHero";
import { BtnAnchor, BtnLink } from "@/components/site/Btn";
import { Reveal } from "@/components/site/Reveal";
import { WhyChoose } from "@/components/site/WhyChoose";
import { CtaBanner } from "@/components/site/CtaBanner";
import { WHATSAPP_URL } from "@/lib/site";

const title = "About Us | Velora Kitch 'N' Bath Co.";
const description =
  "Velora crafts premium kitchen and bathroom solutions with exceptional engineering, timeless design and an uncompromising commitment to quality.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted name in premium kitchen and bathroom solutions — shaping spaces that feel timeless, refined and effortlessly liveable for generations.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver thoughtfully engineered products that combine elegance, reliability and everyday comfort, supported by service our customers can depend on.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Velora"
        title="A Legacy of Craftsmanship and Timeless Design"
        subtitle="Premium kitchen and bathroom solutions engineered for modern living and built to last a lifetime."
        image={bannerImage}
      />

      <section className="section-y bg-background">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 px-5 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-16 lg:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-[var(--shadow-lift)]">
              <img
                src={aboutImage}
                alt="Luxury kitchen detail with gold tap and marble counter"
                width={1000}
                height={1000}
                loading="lazy"
                className="img-zoom aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Our Company</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
              Precision Engineering Meets Elegant Living
            </h2>
            <span className="gold-rule mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Velora Kitch 'N' Bath Co. brings together exceptional craftsmanship, innovative
              engineering and contemporary design to create kitchen and bathroom products that
              perform beautifully, year after year. From precision-machined brass bodies to
              flawlessly polished finishes, every detail is considered.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We serve homeowners, architects, interior designers and commercial projects with a
              complete portfolio, dependable supply and attentive after-sales support.
            </p>

            <div className="mt-8 flex flex-row flex-wrap items-center gap-4">
              <BtnLink to="/products" variant="dark">
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

      {/* Vision & Mission */}
      <section className="section-y bg-secondary">
        <div className="mx-auto max-w-[1300px] px-5 lg:px-10">
          <Reveal className="text-center">
            <p className="eyebrow">Our Purpose</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Vision &amp; Mission</h2>
            <span className="gold-rule mx-auto mt-5" />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {visionMission.map(({ icon: Icon, title: t, text }, i) => (
              <Reveal key={t} delay={i * 100}>
                <article className="card-lift h-full rounded-xl border border-border bg-card px-8 py-10 shadow-[var(--shadow-soft)]">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/40">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-6 text-xl">{t}</h3>
                  <span className="gold-rule mt-4 w-10" />
                  <p className="mt-5 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />

      {/* Final CTA */}
      <CtaBanner
        title="Transform Your Space with Velora"
        text="Experience timeless elegance with premium kitchen and bathroom solutions crafted for modern lifestyles. Get in touch with our experts to find the perfect solution for your home or project."
        actions={
          <>
            <BtnAnchor href="https://wa.me/917823911133" variant="gold">
              Enquire Now
            </BtnAnchor>
            <BtnLink to="/contact" variant="light">
              Contact Us
            </BtnLink>
          </>
        }
      />
    </>
  );
}