"use client";

import { useState } from "react";

import LogoImage from "./LogoImage";
import DesktopNavigation from "./Desktop-Navigation";
import { SideIcons } from "./Side-Icons";
import MobileNavigation from "./Mobile-Navigation";

import { useStore } from "@/lib/store";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, user } = useStore();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <LogoImage />

          <DesktopNavigation />

          <SideIcons
            cartItemsCount={cartItemsCount}
            user={user}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        {isOpen && <MobileNavigation setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
}
