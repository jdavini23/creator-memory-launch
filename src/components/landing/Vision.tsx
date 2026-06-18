import { Reveal } from "./Reveal";

export function Vision() {
  return (
    <section
      aria-labelledby="vision-heading"
      className="mx-auto max-w-3xl px-6 py-32 text-center"
    >
      <Reveal>
        <h2
          id="vision-heading"
          className="font-display text-3xl italic leading-tight text-foreground lg:text-5xl"
        >
          Your best ideas shouldn't disappear.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-8 leading-relaxed text-muted">
          Every creator builds a library of stories, lessons, and hard-earned knowledge.
          Creator Memory helps you preserve, rediscover, and build upon that work instead of
          starting over.
        </p>
      </Reveal>
    </section>
  );
}