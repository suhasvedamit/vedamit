import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Sparkles } from "lucide-react";

type Props = {
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

export function HeroMotion({ primaryCtaHref, secondaryCtaHref }: Props) {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  } as const;

  const duration = reduce ? 0 : 0.55;

  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[linear-gradient(165deg,oklch(0.43_0.11_195/0.07)_0%,transparent_45%),linear-gradient(to_bottom,var(--background),var(--background))]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-0 h-[min(38rem,90vw)] w-[min(52rem,95vw)] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[80px] dark:bg-primary/[0.18]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: reduce ? 0 : 0.09 }}
            className="min-w-0 text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.07] px-3.5 py-1.5 text-xs font-medium tracking-wide text-primary shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="size-3.5" aria-hidden="true" />
              AI, automation & full‑stack — built to ship
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration }}
              className="font-heading mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.06]"
            >
              Software that{" "}
              <span className="bg-gradient-to-r from-primary to-[oklch(0.5_0.14_210)] bg-clip-text text-transparent dark:from-primary dark:to-[oklch(0.78_0.12_195)]">
                earns its place
              </span>{" "}
              in production.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 mx-auto"
            >
              Vedamit partners with teams to design and build AI products,
              resilient systems, and interfaces people trust — with clarity on
              scope, milestones, and measurable impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration }}
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href={primaryCtaHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/92 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
              >
                Start a project{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex h-11 items-center justify-center rounded-full border border-border/80 bg-card/80 px-7 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent/40"
              >
                View services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-indigo-500/10 blur-2xl dark:from-primary/20" />
            <div className="relative grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-3">
              <div className="rounded-2xl border border-border/60 bg-card/90 p-5 shadow-lg shadow-foreground/[0.04] backdrop-blur-md sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Cpu className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-tight">
                      AI that works with your stack
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      LLM apps, RAG, agents, evaluations, and integrations —
                      documented, tested, and ready for your users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/90 p-5 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                  <Layers className="size-4 text-primary" aria-hidden="true" />
                  Automation & ops
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Orchestration, document pipelines, and monitoring that reduce
                  manual work without hiding complexity.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/90 p-5 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                  <Sparkles
                    className="size-4 text-primary"
                    aria-hidden="true"
                  />
                  Craft & performance
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Thoughtful UX, secure architecture, and speed that holds up
                  under real traffic.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
