import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { workProjects } from "@/data/work";
import { prints } from "@/data/prints";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "art by emmah — Illustration & Design by Emma H." },
      {
        name: "description",
        content:
          "Hand-painted food illustrations and editorial design by Emma H. — an artist based in Silicon Valley and studying English at Dartmouth College.",
      },
      { property: "og:title", content: "art by emmah — Illustration & Design" },
      {
        property: "og:description",
        content:
          "Hand-painted food illustrations and editorial design by Emma H.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredWork = workProjects.slice(0, 3);
  const featuredPrints = prints.slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="grid gap-10 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-8">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Illustration · Design · Silicon Valley → Dartmouth
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Hi, I'm Emma — painting{" "}
            <span className="italic text-primary">glossy, hungry</span> little
            portraits of the food I love.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm an artist, illustrator, and graphic designer based in Silicon
            Valley and studying English at Dartmouth. This is a small home for
            the work — and the prints I sell through INPRNT.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See the work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Shop prints
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-border/60" />

      {/* Featured Work */}
      <section className="py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected
            </p>
            <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
              Recent work
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-12">
          <Link to="/work" className="group md:col-span-7">
            <div className="overflow-hidden rounded-sm bg-muted">
              <img
                src={featuredWork[0].cover}
                alt={featuredWork[0].title}
                width={1280}
                height={1024}
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-xl">{featuredWork[0].title}</h3>
              <span className="text-xs text-muted-foreground">{featuredWork[0].year}</span>
            </div>
            <p className="text-sm text-muted-foreground">{featuredWork[0].tags.join(" · ")}</p>
          </Link>
          <div className="grid gap-8 md:col-span-5">
            {featuredWork.slice(1).map((p) => (
              <Link to="/work" key={p.id} className="group">
                <div className="overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.cover}
                    alt={p.title}
                    width={1280}
                    height={1024}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <h3 className="font-serif text-lg">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{p.tags.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-border/60" />

      {/* Featured Prints */}
      <section className="py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              In the shop
            </p>
            <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
              Prints to live with
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Browse all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {featuredPrints.map((p) => (
            <Link to="/shop" key={p.id} className="group">
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-serif text-base">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-border/60" />

      {/* About teaser */}
      <section className="py-24 text-center">
        <p className="mx-auto max-w-3xl font-serif text-3xl leading-snug text-foreground md:text-4xl">
          "Drawing the things I'd most like to eat — one glossy, slightly
          impractical portrait at a time."
        </p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
        >
          More about me <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}
