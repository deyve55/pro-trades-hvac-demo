import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aquahomesdesign.com"),
  title: "Aqua Homes & Design Group",
  description: "Premium residential construction, renovation, maintenance, and project coordination.",
  openGraph: {
    title: "Aqua Homes & Design Group",
    description: "Premium residential construction, renovation, maintenance, and project coordination.",
    images: ["/og-premium-showcase.jpg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
