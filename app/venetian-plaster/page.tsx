import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { Brush, ClipboardCheck, Paintbrush, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Venetian Plaster | Aqua Homes & Design Group",
  description: "Premium wall finishes, surface preparation, architectural texture, and finish samples.",
  alternates: { canonical: "/venetian-plaster" },
  openGraph: { title: "Aqua Homes Venetian Plaster", description: "Premium wall finishes, surface preparation, architectural texture, and finish samples.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Brush} title="Venetian Plaster" description="Premium wall finishes, surface preparation, architectural texture, and finish samples." capabilities={[{ title: "Surface Preparation", text: "Wall condition review, preparation notes, and sample planning before finish work.", Icon: Paintbrush }, { title: "Architectural Texture", text: "Texture direction, finish depth, and room-specific planning for premium interiors.", Icon: Brush }, { title: "Finish Samples", text: "Sample boards, sheen notes, and owner review checkpoints before full application.", Icon: Sparkles }, { title: "Project Documentation", text: "Area notes, finish references, and closeout documentation for the selected surface package.", Icon: ClipboardCheck }]} standards={["Surface review", "Sample planning", "Finish direction", "Closeout notes"]} />;
}
