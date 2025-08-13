import { TCategory, TIcon } from "./types";

export interface IStoreState {
  // Carrito de Compras
  cart: ICartItem[];
  addToCart: (product: IProduct, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  // Productos
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  // Usuario
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  // Administrador
  isAdmin: () => boolean;
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: TCategory;
  price: number;
  stock: number;
  mainImage: string;
  rating: number;
  galleryImages: IGallery[];
  shortDescription: string;
  longDescription: string;
  benefits?: IBenefit[];
  ingredients?: IIngredients[];
  usage?: string;
  nutritionalInfo?: INutritionInfo;
}

export interface IGallery {
  id: number;
  name: string;
  src: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "customer";
}

export interface IBenefit {
  id: number;
  title: string;
}

export interface IIngredients extends IBenefit {}

export interface INutritionInfo {
  servingSize: string;
  servingsPerContainer: number;
  calories?: number;
  protein?: string;
  carbs?: string;
  fat?: string;
}

export interface INavbarItem {
  id: number;
  name: string;
  href: string;
}

export interface IFooterItem {
  productos: INavbarItem[];
  empresa: INavbarItem[];
  soporte: INavbarItem[];
}

export interface SocialMediaItem extends INavbarItem {
  icon: TIcon;
}

export interface EnhancedItem {
  id: number;
  title: string;
  description: string;
  icon: TIcon;
  color: string;
}

export interface ITestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface IMarcaItem {
  id: number;
  name: string;
  logo: string;
  description: string;
}
