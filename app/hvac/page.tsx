import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { Flame, Gauge, ShieldCheck, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes HVAC & Heating | Aqua Homes & Design Group",
  description: "Professional indoor climate systems installation, residential sizing standards, thermal diagnostics, and preventative equipment care.",
  alternates: { canonical: "/hvac" },
  openGraph: { title: "Aqua Homes HVAC & Heating", description: "Professional indoor climate systems installation, residential sizing standards, thermal diagnostics, and preventative equipment care.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Flame} title="HVAC & Heating" description="Premium climate system planning, installation support, and preventative equipment care." capabilities={[{ title: "System Planning", text: "Indoor comfort planning with residential sizing standards, equipment review, and layout coordination.", Icon: Flame }, { title: "Installation", text: "Professional installation support for heating and cooling equipment with clear field documentation.", Icon: Wind }, { title: "Diagnostics", text: "Thermal performance review, airflow observations, and service notes for follow-up planning.", Icon: Gauge }, { title: "Preventative Equipment Care", text: "Filter, drain, cabinet, and seasonal maintenance checkpoints for long-term system upkeep.", Icon: ShieldCheck }]} standards={["Residential sizing standards", "Equipment access review", "Airflow and comfort observations", "Preventative care notes"]} />;
}
