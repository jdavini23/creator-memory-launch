import { ChatMock } from "./ChatMock";
import { EarlyAccessForm } from "./EarlyAccessForm";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-32"
    >
      <div className="animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-2 border border-border px-3 py-1">
          <span className="size-1.5 animate-pulse bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            ✨ Early Access Opening Soon
          </span>
        </div>

        <h1 className="max-w-xl text-pretty font-display text-5xl leading-[1.05] tracking-tight text-foreground lg:text-7xl">
          Your content has a <span className="italic text-accent">memory</span> now.
        </h1>

        <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-muted">
          Stop forgetting your best ideas. Creator Memory lets you search, chat with, and
          repurpose everything you've ever written, so your old content keeps creating value.
        </p>

        <div id="join" className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="w-full sm:w-80">
            <EarlyAccessForm
              id="hero-email"
              source="hero"
              buttonLabel="Join List"
              placeholder="email@example.com"
            />
          </div>
          <a
            href="#how-it-works"
            className="inline-flex h-12 items-center justify-center border border-border px-6 font-mono text-[10px] uppercase tracking-widest text-muted transition-all hover:bg-card hover:text-foreground"
          >
            See How It Works
          </a>
        </div>
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
        <ChatMock />
      </div>
    </section>
  );
}