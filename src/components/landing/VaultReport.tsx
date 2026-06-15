import { Reveal } from "./Reveal";

const findings = [
  "3 forgotten articles worth updating",
  "2 unfinished content series",
  "1 potential ebook",
  "5 evergreen ideas ready to republish",
  "A topic your audience hasn't heard from you about in 8 months",
];

export function VaultReport() {
  return (
    <section
      aria-labelledby="vault-heading"
      className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-5 lg:gap-16 lg:py-32"
    >
      <Reveal className="lg:col-span-2">
        <div className="flex h-full flex-col justify-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Every Sunday
          </span>
          <h2
            id="vault-heading"
            className="mt-4 font-display text-4xl leading-tight text-foreground lg:text-5xl"
          >
            Your weekly
            <br />
            <span className="italic text-accent">vault report</span>.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            A short, beautiful email that surfaces what's worth revisiting from your archive —
            so your past work keeps compounding without effort.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150} className="lg:col-span-3">
        <article className="bg-[#FDFDFB] p-8 text-[#1A1A18] shadow-2xl lg:p-12">
          <header className="mb-10 flex items-start justify-between border-b border-black/10 pb-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-tighter">
                Weekly Vault Report
              </p>
              <p className="mt-1 text-xs text-black/40">From Creator Memory</p>
            </div>
            <div className="size-8 bg-black" aria-hidden />
          </header>

          <div className="space-y-6">
            <p className="font-display text-xl">This week I found:</p>
            <ul className="space-y-3">
              {findings.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-black/80">
                  <span className="mt-2 size-1 shrink-0 bg-black" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="font-display text-base italic">
                Your archive gained value this week.
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}