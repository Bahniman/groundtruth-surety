import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ShieldAlert, ShieldX, Send } from "lucide-react";

type Attempt = {
  id: number;
  tool: string;
  domain: string;
  amount: number;
  verdict: "allow" | "escrow" | "block";
  reason: string;
};

const scenarios = [
  { tool: "payments.charge", domain: "makemytrip.com", amount: 4200 },
  { tool: "payments.charge", domain: "makemytrip.com", amount: 12800 },
  { tool: "payments.charge", domain: "reddit.com", amount: 800 },
  { tool: "email.send_bulk", domain: "internal", amount: 0 },
  { tool: "payments.charge", domain: "cleartrip.com", amount: 3600 },
];

export function SuretyPlayground() {
  const [cap, setCap] = useState(5000);
  const [domains, setDomains] = useState("makemytrip.com, cleartrip.com");
  const [log, setLog] = useState<Attempt[]>([]);
  const [next, setNext] = useState(0);

  const allowedDomains = useMemo(
    () =>
      domains
        .split(",")
        .map((d) => d.trim().toLowerCase())
        .filter(Boolean),
    [domains],
  );

  const trigger = () => {
    const s = scenarios[next % scenarios.length];
    let verdict: Attempt["verdict"] = "allow";
    let reason = "In scope · logged";
    const domainOk = allowedDomains.includes(s.domain);
    if (!domainOk) {
      verdict = "block";
      reason = `Domain ${s.domain} not in allowlist`;
    } else if (s.amount > cap) {
      verdict = "escrow";
      reason = `Exceeds cap ₹${cap.toLocaleString("en-IN")} — escrowed for approval`;
    }
    setLog((l) =>
      [{ id: Date.now(), ...s, verdict, reason }, ...l].slice(0, 6),
    );
    setNext(next + 1);
  };

  return (
    <div className="glass grid grid-cols-1 gap-6 overflow-hidden rounded-2xl p-6 lg:grid-cols-[1fr_1.2fr]">
      {/* controls */}
      <div>
        <div className="mb-1 text-xs uppercase tracking-widest text-indigo-400">
          Delegation certificate
        </div>
        <div className="mb-6 font-mono text-[11px] text-white/40">
          cert:0x7a4c…e021 · Ed25519 · exp 7d
        </div>

        <label className="block text-xs text-white/60">
          Spend cap (per 24h)
        </label>
        <div className="mt-2 flex items-center gap-3">
          <input
            type="range"
            min={1000}
            max={20000}
            step={500}
            value={cap}
            onChange={(e) => setCap(Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
          <div className="w-24 shrink-0 rounded-md border border-white/10 bg-black/40 px-2 py-1 text-right font-mono text-sm text-white">
            ₹{cap.toLocaleString("en-IN")}
          </div>
        </div>

        <label className="mt-6 block text-xs text-white/60">
          Allowed domains
        </label>
        <input
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-white outline-none focus:border-indigo-400/60"
        />

        <button
          onClick={trigger}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <Send className="h-4 w-4" /> Simulate agent action
        </button>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-widest text-white/40">
          <div className="rounded-md border border-emerald-500/20 bg-emerald-500/5 py-1.5 text-emerald-400">
            Allow
          </div>
          <div className="rounded-md border border-amber-500/20 bg-amber-500/5 py-1.5 text-amber-400">
            Escrow
          </div>
          <div className="rounded-md border border-rose-500/20 bg-rose-500/5 py-1.5 text-rose-400">
            Block
          </div>
        </div>
      </div>

      {/* action log */}
      <div className="rounded-xl border border-white/10 bg-black/40 p-4">
        <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-white/40">
          <span>Signed action log</span>
          <span>tamper-evident · MCP proxy</span>
        </div>

        {log.length === 0 && (
          <div className="flex h-64 items-center justify-center text-center text-sm text-white/40">
            Simulate an agent action to see the policy engine decide.
          </div>
        )}

        <ul className="space-y-2">
          <AnimatePresence initial={false}>
            {log.map((a) => {
              const Icon =
                a.verdict === "allow"
                  ? ShieldCheck
                  : a.verdict === "escrow"
                    ? ShieldAlert
                    : ShieldX;
              const tone =
                a.verdict === "allow"
                  ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
                  : a.verdict === "escrow"
                    ? "border-amber-500/30 bg-amber-500/5 text-amber-400"
                    : "border-rose-500/30 bg-rose-500/5 text-rose-400";
              return (
                <motion.li
                  key={a.id}
                  layout
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex items-start gap-3 rounded-lg border p-3 ${tone.replace(
                    /text-\S+/,
                    "",
                  )}`}
                >
                  <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${tone.match(/text-\S+/)?.[0]}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 font-mono text-xs text-white/80">
                      <span className="truncate">
                        {a.tool}({a.domain}
                        {a.amount ? `, ₹${a.amount.toLocaleString("en-IN")}` : ""})
                      </span>
                      <span
                        className={`shrink-0 text-[10px] uppercase tracking-widest ${tone.match(/text-\S+/)?.[0]}`}
                      >
                        {a.verdict}
                      </span>
                    </div>
                    <div className="mt-0.5 text-[11px] text-white/50">
                      {a.reason}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
