import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Terminal,
  Layers,
  TrendingUp,
  Zap,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { DualKeyDemo } from "@/components/dual-key-demo";
import { SuretyPlayground } from "@/components/surety-playground";
import { VerticalsSwitcher } from "@/components/verticals-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "ReEnvision 5.0 — Money at the speed of verified reality" },
      {
        name: "description",
        content:
          "Dual-key architecture where AI scales operations and humans execute legal authority. GroundTruth certifies physical facts. Surety governs AI actors.",
      },
      { property: "og:title", content: "ReEnvision 5.0" },
      {
        property: "og:description",
        content:
          "GroundTruth certifies the physical facts. Surety governs the AI actors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

function Nav() {
  const links = ["Dual-Key Architecture", "GroundTruth", "Surety", "Threat Models"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgb(16,185,129,0.9)]" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
              ReEnvision <span className="text-foreground/60">5.0</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#deploy"
              className="btn-press rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgb(99,102,241,0.35)]"
            >
              Deploy Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      {/* radial blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-500/25 blur-[140px]" />
        <div className="animate-blob absolute -bottom-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.div {...fadeUp} className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-4 py-1 text-sm text-emerald-400 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Theme: Human-AI Synergy
            <span className="mx-1 h-1 w-1 rounded-full bg-foreground/30" />
            <span className="text-foreground/70">0 Unverifiable Claims</span>
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="mx-auto mt-8 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-emerald-500 via-foreground to-indigo-500 bg-clip-text text-transparent">
            Money that moves at the speed of verified reality.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          GroundTruth certifies the physical facts. Surety governs the AI actors.
          A unified dual-key architecture where AI scales operations, and humans
          execute legal authority.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#architecture"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 font-semibold text-background transition-all btn-press hover:scale-105 hover:shadow-[0_0_40px_oklch(from_var(--foreground)_l_c_h_/_0.25)]"
          >
            View System Architecture
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#threatmodels"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-6 py-3 text-foreground transition-colors hover:bg-foreground/10"
          >
            Read Threat Models
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const chips = [
  {
    stat: "₹1–3 Lakh Cr",
    body:
      "Stuck in delayed payments & disputes. Maharashtra alone holds a ₹96,000 Cr+ backlog due to manual Measurement Books.",
  },
  {
    stat: "7–8 Years",
    body:
      "Average duration of construction arbitrations, with 85% of claims still pending resolution.",
  },
  {
    stat: "300k+ Stars",
    body:
      "OpenClaw AI agent has crossed 300k stars. Agentic scale is here, but compliance stalls without cryptographic liability.",
  },
];

function ProblemScale() {
  return (
    <section className="relative mx-auto -mt-8 max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {chips.map((c, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="text-2xl font-semibold tracking-tight text-foreground">
              {c.stat}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section id="dualkeyarchitecture" className="mx-auto max-w-7xl px-4 py-28">
      <motion.div {...fadeUp} className="mb-14 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-emerald-400/80">
          The Unified Platform
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          One architecture. Two rails. Zero unverifiable claims.
        </h2>
      </motion.div>

      <div id="architecture" className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 — spans 2 */}
        <motion.div
          {...fadeUp}
          className="glass relative overflow-hidden rounded-2xl p-8 md:col-span-2"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400">
            <Layers className="h-4 w-4" /> Dual-Key Execution
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The Dual-Key Mechanism
          </h3>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Neither AI nor human moves money alone. Sensors and AI capture the
            physical state (drone passes, vision-based quantity assessment). An
            accountable human provides the cryptographic signature. AI provides
            scale; the human provides legal standing.
          </p>

          <div className="mt-8 rounded-lg border border-foreground/10 bg-black p-4 font-mono text-sm shadow-2xl">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 flex items-center gap-2 text-xs text-foreground/40">
                <Terminal className="h-3 w-3" /> groundtruth — settlement
              </span>
            </div>
            <div className="space-y-1.5 leading-relaxed">
              <div className="text-foreground/90">
                <span className="text-emerald-400">$</span> python -m groundtruth
                compare --invoice 1863900 --days 148
              </div>
              <div className="text-foreground/50">
                <span className="text-indigo-400">&gt;</span> Status Quo: 148
                Days to Settlement
              </div>
              <div className="text-foreground/90">
                <span className="text-indigo-400">&gt;</span> GroundTruth:{" "}
                <span className="text-emerald-400">
                  T+2 Bank Payout (Verified)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          id="groundtruth"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="glass relative overflow-hidden rounded-2xl p-8"
        >
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
            <MapPin className="h-5 w-5 text-emerald-400" />
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
            GroundTruth: The Physical Rail
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Translating public works into bank-financeable instruments.
            Resolving the hidden bottleneck by making a site measurement as
            instant and trusted as a UPI transaction.
          </p>
        </motion.div>

        {/* Card 3 — spans 3 */}
        <motion.div
          id="surety"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="glass relative overflow-hidden rounded-2xl p-8 md:col-span-3"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-indigo-500/10 to-transparent" />
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10">
              <ShieldCheck className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Surety: The AI Authorization Rail
              </h3>
              <p className="mt-3 max-w-4xl text-muted-foreground">
                When AI acts, who holds the liability? Surety provides Ed25519
                cryptographic delegation certificates and an MCP-compatible
                proxy. A human signs a scoped, revocable grant (spend caps,
                allowed domains). Out-of-scope actions are escrowed for 1-tap
                human approval.
              </p>
            </div>
            <div className="hidden shrink-0 flex-col items-end gap-2 md:flex">
              {["Ed25519 Grant", "Spend Cap: ₹50,000", "Domain: *.gov.in"].map(
                (t) => (
                  <div
                    key={t}
                    className="rounded-md border border-foreground/10 bg-foreground/5 px-3 py-1.5 font-mono text-xs text-foreground/70"
                  >
                    {t}
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureBlocks() {
  return (
    <section className="mx-auto max-w-7xl space-y-28 px-4 py-16">
      {/* A */}
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div {...fadeUp} className="order-2 md:order-1">
          <div className="glass relative overflow-hidden rounded-2xl p-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-xs uppercase tracking-widest text-emerald-400">
                Settlement Waterfall
              </div>
              <div className="font-mono text-xs text-foreground/50">60 / 40</div>
            </div>
            {[
              { label: "Advance Rate", val: 60, tier: "Tier 1" },
              { label: "Advance Rate", val: 72, tier: "Tier 2" },
              { label: "Advance Rate", val: 85, tier: "Tier 3" },
            ].map((r, i) => (
              <div key={i} className="mb-5 last:mb-0">
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-foreground/70">{r.tier}</span>
                  <span className="font-mono text-emerald-400">{r.val}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-foreground/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300"
                  />
                </div>
              </div>
            ))}
            <div className="mt-6 rounded-lg border border-foreground/10 bg-foreground/40 p-3 font-mono text-xs text-foreground/60">
              Holdback pool → 40% principal protection · deduction-absorbed
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="order-1 md:order-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400">
            <TrendingUp className="h-4 w-4" /> Reliability Flywheel
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Holdback-First Deductions.
          </h3>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Our 60/40 model introduces a reliability flywheel. Clean history
            visibly steps the advance rate up, while deduction absorption
            protects the principal.
          </p>
        </motion.div>
      </div>

      {/* B */}
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400">
            <Zap className="h-4 w-4" /> Agent Underwriting
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The Lloyd&apos;s of London for Machine Labor.
          </h3>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Once actions are certified and logged via MCP proxies, the history
            becomes actuarial data. Agents get bonded the way contractors get
            bonded.
          </p>
        </motion.div>
        <motion.div {...fadeUp}>
          <div className="glass relative overflow-hidden rounded-2xl p-8">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="mb-6 flex items-center justify-between">
              <div className="text-xs uppercase tracking-widest text-indigo-400">
                Agent Bond · #A-2041
              </div>
              <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                ACTIVE
              </div>
            </div>
            <div className="space-y-3 font-mono text-xs">
              {[
                ["principal", "openclaw://agent/underwriter-v3"],
                ["scope", "invoice.verify · payout.request"],
                ["cap", "₹5,00,000 / 24h"],
                ["signer", "0xF4…9C · Ed25519"],
                ["premium", "0.24% APR"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-foreground/5 pb-2"
                >
                  <span className="text-foreground/40">{k}</span>
                  <span className="text-foreground/80">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-foreground/50">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
              47 signed actions · 0 escrow escalations · last 30d
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const matrix: Array<[string, "done" | "roadmap", string?]> = [
  ["Ed25519 Cryptography (RFC 8032 in pure Python)", "done", "47 Tests Pass"],
  ["10-Check Policy Engine (Escrows, Rate Limits, Domains)", "done"],
  ["60/40 Settlement Waterfall Financial Model", "done", "22 Tests Pass"],
  ["SQLite Persistence & Offline Merchant Verifier", "done"],
  ["Written Threat Model & Residual Risk Documentation", "done"],
  ["Vision Models & PFMS (Public Financial Management) Adapters", "roadmap"],
];

function Matrix() {
  return (
    <section id="threatmodels" className="mx-auto max-w-7xl px-4 py-28">
      <motion.div {...fadeUp} className="mb-12 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-indigo-400/80">
          CTO Validation Matrix
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Enterprise-Grade from Day Zero.
        </h2>
      </motion.div>

      <motion.div {...fadeUp} className="glass overflow-hidden rounded-2xl">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-foreground/10 bg-foreground/[0.02] text-xs uppercase tracking-widest text-foreground/40">
              <th className="px-6 py-4 font-medium">Capability</th>
              <th className="px-6 py-4 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map(([label, status, note], i) => (
              <tr
                key={i}
                className="border-b border-foreground/10 transition-colors last:border-0 hover:bg-foreground/[0.02]"
              >
                <td className="px-6 py-5 text-sm text-foreground/85 sm:text-base">
                  {label}
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center justify-end gap-2">
                    {status === "done" ? (
                      <>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(16,185,129,0.8)]" />
                        <span className="text-sm text-emerald-400">
                          Implemented
                        </span>
                        {note && (
                          <span className="ml-2 rounded-md border border-foreground/10 bg-foreground/5 px-2 py-0.5 font-mono text-[11px] text-foreground/60">
                            {note}
                          </span>
                        )}
                        <CheckCircle2 className="ml-1 hidden h-4 w-4 text-emerald-400 sm:block" />
                      </>
                    ) : (
                      <>
                        <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgb(251,191,36,0.7)]" />
                        <span className="text-sm text-amber-400">Roadmap</span>
                        <Circle className="ml-1 hidden h-4 w-4 text-amber-400 sm:block" />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}

function CTA() {
  return (
    <section id="deploy" className="mx-auto max-w-7xl px-4 pb-28">
      <motion.div
        {...fadeUp}
        className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16"
      >
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
        <h3 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Ready to deploy the dual-key rail?
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Spin up a signed sandbox in under 90 seconds. No credit card, no seat
          minimums.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 font-semibold text-background transition-all btn-press hover:scale-105"
          >
            Deploy Demo <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-6 py-3 text-foreground transition-colors hover:bg-foreground/10"
          >
            Talk to Engineering
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-foreground/50 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(16,185,129,0.8)]" />
          <span>ReEnvision 5.0</span>
          <span className="mx-2 text-foreground/20">|</span>
          <span>Built for the physical and digital frontiers.</span>
        </div>
        <div className="font-mono text-xs text-foreground/30">
          © {new Date().getFullYear()} · v5.0.0
        </div>
      </div>
    </footer>
  );
}

function LiveDemos() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <motion.div {...fadeUp} className="mb-10 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-emerald-400/80">
          Live · try it
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Sign a real work item. Watch the payout unlock.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A PWD site engineer certifies an AI-prefilled Measurement Book entry
          with an Ed25519 key. The certificate becomes a bank-financeable
          receivable in the same session.
        </p>
      </motion.div>
      <motion.div {...fadeUp}>
        <DualKeyDemo />
      </motion.div>
    </section>
  );
}

function SuretySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <motion.div {...fadeUp} className="mb-10 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-indigo-400/80">
          Surety · policy playground
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Give the agent hands. Keep the permission slip.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Adjust the spend cap and domain allowlist, then simulate an agent
          calling <span className="font-mono text-foreground/70">payments.charge</span>.
          The MCP proxy checks every call against the signed certificate.
        </p>
      </motion.div>
      <motion.div {...fadeUp}>
        <SuretyPlayground />
      </motion.div>
    </section>
  );
}

function Verticals() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <motion.div {...fadeUp} className="mb-10 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-emerald-400/80">
          One primitive · applied everywhere
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Verification is the last analog industry.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Public works is the beachhead. Insurance, agri, trade, and carbon
          reuse the same certificate primitive — trust and calibration compound
          across verticals.
        </p>
      </motion.div>
      <motion.div {...fadeUp}>
        <VerticalsSwitcher />
      </motion.div>
    </section>
  );
}

const roadmap = [
  {
    phase: "Prototype",
    when: "Weeks",
    color: "emerald",
    items: [
      "Field capture + AI-prefilled Measurement Book with dual-key certification on a real PWD work item",
      "Certificate format + MCP proxy demo: an agent tries to overspend and is stopped by the signed limit",
      "Map view of certified works across a division",
    ],
  },
  {
    phase: "Pilot",
    when: "3–6 months",
    color: "indigo",
    items: [
      "One state PWD division · works ₹15L to ₹5Cr · measurement-to-payment tracked 90 → 15 days",
      "Three Surety design-partner teams running the proxy in production",
      "Tamper-evident audit log in daily use across both stacks",
    ],
  },
  {
    phase: "Scale",
    when: "12+ months",
    color: "white",
    items: [
      "Bank partnership discounting certified receivables",
      "Second GroundTruth vertical (insurance claims) pilot",
      "Published open attestation standard · first Surety underwriting partnership",
    ],
  },
];

function Roadmap() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <motion.div {...fadeUp} className="mb-12 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-foreground/60">
          Roadmap
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          The UPI playbook, for attested reality.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {roadmap.map((p, i) => (
          <motion.div
            key={p.phase}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="glass relative overflow-hidden rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-widest text-foreground/40">
                Phase {i + 1}
              </div>
              <div className="rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 font-mono text-[10px] text-foreground/60">
                {p.when}
              </div>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              {p.phase}
            </h3>
            <ul className="mt-5 space-y-3">
              {p.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-sm text-foreground/75">
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      p.color === "emerald"
                        ? "bg-emerald-400 shadow-[0_0_8px_rgb(16,185,129,0.7)]"
                        : p.color === "indigo"
                          ? "bg-indigo-400 shadow-[0_0_8px_rgb(99,102,241,0.7)]"
                          : "bg-foreground"
                    }`}
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemScale />
      <Bento />
      <LiveDemos />
      <SuretySection />
      <Verticals />
      <FeatureBlocks />
      <Roadmap />
      <Matrix />
      <CTA />
      <Footer />
    </main>
  );
}

