import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { ClipboardCheck, Layers3, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Epoxy | Aqua Homes & Design Group",
  description: "Garage, basement, utility, and specialty surface coating preparation and installation.",
  alternates: { canonical: "/epoxy" },
  openGraph: { title: "Aqua Homes Epoxy", description: "Garage, basement, utility, and specialty surface coating preparation and installation.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Layers3} title="Epoxy" description="Garage, basement, utility, and specialty surface coating preparation and installation." capabilities={[{ title: "Surface Preparation", text: "Concrete and substrate review, cleaning notes, and preparation planning before coatings.", Icon: ShieldCheck }, { title: "Coating Installation", text: "Garage, basement, and utility surface coating support with scope documentation.", Icon: Layers3 }, { title: "Finish Options", text: "Color, flake, texture, and sheen planning for durable residential surfaces.", Icon: Sparkles }, { title: "Closeout Review", text: "Final area notes, care reminders, and project documentation.", Icon: ClipboardCheck }]} standards={["Surface condition review", "Preparation notes", "Finish selection", "Closeout documentation"]} />;
}
