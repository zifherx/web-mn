"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

import { SocialIconsType } from "@/props";

export function SideIcons({
  cartItemsCount,
  user,
  isOpen,
  setIsOpen,
}: SocialIconsType) {
  return (
    <div className="flex items-center space-x-4">
      {user?.role === "admin" && (
        <Link href="/admin">
          <Button variant="outline" size="sm">
            Admin
          </Button>
        </Link>
      )}

      <Link href="/carrito" className="relative">
        <Button variant="ghost" className="cursor-pointer">
          <ShoppingCart className="h-12 w-12" strokeWidth={2} />
          {cartItemsCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {cartItemsCount}
            </Badge>
          )}
        </Button>
      </Link>

      <div className="md:hidden">
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </Button>
      </div>
    </div>
  );
}
