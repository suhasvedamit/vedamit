import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Sparkles, MonitorCloud } from "lucide-react";

type Props = {
  primaryCtaHref: string;
};

export function HeroMotion({ primaryCtaHref }: Props) {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  } as const;

  const duration = reduce ? 0 : 0.55;

  return (
    <section className="relative flex min-h-[calc(100dvh-var(--site-header-height))] flex-col overflow-hidden border-b border-border/40">
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
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-0 h-[min(38rem,90vw)] w-[min(52rem,95vw)] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[80px] dark:bg-primary/[0.18]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: reduce ? 0 : 0.09 }}
            className="flex min-w-0 flex-col justify-center text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration }}
              className="inline-flex w-fit max-w-full items-center gap-2 self-center rounded-full border border-primary/25 bg-primary/[0.07] px-3.5 py-1.5 text-xs font-medium tracking-wide text-primary shadow-sm backdrop-blur-sm lg:self-start"
            >
              <Sparkles className="size-3.5" aria-hidden="true" />
              AI, automation & full‑stack — built to ship
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration }}
              className="font-heading mt-7 max-w-3xl text-left text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.06]"
            >
              {/* Software that{" "}
              <span className="bg-gradient-to-r from-primary to-[oklch(0.5_0.14_210)] bg-clip-text text-transparent dark:from-primary dark:to-[oklch(0.78_0.12_195)]">
                earns its place
              </span>{" "}
              in production. */}
              Empowering businesses with{" "}
              <span className="bg-gradient-to-r from-primary to-[oklch(0.5_0.14_210)] bg-clip-text text-transparent dark:from-primary dark:to-[oklch(0.78_0.12_195)]">
              cutting-edge AI and IT 
              </span>{" "}
              solutions.

            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration }}
              className="mt-4 max-w-2xl text-pretty text-left text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Vedamit Solutions partners with teams to design and build AI products,
              resilient systems, and interfaces people trust — with clarity on
              scope, milestones, and measurable impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration }}
              className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href={primaryCtaHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/92 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
              >
                Get in touch{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              {/* <a
                href={secondaryCtaHref}
                className="inline-flex h-11 items-center justify-center rounded-full border border-border/80 bg-card/80 px-7 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-accent/40"
              >
                View services
              </a> */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.15 }}
            className="relative mt-8 flex flex-col justify-center lg:mt-0"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/12 via-transparent to-indigo-500/10 blur-2xl dark:from-primary/18" />
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-border/60 bg-card/90 p-5 shadow-lg shadow-foreground/[0.04] backdrop-blur-md sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Cpu className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-tight">
                      AI products that ship
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      From idea to production: LLM apps, RAG systems, and AI
                      copilots built around real business use‑cases.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/90 p-5 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Layers className="size-4 text-primary" aria-hidden="true" />
                  </span>
                  Automation & AI agents
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Workflow automation and agentic systems that take over
                  repetitive work, connect your tools, and keep humans in
                  control.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/90 p-5 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <MonitorCloud
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  Full‑stack engineering
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Modern web, mobile, and cloud infrastructure so your AI
                  initiatives run on reliable, scalable products users love.
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/90 p-5 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Sparkles
                      className="size-4 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  Strategy & discovery
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Roadmapping, architecture decisions, and quick experiments to validate what to build before you invest in full delivery.                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
