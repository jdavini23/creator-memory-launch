export function ChatMock() {
  return (
    <div className="relative flex flex-col gap-5 overflow-hidden border border-border bg-card/30 p-5 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-radial-[circle_at_50%_0%] from-accent/5 to-transparent" />

      <div className="relative flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Creator Memory · Chat
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Session 01
        </span>
      </div>

      {/* User bubble */}
      <div
        className="relative flex max-w-[88%] flex-col gap-2 animate-fade-up"
        style={{ animationDelay: "400ms" }}
      >
        <span className="font-mono text-[10px] uppercase text-muted">You</span>
        <div className="bg-border/40 px-4 py-3 text-sm leading-relaxed text-foreground/90">
          What have I written about becoming a dad?
        </div>
      </div>

      {/* AI bubble */}
      <div
        className="relative flex max-w-[94%] flex-col items-end gap-2 self-end animate-fade-up"
        style={{ animationDelay: "900ms" }}
      >
        <span className="font-mono text-[10px] uppercase text-accent">Memory</span>
        <div className="bg-accent px-4 py-4 text-sm leading-relaxed text-background">
          <p className="mb-3">I found:</p>
          <ul className="mb-3 space-y-1 font-mono text-[12px]">
            <li>· 17 newsletters</li>
            <li>· 43 short-form posts</li>
            <li>· 5 podcast episodes</li>
            <li>· 2 unfinished drafts</li>
          </ul>
          <p className="mb-2">Common themes:</p>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {["identity", "exhaustion", "joy", "building family traditions"].map((t) => (
              <span
                key={t}
                className="border border-background/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm">
            Want me to turn these into a new newsletter or ebook outline?
          </p>
        </div>
        <span className="font-mono text-[9px] italic text-muted">
          Synthesized from 67 archived items
        </span>
      </div>

      <div className="relative mt-2 flex items-center gap-3 border-t border-border pt-4 text-muted">
        <span className="size-2 animate-pulse rounded-full bg-accent/40" />
        <span className="font-mono text-[11px]">Searching your archive…</span>
      </div>
    </div>
  );
}