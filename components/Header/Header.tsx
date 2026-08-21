"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import estilos from "./Header.module.css";

const navegacionPrincipal = [
    { etiqueta: "Inicio", href: "/" },
    { etiqueta: "Servicios", href: "/servicios" },
    { etiqueta: "Cremapets", href: "/cremapets" },
    { etiqueta: "Florería", href: "https://floreriabravo.com.mx", externo: true },
    { etiqueta: "Previsión funeraria", href: "/prevision" },
    { etiqueta: "Cementerio", href: "/cementerio" },
    { etiqueta: "Contacto", href: "/contacto" }
];

const TELEFONO_EMERGENCIA = "529622361377";
const TELEFONO_VISIBLE = "962 236 1377";

function IconoTelefono() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

export default function Encabezado() {
    const rutaActual = usePathname();
    const refRutaAnterior = useRef(rutaActual);
    const refEncabezado = useRef<HTMLElement>(null);
    const refBotonMenu = useRef<HTMLButtonElement>(null);
    const refBotonCerrar = useRef<HTMLButtonElement>(null);

    const [conScroll, setConScroll] = useState(false);
    const [movilAbierto, setMovilAbierto] = useState(false);

    const esInicio = rutaActual === "/";
    const transparente = esInicio && !conScroll;

    const cerrarMenus = () => {
        setMovilAbierto(false);
    };

    const estaActivo = (href: string) => {
        if (href === "/") return rutaActual === "/";
        return rutaActual.startsWith(href);
    };

    useEffect(() => {
        const manejarScroll = () => setConScroll(window.scrollY > 24);
        manejarScroll();
        window.addEventListener("scroll", manejarScroll, { passive: true });
        return () => window.removeEventListener("scroll", manejarScroll);
    }, []);

    useEffect(() => {
        const manejarTecla = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            if (movilAbierto) {
                setMovilAbierto(false);
                refBotonMenu.current?.focus();
            }
        };
        document.addEventListener("keydown", manejarTecla);
        return () => document.removeEventListener("keydown", manejarTecla);
    }, [movilAbierto]);

    useEffect(() => {
        if (movilAbierto) {
            document.body.style.overflow = "hidden";
            refBotonCerrar.current?.focus();
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [movilAbierto]);

    useEffect(() => {
        if (refRutaAnterior.current !== rutaActual) {
            cerrarMenus();
            refRutaAnterior.current = rutaActual;
        }
    }, [rutaActual]);

    return (
        <>
            <header
                ref={refEncabezado}
                className={estilos.encabezado}
                data-scrolled={conScroll}
                data-transparente={transparente}
            >
                <div className={estilos.envoltura}>
                    <div className={estilos.contenedor}>
                        <div className={estilos.filaSuperior}>
                            <a href={`tel:${TELEFONO_EMERGENCIA}`} className={estilos.contactoRapido}>
                                <IconoTelefono />
                                <span className={estilos.contactoTexto}>
                                    <span className={estilos.contactoEtiqueta}>Atención inmediata</span>
                                    <span className={estilos.contactoNumero}>{TELEFONO_VISIBLE}</span>
                                </span>
                            </a>

                            <div className={estilos.divisoraMovil} aria-hidden="true"></div>

                            <Link href="/" className={estilos.marca} aria-label="Funerales Bravo, ir a inicio">
                                <Image
                                    src="/logos/FB-black.webp"
                                    alt="Funerales Bravo"
                                    width={120}
                                    height={40}
                                    priority
                                    className={estilos.logotipo}
                                />
                            </Link>

                            <div className={estilos.accionesDerecha}>
                                <Link href="/contacto" className={estilos.botonContacto}>
                                    Contactar
                                </Link>

                                <button
                                    ref={refBotonMenu}
                                    type="button"
                                    className={estilos.botonMenu}
                                    onClick={() => setMovilAbierto(!movilAbierto)}
                                    aria-label="Abrir menú"
                                    aria-haspopup="true"
                                    aria-expanded={movilAbierto}
                                    aria-controls="menu-movil"
                                >
                                    <span />
                                    <span />
                                    <span />
                                </button>
                            </div>
                        </div>

                        <div className={estilos.divisora} aria-hidden="true"></div>

                        <nav className={estilos.navegacionEscritorio} aria-label="Navegación principal">
                            {navegacionPrincipal.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${estilos.enlace} ${estaActivo(item.href) ? estilos.activo : ""}`}
                                    target={item.externo ? "_blank" : undefined}
                                    rel={item.externo ? "noopener noreferrer" : undefined}
                                    aria-current={!item.externo && estaActivo(item.href) ? "page" : undefined}
                                >
                                    {item.etiqueta}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <aside
                    id="menu-movil"
                    className={`${estilos.menuMovil} ${movilAbierto ? estilos.menuMovilAbierto : ""}`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú de navegación"
                    inert={!movilAbierto || undefined}
                >
                    <div className={estilos.encabezadoMovil}>
                        <button ref={refBotonCerrar} onClick={cerrarMenus} aria-label="Cerrar menú">×</button>
                    </div>

                    <a href={`tel:${TELEFONO_EMERGENCIA}`} className={estilos.llamarMovil} onClick={cerrarMenus}>
                        <IconoTelefono /> Llamar ahora — Atención 24/7
                    </a>

                    <nav className={estilos.navegacionMovil} aria-label="Navegación móvil">
                        {navegacionPrincipal.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={cerrarMenus}
                                className={estilos.enlaceMovilPrincipal}
                                target={item.externo ? "_blank" : undefined}
                                rel={item.externo ? "noopener noreferrer" : undefined}
                            >
                                {item.etiqueta}
                            </Link>
                        ))}
                    </nav>
                </aside>
            </header>

            {!esInicio && <div className={estilos.espaciador} data-scrolled={conScroll} aria-hidden="true" />}
        </>
    );
}