import Image from "next/image";
import estilos from "./WhatsAppButton.module.css";

interface WhatsAppButtonProps {
    numero?: string;
    mensaje?: string;
}

function IconoWhatsApp() {
    return (
        <Image
            src="/logos/whatsapp.svg"
            alt="Icono de WhatsApp"
            width={32}
            height={32}
            className={estilos.icono}
        />
    );
}

export default function WhatsAppButton({
    numero = "529622361377",
    mensaje = "Hola, me gustaría obtener más información sobre sus servicios.",
}: WhatsAppButtonProps) {
    const enlace = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    return (
        <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className={estilos.boton}
            aria-label="Contactar por WhatsApp"
        >
            <IconoWhatsApp />
        </a>
    );
}