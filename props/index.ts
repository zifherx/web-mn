import { Dispatch, SetStateAction } from "react";
import {
  ICartItem,
  IGallery,
  INavbarItem,
  IProduct,
  IUser,
} from "@/lib/interfaces";

export type BottomBarType = {
  currentYear: number;
};

export type SocialIconsType = {
  user: IUser | null;
  cartItemsCount: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

export type MobileNavigationType = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type FooterItemType = {
  subItem: INavbarItem[];
  title: string;
};

export type TitleSectionType = {
  titleOne: string;
  titleTwo: string;
  slogan: string;
};

export type FeaturesSectionType = {
  products: IProduct[];
};

export type ProductCardType = {
  product: IProduct;
};

export type RatingProductType = {
  totalRating: number;
};

export type FiltrosProductType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export type ProductosGridType = {
  filteredProducts: IProduct[];
};

export type CarritoGridType = {
  carrito: ICartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  total: number;
  handleWhatsAppOrder: () => void;
  clearCart: () => void;
};

export type CarItemsType = {
  carrito: ICartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
};

export type ResumenPedidoType = {
  carrito: ICartItem[];
  total: number;
  handleWhatsAppOrder: () => void;
  clearCart: () => void;
};

export type CartCardType = {
  item: ICartItem;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
};

export type ProductGalleryType = {
  galeria: IGallery[];
  selectedImage: number;
  setSelectedImage: Dispatch<SetStateAction<number>>;
};

export type ProductInfoType = ProductCardType & {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  handleAddToCart: () => void;
  handleWhatsAppInquiry: () => void;
};
