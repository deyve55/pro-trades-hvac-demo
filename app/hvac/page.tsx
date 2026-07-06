import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Wrench, Gauge, ShieldCheck, Thermostat, Wind, Flame, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes HVAC & Heating | Premium Climate Systems",
  description: "Professional indoor climate systems installation, thermal diagnostics, and preventative equipment care.",
  alternates: { canonical: "/hvac" },
  openGraph: {
    title: "Aqua Homes HVAC & Heating | Premium Climate Systems",
    description: "Professional indoor climate systems installation, thermal diagnostics, and preventative equipment care.",
    url: "https://aquahomesgroup.com/hvac",
    siteName: "Aqua Homes & Design Group",
    locale: "en_US",
    type: "website"
  }
};

export default function HvacPage() {
  const capabilities = [
    { name: "Thermal Diagnostics", desc: "Airflow observations, static pressure review, comfort checks, and system capacity notes for residential planning.", icon: Gauge },
    { name: "System Planning", desc: "Professional installation planning for heat pumps, air handlers, equipment placement, and duct layout coordination.", icon: Thermostat },
    { name: "Indoor Air Quality", desc: "Whole-home filtration layouts, humidity-control planning, and ventilation options for residential comfort review.", icon: Wind },
    { name: "Heating Layouts", desc: "Boiler, radiant, and zone-control layout planning coordinated with site conditions and project documents.", icon: Flame }
  ];

  const standards = [
    "Residential sizing references reviewed during project planning.",
    "Field layouts coordinated with residential architectural limits and equipment access.",
    "Preventative equipment care notes prepared for long-term maintenance planning.",
    "Airflow and comfort observations documented after installation review."
  ];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0b0f19] text-slate-100 selection:bg-blue-600 selection:text-white">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-cyan-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link href="/" className="group inline-flex items-center gap-x-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4 transform transition-transform group-hover:-translate-x-1" /> Back to Dashboard
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center lg:pt-20" aria-labelledby="hvac-heading">
        <span className="mb-6 inline-flex items-center gap-x-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 font-mono text-xs font-medium uppercase tracking-wider text-blue-400">
          Division // HVAC & Heating
        </span>
        <h1 id="hvac-heading" className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          Premium Indoor Climate System Planning
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Professional layout, diagnostics, equipment planning, and mechanical installation coordination for high-end residential comfort systems.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">
            Initiate HVAC Scope <ArrowRight className="h-4 w-4" />
          </a>
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-300/50">
            Main Dashboard
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="capabilities-heading">
        <div className="border-t border-slate-800/60 pt-16">
          <div className="mb-12 text-center">
            <h2 id="capabilities-heading" className="text-2xl font-bold text-white sm:text-3xl">Field Capabilities</h2>
            <p className="mt-2 text-sm text-slate-400">Operational standards and climate system planning managed across the Aqua Homes HVAC division.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative rounded-3xl border border-slate-800/80 bg-[#121829] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
                  <div className="mb-5 w-fit rounded-2xl border border-blue-400/20 bg-slate-900 p-3 text-blue-400"><Icon className="h-6 w-6" aria-hidden="true" /></div>
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-14" aria-labelledby="standards-heading">
        <div className="rounded-[2rem] border border-slate-800/80 bg-[#121829]/60 p-8 shadow-2xl shadow-blue-950/20 backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-x-3">
            <ShieldCheck className="h-6 w-6 text-blue-400" />
            <h2 id="standards-heading" className="text-xl font-bold text-white">Operational Protocol</h2>
          </div>
          <ul className="space-y-4">
            {standards.map((standard) => (
              <li key={standard} className="flex items-start gap-x-3 text-sm leading-relaxed text-slate-300">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" aria-hidden="true" />
                <span>{standard}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-950/50 via-slate-950 to-cyan-950/30 p-8 text-center shadow-2xl shadow-blue-950/30">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"><Wrench className="h-7 w-7" /></div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">Plan an HVAC Project Scope</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Submit equipment goals, comfort concerns, site notes, and system planning details so Aqua Homes can review the scope and follow-up path.</p>
          <a href="/#planner" className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">
            Start Intake <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
