import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toothaker | Land Use, Development & Political Strategy",
  description:
    "A nationally recognized practice dedicated to innovation and success in development, land use and zoning, public-private partnerships, procurement and politics.",
  icons: {
    icon: "/toothaker-mark.svg",
    shortcut: "/toothaker-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
