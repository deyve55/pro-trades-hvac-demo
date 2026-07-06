import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { CalendarCheck, CheckCircle2, ClipboardCheck, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Maintenance | Aqua Homes & Design Group",
  description: "Preventative property care, repair planning, seasonal upkeep, and task coordination.",
  alternates: { canonical: "/maintenance" },
  openGraph: { title: "Aqua Homes Maintenance", description: "Preventative property care, repair planning, seasonal upkeep, and task coordination.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Wrench} title="Maintenance" description="Preventative property care, repair planning, seasonal upkeep, and task coordination." capabilities={[{ title: "Preventative Care", text: "Property upkeep planning with seasonal checkpoints and clear repair notes.", Icon: CheckCircle2 }, { title: "Repair Planning", text: "Task review, trade routing, and follow-up coordination for residential maintenance needs.", Icon: Wrench }, { title: "Seasonal Upkeep", text: "Exterior and interior maintenance planning around weather and property access.", Icon: CalendarCheck }, { title: "Task Documentation", text: "Photo-ready notes and closeout tracking for recurring property care.", Icon: ClipboardCheck }]} standards={["Seasonal review", "Task coordination", "Trade routing", "Closeout notes"]} />;
}
