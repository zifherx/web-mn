"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { FooterItem } from "./FooterItem";
import { SocialMedia } from "./SocialMedia";

import { FOOTER_ITEMS } from "@/data/plainData";
import { Mail, MapPin, Phone } from "lucide-react";

export function MainFooter() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logos/logo-maximus-nutrition.png"
                alt="Maximus Nutrition Logo"
                width={200}
                height={100}
                priority
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu aliado en la búsqueda de la excelencia deportiva. Ofrecemos
              suplementos de la más alta calidad para atletas que no se
              conforman con menos.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">+51 931 904 780</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">info@maximusnutrition.pe</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Lima, Perú</span>
              </div>
            </div>
          </motion.div>
        </div>

        <FooterItem title="Productos" subItem={FOOTER_ITEMS.productos} />
        <FooterItem title="Empresa" subItem={FOOTER_ITEMS.empresa} />
        <FooterItem title="Soporte" subItem={FOOTER_ITEMS.soporte} />
      </div>

      <SocialMedia />
    </div>
  );
}
