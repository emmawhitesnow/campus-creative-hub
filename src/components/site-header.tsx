import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
          art by emmah<span className="text-primary">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/work"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Work
          </Link>
          <Link
            to="/shop"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
