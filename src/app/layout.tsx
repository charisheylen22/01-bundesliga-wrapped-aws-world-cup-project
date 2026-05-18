import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bundesliga Wrapped",
  description: "Cinematic season recaps for Bundesliga fans"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-brand-700 text-white antialiased">{children}</body>
    </html>
  );
}
