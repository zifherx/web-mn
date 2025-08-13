import { ReactNode } from "react";

import { geistMono, geistSans } from "@/fonts";
import { METADATA } from "@/lib/metadata";

import "./globals.css";

export const metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
