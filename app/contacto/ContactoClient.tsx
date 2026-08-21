"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero/Hero";
import styles from "./Contacto.module.css";

const IconoFacebook = ({ size = 28, strokeWidth = 1.5 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

export default function ContactoClient() {
    const refsElementos = useRef<(HTMLElement | null)[]>([]);

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

    return (
        <main className={styles.paginaContacto}>

            <Hero
                titulo="Contáctanos"
                paginaActual="Contacto"
                colorAcento="var(--carbon)"
            />

            <section className={styles.seccionInfo}>
                <div className={styles.contenedorGrid}>

                    <article className={styles.tarjetaInfo} ref={agregarRef}>
                        <div className={styles.tarjetaEncabezado}>
                            <Phone size={20} strokeWidth={1.5} />
                            <h3 className={styles.tarjetaTitulo}>Líneas de Atención</h3>
                        </div>
                        <div className={styles.tarjetaContenido}>
                            <div className={styles.bloqueInfo}>
                                <span className={styles.etiqueta}>Línea de Emergencia (24/7)</span>
                                <a href="tel:+529622361377" className={styles.enlaceDestacado}>962-236-1377</a>
                            </div>
                            <div className={styles.bloqueInfo}>
                                <span className={styles.etiqueta}>Oficina</span>
                                <a href="tel:+529625895880" className={styles.enlaceTexto}>962-589-5880</a>
                            </div>
                            <div className={styles.bloqueInfo}>
                                <span className={styles.etiqueta}>Cobranza</span>
                                <a href="tel:+529621877187" className={styles.enlaceTexto}>962-187-7187</a>
                            </div>
                        </div>
                    </article>

                    <article className={styles.tarjetaInfo} ref={agregarRef}>
                        <div className={styles.tarjetaEncabezado}>
                            <MapPin size={20} strokeWidth={1.5} />
                            <h3 className={styles.tarjetaTitulo}>Nuestra Ubicación</h3>
                        </div>
                        <div className={styles.tarjetaContenido}>
                            <div className={styles.bloqueInfo}>
                                <span className={styles.etiqueta}>Dirección Principal</span>
                                <address className={styles.textoDireccion}>
                                    Central Oriente 82 Prol.<br />
                                    Tapachula, Chiapas.
                                </address>
                            </div>
                            <a href="#mapa" className={styles.enlaceAccion}>Ver en el mapa &darr;</a>
                        </div>
                    </article>

                    <article className={styles.tarjetaInfo} ref={agregarRef}>
                        <div className={styles.tarjetaEncabezado}>
                            <Mail size={20} strokeWidth={1.5} />
                            <h3 className={styles.tarjetaTitulo}>Correo Electrónico</h3>
                        </div>
                        <div className={styles.tarjetaContenido}>
                            <div className={styles.bloqueInfo}>
                                <span className={styles.etiqueta}>Atención al Cliente</span>
                                <a href="mailto:serviciosfunerariosbravo@gmail.com" className={styles.enlaceTexto}>
                                    serviciosfunerariosbravo@gmail.com
                                </a>
                            </div>
                            <div className={styles.bloqueInfo}>
                                <span className={styles.etiqueta}>Contacto General</span>
                                <a href="mailto:funerales.bravo@hotmail.com" className={styles.enlaceTexto}>
                                    funerales.bravo@hotmail.com
                                </a>
                            </div>
                        </div>
                    </article>

                </div>
            </section>

            <section className={styles.bannerFacebook} ref={agregarRef}>
                <div className={styles.bannerContenedor}>
                    <div className={styles.bannerTextoWrapper}>
                        <IconoFacebook size={36} strokeWidth={1.5} />
                        <div>
                            <h2 className={styles.bannerTitulo}>Comunidad en Facebook</h2>
                            <p className={styles.bannerTexto}>
                                Síguenos para conocer más sobre nuestro trabajo, servicios y consejos de duelo.
                            </p>
                        </div>
                    </div>
                    <a href="https://www.facebook.com/FuneralesBravoTapachula" target="_blank" rel="noopener noreferrer" className={styles.botonBanner}>
                        Visitar Página <ArrowUpRight size={18} />
                    </a>
                </div>
            </section>

            <section id="mapa" className={styles.seccionMapa} ref={agregarRef}>
                <div className={styles.contenedorMapa}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7605.2531489881385!2d-92.25470563280179!3d14.897529801057127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858e0f055813b593%3A0xdcc6d8140da3a316!2sFunerales%20Bravo!5e0!3m2!1sen!2smx!4v1786999792257!5m2!1sen!2smx"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Funerales Bravo en Google Maps"
                        className={styles.iframeGoogle}
                    ></iframe>
                </div>
            </section>

        </main>
    );
}