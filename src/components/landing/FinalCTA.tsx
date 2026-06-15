import { EarlyAccessForm } from "./EarlyAccessForm";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      id="early-access"
      aria-labelledby="final-cta-heading"
      className="mx-auto max-w-7xl px-6 pb-24"
    >
      <Reveal>
        <div className="relative overflow-hidden border border-border bg-card p-12 text-center lg:p-24">
          <div className="pointer-events-none absolute inset-0 bg-radial-[circle_at_50%_100%] from-accent/5 to-transparent" />

          <div className="relative z-10">
            <h2
              id="final-cta-heading"
              className="mx-auto max-w-2xl font-display text-4xl leading-tight text-foreground lg:text-6xl"
            >
              Stop starting from scratch.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted">
              Join the early access list and help shape Creator Memory from day one.
            </p>

            <div className="mx-auto mt-10 max-w-md">
              <EarlyAccessForm
                id="final-email"
                variant="stacked"
                buttonLabel="Join Early Access"
                placeholder="Your email address"
              />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted">
                No spam. Just product updates and early invites.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}