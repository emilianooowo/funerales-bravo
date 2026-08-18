"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Servicios.module.css";
import { listaServicios } from "../../data/servicios";

const SeccionServicio = ({ servicio, index }: { servicio: typeof listaServicios[0], index: number }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const seccionRef = useRef<HTMLElement>(null);
    const esFondoAlterno = index % 2 !== 0;

    useEffect(() => {
        const observador = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (seccionRef.current) {
            observador.observe(seccionRef.current);
        }

        return () => observador.disconnect();
    }, []);

    const hacerScroll = (direccion: "izquierda" | "derecha") => {
        if (scrollRef.current) {
            const cantidad = direccion === "izquierda" ? -280 : 280;
            scrollRef.current.scrollBy({ left: cantidad, behavior: "smooth" });
        }
    };

    return (
        <section
            id={servicio.id}
            className={`${styles.seccionServicio} ${esFondoAlterno ? styles.fondoAlterno : ""}`}
            ref={seccionRef}
        >
            <div className={styles.contenedorGrid}>

                <div className={styles.columnaTexto}>
                    <h2 className={styles.titulo}>{servicio.titulo}</h2>
                    <p className={styles.descripcion}>{servicio.descripcion}</p>

                    {servicio.cta && (
                        <div className={styles.ctaDesktop}>
                            {servicio.cta.externo ? (
                                <a href={servicio.cta.enlace} target="_blank" rel="noopener noreferrer" className={styles.botonCta}>
                                    {servicio.cta.texto}
                                </a>
                            ) : (
                                <Link href={servicio.cta.enlace} className={styles.botonCta}>
                                    {servicio.cta.texto}
                                </Link>
                            )}
                        </div>
                    )}

                    <div className={styles.controlesDesktop}>
                        <button onClick={() => hacerScroll("izquierda")} className={styles.botonFlecha} aria-label="Anterior">
                            <ChevronLeft size={22} strokeWidth={1.5} />
                        </button>
                        <button onClick={() => hacerScroll("derecha")} className={styles.botonFlecha} aria-label="Siguiente">
                            <ChevronRight size={22} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                <div className={styles.columnaTarjetas}>
                    <div className={styles.carruselTarjetas} ref={scrollRef}>
                        {servicio.detalles.map((detalle, idx) => (
                            <article key={idx} className={styles.tarjetaDetalle}>
                                <div className={styles.tarjetaImagenWrapper}>
                                    {detalle.imagen && (
                                        <Image
                                            src={detalle.imagen}
                                            alt={detalle.titulo}
                                            fill
                                            className={styles.tarjetaImagen}
                                            sizes="(max-width: 900px) 310px, 360px"
                                            priority={idx === 0}
                                        />
                                    )}

                                </div>
                                <div className={styles.tarjetaCuerpo}>
                                    <h3 className={styles.tarjetaTitulo}>{detalle.titulo}</h3>
                                    <p className={styles.tarjetaTexto}>{detalle.texto}</p>
                                </div>
                            </article>
                        ))}
                        <div className={styles.espaciadorTarjeta} aria-hidden="true"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default function ServiciosClient() {
    return (
        <main className={styles.paginaServicios}>

            <section className={styles.heroServicios}>
                <div className={styles.heroContenedor}>

                    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                        <Link href="/">Inicio</Link>
                        <span className={styles.separador}>/</span>
                        <span className={styles.actual}>Servicios</span>
                    </nav>

                    <h1 className={styles.heroTitulo}>Nuestros Servicios</h1>
                </div>
            </section>

            <div className={styles.stickyNavWrapper}>
                <div className={styles.stickyNavContenedor}>
                    <ul className={styles.stickyNavLista}>
                        {listaServicios.map((servicio) => (
                            <li key={servicio.id}>
                                <a href={`#${servicio.id}`} className={styles.stickyNavLink}>
                                    {servicio.titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.listadoServicios}>
                {listaServicios.map((servicio, index) => (
                    <SeccionServicio key={servicio.id} servicio={servicio} index={index} />
                ))}
            </div>

        </main>
    );
}