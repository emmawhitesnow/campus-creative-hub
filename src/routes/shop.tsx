import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { prints, categories, type PrintCategory } from "@/data/prints";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Prints by Maren Ellis" },
      {
        name: "description",
        content:
          "Hand-drawn art prints — florals, abstract shapes, typography, and illustrations. Fulfilled and shipped by INPRNT.",
      },
      { property: "og:title", content: "Shop — Prints by Maren Ellis" },
      {
        property: "og:description",
        content: "Hand-drawn art prints fulfilled by INPRNT.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [active, setActive] = useState<"All" | PrintCategory>("All");

  const visible = useMemo(
    () => (active === "All" ? prints : prints.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12 max-w-3xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Print Shop
        </p>
        <h1 className="font-serif text-5xl font-medium tracking-tight md:text-6xl">
          Bring some warmth to your wall.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Open-edition prints, professionally printed and shipped worldwide by
          INPRNT. Click any piece to view sizes and check out on their site.
        </p>
      </header>

      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === c
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article key={p.id} className="group">
            <a
              href={p.inprntUrl}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-sm bg-muted"
            >
              <img
                src={p.image}
                alt={p.title}
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </a>
            <div className="mt-4">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-xl">{p.title}</h2>
                <span className="text-sm text-foreground">From {p.priceFrom}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {p.category} · {p.sizes}
              </p>
              <a
                href={p.inprntUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Buy on INPRNT <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">
          No prints in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
