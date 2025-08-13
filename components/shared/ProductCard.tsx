"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart } from "lucide-react";

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { RatingProduct } from "./RatingProduct";

import { getCategoryColor, getCategoryIcon } from "@/lib/globalTSX";
import { useStore } from "@/lib/store";
import { ProductCardType } from "@/props";

export function ProductCard({ product }: ProductCardType) {
  const { addToCart } = useStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
        {/* Image Section */}
        <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {getCategoryIcon(product.category)}
            </motion.div>
          </div>

          <Badge
            className={`absolute top-3 left-3 ${getCategoryColor(
              product.category
            )} border-0`}
          >
            {product.category}
          </Badge>

          <motion.div
            className="absolute top-3 right-3 flex flex-col space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 bg-white/90 hover:bg-white shadow-md"
              asChild
            >
              <Link href={`/productos/${product.slug}`}>
                <Eye className="h-4 w-4" strokeWidth={2} />
              </Link>
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 bg-white/90 hover:bg-white shadow-md cursor-pointer"
            >
              <Heart className="h-4 w-4" strokeWidth={2} />
            </Button>
          </motion.div>

          {product.stock < 10 && product.stock > 0 && (
            <Badge className="absolute bottom-3 left-3 bg-orange-500 text-white">
              ¡Últimas {product.stock} unidades!
            </Badge>
          )}

          {product.stock === 0 && (
            <Badge className="absolute bottom-3 left-3 bg-red-500 text-white">
              Sin Stock
            </Badge>
          )}
        </div>

        <CardContent className="p-6">
          {/* Marca */}
          <p className="text-sm font-medium text-yellow-600 mb-1 uppercase tracking-wide">
            {product.brand}
          </p>

          {/* Nombre de Producto */}
          <Link href={`/productos/${product.slug}`}>
            <h3 className="font-bold text-lg leading-tight mb-3 text-gray-900 hover:text-yellow-600 transition-colors duration-200 line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          {product.shortDescription && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {product.shortDescription}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center mb-4">
            <RatingProduct totalRating={product.rating} />
          </div>

          {/* Precio y Stock */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                S/. {product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            </div>
          </div>

          {/* Agregar al carrito */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => addToCart(product)}
              className="w-full cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
