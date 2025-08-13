"use client";

import { MainFooter } from "./MainFooter";
import { BottomBar } from "./BottomBar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <MainFooter />
      <BottomBar currentYear={currentYear} />
    </footer>
  );
}
