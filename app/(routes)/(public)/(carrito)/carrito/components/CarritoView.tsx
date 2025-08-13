"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";

import { CarritoVacio } from "./CarritoVacio";
import { CarritoGrid } from "./CarritoGrid";

import { useStore } from "@/lib/store";
import { generateWhatsAppCustomProductMessage } from "@/lib/whatsapp";
import { WHATSAPP_NUMBER } from "@/util/Constants";

export const metadata: Metadata = {
  title: {
    default: "Carrito",
    template: "",
  },
};

export function CarritoView() {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } =
    useStore();

  const total = getCartTotal();

  const handleWhatsAppOrder = () => {
    const whatsappUrl = generateWhatsAppCustomProductMessage(
      cart,
      total,
      WHATSAPP_NUMBER
    );
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return <CarritoVacio />;
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Carrito de Compras
          </h1>
          <CarritoGrid
            carrito={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            total={total}
            clearCart={clearCart}
            handleWhatsAppOrder={handleWhatsAppOrder}
          />
        </motion.div>
      </div>
    </div>
  );
}
