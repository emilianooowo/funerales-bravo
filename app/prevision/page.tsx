import type { Metadata } from "next";
import PrevisionClient from "./PrevisionClient";

export const metadata: Metadata = {
    title: "Planes de Previsión Funeraria en Tapachula | Funerales Bravo",
    description: "Protege a tu familia de gastos inesperados. Planes funerarios a futuro con pagos accesibles, cobertura transferible y ahorro garantizado.",
    keywords: [
        "previsión funeraria Tapachula",
        "planes funerarios a futuro",
        "seguro funerario",
        "paquetes funerarios en pagos",
        "ahorro funerario Chiapas"
    ],
    alternates: {
        canonical: "https://funeralesbravo.com/prevision",
    },
    openGraph: {
        title: "Previsión Funeraria | Tranquilidad para tu familia",
        description: "Congela precios hoy y evita problemas a futuro. Conoce nuestros planes de previsión totalmente transferibles.",
        url: "https://funeralesbravo.com/prevision",
        type: "website",
    }
};

const schemaPrevision = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Previsión Funeraria",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Funerales Bravo",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tapachula",
            "addressRegion": "Chiapas"
        }
    },
    "description": "Planes de previsión funeraria a futuro con esquemas de pago flexibles y cobertura transferible a familiares."
};

export default function PrevisionPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPrevision) }}
            />
            <PrevisionClient />
        </>
    );
}