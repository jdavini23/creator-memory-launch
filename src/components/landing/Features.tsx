import { Reveal } from "./Reveal";

const features = [
  {
    n: "01",
    title: "Search Your Brain",
    body: '"What have I written about AI?" Get an instant, sourced answer pulled from every archive you own.',
  },
  {
    n: "02",
    title: "Discover Hidden Projects",
    body: "Find unfinished series, orphaned drafts, and forgotten ideas worth finishing.",
  },
  {
    n: "03",
    title: "Repurpose Content",
    body: "Turn one old article into a thread, a newsletter, a podcast outline — without rewriting from zero.",
  },
  {
    n: "04",
    title: "Weekly Vault Report",
    body: "Get AI-powered suggestions for content worth revisiting, delivered every Sunday.",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="mx-auto max-w-7xl border-t border-border px-6 py-24 lg:py-32"
    >
      <Reveal className="max-w-2xl">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Capabilities
        </span>
        <h2
          id="features-heading"
          className="mt-4 font-display text-3xl leading-tight text-foreground lg:text-5xl"
        >
          A second brain for everything you've ever made.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.n} delay={i * 80} className="bg-background">
            <div className="flex h-full flex-col gap-12 p-8">
              <div className="grid size-10 place-items-center bg-accent/10 font-mono text-xs text-accent">
                {f.n}
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">{f.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">{f.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}