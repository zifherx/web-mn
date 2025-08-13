import { ICartItem } from "./interfaces";

export const handleContactoWhatsappMessage = (
  to: string,
  message: string
): string => {
  const messageEncoded = encodeURIComponent(message);
  return `https://wa.me/51${to}?text=${messageEncoded}`;
};

export const generateWhatsAppCustomProductMessage = (
  cartItems: ICartItem[],
  total: number,
  phoneNumber: string
) => {
  let message = `🏋️‍♂️ *MAXIMUS NUTRITION* 🏋️‍♂️\n\n`;
  message += `¡Hola! Me interesa realizar la siguiente compra:\n\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `  Marca: ${item.brand}\n`;
    message += `  Cantidad: ${item.quantity}\n`;
    message += `  Precio unitario: S/ ${item.price.toFixed(2)}\n`;
    message += `  Subtotal: S/ ${(item.price * item.quantity).toFixed(2)}\n\n`;
  });

  message += `💰 *TOTAL: S/ ${total.toFixed(2)}*\n\n`;
  message += `Por favor, confirmen disponibilidad y método de pago.\n`;
  message += `¡Gracias por elegir Maximus Nutrition! 💪`;

  return handleContactoWhatsappMessage(phoneNumber, message);
};
