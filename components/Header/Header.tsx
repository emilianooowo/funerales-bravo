"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import estilos from "./Header.module.css";

const navegacionPrincipal = [
    { etiqueta: "Inicio", href: "/" },
    { etiqueta: "Cremapets", href: "/cremapets" },
    { etiqueta: "Previsión", href: "/prevision-funeraria" },
    { etiqueta: "Cementerio", href: "/servicios/cementerio-bravo" },
    { etiqueta: "Contacto", href: "/contacto" },
] as const;

// Agrupados para mostrar toda la información en una sola columna limpia
const gruposServicios = [
    {
        titulo: "Servicios funerarios",
        links: [
            { etiqueta: "Previsión funeraria", href: "/prevision-funeraria" },
            { etiqueta: "Traslados nacionales", href: "/servicios/traslados-nacionales" },
            { etiqueta: "Urnas personalizadas", href: "/servicios/urnas-personalizadas" },
        ]
    },
    {
        titulo: "Velación y Cremación",
        links: [
            { etiqueta: "Salas de velación", href: "/servicios/salas-de-velacion" },
            { etiqueta: "Velación a domicilio", href: "/servicios/velacion-a-domicilio" },
            { etiqueta: "Servicio de cremación", href: "/servicios/cremacion" },
            { etiqueta: "Cremapets", href: "/cremapets" },
        ]
    },
    {
        titulo: "Instalaciones",
        links: [
            { etiqueta: "Cementerio Bravo", href: "/servicios/cementerio-bravo" },
            { etiqueta: "Columbario", href: "/servicios/columbario" },
        ]
    }
];

function IconoFlecha({ abierto }: { abierto: boolean }) {
    return (
        <svg className={`${estilos.flecha} ${abierto ? estilos.flechaAbierta : ""}`} aria-hidden="true" viewBox="0 0 24 24">
            <path d="m7 10 5 5 5-5" />
        </svg>
    );
}

function IconoTelefono() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

export default function Encabezado() {
    const rutaActual = usePathname();
    const refRutaAnterior = useRef(rutaActual);
    const refEncabezado = useRef<HTMLElement>(null);
    const refScrollAnterior = useRef(0);

    const [compacto, setCompacto] = useState(false);
    const [serviciosAbiertos, setServiciosAbiertos] = useState(false);
    const [movilAbierto, setMovilAbierto] = useState(false);

    const cerrarMenus = () => {
        setServiciosAbiertos(false);
        setMovilAbierto(false);
    };

    const estaActivo = (href: string) => {
        if (href === "/") return rutaActual === "/";
        return rutaActual.startsWith(href);
    };

    useEffect(() => {
        let actualizando = false;
        const manejarScroll = () => {
            if (actualizando || movilAbierto) return;
            actualizando = true;
            requestAnimationFrame(() => {
                const scrollActual = window.scrollY;
                if (scrollActual < 20) {
                    setCompacto(false);
                } else if (scrollActual > refScrollAnterior.current && scrollActual > 50) {
                    setCompacto(true);
                    setServiciosAbiertos(false);
                }
                refScrollAnterior.current = scrollActual;
                actualizando = false;
            });
        };
        window.addEventListener("scroll", manejarScroll, { passive: true });
        return () => window.removeEventListener("scroll", manejarScroll);
    }, [movilAbierto]);

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
        if (refRutaAnterior.current !== rutaActual) {
            cerrarMenus();
            refRutaAnterior.current = rutaActual;
        }
    }, [rutaActual]);

    return (
        <header ref={refEncabezado} className={`${estilos.encabezado} ${compacto ? estilos.compacto : ""}`}>
            <div className={estilos.barraUtilidad}>
                <div className={estilos.contenedor}>
                    <p className={estilos.textoUtilidad}>Atención 24/7 en Tapachula, Chiapas</p>
                    <a href="tel:529622361377" className={estilos.enlaceTelefono}>
                        <IconoTelefono /> 962 236 1377
                    </a>
                </div>
            </div>

            {/* Si el menú de servicios está abierto o se hace scroll, activamos la navegación sólida */}
            <nav className={`${estilos.navegacion} ${compacto || serviciosAbiertos ? estilos.navegacionSolida : ""}`}>
                <div className={`${estilos.contenedor} ${estilos.contenidoNavegacion}`}>
                    <Link href="/" className={estilos.marca} aria-label="Inicio">
                        <Image
                            src="/logos/FB-white.webp"
                            alt="Funerales Bravo"
                            width={140}
                            height={45}
                            priority
                            className={estilos.logotipo}
                        />
                    </Link>

                    <div className={estilos.navegacionEscritorio}>
                        <Link href="/" className={`${estilos.enlace} ${estaActivo("/") ? estilos.activo : ""}`}>
                            Inicio
                        </Link>

                        <div className={estilos.contenedorSubmenu}>
                            <button
                                type="button"
                                className={`${estilos.enlace} ${rutaActual.startsWith("/servicios") || serviciosAbiertos ? estilos.activo : ""}`}
                                onClick={() => setServiciosAbiertos(!serviciosAbiertos)}
                            >
                                Servicios <IconoFlecha abierto={serviciosAbiertos} />
                            </button>

                            <div className={`${estilos.submenu} ${serviciosAbiertos ? estilos.submenuAbierto : ""}`}>
                                {gruposServicios.map((grupo) => (
                                    <div key={grupo.titulo} className={estilos.grupoSubmenu}>
                                        <span className={estilos.tituloGrupo}>{grupo.titulo}</span>
                                        {grupo.links.map((link) => (
                                            <Link key={link.href} href={link.href} className={estilos.enlaceSubmenu} onClick={cerrarMenus}>
                                                {link.etiqueta}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {navegacionPrincipal.slice(1).map((item) => (
                            <Link key={item.href} href={item.href} className={`${estilos.enlace} ${estaActivo(item.href) ? estilos.activo : ""}`}>
                                {item.etiqueta}
                            </Link>
                        ))}
                    </div>

                    <Link href="/contacto" className={estilos.botonContacto}>
                        Contactar
                    </Link>

                    <button
                        type="button"
                        className={estilos.botonMenu}
                        onClick={() => setMovilAbierto(!movilAbierto)}
                        aria-label="Menú"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            <aside className={`${estilos.menuMovil} ${movilAbierto ? estilos.menuMovilAbierto : ""}`}>
                <div className={estilos.encabezadoMovil}>
                    <button onClick={cerrarMenus} aria-label="Cerrar">×</button>
                </div>
                <nav className={estilos.navegacionMovil}>
                    {navegacionPrincipal.map((item) => (
                        <Link key={item.href} href={item.href} onClick={cerrarMenus}>
                            {item.etiqueta}
                        </Link>
                    ))}
                    <div className={estilos.divisor} />

                    {gruposServicios.map((grupo) => (
                        <div key={grupo.titulo} className={estilos.grupoMovil}>
                            <span className={estilos.tituloMovil}>{grupo.titulo}</span>
                            {grupo.links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={cerrarMenus} className={estilos.enlaceSecundario}>
                                    {link.etiqueta}
                                </Link>
                            ))}
                        </div>
                    ))}
                </nav>
            </aside>
        </header>
    );
}