import { Reveal } from "./Reveal";

const items = [
  {
    n: "01",
    title: "Forgotten Ideas",
    body: "Great content disappears into old newsletters and documents.",
  },
  {
    n: "02",
    title: "Repeating Yourself",
    body: "You keep rewriting things you've already said.",
  },
  {
    n: "03",
    title: "Starting From Scratch",
    body: "Your archive should help you create, not collect dust.",
  },
];

export function Problem() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="mx-auto max-w-7xl border-t border-border px-6 py-24 lg:py-32"
    >
      <Reveal>
        <h2
          id="problem-heading"
          className="max-w-3xl font-display text-3xl leading-tight text-foreground lg:text-5xl"
        >
          You've already created more than you remember.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.n} delay={i * 100} className="bg-background">
            <div className="flex h-full flex-col gap-4 p-8">
              <span className="font-mono text-xs text-accent">{item.n}</span>
              <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}