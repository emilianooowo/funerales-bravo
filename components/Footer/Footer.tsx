import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const anioActual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* SECCIÓN SUPERIOR: CTA DE EMERGENCIA (Basado en "Are you on the list?") */}
            <div className={styles.topSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>¿Ha ocurrido una emergencia?</h2>
                    <p className={styles.ctaSubtitle}>
                        Estamos con usted en los momentos más difíciles. Reciba asistencia y acompañamiento inmediato.
                    </p>
                    <div className={styles.ctaActions}>
                        <a href="tel:+529622361377" className={styles.btnLlamar}>
                            Llamar ahora
                        </a>
                        <a href="https://wa.me/5219622361377" target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
                            Enviar WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* SECCIÓN INFERIOR: 4 COLUMNAS (Basado en la imagen de referencia) */}
            <div className={styles.bottomSection}>
                <div className={styles.gridContainer}>

                    {/* COLUMNA 1: Servicios */}
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Servicios</h4>
                        <ul className={styles.navList}>
                            <li><Link href="/servicios/cementerio-bravo" className={styles.link}>Cementerio Bravo</Link></li>
                            <li><Link href="/servicios/salas-de-velacion" className={styles.link}>Salas de Velación</Link></li>
                            <li><Link href="/servicios/velacion-a-domicilio" className={styles.link}>Velación a Domicilio</Link></li>
                            <li><Link href="/servicios/traslados-nacionales" className={styles.link}>Traslados Nacionales</Link></li>
                            <li><Link href="/servicios/cremacion" className={styles.link}>Cremación</Link></li>
                            <li><Link href="/servicios/urnas-personalizadas" className={styles.link}>Urnas Personalizadas</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 2: Navegación General */}
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Navegación</h4>
                        <ul className={styles.navList}>
                            <li><Link href="/" className={styles.link}>Inicio</Link></li>
                            <li><Link href="/cremapets" className={styles.link}>Cremapets</Link></li>
                            <li><Link href="/prevision-funeraria" className={styles.link}>Previsión Funeraria</Link></li>
                            <li><Link href="/servicios" className={styles.link}>Ver todos los servicios</Link></li>
                            <li><Link href="/contacto" className={styles.link}>Contacto</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: Ubicación y Horarios */}
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Nuestras Oficinas</h4>
                        <div className={styles.infoBlock}>
                            <p>
                                Central Oriente 82 Prol.<br />
                                Fracc. Guadalupe<br />
                                Tapachula, Chiapas.
                            </p>
                            <br />
                            <p>
                                <strong>Horario de oficina:</strong><br />
                                Lunes - Viernes: 9:00am - 8:00pm<br />
                                Sábados: 9:00am - 2:00pm
                            </p>
                            <br />
                            <p>
                                <strong>Emergencias:</strong><br />
                                Disponibilidad 24/7
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA 4: Atención al Cliente, Redes y Copyright */}
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Atención al Cliente</h4>
                        <div className={styles.infoBlock}>
                            <p>Tel: <a href="tel:+529625895880" className={styles.link}>+52 962 589 5880</a></p>
                            <p>Email: <a href="mailto:serviciosfunerariosbravo@gmail.com" className={styles.link}>serviciosfunerariosbravo@gmail.com</a></p>
                        </div>

                        <div className={styles.socialIcons}>
                            <a href="https://www.facebook.com/FuneralesBravoTapachula" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/funerales_bravo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>

                        <div className={styles.copyright}>
                            <p>© {anioActual} Funerales Bravo.<br />Todos los derechos reservados.</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}