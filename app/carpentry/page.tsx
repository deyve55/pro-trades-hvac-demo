import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { ClipboardCheck, Hammer, Home, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Carpentry | Aqua Homes & Design Group",
  description: "Residential carpentry, trim, interior buildouts, decks, and field layout coordination.",
  alternates: { canonical: "/carpentry" },
  openGraph: { title: "Aqua Homes Carpentry", description: "Residential carpentry, trim, interior buildouts, decks, and field layout coordination.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Hammer} title="Carpentry" description="Residential carpentry, trim, interior buildouts, decks, and field layout coordination." capabilities={[{ title: "Field Layout", text: "Room, wall, deck, and trim layout coordination before work begins.", Icon: Ruler }, { title: "Residential Buildouts", text: "Interior buildout planning with clean scope notes and trade-ready sequencing.", Icon: Home }, { title: "Trim Carpentry", text: "Casing, base, and visual alignment planning for finished residential spaces.", Icon: Hammer }, { title: "Project Checkpoints", text: "Scope review, photo documentation, and coordinated follow-up before closeout.", Icon: ClipboardCheck }]} standards={["Field layout review", "Scope notes", "Trade sequencing", "Closeout documentation"]} />;
}
