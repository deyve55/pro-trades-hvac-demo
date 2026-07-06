import Link from "next/link";
import ProjectPlanner from "@/app/components/ProjectPlanner";
import { ArrowRight, BadgeCheck, Brush, Building2, CheckCircle2, Droplets, Flame, Gauge, Hammer, Home, Layers3, Paintbrush, Plug, ShieldCheck, Sparkles, Trees, Wrench } from "lucide-react";

const companies = [
  { name: "Aqua Homes Woodworking", href: "/woodworking", icon: Trees, summary: "Custom wood features, built-ins, finish details, and residential millwork planning." },
  { name: "Aqua Homes Carpentry", href: "/carpentry", icon: Hammer, summary: "Residential framing, trim, interior buildouts, decks, and field layout coordination." },
  { name: "Aqua Homes Painting", href: "/painting", icon: Paintbrush, summary: "Interior and exterior coatings, surface preparation, finish planning, and punch-list care." },
  { name: "Aqua Homes Maintenance", href: "/maintenance", icon: Wrench, summary: "Preventative property care, repair planning, seasonal upkeep, and task coordination." },
  { name: "Aqua Homes HVAC & Heating", href: "/hvac", icon: Flame, summary: "Indoor climate installation, system planning, thermal diagnostics, and equipment care." },
  { name: "Aqua Homes Plumbing", href: "/plumbing", icon: Droplets, summary: "Fixture installation, pipe layout planning, repair review, and residential water systems." },
  { name: "Aqua Homes Electrical", href: "/electrical", icon: Plug, summary: "Residential electrical planning, fixture support, device layout, and field coordination." },
  { name: "Aqua Homes Epoxy", href: "/epoxy", icon: Layers3, summary: "Garage, basement, utility, and specialty surface coating preparation and installation." },
  { name: "Aqua Homes Venetian Plaster", href: "/venetian-plaster", icon: Brush, summary: "Premium wall finishes, surface preparation, architectural texture, and finish samples." }
];

const operatingStandards = ["Project intake before field planning", "Trade-specific capability statements", "Coordinated scheduling and review checkpoints", "Photo-ready project documentation", "Clear scope notes and follow-up path"];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0f19] text-white">
      <section className="relative border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-6 md:px-8">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-lg shadow-cyan-950/30"><Home className="h-5 w-5 text-cyan-200" /></div>
              <div><p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">Aqua Homes</p><p className="text-xs text-slate-400">Design Group</p></div>
            </Link>
            <a href="#planner" className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 sm:inline-flex">Start Project Intake</a>
          </header>

          <div className="grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm font-bold text-blue-100"><ShieldCheck className="h-4 w-4" />Premium residential construction coordination</div>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">A sharper public front door for high-end residential projects.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Aqua Homes & Design Group organizes project requests across nine residential trade divisions with a professional intake path, safer scope language, and a premium contractor-tech presentation.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#planner" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-white">Submit Project <ArrowRight className="h-4 w-4" /></a>
                <a href="#divisions" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-300/50">View Divisions</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/75 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
                <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">Operating Framework</p><h2 className="mt-2 text-2xl font-black">Project Control Layer</h2></div><Gauge className="h-8 w-8 text-cyan-200" /></div>
                <div className="grid gap-3">{operatingStandards.map((standard) => <div key={standard} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-200" />{standard}</div>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="divisions" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"><Building2 className="h-4 w-4" />9 public trade divisions</div><h2 className="text-4xl font-black tracking-tight md:text-5xl">Division capability map</h2></div><p className="max-w-xl text-slate-300">Each division page follows the same premium dark layout with division-specific service focus, capability statements, and project intake routing.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{companies.map((company) => { const Icon = company.icon; return <Link key={company.name} href={company.href} className="group rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900"><div className="mb-6 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"><Icon className="h-6 w-6" /></div><ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-200" /></div><h3 className="text-xl font-black text-white">{company.name}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{company.summary}</p></Link>; })}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8"><div className="grid gap-4 md:grid-cols-3">{[[BadgeCheck, "Professional installation", "Trade work is presented as a capability statement and routed for review before scheduling."], [Sparkles, "Premium finish language", "Copy stays elevated while avoiding guarantees, live-system claims, and unproven backend claims."], [ShieldCheck, "Safer project intake", "The public form collects review information without requesting sensitive payment or access details."]].map(([Icon, title, text]) => { const CardIcon = Icon as typeof BadgeCheck; return <div key={String(title)} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-6"><CardIcon className="h-7 w-7 text-cyan-200" /><h3 className="mt-4 text-xl font-black">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{String(text)}</p></div>; })}</div></section>

      <ProjectPlanner />
    </main>
  );
}
