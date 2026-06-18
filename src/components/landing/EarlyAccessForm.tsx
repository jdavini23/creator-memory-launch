import { useState, type FormEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .max(255, "Email is too long")
  .email("Enter a valid email");

type Variant = "inline" | "stacked";

type Props = {
  variant?: Variant;
  buttonLabel?: string;
  placeholder?: string;
  id?: string;
  source?: string; // Track where the signup came from
};

export function EarlyAccessForm({
  variant = "inline",
  buttonLabel = "Join List",
  placeholder = "email@example.com",
  id = "email",
  source = "unknown",
}: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const joinWaitlist = useMutation(api.users.joinWaitlist);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      const result = await joinWaitlist({
        email: parsed.data,
        source,
        metadata: {
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Waitlist signup failed:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-border bg-card/40 px-5 py-4 text-sm text-foreground/90">
        You're on the list. We'll be in touch with early invites.
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <form onSubmit={onSubmit} noValidate className="w-full">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id={id}
            type="email"
            required
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="h-14 flex-1 border border-border bg-background px-6 font-mono text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="h-14 shrink-0 bg-foreground px-8 font-mono text-xs uppercase tracking-widest text-background transition-all hover:bg-accent disabled:opacity-50"
          >
            {isLoading ? "Joining..." : buttonLabel}
          </button>
        </div>
        {error && (
          <p className="mt-3 font-mono text-[11px] text-foreground/80" role="alert">
            {error}
          </p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div className="relative">
        <input
          id={id}
          type="email"
          required
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="h-12 w-full border border-border bg-card/50 px-4 font-mono text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none transition-colors sm:pr-32 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-3 h-9 w-full bg-foreground px-4 font-mono text-[10px] uppercase tracking-widest text-background transition-all hover:bg-accent sm:absolute sm:right-1.5 sm:top-1.5 sm:mt-0 sm:w-auto disabled:opacity-50"
        >
          {isLoading ? "Joining..." : buttonLabel}
        </button>
      </div>
      {error && (
        <p className="mt-3 font-mono text-[11px] text-foreground/80" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}