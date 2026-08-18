'use client'

import Image from "next/image";
import { useRef } from "react";
import HeroSection from '@/components/HeroSection/HeroSection';
import styles from './page.module.css';
import Link from "next/link";
import {
  CircleDollarSign,
  ShieldCheck,
  Landmark,
  HeartHandshake,
  Phone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const carruselInstalacionesRef = useRef<HTMLDivElement>(null);

  const scrollInstalaciones = (direccion: "izquierda" | "derecha") => {
    if (carruselInstalacionesRef.current) {
      const scrollAmount = direccion === "izquierda" ? -600 : 600;
      carruselInstalacionesRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <main>
        <HeroSection />

        <section className={styles.seccionUrgencia}>
          <div className={styles.urgenciaContenedor}>
            <div className={styles.urgenciaTexto}>
              <h2 className={styles.urgenciaTitulo}>¿Falleció un ser querido?</h2>
              <p className={styles.urgenciaDesc}>Llámanos ahora. Asistencia inmediata las 24 horas.</p>
            </div>

            <a href="tel:+529622361377" className={styles.urgenciaLlamada}>
              <Phone className={styles.urgenciaIcono} strokeWidth={1.5} />
              <span className={styles.urgenciaNumero}>962-236-1377</span>
            </a>
          </div>
        </section>

        <section className={styles.heroBravo}>
          <div className={styles.fondoBravo}>
            <Image
              src="/images/servicios/cementerio-03.jpg"
              alt="Funerales Bravo - Instalaciones"
              fill
              className={styles.imagenBravo}
              priority
              sizes="100vw"
            />
          </div>

          <div className={styles.gradienteOverlayBravo} aria-hidden="true"></div>

          <div className={styles.contenidoBravo}>
            <div className={styles.textoContenedor}>
              <h2 className={styles.tituloBravo}>
                Tranquilidad cuando más lo necesitas
              </h2>

              <p className={styles.descripcionBravo}>
                Acompañando a las familias con absoluto respeto, empatía y dignidad. Una tradición de servicio íntegro cuidando cada detalle por ti.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.seccionCremapets}>
          <div className={styles.fondoHuellas} aria-hidden="true"></div>

          <div className={styles.cremapetsContenedor}>

            <div className={styles.cremapetsColumnaTexto}>
              <h2 className={styles.cremapetsTitulo}>
                El cierre que tu compañero incondicional merece
              </h2>

              <div className={styles.cremapetsListaPills}>
                <div className={styles.cremapetsPill}>
                  <span>Servicio de cremación</span>
                </div>
                <div className={styles.cremapetsPill}>
                  <span>Traslados</span>
                </div>
                <div className={styles.cremapetsPill}>
                  <span>Urna personalizada</span>
                </div>
                <div className={styles.cremapetsPill}>
                  <span>Certificado de cremación</span>
                </div>
                <div className={styles.cremapetsPill}>
                  <span>Fotografía enmarcada</span>
                </div>
                <div className={styles.cremapetsPill}>
                  <span>Recuerdo a la memoria</span>
                </div>
              </div>
            </div>

            {/* Columna Derecha: 3 imágenes en Desktop (fila) y en Móvil (columna) */}
            <div className={styles.cremapetsColumnaImagenes}>

              <div className={`${styles.polaroid} ${styles.polaroidPrincipal}`}>
                <div className={styles.polaroidImagenWrapper}>
                  <Image
                    src="/images/cremapets/cremapets-01.jpg"
                    alt="Despedida respetuosa"
                    fill
                    sizes="(max-width: 768px) 200px, 350px"
                    className={styles.polaroidImagen}
                  />
                </div>
              </div>

              <div className={`${styles.polaroid} ${styles.polaroidSecundaria} ${styles.rotacionIzq}`}>
                <div className={styles.polaroidImagenWrapper}>
                  <Image
                    src="/images/cremapets/cremapets-02.jpg"
                    alt="Despedida respetuosa"
                    fill
                    sizes="(max-width: 768px) 200px, 350px"
                    className={styles.polaroidImagen}
                  />
                </div>
              </div>

              <div className={`${styles.polaroid} ${styles.polaroidSecundaria} ${styles.rotacionDer}`}>
                <div className={styles.polaroidImagenWrapper}>
                  <Image
                    src="/images/cremapets/cremapets-03.jpg"
                    alt="Despedida respetuosa"
                    fill
                    sizes="(max-width: 768px) 200px, 350px"
                    className={styles.polaroidImagen}
                  />
                </div>
              </div>

            </div>

            <Link href="/cremapets" className={styles.cremapetsCta}>
              Ver detalles del servicio
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}