import type { Metadata } from "next";
import CremapetsClient from "./CremapetsClient";

export const metadata: Metadata = {
    title: "Crematorio de Mascotas en Tapachula | Cremapets",
    description: "Servicio de crematorio para mascotas y perritos en Tapachula. Despedidas dignas con traslado, urnas personalizadas y entrega de cenizas. Conoce nuestras tarifas.",

    keywords: [
        "crematorio de mascotas",
        "crematorio de perritos",
        "cremación de mascotas Tapachula",
        "funeraria para perros y gatos",
        "incineración de mascotas",
        "Cremapets Tapachula",
        "urnas para mascotas",
        "precios cremación mascotas",
        "Funerales Bravo mascotas"
    ],

    alternates: {
        canonical: "https://funeralesbravo.com/cremapets",
    },

    openGraph: {
        title: "Crematorio de Mascotas en Tapachula | Cremapets",
        description: "El cierre digno y amoroso que tu compañero incondicional merece. Conoce nuestros planes Básico e Integral.",
        url: "https://funeralesbravo.com/cremapets",
        siteName: "Funerales Bravo",
        locale: "es_MX",
        type: "website",
        images: [
            {
                url: "/images/og-cremapets.webp",
                width: 1200,
                height: 630,
                alt: "Servicio de Cremapets - Crematorio de Mascotas",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Crematorio de Mascotas en Tapachula | Cremapets",
        description: "Servicios integrales de cremación para mascotas. Atención respetuosa, traslados y urnas.",
        images: ["/images/og-cremapets.webp"],
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

const schemaCremapets = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Crematorio de Mascotas",
    "name": "Cremapets by Funerales Bravo",
    "description": "Servicios profesionales de cremación para perros, gatos y otras mascotas. Incluye traslados, urnas y certificados.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Funerales Bravo",
        "image": "https://funeralesbravo.com/logos/FB-black.webp",
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
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "MXN",
        "lowPrice": "1600",
        "highPrice": "5650",
        "offerCount": "2",
        "description": "Planes Básico e Integral basados en el peso de la mascota."
    }
};

export default function CremapetsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCremapets) }}
            />
            <CremapetsClient />
        </>
    );
}