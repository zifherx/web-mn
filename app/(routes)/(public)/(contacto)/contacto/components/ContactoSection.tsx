import { ContactInfo } from "./ContactInfo";
import { Formulario } from "./Formulario";

export function ContactoSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact Form */}
          <Formulario />
        </div>
      </div>
    </section>
  );
}
