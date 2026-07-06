import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { ClipboardCheck, Lightbulb, Plug, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Electrical | Aqua Homes & Design Group",
  description: "Residential electrical planning, fixture support, device layout, and field coordination.",
  alternates: { canonical: "/electrical" },
  openGraph: { title: "Aqua Homes Electrical", description: "Residential electrical planning, fixture support, device layout, and field coordination.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Plug} title="Electrical" description="Residential electrical planning, fixture support, device layout, and field coordination." capabilities={[{ title: "Device Layout", text: "Outlet, switch, fixture, and equipment location planning for residential spaces.", Icon: Plug }, { title: "Lighting Support", text: "Lighting placement review, finish coordination, and fixture notes.", Icon: Lightbulb }, { title: "Field Coordination", text: "Trade-ready notes for routing, access, and project sequencing.", Icon: Ruler }, { title: "Scope Documentation", text: "Photo-ready project notes and review checkpoints before follow-up work.", Icon: ClipboardCheck }]} standards={["Device layout review", "Fixture coordination", "Access notes", "Project documentation"]} />;
}
