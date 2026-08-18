import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
    title: "Contacto y Ubicación",
    description: "Estamos para apoyarte 24/7. Encuentra nuestra línea de emergencia, ubicación en Tapachula, correos y nuestra página de Facebook.",
    keywords: [
        "contacto Funerales Bravo",
        "teléfono funeraria Tapachula",
        "ubicación Funerales Bravo",
        "emergencia funeraria 24 horas",
        "dirección funeraria Tapachula"
    ],
    alternates: {
        canonical: "https://funeralesbravo.com/contacto",
    },

    openGraph: {
        title: "Contacto | Funerales Bravo Tapachula",
        description: "Asistencia inmediata 24/7. Contáctanos por teléfono, correo o visítanos en nuestras instalaciones.",
        url: "https://funeralesbravo.com/contacto",
        type: "website",
        images: [
            {
                url: "/images/og-contacto.jpg",
                width: 1200,
                height: 630,
                alt: "Atención al cliente | Servicios Funerales Bravo",
            },
        ],
    }
};

const schemaContacto = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Funerales Bravo",
    "image": "https://funeralesbravo.com/logos/FB-black.webp",
    "telephone": "+529622361377",
    "email": "serviciosfunerariosbravo@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Central Oriente 82 Prol.",
        "addressLocality": "Tapachula",
        "addressRegion": "Chiapas",
        "addressCountry": "MX"
    },
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+529622361377",
            "contactType": "Emergency",
            "availableLanguage": "es"
        },
        {
            "@type": "ContactPoint",
            "telephone": "+529625895880",
            "contactType": "Customer Service",
            "availableLanguage": "es"
        }
    ]
};

export default function ContactoPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaContacto) }}
            />
            <ContactoClient />
        </>
    );
}