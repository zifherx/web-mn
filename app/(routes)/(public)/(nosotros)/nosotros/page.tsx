import { Metadata } from "next";

import { NosotrosView } from "./components/NosotrosView";

export const metadata: Metadata = {
  title: {
    default: "Nosotros",
    template: "",
  },
};

export default function NosotrosPage() {
  return (
    <div>
      <NosotrosView />
    </div>
  );
}
