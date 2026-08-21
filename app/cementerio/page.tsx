import type { Metadata } from "next";
import CementerioClient from "./CementerioClient";

export const metadata: Metadata = {
    title: "Cementerio Privado y Columbario en Tapachula | Cementerio Bravo",
    description: "Espacios de descanso eterno rodeados de naturaleza. Venta de lotes a perpetuidad, nichos y columbario con seguridad 24/7 en Tapachula.",
    keywords: [
        "cementerio privado Tapachula",
        "panteón privado Chiapas",
        "venta de lotes funerarios",
        "columbario Tapachula",
        "nichos para cenizas",
        "Cementerio Bravo"
    ],
    alternates: {
        canonical: "https://funeralesbravo.com/cementerio",
    },
    openGraph: {
        title: "Cementerio Bravo | Descanso eterno en la naturaleza",
        description: "Conoce nuestros espacios a perpetuidad y columbario. Un entorno de serenidad para honrar la memoria de tu ser querido.",
        url: "https://funeralesbravo.com/cementerio",
        type: "website",
    }
};

const schemaCementerio = {
    "@context": "https://schema.org",
    "@type": "Cemetery",
    "name": "Cementerio Bravo",
    "description": "Cementerio privado, columbario y venta de lotes a perpetuidad.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Funerales Bravo"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tapachula",
        "addressRegion": "Chiapas",
        "addressCountry": "MX"
    }
};

export default function CementerioPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCementerio) }}
            />
            <CementerioClient />
        </>
    );
}