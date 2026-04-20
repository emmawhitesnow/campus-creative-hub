import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/art-papaya.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — art by emmah" },
      {
        name: "description",
        content:
          "Emma H. is an artist, illustrator, and graphic designer based in Silicon Valley and studying English at Dartmouth College.",
      },
      { property: "og:title", content: "About — art by emmah" },
      {
        property: "og:description",
        content:
          "Emma H. — artist, illustrator, and graphic designer based in Silicon Valley.",
      },
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
              alt="Papaya illustration by Emma H."
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            About
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            I'm Emma — an artist, illustrator, and graphic designer.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              I'm based in Silicon Valley and studying English at Dartmouth
              College. I'm experienced in the visual arts, including
              educational, collegial, and commissional work.
            </p>
            <p>
              Most of what I make these days is food — glossy fruit, small
              desserts, the occasional plate of nigiri. I love painting things
              that catch the light, and I keep a steady habit of doodling in
              the margins of everything else.
            </p>
            <p>
              I'm always up for collaborations — editorial illustration,
              posters, branding for small projects, or anything that involves
              making something with care.
            </p>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h2 className="font-serif text-2xl">Get in touch</h2>
            <p className="mt-2 text-muted-foreground">
              For commissions, collabs, or just to say hi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:emmah.doodles@gmail.com"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                emmah.doodles@gmail.com
              </a>
              <a
                href="https://www.instagram.com/artby.emmah/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                @artby.emmah
              </a>
              <a
                href="https://www.inprnt.com/gallery/artbyemmah/"
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
