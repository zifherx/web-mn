"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CarritoVacio() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tu carrito está vacío
        </h2>
        <p className="text-gray-600 mb-6">
          ¡Agrega algunos productos increibles!
        </p>
        <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
          <Link href="/productos">Ver Productos</Link>
        </Button>
      </div>
    </div>
  );
}
