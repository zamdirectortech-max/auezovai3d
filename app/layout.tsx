import type { Metadata } from "next";
import "./globals.css";
import "./avatar-fix.css";

export const metadata: Metadata = {
  title: "Auezov AI — виртуальный ассистент",
  description: "Образовательная AI-реконструкция и интеллектуальный ассистент Auezov University",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
