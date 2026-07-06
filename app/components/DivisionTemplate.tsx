import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, LucideIcon } from "lucide-react";

type Capability = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

type DivisionTemplateProps = {
  eyebrowIcon: LucideIcon;
  title: string;
  description: string;
  capabilities: Capability[];
  standards: string[];
};

export default function DivisionTemplate({ eyebrowIcon: EyebrowIcon, title, description, capabilities, standards }: DivisionTemplateProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0f19] text-white">
      <section className="relative border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-6 md:px-8">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/50">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <a href="/#planner" className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 sm:inline-flex">
              Start Project Intake
            </a>
          </header>

          <div className="grid gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                <EyebrowIcon className="h-4 w-4" />
                Aqua Homes Division
              </div>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">
                  Request Review <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-300/50">
                  Main Site
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/75 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">Operational Protocol</p>
                    <h2 className="mt-2 text-2xl font-black">Planning Standards</h2>
                  </div>
                  <ClipboardCheck className="h-8 w-8 text-cyan-200" />
                </div>
                <div className="grid gap-3">
                  {standards.map((standard) => (
                    <div key={standard} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-200">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-200" />
                      {standard}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-200">Capability Grid</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Division service focus</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title: capabilityTitle, text, Icon }) => (
            <div key={capabilityTitle} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-black">{capabilityTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Ready to route this scope for review?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">Submit a project intake so Aqua Homes can review the scope, trade divisions, site notes, and follow-up path.</p>
            </div>
            <a href="/#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">
              Go to Planner <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
