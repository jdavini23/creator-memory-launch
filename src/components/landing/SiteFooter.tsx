export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="mt-1 size-5 rounded-sm bg-accent" aria-hidden />
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-tighter text-foreground">
              Creator Memory
            </p>
            <p className="mt-1 font-display text-sm italic text-muted">
              Your content has a memory now.
            </p>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { label: "Privacy", href: "#" },
            { label: "Contact", href: "mailto:hello@creatormemory.app" },
            { label: "X", href: "https://x.com" },
            { label: "Email", href: "mailto:hello@creatormemory.app" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}