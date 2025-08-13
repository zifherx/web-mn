"use client";

import { motion } from "framer-motion";

import { WHY_CHOOSE_US_ITEMS } from "@/data/plainData";

export function WhyChooseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir{" "}
            <span className="text-yellow-600">Maximus Nutrition</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre las razones por las que miles de atletas confían en
            nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_ITEMS.map(
            ({ id, color, description, icon: Icon, title }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </motion.div>

                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-gray-600 text-sm">{description}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
