"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { BreadcrumbSection } from "./BreadcrumbSection";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";

import { Button } from "@/components/ui/button";

import { getAllProducts } from "@/data/plainData";
import { useStore } from "@/lib/store";
import { generateWhatsAppCustomProductMessage } from "@/lib/whatsapp";
import { WHATSAPP_NUMBER } from "@/util/Constants";

export function SlugProductView() {
  const { slugProduct } = useParams();
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const listaProductos = getAllProducts();

  const productSelected = listaProductos.find((p) => p.slug === slugProduct);

  if (!productSelected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Link href="/productos">
            <Button>Volver a productos</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(productSelected, quantity);
  };

  const handleWhatsAppInquiry = () => {
    const cartItems = [{ ...productSelected, quantity }];
    const total = productSelected.price * quantity;
    const messageWhatsApp = generateWhatsAppCustomProductMessage(
      cartItems,
      total,
      WHATSAPP_NUMBER
    );
    window.open(messageWhatsApp, "_blank");
  };

  // console.log("slugProduct", slugProduct);
  // console.log("listaProductos", listaProductos);
  // console.log("productSelected", productSelected);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BreadcrumbSection productName={productSelected.name} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProductGallery
            galeria={productSelected.galleryImages}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <ProductInfo
            product={productSelected}
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
            handleWhatsAppInquiry={handleWhatsAppInquiry}
          />
        </div>
      </div>
    </div>
  );
}
