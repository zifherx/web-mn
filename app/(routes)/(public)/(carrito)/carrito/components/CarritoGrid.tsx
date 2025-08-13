import { CarItems } from "./CarItems";
import { ResumenPedido } from "./ResumenPedido";

import { CarritoGridType } from "@/props";

export function CarritoGrid({
  carrito,
  removeFromCart,
  updateQuantity,
  clearCart,
  handleWhatsAppOrder,
  total,
}: CarritoGridType) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <CarItems
        carrito={carrito}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <ResumenPedido
        carrito={carrito}
        clearCart={clearCart}
        handleWhatsAppOrder={handleWhatsAppOrder}
        total={total}
      />
    </div>
  );
}
