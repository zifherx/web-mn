"use client";

import Link from "next/link";
import { NAV_HEADER_ITEMS } from "@/data/plainData";

export default function DesktopNavigation() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {NAV_HEADER_ITEMS.map(({ href, id, name }) => (
        <Link
          key={id}
          href={href}
          className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-lg font-medium transition-colors"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
