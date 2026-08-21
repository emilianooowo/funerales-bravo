"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Servicios.module.css";
import Hero from "@/components/Hero/Hero";
import { listaServicios } from "@/data/servicios";

export default function ServiciosClient() {
    const refsElementos = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observador = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add(styles.visible);
                    } else {
                        entrada.target.classList.remove(styles.visible);
                    }
                });
            },
            { threshold: 0.15 }
        );

        refsElementos.current.forEach((ref) => {
            if (ref) observador.observe(ref);
        });

        return () => observador.disconnect();
    }, []);

    const agregarRef = (el: HTMLElement | null) => {
        if (el && !refsElementos.current.includes(el)) {
            refsElementos.current.push(el);
        }
    };

    const serviciosLista = listaServicios.filter(s => !s.esGrid);
    const serviciosGrid = listaServicios.filter(s => s.esGrid);

    return (
        <main className={styles.paginaServicios}>

            <Hero
                titulo="Servicios"
                paginaActual="Servicios"
                colorAcento="var(--carbon)"
            />

            <section className={styles.seccionLista}>
                <div className={styles.contenedorLista}>
                    {serviciosLista.map((servicio, index) => {
                        const contenido = (
                            <>
                                <div className={styles.listaImagenWrapper}>
                                    <Image
                                        src={servicio.imagenPrincipal}
                                        alt={servicio.titulo}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 300px"
                                        className={styles.imagenFija}
                                        priority={index === 0}
                                    />
                                </div>
                                <div className={styles.listaContenido}>
                                    <h2 className={styles.listaTitulo}>{servicio.titulo}</h2>
                                    <div className={styles.listaHighlights}>
                                        {servicio.highlights?.map((highlight, i) => (
                                            <span key={i}>
                                                {highlight}
                                                {i < (servicio.highlights?.length ?? 0) - 1 && (
                                                    <span className={styles.bullet}>&bull;</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                    <p className={styles.listaDescripcion}>{servicio.descripcion}</p>
                                </div>
                                <div className={styles.listaCta}>
                                    <ArrowRight size={30} strokeWidth={1} className={styles.iconoFlecha} />
                                </div>
                            </>
                        );

                        return servicio.externo ? (
                            <a
                                key={servicio.id}
                                href={servicio.enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.filaServicio} ${styles.escalaAnimacion}`}
                                ref={agregarRef}
                            >
                                {contenido}
                            </a>
                        ) : (
                            <Link
                                key={servicio.id}
                                href={servicio.enlace || "#"}
                                className={`${styles.filaServicio} ${styles.escalaAnimacion}`}
                                ref={agregarRef}
                            >
                                {contenido}
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section id="servicios-secundarios" className={styles.seccionGridSecundario}>
                <div className={styles.contenedorGrid}>
                    {serviciosGrid.map((servicio) => (
                        <article
                            key={servicio.id}
                            className={`${styles.tarjetaGrid} ${styles.escalaAnimacion}`}
                            ref={agregarRef}
                        >
                            <div className={styles.gridImagenWrapper}>
                                <Image
                                    src={servicio.imagenPrincipal}
                                    alt={servicio.titulo}
                                    fill
                                    sizes="(max-width: 900px) 100vw, 25vw"
                                    className={styles.imagenFija}
                                />
                            </div>
                            <div className={styles.gridContenido}>
                                <h3 className={styles.gridTitulo}>{servicio.titulo}</h3>
                                <p className={styles.gridDescripcion}>{servicio.descripcion}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

        </main>
    );
}