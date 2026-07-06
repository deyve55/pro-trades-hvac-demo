import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Droplet, ShieldCheck, Activity, Layers, Disc, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Plumbing | Residential Water Systems",
  description: "Residential fixture installation, water-line layout planning, drainage review, and plumbing project coordination.",
  alternates: { canonical: "/plumbing" },
  openGraph: {
    title: "Aqua Homes Plumbing | Residential Water Systems",
    description: "Residential fixture installation, water-line layout planning, drainage review, and plumbing project coordination.",
    url: "https://aquahomesgroup.com/plumbing",
    siteName: "Aqua Homes & Design Group",
    locale: "en_US",
    type: "website"
  }
};

export default function PlumbingPage() {
  const capabilities = [
    { name: "Supply Line Layouts", desc: "Copper and PEX distribution planning with fixture locations, access notes, and clean scope documentation.", icon: Droplet },
    { name: "Drainage Coordination", desc: "Drain, waste, and vent route review coordinated with site conditions and project documents.", icon: Layers },
    { name: "Water Conditioning", desc: "Filtration, softening, and drinking-water equipment planning based on owner goals and available space.", icon: Disc },
    { name: "Service Review", desc: "Visible fixture, drain, and flow observations documented for owner review and trade follow-up.", icon: Activity }
  ];

  const standards = [
    "Fixture and access conditions reviewed before scheduling.",
    "Layout planning coordinated with site conditions and applicable local code review.",
    "Visible service observations documented for owner follow-up.",
    "Scope notes routed through Aqua Homes project intake and review checkpoints."
  ];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0b0f19] text-slate-100 selection:bg-blue-600 selection:text-white">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /></div>
      <div className="mx-auto max-w-7xl px-6 pt-8"><Link href="/" className="group inline-flex items-center gap-x-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Dashboard</Link></div>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center lg:pt-20" aria-labelledby="plumbing-heading"><span className="mb-6 inline-flex items-center gap-x-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 font-mono text-xs font-medium uppercase tracking-wider text-blue-400">Division // Plumbing</span><h1 id="plumbing-heading" className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Residential Plumbing Layout and Fixture Coordination</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Supply line layouts, drainage coordination, water conditioning planning, and service review for premium residential projects.</p><div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">Request Plumbing Review <ArrowRight className="h-4 w-4" /></a><Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-300/50">Main Dashboard</Link></div></section>
      <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="plumbing-capabilities"><div className="border-t border-slate-800/60 pt-16"><div className="mb-12 text-center"><h2 id="plumbing-capabilities" className="text-2xl font-bold text-white sm:text-3xl">Field Capabilities</h2><p className="mt-2 text-sm text-slate-400">Operational planning and plumbing coordination managed across the Aqua Homes plumbing division.</p></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item) => { const Icon = item.icon; return <div key={item.name} className="rounded-3xl border border-slate-800/80 bg-[#121829] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"><div className="mb-5 w-fit rounded-2xl border border-blue-400/20 bg-slate-900 p-3 text-blue-400"><Icon className="h-6 w-6" /></div><h3 className="text-lg font-bold text-white">{item.name}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p></div>; })}</div></div></section>
      <section className="mx-auto max-w-3xl px-6 pb-24" aria-labelledby="plumbing-standards"><div className="rounded-[2rem] border border-slate-800/80 bg-[#121829]/60 p-8 shadow-2xl shadow-blue-950/20"><div className="mb-6 flex items-center gap-x-3"><ShieldCheck className="h-6 w-6 text-blue-400" /><h2 id="plumbing-standards" className="text-xl font-bold text-white">Operational Protocol</h2></div><ul className="space-y-4">{standards.map((standard) => <li key={standard} className="flex items-start gap-x-3 text-sm leading-relaxed text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>{standard}</span></li>)}</ul></div></section>
    </div>
  );
}
