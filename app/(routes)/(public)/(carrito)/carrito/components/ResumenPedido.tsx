"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ResumenPedidoType } from "@/props";

export function ResumenPedido({
  carrito,
  total,
  handleWhatsAppOrder,
  clearCart,
}: ResumenPedidoType) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Resumen del Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {carrito.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>S/ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-yellow-600">S/ {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white"
            >
              Ordenar por WhatsApp
            </Button>

            <Button
              onClick={clearCart}
              variant="outline"
              className="w-full cursor-pointer"
            >
              Vaciar Carrito
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
