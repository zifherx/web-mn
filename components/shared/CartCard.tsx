"use client";

import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "../ui/button";

import { CartCardType } from "@/props";

export function CartCard({
  item,
  removeFromCart,
  updateQuantity,
}: CartCardType) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center space-x-4 p-4 border rounded-lg"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg flex items-center justify-center">
        <span className="text-3xl">💪</span>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.brand}</p>
        <p className="text-lg font-bold text-yellow-600">
          S/ {item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:text-red-700 cursor-pointer"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}
