"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { ProductInfoType } from "@/props";
import { getCategoryColor } from "@/lib/globalTSX";
import { RatingProduct } from "@/components/shared/RatingProduct";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

export function ProductInfo({
  product,
  quantity,
  setQuantity,
  handleAddToCart,
  handleWhatsAppInquiry,
}: ProductInfoType) {
  const { category, brand, name, rating, price, stock, shortDescription } =
    product;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Categoria */}
      <Badge className={`${getCategoryColor(category)} text-sm px-3 py-1`}>
        {category}
      </Badge>

      {/* Marca */}
      <p className="text-yellow-600 font-semibold text-lg uppercase tracking-wide">
        {brand}
      </p>

      {/* nombre Producto */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {name}
      </h1>

      {/* Rating */}
      <div className="flex space-x-2">
        <RatingProduct totalRating={rating} />
      </div>

      {/* Precio */}
      <div className="space-y-2">
        <p className="text-4xl font-bold text-gray-900">
          S/ {price.toFixed(2)}
        </p>
        <p className="text-gray-600">
          Stock disponible:{" "}
          <span className="font-semibold">{stock} unidades</span>
        </p>
      </div>

      {/* Descripcion Corta */}
      <p className="text-lg text-gray-700 leading-relaxed">
        {shortDescription}
      </p>

      {/* Seleccion de Cantidad */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Cantidad:</span>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-10 w-10 p-0"
            >
              <Minus className="h-5 w-5" />
            </Button>
            <span className="w-12 text-center font-semibold">{quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.min(stock, quantity + 1))}
              className="h-10 w-10 p-0"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Acciones */}
        <div className="space-y-4">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-4 text-lg font-semibold"
            disabled={stock === 0}
          >
            <ShoppingCart className="w-5 h-5 mr-2" strokeWidth={2} />
            Agregar al Carrito
          </Button>

          <Button
            onClick={handleWhatsAppInquiry}
            variant="outline"
            className="w-full border-green-500 text-green-600 hover:bg-green-50 py-3 text-lg font-semibold"
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
