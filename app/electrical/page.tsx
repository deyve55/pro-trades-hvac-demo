import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Lightbulb, Plug, Ruler, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Electrical | Device Layout & Fixture Coordination",
  description: "Residential electrical planning, fixture support, device layout, and field coordination.",
  alternates: { canonical: "/electrical" },
  openGraph: { title: "Aqua Homes Electrical | Device Layout & Fixture Coordination", description: "Residential electrical planning, fixture support, device layout, and field coordination.", url: "https://aquahomesgroup.com/electrical", siteName: "Aqua Homes & Design Group", locale: "en_US", type: "website" }
};

export default function ElectricalPage() {
  const capabilities = [
    { name: "Device Layout", desc: "Outlet, switch, fixture, and equipment location planning for residential spaces.", icon: Plug },
    { name: "Lighting Coordination", desc: "Lighting placement review, finish coordination, and fixture notes for premium interiors.", icon: Lightbulb },
    { name: "Field Coordination", desc: "Trade-ready notes for routing, access, and project sequencing.", icon: Ruler },
    { name: "Scope Documentation", desc: "Photo-ready project notes and review checkpoints before follow-up work.", icon: ClipboardCheck }
  ];
  const standards = ["Device layout review before active work.", "Fixture coordination documented by room and finish area.", "Access and routing notes reviewed with project conditions.", "Scope notes routed through Aqua Homes project intake and review checkpoints."];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0b0f19] text-slate-100 selection:bg-blue-600 selection:text-white">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /></div>
      <div className="mx-auto max-w-7xl px-6 pt-8"><Link href="/" className="group inline-flex items-center gap-x-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Dashboard</Link></div>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center lg:pt-20" aria-labelledby="electrical-heading"><span className="mb-6 inline-flex items-center gap-x-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 font-mono text-xs font-medium uppercase tracking-wider text-blue-400">Division // Electrical</span><h1 id="electrical-heading" className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Residential Electrical Layout and Fixture Coordination</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Device layout planning, lighting coordination, access notes, and project documentation for premium residential spaces.</p><div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">Request Electrical Review <ArrowRight className="h-4 w-4" /></a><Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-300/50">Main Dashboard</Link></div></section>
      <section className="mx-auto max-w-7xl px-6 py-16"><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map((item) => { const Icon = item.icon; return <div key={item.name} className="rounded-3xl border border-slate-800/80 bg-[#121829] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"><div className="mb-5 w-fit rounded-2xl border border-blue-400/20 bg-slate-900 p-3 text-blue-400"><Icon className="h-6 w-6" /></div><h2 className="text-lg font-bold text-white">{item.name}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p></div>; })}</div></section>
      <section className="mx-auto max-w-3xl px-6 pb-24"><div className="rounded-[2rem] border border-slate-800/80 bg-[#121829]/60 p-8"><div className="mb-6 flex items-center gap-x-3"><ShieldCheck className="h-6 w-6 text-blue-400" /><h2 className="text-xl font-bold text-white">Operational Protocol</h2></div><ul className="space-y-4">{standards.map((standard) => <li key={standard} className="flex items-start gap-x-3 text-sm leading-relaxed text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" /><span>{standard}</span></li>)}</ul></div></section>
    </div>
  );
}
