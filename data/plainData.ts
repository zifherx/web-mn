import {
  EnhancedItem,
  IFooterItem,
  IMarcaItem,
  INavbarItem,
  IProduct,
  ITestimonialItem,
  SocialMediaItem,
} from "@/lib/interfaces";
import {
  Award,
  Facebook,
  HeadphonesIcon,
  Instagram,
  Shield,
  Truck,
  Twitter,
  Zap,
} from "lucide-react";

export const LISTA_PRODUCTOS: IProduct[] = [
  {
    id: 1,
    name: "Creatina Monohydrate 1Kg",
    slug: "creatina-monohydrate-1kg",
    brand: "Ultimate Nutrition",
    category: "CREATINA",
    price: 229.0,
    stock: 100,
    rating: 4,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription:
      "Creatina monohidrato pura para aumentar la fuerza y potencia muscular.",
    longDescription:
      "La Creatina Monohidrato de Ultimate Nutrition es el suplemento más estudiado y efectivo para aumentar la fuerza, potencia y masa muscular. Fabricada con los más altos estándares de calidad, esta creatina pura te ayudará a maximizar tu rendimiento en entrenamientos de alta intensidad y deportes que requieren explosividad.",
    benefits: [
      {
        id: 1,
        title: "Aumenta la fuerza y potencia muscular",
      },
      {
        id: 2,
        title: "Mejora el rendimiento en ejercicios de alta intensidad",
      },
      {
        id: 3,
        title: "Acelera la recuperación entre series",
      },
      {
        id: 4,
        title: "Favorece el crecimiento de masa muscular",
      },
      {
        id: 5,
        title: "Sin saborizantes ni aditivos artificiales",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "100% Creatina Monohidrato",
      },
    ],
    usage:
      "Tomar 5g (1 cucharadita) diarios, preferiblemente post-entreno con agua o jugo.",

    nutritionalInfo: {
      servingSize: "5g",
      servingsPerContainer: 200,
      protein: "0g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 2,
    name: "Creatina Unflavored 500g",
    slug: "creatina-unflavored-500g",
    brand: "LAB Nutrition",
    category: "CREATINA",
    price: 119.0,
    stock: 100,
    rating: 3,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription:
      "Creatina sin sabor de alta calidad para máximo rendimiento.",
    longDescription:
      "La Creatina Unflavored de LAB Nutrition es una opción de alta calidad para aquellos que buscan aumentar su fuerza y potencia muscular sin sabor. Fabricada con los mejores ingredientes, esta creatina te ayudará a mejorar tu rendimiento en el gimnasio.",
    benefits: [
      {
        id: 1,
        title: "Aumenta la fuerza y potencia muscular",
      },
      {
        id: 2,
        title: "Mejora el rendimiento en ejercicios de alta intensidad",
      },
      {
        id: 3,
        title: "Acelera la recuperación entre series",
      },
      {
        id: 4,
        title: "Favorece el crecimiento de masa muscular",
      },
      {
        id: 5,
        title: "Sin sabor",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "Creatina Monohidrato",
      },
    ],
    usage:
      "Tomar 5g (1 cucharadita) diarios, preferiblemente post-entreno con agua o jugo.",
    nutritionalInfo: {
      servingSize: "5g",
      servingsPerContainer: 100,
      protein: "0g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 3,
    name: "Glutamina Unflavored",
    slug: "glutamina-unflavored",
    brand: "LAB Nutrition",
    category: "GLUTAMINA",
    price: 119.0,
    stock: 100,
    rating: 4,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription:
      "L-Glutamina para recuperación muscular y sistema inmunológico.",
    longDescription:
      "La Glutamina Unflavored de LAB Nutrition es un suplemento esencial para la recuperación muscular y el fortalecimiento del sistema inmunológico. Fabricada con los mejores ingredientes, esta glutamina te ayudará a mantener tu cuerpo en óptimas condiciones.",
    benefits: [
      {
        id: 1,
        title: "Ayuda en la recuperación muscular",
      },
      {
        id: 2,
        title: "Fortalece el sistema inmunológico",
      },
      {
        id: 3,
        title: "Reduce el cansancio",
      },
      {
        id: 4,
        title: "Mejora la función cognitiva",
      },
      {
        id: 5,
        title: "Sin sabor",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "L-Glutamina",
      },
    ],
    usage:
      "Tomar 5g (1 cucharadita) diarios, preferiblemente post-entreno con agua o jugo.",
    nutritionalInfo: {
      servingSize: "5g",
      servingsPerContainer: 100,
      protein: "0g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 4,
    name: "Proteina Elite 100% Whey 2.3Kg",
    slug: "proteina-elite-100-whey-2.3kg",
    brand: "Dymatize",
    category: "PROTEINA",
    price: 319.0,
    stock: 100,
    rating: 5,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription: "Proteína whey de alta calidad para desarrollo muscular.",
    longDescription:
      "La Proteína Elite 100% Whey de Dymatize es una opción premium para el desarrollo muscular. Fabricada con whey de alta calidad, esta proteína te ayudará a alcanzar tus objetivos de fitness de manera efectiva.",
    benefits: [
      {
        id: 1,
        title: "Desarrollo muscular",
      },
      {
        id: 2,
        title: "Recuperación rápida",
      },
      {
        id: 3,
        title: "Aumento de masa muscular",
      },
      {
        id: 4,
        title: "Mejora del rendimiento",
      },
      {
        id: 5,
        title: "Sin saborizantes ni aditivos artificiales",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "100% Whey Protein",
      },
    ],
    usage: "Tomar 30g (6 cucharadas) diarios, distribuidas en 2-3 tomas.",
    nutritionalInfo: {
      servingSize: "30g",
      servingsPerContainer: 230,
      protein: "27g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 5,
    name: "Proteina Gold Standard 100 Isolate 2.3Kg",
    slug: "proteina-gold-standard-100-isolate-2.3kg",
    brand: "Optimum Nutrition",
    category: "PROTEINA",
    price: 379.0,
    stock: 100,
    rating: 4,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription: "Proteína aislada de suero premium con absorción rápida.",
    longDescription:
      "La Proteína Gold Standard 100 Isolate de Optimum Nutrition es una proteína aislada de suero premium que ofrece absorción rápida y alta calidad. Ideal para atletas y personas que buscan maximizar su desarrollo muscular.",
    benefits: [
      {
        id: 1,
        title: "Desarrollo muscular",
      },
      {
        id: 2,
        title: "Recuperación rápida",
      },
      {
        id: 3,
        title: "Aumento de masa muscular",
      },
      {
        id: 4,
        title: "Mejora del rendimiento",
      },
      {
        id: 5,
        title: "Sin lactosa",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "Proteína Aislada de Suero",
      },
    ],
    usage: "Tomar 30g (6 cucharadas) diarios, distribuidas en 2-3 tomas.",
    nutritionalInfo: {
      servingSize: "30g",
      servingsPerContainer: 230,
      protein: "27g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 6,
    name: "Proteina Gold Standard Whey",
    slug: "proteina-gold-standard-whey",
    brand: "Optimum Nutrition",
    category: "PROTEINA",
    price: 309.0,
    stock: 100,
    rating: 5,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription: "La proteína whey más vendida del mundo.",
    longDescription:
      "La Proteína Gold Standard Whey de Optimum Nutrition es la proteína whey más vendida del mundo, conocida por su alta calidad y efectividad. Ideal para aquellos que buscan un suplemento de proteína confiable y saboroso.",
    benefits: [
      {
        id: 1,
        title: "Desarrollo muscular",
      },
      {
        id: 2,
        title: "Recuperación rápida",
      },
      {
        id: 3,
        title: "Aumento de masa muscular",
      },
      {
        id: 4,
        title: "Mejora del rendimiento",
      },
      {
        id: 5,
        title: "Sabor delicioso",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "Whey Protein",
      },
    ],
    usage: "Tomar 30g (6 cucharadas) diarios, distribuidas en 2-3 tomas.",
    nutritionalInfo: {
      servingSize: "30g",
      servingsPerContainer: 230,
      protein: "27g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 7,
    name: "Proteina 100% Hydrolyzed Cookies Cream",
    slug: "proteina-100-hydrolyzed-cookies-cream",
    brand: "LAB Nutrition",
    category: "PROTEINA",
    price: 379.0,
    stock: 100,
    rating: 4,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription: "Proteína hidrolizada sabor cookies & cream.",
    longDescription:
      "La Proteína 100% Hydrolyzed Cookies Cream de LAB Nutrition es una proteína hidrolizada con sabor delicioso de cookies & cream. Fabricada con los mejores ingredientes, esta proteína te ayudará a alcanzar tus objetivos de fitness de manera efectiva.",
    benefits: [
      {
        id: 1,
        title: "Desarrollo muscular",
      },
      {
        id: 2,
        title: "Recuperación rápida",
      },
      {
        id: 3,
        title: "Aumento de masa muscular",
      },
      {
        id: 4,
        title: "Mejora del rendimiento",
      },
      {
        id: 5,
        title: "Sabor cookies & cream",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "Proteína Hidrolizada",
      },
    ],
    usage: "Tomar 30g (6 cucharadas) diarios, distribuidas en 2-3 tomas.",
    nutritionalInfo: {
      servingSize: "30g",
      servingsPerContainer: 230,
      protein: "27g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 8,
    name: "Proteina 100% Hydrolyzed Milk Chocolate",
    slug: "proteina-100-hydrolyzed-milk-chocolate",
    brand: "LAB Nutrition",
    category: "PROTEINA",
    price: 379.0,
    stock: 100,
    rating: 5,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription: "Proteína hidrolizada sabor chocolate con leche.",
    longDescription:
      "La Proteína 100% Hydrolyzed Milk Chocolate de LAB Nutrition es una proteína hidrolizada con sabor delicioso de chocolate con leche. Fabricada con los mejores ingredientes, esta proteína te ayudará a alcanzar tus objetivos de fitness de manera efectiva.",
    benefits: [
      {
        id: 1,
        title: "Desarrollo muscular",
      },
      {
        id: 2,
        title: "Recuperación rápida",
      },
      {
        id: 3,
        title: "Aumento de masa muscular",
      },
      {
        id: 4,
        title: "Mejora del rendimiento",
      },
      {
        id: 5,
        title: "Sabor chocolate con leche",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "Proteína Hidrolizada",
      },
    ],
    usage: "Tomar 30g (6 cucharadas) diarios, distribuidas en 2-3 tomas.",
    nutritionalInfo: {
      servingSize: "30g",
      servingsPerContainer: 230,
      protein: "27g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 9,
    name: "Proteina ISO100 Hydrolyzed 2.3Kg",
    slug: "proteina-iso100-hydrolyzed-2.3kg",
    brand: "Dymatize",
    category: "PROTEINA",
    price: 409.0,
    stock: 100,
    rating: 5,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription: "Proteína hidrolizada de máxima pureza y absorción.",
    longDescription:
      "La Proteína ISO100 Hydrolyzed de Dymatize es una proteína hidrolizada de máxima pureza y absorción que te ayudará a alcanzar tus objetivos de fitness de manera efectiva.",
    benefits: [
      {
        id: 1,
        title: "Desarrollo muscular",
      },
      {
        id: 2,
        title: "Recuperación rápida",
      },
      {
        id: 3,
        title: "Aumento de masa muscular",
      },
      {
        id: 4,
        title: "Mejora del rendimiento",
      },
      {
        id: 5,
        title: "Sin saborizantes ni aditivos artificiales",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "Proteína Hidrolizada",
      },
    ],
    usage: "Tomar 30g (6 cucharadas) diarios, distribuidas en 2-3 tomas.",
    nutritionalInfo: {
      servingSize: "30g",
      servingsPerContainer: 230,
      protein: "27g",
      carbs: "0g",
      fat: "0g",
    },
  },
  {
    id: 10,
    name: "Proteina ISO-XP",
    slug: "proteina-iso-xp",
    brand: "Applied Nutrition",
    category: "PROTEINA",
    price: 309.0,
    stock: 100,
    rating: 4,
    mainImage: "https://placehold.co/500x500",
    galleryImages: [
      {
        id: 1,
        name: "Imagen 01",
        src: "https://placehold.co/600x600",
      },
      {
        id: 2,
        name: "Imagen 02",
        src: "https://placehold.co/650x650",
      },
      {
        id: 3,
        name: "Imagen 03",
        src: "https://placehold.co/700x700",
      },
    ],
    shortDescription: "Proteína aislada de alta calidad para atletas.",
    longDescription:
      "La Proteína ISO-XP de Applied Nutrition es una proteína aislada de alta calidad que es ideal para atletas. Fabricada con los mejores ingredientes, esta proteína te ayudará a mejorar tu rendimiento y alcanzar tus objetivos de fitness.",
    benefits: [
      {
        id: 1,
        title: "Desarrollo muscular",
      },
      {
        id: 2,
        title: "Recuperación rápida",
      },
      {
        id: 3,
        title: "Aumento de masa muscular",
      },
      {
        id: 4,
        title: "Mejora del rendimiento",
      },
      {
        id: 5,
        title: "Sin lactosa",
      },
    ],
    ingredients: [
      {
        id: 1,
        title: "Proteína Aislada",
      },
    ],
    usage: "Tomar 30g (6 cucharadas) diarios, distribuidas en 2-3 tomas.",
    nutritionalInfo: {
      servingSize: "30g",
      servingsPerContainer: 230,
      protein: "27g",
      carbs: "0g",
      fat: "0g",
    },
  },
];

export const getAllProducts = () => {
  return LISTA_PRODUCTOS;
};

export const getFeaturedProducts = () => {
  return LISTA_PRODUCTOS.filter((producto) => producto.id < 4);
};

export const NAV_HEADER_ITEMS: INavbarItem[] = [
  { id: 1, name: "Inicio", href: "/" },
  { id: 2, name: "Nosotros", href: "/nosotros" },
  { id: 3, name: "Productos", href: "/productos" },
  { id: 4, name: "Contacto", href: "/contacto" },
];

export const FOOTER_ITEMS: IFooterItem = {
  productos: [
    { id: 1, name: "Proteinas", href: "/productos?category=PROTEINA" },
    { id: 2, name: "Creatinas", href: "/productos?category=CREATINA" },
    { id: 3, name: "Glutaminas", href: "/productos?category=GLUTAMINA" },
  ],
  empresa: [
    { id: 1, name: "Quiénes Somos", href: "/nosotros" },
    { id: 2, name: "Contacto", href: "/contacto" },
    { id: 3, name: "Términos y Condiciones", href: "/#" },
    { id: 4, name: "Política de Privacidad", href: "/#" },
  ],
  soporte: [
    { id: 1, name: "Centro de Ayuda", href: "#" },
    { id: 2, name: "Envíos y Devoluciones", href: "#" },
    { id: 3, name: "Métodos de Pago", href: "#" },
    { id: 4, name: "Preguntas Frecuentes", href: "#" },
  ],
};

export const SOCIAL_MEDIA_ITEMS: SocialMediaItem[] = [
  { id: 1, name: "Facebook", href: "#", icon: Facebook },
  { id: 2, name: "Instagram", href: "#", icon: Instagram },
  { id: 3, name: "Twitter", href: "#", icon: Twitter },
];

export const VALUES_ITEMS: EnhancedItem[] = [
  {
    id: 1,
    icon: Award,
    title: "Excelencia",
    description:
      "Nos comprometemos a ofrecer solo productos de la más alta calidad, trabajando con las mejores marcas del mercado internacional.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: 2,
    icon: Shield,
    title: "Confianza",
    description:
      "Construimos relaciones duraderas con nuestros clientes basadas en la transparencia, honestidad y resultados comprobados.",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    icon: Zap,
    title: "Pasión",
    description:
      "Compartimos la pasión por el fitness y el deporte, entendiendo las necesidades reales de nuestros clientes atletas.",
    color: "from-red-400 to-red-600",
  },
];

export const WHY_CHOOSE_US_ITEMS: EnhancedItem[] = [
  {
    id: 1,
    icon: Award,
    title: "Productos Auténticos",
    description: "100% originales y certificados",
    color: "bg-yellow-500",
  },
  {
    id: 2,
    icon: Truck,
    title: "Envío Rápido",
    description: "Entrega en 24-48 horas",
    color: "bg-blue-500",
  },
  {
    id: 3,
    icon: HeadphonesIcon,
    title: "Asesoría Experta",
    description: "Te ayudamos a elegir",
    color: "bg-green-500",
  },
  {
    id: 4,
    icon: Shield,
    title: "Compra Segura",
    description: "Transacciones protegidas",
    color: "bg-purple-500",
  },
];

export const TESTIMONIAL_ITEMS: ITestimonialItem[] = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Atleta Profesional",
    content:
      "Maximus Nutrition ha transformado mi rendimiento. La calidad de sus proteínas es excepcional y los resultados son visibles desde la primera semana.",
    rating: 5,
    image: "https://placehold.co/150x150",
  },
  {
    id: 2,
    name: "Ana García",
    role: "Entrenadora Personal",
    content:
      "Recomiendo Maximus Nutrition a todos mis clientes. Sus suplementos son de calidad premium y el servicio al cliente es excelente.",
    rating: 5,
    image: "https://placehold.co/150x150",
  },
  {
    id: 3,
    name: "Miguel Torres",
    role: "Culturista",
    content:
      "Llevo 3 años usando sus productos y no cambiaría por nada. La creatina y las proteínas me han ayudado a alcanzar mis objetivos más rápido.",
    rating: 5,
    image: "https://placehold.co/150x150",
  },
  {
    id: 4,
    name: "Sofia Ramirez",
    role: "Atleta de CrossFit",
    content:
      "La glutamina de Maximus es increíble para la recuperación. Desde que la uso, mis entrenamientos son más intensos y me recupero mucho mejor.",
    rating: 5,
    image: "https://placehold.co/150x150",
  },
  {
    id: 5,
    name: "Roberto Silva",
    role: "Maratonista",
    content:
      "Productos de calidad excepcional y entrega súper rápida. El equipo de Maximus realmente entiende las necesidades de los atletas.",
    rating: 5,
    image: "https://placehold.co/150x150",
  },
];

export const MARCAS_ITEMS: IMarcaItem[] = [
  {
    id: 1,
    name: "Optimum Nutrition",
    logo: "optimum-nutrition.png",
    description: "Líder mundial en nutrición deportiva",
  },
  {
    id: 2,
    name: "Dymatize",
    logo: "dymatize.png",
    description: "Innovación en proteínas premium",
  },
  {
    id: 3,
    name: "Ultimate Nutrition",
    logo: "ultimate-nutrition.png",
    description: "Calidad y pureza desde 1979",
  },
  {
    id: 4,
    name: "LAB Nutrition",
    logo: "lab-nutrition.png",
    description: "Ciencia aplicada al rendimiento",
  },
  {
    id: 5,
    name: "Applied Nutrition",
    logo: "applied-nutrition.png",
    description: "Nutrición deportiva avanzada",
  },
];
