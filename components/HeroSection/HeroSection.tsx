"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import estilos from "./HeroSection.module.css";

const imagenesFondo = [
    "/images/hero/hero-prev.jpg",
    "/images/hero/hero-floreria.jpg",
    "/images/hero/hero-cremapets.jpg",
    "/images/hero/hero-cementerio.webp",
    "/images/hero/hero-experiencia.webp"
];

export default function HeroSection() {
    const [actual, setActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setActual((prev) => (prev === imagenesFondo.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <section className={estilos.hero}>
            <div className={estilos.fondoContenedor}>
                {imagenesFondo.map((imagen, index) => {
                    const esActiva = index === actual;
                    return (
                        <div
                            key={index}
                            className={`${estilos.diapositiva} ${esActiva ? estilos.activa : ""}`}
                            aria-hidden={!esActiva}
                        >
                            <Image
                                src={imagen}
                                alt="Instalaciones Funerales Bravo"
                                fill
                                priority={index === 0}
                                className={estilos.imagen}
                                sizes="100vw"
                            />
                        </div>
                    );
                })}
                <div className={estilos.overlay}></div>
            </div>

            <div className={estilos.contenido}>
                <div className={estilos.contenedorTexto}>
                    <h1 className={estilos.titulo}>
                        Nos encargamos de todo para que tú solo acompañes a los tuyos.
                    </h1>
                    <p className={estilos.descripcion}>
                        Desde servicios tradicionales hasta cremación de mascotas, en Funerales Bravo estamos listos para brindarte paz y asistencia en este momento.
                    </p>
                    <div className={estilos.ctaGroup}>
                        <a href="tel:529622361377" className={estilos.ctaPrimario}>
                            Necesito asistencia ahora
                        </a>
                        <a href="/servicios" className={estilos.ctaSecundario}>
                            Ver servicios
                        </a>
                    </div>
                </div>
            </div>

            {/* Indicador minimalista opcional */}
            <div className={estilos.progresoLinea}>
                <div
                    className={estilos.progresoLlenado}
                    style={{ width: `${((actual + 1) / imagenesFondo.length) * 100}%` }}
                ></div>
            </div>
        </section>
    );
}