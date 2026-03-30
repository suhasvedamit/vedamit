import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Wand2 } from "lucide-react";

type Props = {
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

export function HeroMotion({ primaryCtaHref, secondaryCtaHref }: Props) {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  } as const;

  const duration = reduce ? 0 : 0.5;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-22rem] h-[44rem] w-[66rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--brand-glow-1)/0.18)_0%,transparent_55%)] dark:bg-[radial-gradient(circle_at_center,rgb(var(--brand-glow-1)/0.16)_0%,transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-[-20rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgb(var(--brand-glow-2)/0.14)_0%,transparent_60%)] opacity-80 dark:bg-[radial-gradient(circle_at_center,rgb(var(--brand-glow-2)/0.12)_0%,transparent_60%)]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: reduce ? 0 : 0.08 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur"
          >
            <ShieldCheck className="size-4" aria-hidden="true" />
            Empowering businesses with cutting-edge AI and IT solutions.
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Build AI products, automation, and software that ship—and scale.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration }}
            className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Vedamit Solutions delivers end‑to‑end AI and full‑stack development
            for teams that want measurable outcomes, rapid iteration, and
            production‑grade quality.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={primaryCtaHref}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,rgb(var(--brand-glow-1)/0.95),rgb(var(--brand-glow-2)/0.95))] px-6 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-95 sm:w-auto"
            >
              Get started <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={secondaryCtaHref}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border bg-background/70 px-6 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:bg-accent/70 sm:w-auto"
            >
              View services
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration }}
            className="mt-10 grid gap-3 text-left sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Sparkles className="size-4" aria-hidden="true" />
                AI that drives results
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                LLM apps, RAG, agents, evaluation, and integration with your
                existing stack.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Wand2 className="size-4" aria-hidden="true" />
                Automation at scale
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Workflow orchestration, document processing, and operational
                intelligence.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Production‑grade delivery
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Secure architecture, clean UX, and performance that scores
                100/100.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
