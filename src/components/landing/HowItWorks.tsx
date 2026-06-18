import { Download, MessageSquare, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    Icon: Download,
    title: "Import your archive.",
    body: "Connect newsletters, blogs, podcasts, Markdown files, and documents.",
  },
  {
    n: "02",
    Icon: MessageSquare,
    title: "Ask anything.",
    body: "Search your entire creative history using natural language.",
  },
  {
    n: "03",
    Icon: Sparkles,
    title: "Create from what you've already built.",
    body: "Turn forgotten ideas into newsletters, threads, podcasts, and more.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="mx-auto max-w-7xl border-t border-border px-6 py-24 lg:py-32"
    >
      <Reveal className="max-w-2xl">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          How it works
        </span>
        <h2
          id="how-heading"
          className="mt-4 font-display text-3xl leading-tight text-foreground lg:text-5xl"
        >
          Three simple steps.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-16">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div className="flex flex-col gap-6">
              <div className="flex size-12 items-center justify-center border border-border bg-card text-accent">
                <s.Icon className="size-5" strokeWidth={1.25} />
              </div>
              <div>
                <span className="font-mono text-xs text-muted">Step {s.n}</span>
                <h3 className="mt-2 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}