"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-9xl">💪</div>
        <div className="absolute top-40 right-32 text-7xl">🏋️‍♂️</div>
        <div className="absolute bottom-32 left-40 text-8xl">⚡</div>
        <div className="absolute bottom-20 right-20 text-6xl">🔥</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-yellow-600">MAXIMUS</span>
              <br />
              NUTRITION
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Suplementación deportiva de la más alta calidad para atletas que
            buscan la
            <span className="text-yellow-600 font-semibold"> excelencia</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg"
              asChild
            >
              <Link href="/productos">Ver Productos</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-yellow-600 text-yellow-600 hover:bg-yellow-50 hover:border-black"
              asChild
            >
              <Link href="/nosotros">Conoce Más</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-10 hidden lg:block"
      >
        <div className="w-16 h-16 bg-yellow-200 rounded-full opacity-60"></div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 hidden lg:block"
      >
        <div className="w-12 h-12 bg-yellow-300 rounded-full opacity-40"></div>
      </motion.div>
    </section>
  );
}
