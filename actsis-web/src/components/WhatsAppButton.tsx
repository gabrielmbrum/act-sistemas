import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  readonly phoneNumber?: string;
  readonly message?: string;
}

export function WhatsAppButton({
  phoneNumber = "5511999999999",
  message = "Olá! Gostaria de agendar uma consultoria com a Act Sistemas.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com um especialista no WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#00b07b] text-white shadow-xl shadow-black/40 transition-all duration-300 hover:scale-105 hover:bg-[#009668] focus:outline-none focus:ring-2 focus:ring-[#00b07b] focus:ring-offset-2 focus:ring-offset-zinc-950"
      >
        <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
      </a>
    </aside>
  );
}

export default WhatsAppButton;
