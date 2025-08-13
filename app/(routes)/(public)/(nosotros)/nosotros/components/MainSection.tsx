"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MainSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra <span className="text-yellow-600">Misión</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En Maximus Nutrition, nos dedicamos a proporcionar suplementos
              deportivos de la más alta calidad para atletas y entusiastas del
              fitness que buscan maximizar su rendimiento y alcanzar sus
              objetivos.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Creemos que cada persona merece acceso a productos premium que los
              ayuden a superar sus límites y convertirse en la mejor versión de
              sí mismos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/images/logos/logo-maximus-nutrition.png"
              alt="Maximus Nutrition Logo"
              width={400}
              height={300}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
