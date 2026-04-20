export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Emma H. — art by emmah. Prints fulfilled by INPRNT.
        </p>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href="https://www.instagram.com/artby.emmah/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="https://www.inprnt.com/gallery/artbyemmah/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            INPRNT
          </a>
          <a
            href="mailto:emmah.doodles@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
