import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-16">
      <div className="maw-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Productos
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Encuentra los mejores suplementos deportivos para alcanzar tus
            objetivos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
