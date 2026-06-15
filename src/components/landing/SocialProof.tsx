import { Reveal } from "./Reveal";

const audiences = [
  "Newsletter Writers",
  "Podcasters",
  "Authors",
  "Founder-Creators",
  "Course Builders",
  "Consultants",
];

export function SocialProof() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="border-y border-border bg-card/20 py-20"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2
            id="audience-heading"
            className="font-display text-3xl leading-tight text-foreground lg:text-4xl"
          >
            Built for creators who think in <span className="italic text-accent">years</span>,
            not posts.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <li
                key={a}
                className="border border-border bg-background px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted"
              >
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}