"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import estilos from "./HeroSection.module.css";

const diapositivas = [
    {
        id: 1,
        titulo: "Proteja Hoy a Quienes Más Ama",
        descripcion: "Anticípese a los imprevistos con un plan de previsión funeraria que protege a su familia de decisiones difíciles y gastos inesperados.",
        ctaTexto: "Conocer Planes",
        ctaEnlace: "/prevision-funeraria",
        imagen: "/images/hero-prevision.jpg",
    },
    {
        id: 2,
        titulo: "Arreglos Florales para un Último Homenaje",
        descripcion: "Coronas, cruces y arreglos florales elaborados con calidad y puntualidad para expresar respeto, cariño y gratitud en cada despedida.",
        ctaTexto: "Ver Florería",
        ctaEnlace: "/floreria",
        imagen: "/images/hero-floreria.webp",
    },
    {
        id: 3,
        titulo: "Cremación de Mascotas con Respeto y Dignidad",
        descripcion: "Honre la memoria de ese compañero incondicional con un servicio especializado de cremación que brinda acompañamiento en cada paso.",
        ctaTexto: "Conocer Cremapets",
        ctaEnlace: "/cremapets",
        imagen: "/images/hero-cremapets.webp",
    },
    {
        id: 4,
        titulo: "Un Lugar de Descanso Permanente",
        descripcion: "Cementerio Bravo ofrece espacios diseñados para preservar el recuerdo de sus seres queridos en un entorno de paz, cuidado y serenidad.",
        ctaTexto: "Conocer Cementerio",
        ctaEnlace: "/servicios/cementerio-bravo",
        imagen: "/images/hero-cementerio.webp",
    },
    {
        id: 5,
        titulo: "Más de 70 Años Acompañando a las Familias",
        descripcion: "Nuestra experiencia y compromiso nos han convertido en una de las empresas funerarias de mayor confianza en Tapachula y la región.",
        ctaTexto: "Conózcanos",
        ctaEnlace: "/nosotros",
        imagen: "/images/hero-experiencia.webp",
    }
];

export default function HeroSection() {
    const [actual, setActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setActual((prev) => (prev === diapositivas.length - 1 ? 0 : prev + 1));
        }, 7000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <section className={estilos.hero}>
            {diapositivas.map((diapositiva, index) => {
                const esActiva = index === actual;

                return (
                    <div
                        key={diapositiva.id}
                        className={`${estilos.diapositiva} ${esActiva ? estilos.activa : ""}`}
                        aria-hidden={!esActiva}
                    >
                        <div className={estilos.fondoImagen}>
                            <Image
                                src={diapositiva.imagen}
                                alt={diapositiva.titulo}
                                fill
                                priority={index === 0}
                                className={estilos.imagen}
                                sizes="100vw"
                            />
                            <div className={estilos.overlay}></div>
                        </div>

                        <div className={estilos.contenido}>
                            <div className={estilos.contenedorTexto}>
                                <h1 className={estilos.titulo}>{diapositiva.titulo}</h1>
                                <p className={estilos.descripcion}>{diapositiva.descripcion}</p>
                                <Link href={diapositiva.ctaEnlace} className={estilos.cta}>
                                    {diapositiva.ctaTexto}
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}

            <div className={estilos.indicadores}>
                {diapositivas.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActual(index)}
                        className={`${estilos.punto} ${index === actual ? estilos.puntoActivo : ""}`}
                        aria-label={`Ir a la diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}