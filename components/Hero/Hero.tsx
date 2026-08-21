"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

interface HeroProps {
    titulo: string;
    paginaActual: string;
    colorAcento?: string;
}

export default function Hero({ titulo, paginaActual, colorAcento = "var(--carbon)" }: HeroProps) {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observador = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add(styles.visible);
                        observador.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observador.observe(heroRef.current);
        }

        return () => observador.disconnect();
    }, []);

    return (
        <header className={styles.heroWrapper} ref={heroRef}>
            <div className={styles.heroContenedor}>

                <nav aria-label="Breadcrumb" className={styles.breadcrumbsNav}>
                    <ol className={styles.breadcrumbsList}>
                        <li className={styles.breadcrumbItem}>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li aria-hidden="true" className={styles.separador}>/</li>
                        <li className={styles.breadcrumbItem} aria-current="page">
                            <span className={styles.actual}>{paginaActual}</span>
                        </li>
                    </ol>
                </nav>

                <div className={styles.heroInferior}>
                    <h1
                        className={styles.heroTitulo}
                        style={{ color: colorAcento }}
                    >
                        {titulo}
                    </h1>

                    <div
                        className={styles.lineaAnimada}
                        aria-hidden="true"
                        style={{ backgroundColor: `color-mix(in srgb, ${colorAcento} 20%, transparent)` }}
                    ></div>
                </div>

            </div>
        </header>
    );
}