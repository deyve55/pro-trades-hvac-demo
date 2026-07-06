import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { Brush, ClipboardCheck, Paintbrush, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Painting | Aqua Homes & Design Group",
  description: "Interior and exterior coatings, surface preparation, finish planning, and punch-list care.",
  alternates: { canonical: "/painting" },
  openGraph: { title: "Aqua Homes Painting", description: "Interior and exterior coatings, surface preparation, finish planning, and punch-list care.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Paintbrush} title="Painting" description="Interior and exterior coatings, surface preparation, finish planning, and punch-list care." capabilities={[{ title: "Surface Preparation", text: "Wall, trim, and exterior surface review before finish application.", Icon: Brush }, { title: "Interior Coatings", text: "Room-by-room paint planning, color notes, sheen review, and clean scope documentation.", Icon: Paintbrush }, { title: "Exterior Finish Planning", text: "Exterior coating preparation and weather-aware scheduling coordination.", Icon: Sparkles }, { title: "Punch-List Care", text: "Detail review, touch-up tracking, and project closeout notes.", Icon: ClipboardCheck }]} standards={["Surface review", "Color and sheen notes", "Area-by-area scope", "Punch-list documentation"]} />;
}
