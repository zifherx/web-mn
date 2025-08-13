import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleContactoWhatsappMessage } from "@/lib/whatsapp";
import {
  WHATSAPP_MESSAGE_CONTACT_PAGE,
  WHATSAPP_NUMBER,
} from "@/util/Constants";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Información de <span className="text-yellow-600">Contacto</span>
      </h2>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <MapPin className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Dirección</h3>
            <p className="text-gray-600">Lima, Perú</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Phone className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Teléfono</h3>
            <p className="text-gray-600">+51 931 904 780</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Mail className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">info@maximusnutrition.pe</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Horarios</h3>
            <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
          size="lg"
          asChild
        >
          <Link
            href={handleContactoWhatsappMessage(
              WHATSAPP_NUMBER,
              WHATSAPP_MESSAGE_CONTACT_PAGE
            )}
            target="_blank"
          >
            Contactar por WhatsApp
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
