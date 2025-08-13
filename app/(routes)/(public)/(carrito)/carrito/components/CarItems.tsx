import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CartCard } from "@/components/shared/CartCard";

import { CarItemsType } from "@/props";

export function CarItems({
  carrito,
  removeFromCart,
  updateQuantity,
}: CarItemsType) {
  return (
    <section className="md:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Productos ({carrito.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {carrito.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
