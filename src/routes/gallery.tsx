import { createFileRoute } from "@tanstack/react-router";
import bannerImage from "@/assets/g-5.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { galleryImages } from "@/lib/site";

const title = "Inspiration Gallery | Velora Kitch 'N' Bath Co.";
const description =
  "Browse luxury kitchen and bathroom interiors featuring Velora faucets, showers, bath tubs and accessories.";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Premium Image Gallery"
        subtitle="Spaces designed around precision, warmth and quiet luxury."
        image={bannerImage}
      />

      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal key={img.alt} delay={(i % 4) * 80} className="h-full">
                <figure className="h-full overflow-hidden rounded-xl shadow-[var(--shadow-soft)]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="img-zoom aspect-square h-full w-full object-cover"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}