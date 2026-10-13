import { siteConfig } from "../config/siteConfig.js";

export function createWhatsAppUrl(message) {
  const url = new URL(siteConfig.whatsappUrl);
  url.searchParams.set("text", message);
  return url.toString();
}

export function openWhatsApp(message) {
  window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export const bookingMessage =
  "Hello DeboVIsuals! I'm interested in booking a session. Please share your availability and booking details.";

export function packageBookingMessage(packageName) {
  return `Hello DeboVIsuals! I'm interested in booking the ${packageName} package. Please share your availability and booking details.`;
}
