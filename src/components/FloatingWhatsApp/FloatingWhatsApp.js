import React from "react";
import "./FloatingWhatsApp.css";
import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999"
      className="floating-whatsapp"
    >
      <MessageCircle size={26} color="#fff" />
    </a>
  );
}

export default FloatingWhatsApp;
