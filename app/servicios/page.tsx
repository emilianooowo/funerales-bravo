import type { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
    title: "Servicios Funerarios en Tapachula",
    description: "Atención inmediata 24/7. Servicios funerarios integrales en Tapachula: salas de velación, cremación, traslados, previsión, Cementerio Bravo y Cremapets.",

    keywords: [
        "servicios funerarios Tapachula",
        "funeraria en Tapachula",
        "salas de velación Tapachula",
        "cremación de cuerpos Tapachula",
        "traslados funerarios nacionales",
        "planes de previsión funeraria",
        "cremación de mascotas Tapachula",
        "cementerio privado Chiapas",
        "Funerales Bravo servicios"
    ],

    alternates: {
        canonical: "https://funeralesbravo.com/servicios",
    },

    openGraph: {
        title: "Servicios Funerarios en Tapachula | Funerales Bravo",
        description: "Acompañamiento integral con empatía y respeto. Conoce nuestras salas de velación, servicio de cremación y planes de previsión a futuro.",
        url: "https://funeralesbravo.com/servicios",
        siteName: "Funerales Bravo",
        locale: "es_MX",
        type: "website",
        images: [
            {
                url: "/images/og-servicios.jpg",
                width: 1200,
                height: 630,
                alt: "Instalaciones y Servicios de Funerales Bravo en Tapachula",
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Servicios Funerarios en Tapachula | Funerales Bravo",
        description: "Atención inmediata 24/7. Servicios funerarios completos y profesionales en Tapachula, Chiapas.",
        images: ["/images/og-servicios.jpg"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    }
};

const schemaServicios = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Servicios Funerarios",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Funerales Bravo",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tapachula",
            "addressRegion": "Chiapas",
            "addressCountry": "MX"
        }
    },
    "areaServed": {
        "@type": "City",
        "name": "Tapachula"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catálogo de Servicios Funerarios",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Salas de Velación Privadas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servicio de Cremación" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Traslados Nacionales" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Previsión Funeraria" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cremapets (Cremación de Mascotas)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cementerio Privado y Columbario" } }
        ]
    }
};

export default function ServiciosPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaServicios) }}
            />
            <ServiciosClient />
        </>
    );
}