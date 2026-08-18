import Link from 'next/link';
import Image from 'next/image';
import estilos from './Footer.module.css';

export default function Footer() {
    const anioActual = new Date().getFullYear();

    return (
        <footer className={estilos.pieDePagina}>
            <div className={estilos.contenedorPrincipal}>

                <div className={estilos.cuadriculaFooter}>
                    <div className={estilos.columnaMarca}>
                        <Link href="/" aria-label="Volver al inicio">
                            <Image
                                src="/logos/FB-black.webp"
                                alt="Funerales Bravo"
                                width={160}
                                height={53}
                                className={estilos.logoBlanco}
                            />
                        </Link>
                        <p className={estilos.textoMarca}>
                            Acompañando a las familias de Tapachula desde 1952.
                        </p>
                        <div className={estilos.redesSociales}>
                            <a href="https://www.facebook.com/FuneralesBravoTapachula" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/funerales_bravo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={estilos.columnaEnlaces}>
                        <h3 className={estilos.tituloColumna}>Atención 24/7</h3>
                        <ul className={estilos.listaContacto}>
                            <li>
                                <span className={estilos.etiquetaContacto}>Línea de Emergencia</span>
                                <a href="tel:+529622361377" className={estilos.enlaceDestacado}>962 236 1377</a>
                            </li>
                            <li>
                                <span className={estilos.etiquetaContacto}>Oficina</span>
                                <a href="tel:+529625895880" className={estilos.enlaceRegular}>962 589 5880</a>
                            </li>
                            <li>
                                <span className={estilos.etiquetaContacto}>Ubicación</span>
                                <p className={estilos.textoRegular}>Central Oriente 82 Prol.<br />Tapachula, Chiapas.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={estilos.columnaEnlaces}>
                        <h3 className={estilos.tituloColumna}>Navegación</h3>
                        <ul className={estilos.listaNavegacion}>
                            <li><Link href="/" className={estilos.enlaceFooter}>Inicio</Link></li>
                            <li><Link href="/prevision-funeraria" className={estilos.enlaceFooter}>Previsión funeraria</Link></li>
                            <li><Link href="/cremapets" className={estilos.enlaceFooter}>Cremapets (Mascotas)</Link></li>
                            <li><Link href="https://floreriabravo.com.mx" className={estilos.enlaceFooter} target="_blank" rel="noopener noreferrer">Florería Bravo</Link></li>
                            <li><Link href="/contacto" className={estilos.enlaceFooter}>Contacto general</Link></li>
                        </ul>
                    </div>

                    <div className={estilos.columnaEnlaces}>
                        <h3 className={estilos.tituloColumna}>Catálogo de Servicios</h3>
                        <ul className={estilos.listaNavegacion}>
                            <li><Link href="/servicios/salas-de-velacion" className={estilos.enlaceFooter}>Salas de velación</Link></li>
                            <li><Link href="/servicios/velacion-a-domicilio" className={estilos.enlaceFooter}>Velación a domicilio</Link></li>
                            <li><Link href="/servicios/traslados-nacionales" className={estilos.enlaceFooter}>Traslados nacionales</Link></li>
                            <li><Link href="/servicios/cremacion" className={estilos.enlaceFooter}>Servicio de cremación</Link></li>
                            <li><Link href="/servicios/cementerio-bravo" className={estilos.enlaceFooter}>Cementerio Bravo</Link></li>
                            <li><Link href="/servicios/urnas-personalizadas" className={estilos.enlaceFooter}>Urnas y Columbario</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Franja Legal Aislada */}
            <div className={estilos.franjaInferior}>
                <div className={estilos.contenedorInferior}>
                    <p>© {anioActual} Funerales Bravo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}