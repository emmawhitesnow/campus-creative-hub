import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { workProjects, type WorkProject } from "@/data/work";
import { X } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Maren Ellis" },
      {
        name: "description",
        content:
          "Selected design and illustration projects: posters, branding, editorial layouts, and zines made on campus.",
      },
      { property: "og:title", content: "Work — Maren Ellis" },
      {
        property: "og:description",
        content: "Selected campus design projects from Maren Ellis.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [selected, setSelected] = useState<WorkProject | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-16 max-w-3xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          Portfolio
        </p>
        <h1 className="font-serif text-5xl font-medium tracking-tight md:text-6xl">
          Work from the studio.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A growing collection of design and illustration from coursework,
          campus collaborations, and self-initiated projects.
        </p>
      </header>

      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {workProjects.map((p, i) => (
          <button
            type="button"
            onClick={() => setSelected(p)}
            key={p.id}
            className={`group text-left ${i % 2 === 1 ? "md:mt-16" : ""}`}
          >
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
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl">{p.title}</h2>
              <span className="text-sm text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {p.tags.join(" · ")}
            </p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-background p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selected.cover}
              alt={selected.title}
              width={1280}
              height={1024}
              className="aspect-[5/4] w-full rounded-sm object-cover"
            />
            <div className="mt-6 flex items-baseline justify-between">
              <h2 className="font-serif text-3xl">{selected.title}</h2>
              <span className="text-sm text-muted-foreground">{selected.year}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {selected.tags.join(" · ")}
            </p>
            <p className="mt-6 leading-relaxed text-foreground/90">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
