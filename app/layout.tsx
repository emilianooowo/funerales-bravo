import type { Metadata } from "next";
import { Manrope, Bodoni_Moda, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--fuente-base",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--fuente-alt-1",
  display: "swap",
  style: ['normal', 'italic'],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fuente-alt-2",
  display: "swap",
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://funeralesbravo.com"),

  title: {
    default: "Funerales Bravo | Funeraria 24 Horas en Tapachula",
    template: "%s | Funerales Bravo Tapachula"
  },

  description: "Atención inmediata 24/7. En Funerales Bravo brindamos apoyo, respeto y tranquilidad a su familia. Servicios funerarios integrales, velación, cremación, previsión y traslados en Tapachula, Chiapas.",

  keywords: [
    "funeraria en Tapachula",
    "servicios funerarios Tapachula",
    "funeraria 24 horas Chiapas",
    "emergencias funerarias Tapachula",
    "Funerales Bravo",
    "velatorios en Tapachula",
    "cremación de cuerpos",
    "traslados funerarios nacionales",
    "planes de previsión funeraria",
    "arreglos florales para funerales",
    "venta de ataúdes y urnas",
    "cremación de mascotas Tapachula",
    "Cremapets"
  ],

  authors: [{ name: "Funerales Bravo" }],
  creator: "Funerales Bravo",
  publisher: "Funerales Bravo",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://funeralesbravo.com",
    siteName: "Funerales Bravo",
    title: "Funerales Bravo | Servicios Funerarios en Tapachula",
    description: "Atención inmediata 24/7. Servicios funerarios, cremación y traslados con la máxima empatía y profesionalismo en Tapachula, Chiapas.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Fachada de Funerales Bravo",
      },
    ],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${manrope.variable} ${bodoniModa.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Funerales Bravo" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body className="min-h-full flex flex-col bg-[var(--fondo-claro)]" suppressHydrationWarning>
        <Header />

        <main className="flex-1 flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}