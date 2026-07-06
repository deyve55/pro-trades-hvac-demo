import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { Hammer, Ruler, Sparkles, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Woodworking | Aqua Homes & Design Group",
  description: "Custom wood features, built-ins, finish details, and residential millwork planning.",
  alternates: { canonical: "/woodworking" },
  openGraph: { title: "Aqua Homes Woodworking", description: "Custom wood features, built-ins, finish details, and residential millwork planning.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Trees} title="Woodworking" description="Custom wood features, built-ins, finish details, and residential millwork planning." capabilities={[{ title: "Custom Wood Features", text: "Built-in planning, accent details, shelving, and custom finish review for residential spaces.", Icon: Trees }, { title: "Millwork Planning", text: "Layout coordination, measurements, material notes, and finish direction before fabrication.", Icon: Ruler }, { title: "Finish Details", text: "Surface, trim, and detail planning for a polished residential presentation.", Icon: Sparkles }, { title: "Installation Support", text: "Field-ready installation planning with clear scope notes and review checkpoints.", Icon: Hammer }]} standards={["Measurement review", "Material and finish notes", "Field layout coordination", "Photo-ready documentation"]} />;
}
