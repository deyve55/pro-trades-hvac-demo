import type { Metadata } from "next";
import DivisionTemplate from "@/app/components/DivisionTemplate";
import { ClipboardCheck, Droplets, Ruler, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Aqua Homes Plumbing | Aqua Homes & Design Group",
  description: "Fixture installation, pipe layout planning, repair review, and residential water systems.",
  alternates: { canonical: "/plumbing" },
  openGraph: { title: "Aqua Homes Plumbing", description: "Fixture installation, pipe layout planning, repair review, and residential water systems.", images: ["/og-premium-showcase.jpg"] }
};

export default function Page() {
  return <DivisionTemplate eyebrowIcon={Droplets} title="Plumbing" description="Fixture installation, pipe layout planning, repair review, and residential water system support." capabilities={[{ title: "Fixture Installation", text: "Kitchen, bath, laundry, and utility fixture planning with clean scope notes.", Icon: Droplets }, { title: "Pipe Layout Planning", text: "Residential pipe-route review, access notes, and trade coordination before work begins.", Icon: Ruler }, { title: "Repair Review", text: "Leak, fixture, drain, and service observations routed into clear follow-up planning.", Icon: Wrench }, { title: "Project Documentation", text: "Site notes, photos, and scope review for coordinated plumbing work.", Icon: ClipboardCheck }]} standards={["Fixture and access review", "Pipe layout planning", "Repair observations", "Scope documentation"]} />;
}
