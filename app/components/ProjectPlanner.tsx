"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, ClipboardCheck, Loader2 } from "lucide-react";

const trades = [
  "Woodworking",
  "Carpentry",
  "Painting",
  "Maintenance",
  "HVAC & Heating",
  "Plumbing",
  "Electrical",
  "Epoxy",
  "Venetian Plaster"
];

export default function ProjectPlanner() {
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.phone.trim() && form.details.trim() && selectedTrades.length > 0 && status !== "loading";
  }, [form, selectedTrades.length, status]);

  function toggleTrade(trade: string) {
    setSelectedTrades((current) => (current.includes(trade) ? current.filter((item) => item !== trade) : [...current, trade]));
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/secure-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, trades: selectedTrades })
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Submission failed.");
      setStatus("success");
      setMessage("Project Request Received. Aqua Homes can review the intake and follow up.");
      setForm({ name: "", email: "", phone: "", details: "" });
      setSelectedTrades([]);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please review the form and try again.");
    }
  }

  return (
    <section id="planner" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-950/75 p-5 shadow-2xl shadow-blue-950/20 md:grid-cols-[0.85fr_1.15fr] md:p-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            <ClipboardCheck className="h-4 w-4" />
            Project Intake Notice
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Submit your project for review.</h2>
          <p className="mt-5 text-slate-300 leading-7">
            This form sends your information to Aqua Homes for review and follow-up. Do not submit sensitive payment information, passwords, or private access codes.
          </p>
        </div>

        <form onSubmit={submitForm} className="rounded-[1.5rem] border border-slate-800 bg-slate-950 p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-bold text-slate-200">
              Name
              <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="Your name" />
            </label>
            <label className="text-sm font-bold text-slate-200">
              Email
              <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="you@example.com" type="email" />
            </label>
          </div>

          <label className="mt-4 block text-sm font-bold text-slate-200">
            Phone
            <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="Best contact number" />
          </label>

          <div className="mt-5">
            <p className="mb-3 text-sm font-bold text-slate-200">Trade divisions</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {trades.map((trade) => {
                const active = selectedTrades.includes(trade);
                return (
                  <button key={trade} type="button" onClick={() => toggleTrade(trade)} className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${active ? "border-cyan-300 bg-cyan-300/15 text-cyan-100" : "border-slate-800 bg-slate-900/70 text-slate-300"}`}>
                    <CheckCircle2 className={`h-4 w-4 ${active ? "text-cyan-200" : "text-slate-600"}`} />
                    {trade}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-200">
            Project details
            <textarea value={form.details} onChange={(event) => setForm({ ...form, details: event.target.value })} rows={6} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="Tell us about the property, timeline, project goals, and areas that need review." />
          </label>

          <button disabled={!canSubmit} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70">
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
            Submit for Review
          </button>

          {message ? <p className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100" : "border-rose-300/30 bg-rose-300/10 text-rose-100"}`}>{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
