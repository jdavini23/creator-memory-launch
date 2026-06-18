export function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-6 rounded-sm bg-accent" aria-hidden />
          <span className="font-mono text-sm font-bold uppercase tracking-tighter">
            Creator Memory
          </span>
        </a>
        <a
          href="#join"
          className="bg-foreground px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent"
        >
          Join Early Access
        </a>
      </div>
    </nav>
  );
}