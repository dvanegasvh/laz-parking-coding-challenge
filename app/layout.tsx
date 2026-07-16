import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAZ Parking — Reservations",
  description: "Parking reservations demo (coding challenge solution)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
