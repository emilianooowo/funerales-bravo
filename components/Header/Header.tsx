"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import estilos from "./Header.module.css";

const navegacionPrincipal = [
    { etiqueta: "Inicio", href: "/" },
    { etiqueta: "Cremapets", href: "/cremapets" },
    { etiqueta: "Florería", href: "https://floreriabravo.com.mx", externo: true, nuevo: true },
    { etiqueta: "Contacto", href: "/contacto" }
];

const gruposServicios = [
    {
        titulo: "Servicios funerarios",
        links: [
            { etiqueta: "Florería", href: "https://floreriabravo.com.mx", externo: true, nuevo: true },
            { etiqueta: "Previsión funeraria", href: "/servicios#prevision-funeraria" },
            { etiqueta: "Traslados nacionales", href: "/servicios#traslados-nacionales" },
            { etiqueta: "Urnas personalizadas", href: "/servicios#urnas-personalizadas" },
        ]
    },
    {
        titulo: "Velación y Cremación",
        links: [
            { etiqueta: "Salas de velación", href: "/servicios#salas-de-velacion" },
            { etiqueta: "Velación a domicilio", href: "/servicios#velacion-a-domicilio" },
            { etiqueta: "Servicio de cremación", href: "/servicios#servicio-cremacion" },
            { etiqueta: "Cremapets", href: "/cremapets" },
        ]
    },
    {
        titulo: "Cementerio Privado",
        links: [
            { etiqueta: "Cementerio Bravo", href: "/servicios#cementerio-bravo" },
            { etiqueta: "Columbario", href: "/servicios#cementerio-bravo" },
        ]
    }
];

const TELEFONO_EMERGENCIA = "529622361377";
const TELEFONO_VISIBLE = "962 236 1377";

