"use client";

import { getFeaturedProducts } from "@/data/plainData";

import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { EnhancedSection } from "./components/EnhancedSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { BrandsSection } from "./components/BrandsSection";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <HeroSection />
      <FeaturesSection products={featuredProducts} />
      <EnhancedSection />
      <TestimonialSection />
      <BrandsSection />
    </div>
  );
}
