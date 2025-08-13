import { Metadata } from "next";

import { ContactoView } from "./components/ContactoView";

export const metadata: Metadata = {
  title: {
    default: "Contacto",
    template: "",
  },
};

export default function ContactoPage() {
  return (
    <div>
      <ContactoView />
    </div>
  );
}