function IconoFlecha({ abierto }: { abierto: boolean }) {
    return (
        <svg className={`${estilos.flecha} ${abierto ? estilos.flechaAbierta : ""}`} aria-hidden="true" viewBox="0 0 24 24">
            <path d="m7 10 5 5 5-5" />
        </svg>
    );
}

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
    const refBotonServicios = useRef<HTMLButtonElement>(null);
    const refBotonMenu = useRef<HTMLButtonElement>(null);
    const refBotonCerrar = useRef<HTMLButtonElement>(null);

    const [conScroll, setConScroll] = useState(false);
    const [serviciosAbiertos, setServiciosAbiertos] = useState(false);
    const [movilAbierto, setMovilAbierto] = useState(false);
    const [acordeonServiciosMovil, setAcordeonServiciosMovil] = useState(false);

    const esInicio = rutaActual === "/";
    const transparente = esInicio && !conScroll;

    const cerrarMenus = () => {
        setServiciosAbiertos(false);
        setMovilAbierto(false);
        setAcordeonServiciosMovil(false);
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
        const manejarClicFuera = (e: MouseEvent) => {
            if (serviciosAbiertos && refEncabezado.current && !refEncabezado.current.contains(e.target as Node)) {
                setServiciosAbiertos(false);
            }
        };
        document.addEventListener("mousedown", manejarClicFuera);
        return () => document.removeEventListener("mousedown", manejarClicFuera);
    }, [serviciosAbiertos]);

    useEffect(() => {
        const manejarTecla = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            if (movilAbierto) {
                setMovilAbierto(false);
                setAcordeonServiciosMovil(false);
                refBotonMenu.current?.focus();
            } else if (serviciosAbiertos) {
                setServiciosAbiertos(false);
                refBotonServicios.current?.focus();
            }
        };
        document.addEventListener("keydown", manejarTecla);
        return () => document.removeEventListener("keydown", manejarTecla);
    }, [movilAbierto, serviciosAbiertos]);

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

    const enlacesSecundarios = navegacionPrincipal.slice(1);

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
                            <Link
                                href="/"
                                className={`${estilos.enlace} ${estaActivo("/") ? estilos.activo : ""}`}
                                aria-current={estaActivo("/") ? "page" : undefined}
                            >
                                Inicio
                            </Link>

                            <div className={estilos.contenedorSubmenu}>
                                <button
                                    ref={refBotonServicios}
                                    type="button"
                                    className={`${estilos.enlace} ${rutaActual.startsWith("/servicios") || serviciosAbiertos ? estilos.activo : ""}`}
                                    onClick={() => setServiciosAbiertos(!serviciosAbiertos)}
                                    aria-haspopup="true"
                                    aria-expanded={serviciosAbiertos}
                                    aria-controls="submenu-servicios"
                                >
                                    Servicios <IconoFlecha abierto={serviciosAbiertos} />
                                </button>

                                <div id="submenu-servicios" className={`${estilos.submenu} ${serviciosAbiertos ? estilos.submenuAbierto : ""}`}>
                                    <div className={estilos.submenuLayout}>

                                        {gruposServicios.map((grupo) => (
                                            <div key={grupo.titulo} className={estilos.grupoSubmenu}>
                                                <span className={estilos.tituloGrupo}>{grupo.titulo}</span>
                                                {grupo.links.map((link) => (
                                                    <Link
                                                        key={link.etiqueta} // Llave corregida usando la etiqueta
                                                        href={link.href}
                                                        className={estilos.enlaceSubmenu}
                                                        onClick={cerrarMenus}
                                                        target={link.externo ? "_blank" : undefined}
                                                        rel={link.externo ? "noopener noreferrer" : undefined}
                                                    >
                                                        {link.etiqueta}
                                                        {link.nuevo && <span className={estilos.etiquetaNuevo}>Nuevo</span>}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}

                                        <div className={estilos.verTodosServiciosWrapper}>
                                            <Link
                                                href="/servicios"
                                                className={estilos.verTodosServiciosLink}
                                                onClick={cerrarMenus}
                                            >
                                                Ver todos los servicios &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {enlacesSecundarios.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${estilos.enlace} ${estaActivo(item.href) ? estilos.activo : ""}`}
                                    target={item.externo ? "_blank" : undefined}
                                    rel={item.externo ? "noopener noreferrer" : undefined}
                                    aria-current={!item.externo && estaActivo(item.href) ? "page" : undefined}
                                >
                                    {item.etiqueta}
                                    {item.nuevo && <span className={estilos.etiquetaNuevo}>Nuevo</span>}
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
                        <Link href="/" onClick={cerrarMenus} className={estilos.enlaceMovilPrincipal}>
                            Inicio
                        </Link>

                        <button
                            className={estilos.botonAcordeonMovil}
                            onClick={() => setAcordeonServiciosMovil(!acordeonServiciosMovil)}
                            aria-expanded={acordeonServiciosMovil}
                            aria-controls="acordeon-servicios-movil"
                        >
                            Servicios <IconoFlecha abierto={acordeonServiciosMovil} />
                        </button>

                        <div id="acordeon-servicios-movil" className={`${estilos.contenedorAcordeonMovil} ${acordeonServiciosMovil ? estilos.acordeonAbierto : ""}`}>
                            <div className={estilos.interiorAcordeonMovil}>
                                <div className={estilos.tarjetaMovil}>

                                    <Link
                                        href="/servicios"
                                        className={estilos.verTodosServiciosLinkMovil}
                                        onClick={cerrarMenus}
                                    >
                                        Ver todos los servicios &rarr;
                                    </Link>

                                    {gruposServicios.map((grupo) => (
                                        <div key={grupo.titulo} className={estilos.grupoMovil}>
                                            <span className={estilos.tituloMovil}>{grupo.titulo}</span>
                                            {grupo.links.map((link) => (
                                                <Link
                                                    key={link.etiqueta} // Llave corregida en el map de móvil también
                                                    href={link.href}
                                                    onClick={cerrarMenus}
                                                    className={estilos.enlaceSecundario}
                                                    target={link.externo ? "_blank" : undefined}
                                                    rel={link.externo ? "noopener noreferrer" : undefined}
                                                >
                                                    {link.etiqueta}
                                                    {link.nuevo && <span className={estilos.etiquetaNuevo}>Nuevo</span>}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navegacionPrincipal.slice(1).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={cerrarMenus}
                                className={estilos.enlaceMovilPrincipal}
                                target={item.externo ? "_blank" : undefined}
                                rel={item.externo ? "noopener noreferrer" : undefined}
                            >
                                {item.etiqueta}
                                {item.nuevo && <span className={estilos.etiquetaNuevo}>Nuevo</span>}
                            </Link>
                        ))}
                    </nav>
                </aside>
            </header>

            {/* Compensa el `position: fixed` del header en cualquier ruta que no sea
                Inicio (ahí el Hero debe empezar en y=0, debajo del header transparente) */}
            {!esInicio && <div className={estilos.espaciador} data-scrolled={conScroll} aria-hidden="true" />}
        </>
    );
}