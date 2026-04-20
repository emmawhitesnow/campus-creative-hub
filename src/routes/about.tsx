import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maren Ellis" },
      {
        name: "description",
        content:
          "About Maren Ellis: a design student making editorial work, illustrated prints, and the occasional good loaf of sourdough.",
      },
      { property: "og:title", content: "About — Maren Ellis" },
      {
        property: "og:description",
        content: "About Maren Ellis — design student, illustrator, baker.",
      },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-sm bg-muted">
            <img
              src={portrait}
              alt="Portrait of Maren in the studio"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            I'm Maren — a junior at Linden College studying graphic design.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              Most of my work lives somewhere between editorial design and
              illustration. I love a quiet layout, a generous margin, and type
              that takes its time. On weekends I'm probably drawing in a coffee
              shop or testing a new sourdough recipe (I am, very slowly,
              becoming the kind of person who has a starter named Doris).
            </p>
            <p>
              On campus I've worked with the student literary magazine, the
              music society, and a couple of local cafes. Off campus I sell
              open-edition prints through INPRNT — proceeds mostly go to more
              paper and the occasional good pen.
            </p>
            <p>
              I'm always up for collaborations on posters, zines, branding for
              small projects, or anything that involves making something with
              care.
            </p>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h2 className="font-serif text-2xl">Get in touch</h2>
            <p className="mt-2 text-muted-foreground">
              For commissions, collabs, or just to say hi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                hello@marenellis.com
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Instagram
              </a>
              <a
                href="https://www.inprnt.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                INPRNT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
