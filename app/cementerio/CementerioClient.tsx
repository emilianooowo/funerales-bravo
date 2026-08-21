"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Hero from "@/components/Hero/Hero";
import styles from "./Cementerio.module.css";
import { categoriasFiltro, galeriaImagenes } from "@/data/cementerio";

export default function CementerioClient() {
    const [filtroActivo, setFiltroActivo] = useState("todos");
    const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null);
    const refsElementos = useRef<(HTMLElement | null)[]>([]);

    const imagenesFiltradas = filtroActivo === "todos"
        ? galeriaImagenes
        : galeriaImagenes.filter(img => img.cat === filtroActivo);

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
            { threshold: 0.1 }
        );

        refsElementos.current.forEach((ref) => {
            if (ref) observador.observe(ref);
        });

        return () => observador.disconnect();
    }, [filtroActivo]);

    const agregarRef = (el: HTMLElement | null) => {
        if (el && !refsElementos.current.includes(el)) {
            refsElementos.current.push(el);
        }
    };

    useEffect(() => {
        if (imagenAmpliada) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [imagenAmpliada]);

    return (
        <main className={styles.paginaCementerio}>

            <Hero
                titulo="Cementerio Bravo"
                paginaActual="Cementerio"
                colorAcento="var(--carbon)"
            />

            <section className={styles.seccionImagenDestacada}>
                <div
                    className={`${styles.contenedorImagenAlta} ${styles.fadeAnimacion}`}
                    ref={agregarRef}
                >
                    <Image
                        src="/images/cementerio/cementerio-03.jpeg"
                        alt="Vista de las instalaciones del Cementerio Bravo"
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        className={styles.imagenAlta}
                    />
                    <div className={styles.gradienteImagenAlta}></div>
                    <div className={styles.contenidoImagenAlta}>
                        <h2 className={styles.tituloSeoH2}>
                            Asegura la tranquilidad de tu familia resolviendo el mañana, hoy.
                        </h2>
                    </div>
                </div>
            </section>

            <section className={styles.seccionEspacios}>
                <div className={styles.contenedor}>
                    <div
                        className={`${styles.encabezadoEspacios} ${styles.fadeAnimacion}`}
                        ref={agregarRef}
                    >
                        <h2 className={styles.tituloEspacios}>Nuestros Espacios</h2>
                        <p className={styles.descripcionEspacios}>
                            Opciones diseñadas para honrar la memoria de tu ser querido, brindando un lugar de descanso digno, seguro y rodeado de paz.
                        </p>
                    </div>

                    <div className={styles.gridEspacios}>

                        <article className={`${styles.tarjetaEspacio} ${styles.fadeAnimacion}`} ref={agregarRef}>
                            <div className={styles.espacioImagenWrapper}>
                                <Image
                                    src="/images/cementerio/espacio-01.jpeg"
                                    alt="Espacio ecológico"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 33vw"
                                    className={styles.espacioImagen}
                                />
                            </div>
                            <div className={styles.espacioContenido}>
                                <h3 className={styles.espacioTitulo}>Espacio Ecológico</h3>
                                <p className={styles.espacioDescripcion}>
                                    Un espacio bajo la superficie del terreno de nuestro cementerio para una persona (entierro tradicional).
                                </p>
                            </div>
                        </article>

                        <article className={`${styles.tarjetaEspacio} ${styles.fadeAnimacion}`} ref={agregarRef}>
                            <div className={styles.espacioImagenWrapper}>
                                <Image
                                    src="/images/cementerio/columbario-01.jpeg"
                                    alt="Columbario"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 33vw"
                                    className={styles.espacioImagen}
                                />
                            </div>
                            <div className={styles.espacioContenido}>
                                <h3 className={styles.espacioTitulo}>Columbario</h3>
                                <p className={styles.espacioDescripcion}>
                                    Espacio empotrado sobre un muro al aire libre, adecuado para el resguardo de una urna donde se contienen las cenizas de una persona fallecida y cremada.
                                </p>
                            </div>
                        </article>

                        <article className={`${styles.tarjetaEspacio} ${styles.fadeAnimacion}`} ref={agregarRef}>
                            <div className={styles.espacioImagenWrapper}>
                                <Image
                                    src="/images/cementerio/banca-01.jpeg"
                                    alt="Banca Ecológica"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 33vw"
                                    className={styles.espacioImagen}
                                />
                            </div>
                            <div className={styles.espacioContenido}>
                                <h3 className={styles.espacioTitulo}>Banca Ecológica</h3>
                                <p className={styles.espacioDescripcion}>
                                    Un espacio bajo la superficie del terreno de nuestro cementerio que incluye un nicho adicional para el resguardo de cenizas o restos.
                                </p>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

            <section className={styles.seccionGaleria}>
                <div className={styles.contenedorGaleria}>

                    <div className={styles.contenedorFiltrosScroll}>
                        <div className={styles.listaPills}>
                            {categoriasFiltro.map((categoria) => (
                                <button
                                    key={categoria.id}
                                    onClick={() => setFiltroActivo(categoria.id)}
                                    className={`${styles.botonPill} ${filtroActivo === categoria.id ? styles.pillActivo : ""}`}
                                >
                                    {categoria.nombre}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.gridGaleria}>
                        {imagenesFiltradas.length > 0 && (
                            imagenesFiltradas.map((img) => (
                                <article
                                    key={img.id}
                                    className={`${styles.tarjetaImagen} ${styles.fadeAnimacion}`}
                                    ref={agregarRef}
                                    onClick={() => setImagenAmpliada(img.src)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 950px) 50vw, 33vw"
                                        className={styles.fotoGrid}
                                    />
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {imagenAmpliada && (
                <div className={styles.modalBlanco} onClick={() => setImagenAmpliada(null)}>
                    <button
                        className={styles.botonCerrarModal}
                        onClick={() => setImagenAmpliada(null)}
                        aria-label="Cerrar imagen"
                    >
                        <X size={32} strokeWidth={1.5} />
                    </button>
                    <div className={styles.contenedorImagenModal} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={imagenAmpliada}
                            alt="Imagen ampliada"
                            fill
                            sizes="100vw"
                            className={styles.fotoModal}
                        />
                    </div>
                </div>
            )}

        </main>
    );
}