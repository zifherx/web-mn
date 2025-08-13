"use client";

import Link from "next/link";

import { ProductCard } from "@/components/shared/ProductCard";
import { TitleSection } from "@/components/shared/TitleSection";
import { Button } from "@/components/ui/button";

import { FeaturesSectionType } from "@/props";

export function FeaturesSection({ products }: FeaturesSectionType) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <TitleSection
          titleOne="Productos"
          titleTwo="Destacados"
          slogan="Descubre nuestra selección de suplmementos premium para maximizar tu
        rendimiento"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((producto) => (
            <ProductCard key={producto.id} product={producto} />
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-yellow-600 hover:bg-black text-white"
          >
            <Link href="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
