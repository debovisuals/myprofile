import { ArrowUpRight, MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp.js";

export default function WhatsAppButton({
  children,
  message,
  variant = "dark",
  icon = "arrow",
  className = "",
  onClick,
}) {
  return (
    <button
      className={`button button--${variant} ${className}`.trim()}
      type="button"
      onClick={(event) => {
        openWhatsApp(message);
        onClick?.(event);
      }}
    >
      {children}
      {icon === "chat" ? <MessageCircle size={17} /> : <ArrowUpRight size={17} />}
    </button>
  );
}
