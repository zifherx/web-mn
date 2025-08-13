"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Conoce la historia detrás de Maximus Nutrition
          </p>
        </motion.div>
      </div>
    </section>
  );
}
