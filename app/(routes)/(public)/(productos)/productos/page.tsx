import { Metadata } from "next";

import { ProductosView } from "./components/ProductosView";

export const metadata: Metadata = {
  title: {
    default: "Productos",
    template: "",
  },
};

export default function ProductosPage() {
  return (
    <div>
      <ProductosView />
    </div>
  );
}
