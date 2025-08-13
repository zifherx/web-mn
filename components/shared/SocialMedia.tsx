"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { SOCIAL_MEDIA_ITEMS } from "@/data/plainData";

export function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-12 pt-8 border-t border-gray-800"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-3 md:mb-0">
          {SOCIAL_MEDIA_ITEMS.map(({ href, icon: Icon, id, name }) => (
            <Link
              key={id}
              href={href}
              aria-label={name}
              className="bg-gray-800 p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 group"
            >
              <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
            </Link>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
            Hecho con <Heart className="w-4 h-4 text-red-500 mx-1" /> para
            atletas de élite.
          </p>
          <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
            Suplementación deportiva de calidad premium
          </p>
        </div>
      </div>
    </motion.div>
  );
}
