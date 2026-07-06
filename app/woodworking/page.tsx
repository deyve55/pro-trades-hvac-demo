import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Hammer, Ruler, ShieldCheck, Layers, Trees, Sparkles, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Woodworking | Architectural Millwork & Cabinetry",
  description: "Bespoke architectural millwork, premium finish carpentry, and custom cabinetry design execution.",
  alternates: {
    canonical: "/woodworking"
  },
  openGraph: {
    title: "Aqua Homes Woodworking | Architectural Millwork & Cabinetry",
    description: "Bespoke architectural millwork and custom cabinetry design execution.",
    url: "https://aquahomesgroup.com/woodworking",
    siteName: "Aqua Homes & Design Group",
    locale: "en_US",
    type: "website"
  }
};

export default function WoodworkingPage() {
  const capabilities = [
    {
      name: "Architectural Millwork Layouts",
      desc: "Custom profiling, architectural trim arrays, elegant crown molding configurations, and paneling system layout planning.",
      icon: Ruler
    },
    {
      name: "Luxury Cabinetry",
      desc: "Premium built-in storage planning, custom kitchen and bath cabinetry profiles, and high-end hardware coordination.",
      icon: Layers
    },
    {
      name: "Material Selection",
      desc: "Review of premium architectural species, hardwood options, and grain-matched substrates for a refined finish direction.",
      icon: Trees
    },
    {
      name: "Surface Artistry",
      desc: "Premium grain presentation, hand-applied finish planning, and durable protective coating coordination for residential interiors.",
      icon: Sparkles
    }
  ];

  const standards = [
    "Architectural Woodwork Institute-inspired planning references for premium residential finish expectations.",
    "Integrated layout review coordinated with field measurements, site conditions, and installation access.",
    "Premium material review with moisture, grain, and finish suitability considered before fabrication planning.",
    "Site installation coordination routed through Aqua Homes project intake and review checkpoints."
  ];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0b0f19] text-slate-100 selection:bg-blue-600 selection:text-white">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link href="/" className="group inline-flex items-center gap-x-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4 transform transition-transform group-hover:-translate-x-1" />
          Back to Dashboard
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center lg:pt-20" aria-labelledby="woodworking-heading">
        <span className="mb-6 inline-flex items-center gap-x-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 font-mono text-xs font-medium uppercase tracking-wider text-blue-400">
          Division // Woodworking & Cabinetry
        </span>
        <h1 id="woodworking-heading" className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          Custom Woodworking for Premium Residential Interiors
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Bespoke architectural millwork, custom cabinetry, fine carpentry execution, and finish-detail planning for high-end residential projects.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">
            Request Project Review
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-300/50">
            Main Dashboard
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-blue-950/10 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 opacity-0 transition group-hover:opacity-100" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
            </div>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-950/70 p-6 shadow-2xl shadow-blue-950/20 md:grid-cols-[0.85fr_1.15fr] md:p-8 lg:p-10">
          <div>
            <span className="inline-flex items-center gap-x-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 font-mono text-xs font-medium uppercase tracking-wider text-cyan-300">
              <ShieldCheck className="h-4 w-4" /> Operational Protocol
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Fine Carpentry Execution with Clear Review Checkpoints
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Aqua Homes routes woodworking scopes through measurement review, finish direction, material notes, and coordinated installation planning before active field work.
            </p>
          </div>
          <div className="grid gap-4">
            {standards.map((standard) => (
              <div key={standard} className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span>{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-950/50 via-slate-950 to-cyan-950/30 p-8 text-center shadow-2xl shadow-blue-950/30">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            <Hammer className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">Plan a Custom Woodworking Scope</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Submit your project details, preferred finish direction, site notes, and cabinetry or millwork goals so Aqua Homes can review the scope and follow-up path.
          </p>
          <a href="/#planner" className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">
            Start Intake
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
