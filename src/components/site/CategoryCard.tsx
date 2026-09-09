import { Link } from "@tanstack/react-router";
import type { Category } from "@/lib/site";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/products"
      className="card-lift group block overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]"
    >
      <div className="overflow-hidden bg-ink">
        <img
          src={category.image}
          alt={category.name}
          width={800}
          height={800}
          loading="lazy"
          className="img-zoom aspect-[4/3] w-full object-cover"
        />
      </div>
      <div className="px-5 py-5 text-center">
        <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors duration-300 group-hover:text-gold">
          {category.name}
        </h3>
        <span className="gold-rule mx-auto mt-3 w-8" />
      </div>
    </Link>
  );
}