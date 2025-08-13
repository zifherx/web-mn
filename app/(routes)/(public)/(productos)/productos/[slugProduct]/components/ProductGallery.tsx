"use client";

import { motion } from "framer-motion";

import { ProductGalleryType } from "@/props";

export function ProductGallery({
  galeria,
  setSelectedImage,
  selectedImage,
}: ProductGalleryType) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-4">
        <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={galeria[selectedImage].src}
            alt={galeria[selectedImage].name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex space-x-4">
          {galeria.map(({ id, name, src }) => (
            <button
              key={id}
              onClick={() => setSelectedImage(id)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === id
                  ? "border-yellow-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={src}
                alt={name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
