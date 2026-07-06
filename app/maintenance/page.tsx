import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Maintenance | Preventative Property Care",
  description: "Preventative property care, repair planning, seasonal upkeep, and coordinated maintenance review.",
  alternates: { canonical: "/maintenance" },
  openGraph: { title: "Aqua Homes Maintenance | Preventative Property Care", description: "Preventative property care, repair planning, seasonal upkeep, and coordinated maintenance review.", url: "https://aquahomesgroup.com/maintenance", siteName: "Aqua Homes & Design Group", locale: "en_US", type: "website" }
};

export default function MaintenancePage() {
  const capabilities = [
    { name: "Preventative Property Care", desc: "Seasonal upkeep planning, visible condition review, and recurring maintenance task coordination for residential properties.", icon: CheckCircle2 },
    { name: "Repair Planning", desc: "Maintenance issues routed into clear task notes, trade review, owner follow-up, and project intake documentation.", icon: Wrench },
    { name: "Seasonal Upkeep", desc: "Weather-aware exterior and interior maintenance planning around access, timing, and property conditions.", icon: CalendarCheck },
    { name: "Closeout Documentation", desc: "Photo-ready notes, completion checkpoints, and follow-up recommendations for ongoing property care.", icon: ClipboardCheck }
  ];
  const standards = ["Seasonal maintenance review before active work.", "Task notes coordinated through Aqua Homes project intake and scheduling checkpoints.", "Visible condition observations documented for owner review.", "Follow-up path defined for trade-specific repairs when needed."];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0b0f19] text-slate-100 selection:bg-blue-600 selection:text-white">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} /></div>
      <div className="mx-auto max-w-7xl px-6 pt-8"><Link href="/" className="group inline-flex items-center gap-x-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Dashboard</Link></div>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center lg:pt-20" aria-labelledby="maintenance-heading"><span className="mb-6 inline-flex items-center gap-x-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 font-mono text-xs font-medium uppercase tracking-wider text-blue-400">Division // Maintenance</span><h1 id="maintenance-heading" className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Preventative Property Care and Maintenance Coordination</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Repair planning, seasonal upkeep, task documentation, and coordinated maintenance review for premium residential properties.</p><div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">Request Maintenance Review <ArrowRight className="h-4 w-4" /></a><Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-300/50">Main Dashboard</Link></div></section>
      <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="capabilities-heading"><div className="border-t border-slate-800/60 pt-16"><div className="mb-12 text-center"><h2 id="capabilities-heading" className="text-2xl font-bold text-white sm:text-3xl">Field Capabilities</h2><p className="mt-2 text-sm text-slate-400">Operational standards and maintenance coordination managed across the Aqua Homes maintenance division.</p></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item) => { const Icon = item.icon; return <div key={item.name} className="relative rounded-3xl border border-slate-800/80 bg-[#121829] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"><div className="mb-5 w-fit rounded-2xl border border-blue-400/20 bg-slate-900 p-3 text-blue-400"><Icon className="h-6 w-6" aria-hidden="true" /></div><h3 className="text-lg font-bold text-white">{item.name}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p></div>; })}</div></div></section>
      <section className="mx-auto max-w-3xl px-6 pb-14" aria-labelledby="standards-heading"><div className="rounded-[2rem] border border-slate-800/80 bg-[#121829]/60 p-8 shadow-2xl shadow-blue-950/20 backdrop-blur-sm"><div className="mb-6 flex items-center gap-x-3"><ShieldCheck className="h-6 w-6 text-blue-400" /><h2 id="standards-heading" className="text-xl font-bold text-white">Operational Protocol</h2></div><ul className="space-y-4">{standards.map((standard) => <li key={standard} className="flex items-start gap-x-3 text-sm leading-relaxed text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden="true" /><span>{standard}</span></li>)}</ul></div></section>
    </div>
  );
}
