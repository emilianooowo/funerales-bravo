"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Cremapets.module.css";
import { Phone, ChevronLeft, ChevronRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const caracteristicas = [
    {
        img: "/images/cremapets/urna.webp",
        titulo: "Urna personalizada",
        desc: "Elige una urna para conservar las cenizas de tu mascota en casa."
    },
    {
        img: "/images/cremapets/traslado.png",
        titulo: "Traslado de tu mascota",
        desc: "Recogemos a tu mascota dentro y fuera de la ciudad, de 7 am a 8 pm."
    },
    {
        img: "/images/cremapets/certificado.jpg",
        titulo: "Certificado de cremación",
        desc: "Recibe el documento que acredita la cremación de tu mascota."
    },
    {
        img: "/images/cremapets/cremapets-03.jpg",
        titulo: "Fotografía enmarcada",
        desc: "Conserva una fotografía de tu mascota como recuerdo en casa."
    },
    {
        img: "/images/cremapets/recuerdo.png",
        titulo: "Recuerdo conmemorativo",
        desc: "Un recuerdo físico para conservar junto con las cenizas de tu mascota."
    },
    {
        img: "/images/cremapets/cenizas.jpg",
        titulo: "Entrega de cenizas",
        desc: "Recibe las cenizas de tu mascota al día siguiente de la cremación."
    },
];

export default function CremapetsClient() {
    const [esVisible, setEsVisible] = useState(false);
    const seccionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observador = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setEsVisible(true);
                    observador.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (seccionRef.current) {
            observador.observe(seccionRef.current);
        }

        return () => observador.disconnect();
    }, []);

    const hacerScroll = (direccion: "izquierda" | "derecha") => {
        if (scrollRef.current) {
            const cantidad = direccion === "izquierda" ? -424 : 424;
            scrollRef.current.scrollBy({ left: cantidad, behavior: "smooth" });
        }
    };

    return (
        <main className={styles.paginaCremapets}>

            <section className={styles.heroCremapets}>
                <div className={styles.heroContenedor}>
                    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                        <Link href="/">Inicio</Link>
                        <span className={styles.separador}>/</span>
                        <span className={styles.actual}>Cremapets</span>
                    </nav>

                    <h1 className={styles.heroTitulo}>Cremapets</h1>
                </div>
            </section>

            <section className={styles.seccionServicios}>
                <div
                    className={`${styles.carruselEnvoltura} ${esVisible ? styles.animarEntrada : ""}`}
                    ref={seccionRef}
                >
                    <div className={styles.carruselServicios} ref={scrollRef}>

                        <div className={styles.espaciadorTarjeta} aria-hidden="true"></div>

                        {caracteristicas.map((item, index) => (
                            <article key={index} className={styles.tarjetaDetalle}>
                                <div className={styles.tarjetaImagenWrapper}>
                                    <Image
                                        src={item.img}
                                        alt={item.titulo}
                                        fill
                                        sizes="(max-width: 900px) 320px, 400px"
                                        className={styles.tarjetaImagen}
                                        priority={index === 0}
                                    />
                                </div>
                                <div className={styles.tarjetaCuerpo}>
                                    <h3 className={styles.tarjetaTitulo}>{item.titulo}</h3>
                                    <p className={styles.tarjetaTexto}>{item.desc}</p>
                                </div>
                            </article>
                        ))}

                        {/* Espaciador final para evitar cortes en el lado derecho */}
                        <div className={styles.espaciadorTarjeta} aria-hidden="true"></div>

                    </div>

                    {/* Botones de Navegación Centrados */}
                    <div className={styles.controlesCarrusel}>
                        <button onClick={() => hacerScroll("izquierda")} className={styles.botonCarrusel} aria-label="Anterior">
                            <ChevronLeft size={24} strokeWidth={1.5} />
                        </button>
                        <button onClick={() => hacerScroll("derecha")} className={styles.botonCarrusel} aria-label="Siguiente">
                            <ChevronRight size={24} strokeWidth={1.5} />
                        </button>
                    </div>

                </div>
            </section>

            <section className={styles.seccionPlanes}>
                <div className={styles.contenedorPlanes}>

                    <h2 className={styles.tituloSeccion}>Nuestros Planes de Despedida</h2>

                    <div className={styles.gridPlanes}>

                        <article className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={`${styles.cardTitle} ${styles.titleIntegral}`}>Plan Integral</h3>
                                <div className={styles.cardPriceBlock}>
                                    Desde $2,250
                                </div>
                                <p className={styles.cardSubtitle}>
                                    El homenaje más completo. Nos encargamos de todo el proceso por ti para que te despidas sin preocupaciones.
                                </p>

                                <hr className={styles.cardDivider} />

                                <ul className={styles.cardFeatures}>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Servicio de cremación</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Traslado local (7 am - 8 pm)</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Traslado foráneo (costo extra)</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Urna personalizada</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Certificado de cremación</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Fotografía enmarcada</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Recuerdo a la memoria</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkIntegral} /> Entrega de cenizas al siguiente día</li>
                                </ul>

                                <div className={styles.cardSpacer}></div>
                                <a href="tel:+529622361377" className={`${styles.cardButton} ${styles.btnIntegral}`}>Solicitar Integral</a>
                            </div>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={`${styles.cardTitle} ${styles.titleBasico}`}>Plan Básico</h3>
                                <div className={styles.cardPriceBlock}>
                                    Desde $1,600
                                </div>
                                <p className={styles.cardSubtitle}>
                                    Una alternativa sencilla, digna y ecológica. Ideal si prefieres encargarte de los traslados.
                                </p>

                                <hr className={styles.cardDivider} />

                                <ul className={styles.cardFeatures}>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkBasico} /> Servicio de cremación</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkBasico} /> Bolsa artesanal de yute</li>
                                    <li><Check size={18} strokeWidth={2.5} className={styles.checkBasico} /> Entrega en la funeraria</li>
                                </ul>

                                <div className={styles.cardSpacer}></div>
                                <a href="tel:+529622361377" className={`${styles.cardButton} ${styles.btnBasico}`}>Solicitar Básico</a>
                            </div>
                        </article>

                        <article className={`${styles.card} ${styles.cardNoBanner}`}>
                            <div className={styles.cardContent}>
                                <h3 className={`${styles.cardTitle} ${styles.titleTarifas}`}>Tarifas por peso</h3>
                                <p className={styles.cardSubtitle}>
                                    El precio final se calcula con base en los kilogramos de tu compañero incondicional.
                                </p>

                                <hr className={styles.cardDivider} />

                                <ul className={styles.cardFeatures}>
                                    <li className={styles.weightRow}>
                                        <span className={styles.weightTitle}>Hasta 10 kg</span>
                                        <div className={styles.weightPrices}>
                                            <span className={styles.weightIntegralValue}>Integral: $2,250</span>
                                            <span>Básico: $1,600</span>
                                        </div>
                                    </li>
                                    <li className={styles.weightRow}>
                                        <span className={styles.weightTitle}>De 11 a 20 kg</span>
                                        <div className={styles.weightPrices}>
                                            <span className={styles.weightIntegralValue}>Integral: $2,850</span>
                                            <span>Básico: $2,100</span>
                                        </div>
                                    </li>
                                    <li className={styles.weightRow}>
                                        <span className={styles.weightTitle}>De 21 a 30 kg</span>
                                        <div className={styles.weightPrices}>
                                            <span className={styles.weightIntegralValue}>Integral: $3,950</span>
                                            <span>Básico: $3,300</span>
                                        </div>
                                    </li>
                                    <li className={styles.weightRow}>
                                        <span className={styles.weightTitle}>De 31 a 40 kg</span>
                                        <div className={styles.weightPrices}>
                                            <span className={styles.weightIntegralValue}>Integral: $4,650</span>
                                            <span>Básico: $4,000</span>
                                        </div>
                                    </li>
                                    <li className={styles.weightRow}>
                                        <span className={styles.weightTitle}>Más de 40 kg</span>
                                        <div className={styles.weightPrices}>
                                            <span className={styles.weightIntegralValue}>Integral: $5,650</span>
                                            <span>Básico: $5,000</span>
                                        </div>
                                    </li>
                                </ul>

                                <div className={styles.cardSpacer}></div>
                                <a href="tel:+529622361377" className={`${styles.cardButton} ${styles.btnTarifas}`}>Contactar ahora</a>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

            <section className={styles.ctaCremapets}>
                <div className={styles.ctaContenedor}>
                    <div className={styles.ctaTexto}>
                        <h2 className={styles.ctaTitulo}>¿Necesitas resolverlo ahora?</h2>
                        <p className={styles.ctaDescripcion}>
                            Agenda el servicio para tu mascota y recibe atención inmediata.
                        </p>
                    </div>

                    <a href="tel:+529622361377" className={styles.ctaBoton}>
                        <Phone size={24} strokeWidth={2} className={styles.ctaIcono} />
                        <span>Llamar al 962 236 1377</span>
                    </a>
                </div>
            </section>

        </main>
    );
}