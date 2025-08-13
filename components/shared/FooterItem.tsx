"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FooterItemType } from "@/props";

export function FooterItem({ subItem, title }: FooterItemType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-4 text-yellow-500">{title}</h3>
      <ul className="space-y-2">
        {subItem.map(({ href, id, name }) => (
          <li key={id}>
            <Link
              href={href}
              className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
