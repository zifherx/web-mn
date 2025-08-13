"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { MobileNavigationType } from "@/props";
import { NAV_HEADER_ITEMS } from "@/data/plainData";

export default function MobileNavigation({ setIsOpen }: MobileNavigationType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        {NAV_HEADER_ITEMS.map(({ href, id, name }) => (
          <Link
            key={id}
            href={href}
            className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
