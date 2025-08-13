"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Formulario() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Envíanos un Mensaje</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <Input placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="tu@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Teléfono</label>
              <Input placeholder="+51 999 999 999" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Asunto</label>
              <Input placeholder="¿En qué podemos ayudarte?" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <Textarea placeholder="Escribe tu mensaje aquí..." rows={5} />
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700"
            >
              Enviar Mensaje
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
