'use client'
import { useRef } from "react";
import Image from "next/image";
import HeroSection from '@/components/HeroSection/HeroSection';
import styles from './page.module.css';
import Link from "next/link";

export default function Home() {
  const refsElementos = useRef<(HTMLElement | null)[]>([]);

  const agregarRef = (el: HTMLElement | null) => {
    if (el && !refsElementos.current.includes(el)) {
      refsElementos.current.push(el);
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
              <span className={styles.urgenciaNumero}>962-236-1377</span>
            </a>
          </div>
        </section>

        <section className={styles.cementerio} ref={agregarRef}>
          <div className={styles.cementerioHero}>
            <Image
              src="/images/home/cementerio-01.jpg"
              alt="Cementerio y crematorio"
              fill
              sizes="100vw"
              className={styles.cementerioImagen}
              priority
            />

            <div className={styles.cementerioOverlay} />

            <div className={styles.cementerioIntro}>
              <h2 className={styles.cementerioTitulo}>
                Cementerio Bravo
              </h2>

              <p className={styles.cementerioDesc}>
                Conoce nuestros espacios para descanso permanente y encuentra el lugar adecuado para tu ser querido.
              </p>
            </div>
          </div>

          <div className={styles.contenedorCementerio}>
            <div className={styles.cementerioGrid}>

              <article className={styles.cementerioCard}>
                <div className={styles.cementerioFoto}>
                  <Image
                    src="/images/home/cementerio-02.jpg"
                    alt="Cementerio privado"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.cementerioImagen}
                  />
                </div>

                <h3 className={styles.cementerioNombre}>Cementerio ecológico</h3>
                <p className={styles.cementerioTexto}> Espacios pensados para tu familia y el medio ambiente. </p>
              </article>

              <article className={styles.cementerioCard}>
                <div className={styles.cementerioFoto}>
                  <Image
                    src="/images/home/cementerio-03.jpg"
                    alt="Servicio de cremación"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.cementerioImagen}
                  />
                </div>

                <h3 className={styles.cementerioNombre}>Crematorio</h3>
                <p className={styles.cementerioTexto}>Una alternativa para despedir a tus seres queridos.</p>
              </article>

              <article className={styles.cementerioCard}>
                <div className={styles.cementerioFoto}>
                  <Image
                    src="/images/home/cementerio-04.jpg"
                    alt="Columbario"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.cementerioImagen}
                  />
                </div>

                <h3 className={styles.cementerioNombre}>Columbario </h3>
                <p className={styles.cementerioTexto}> Nichos destinados a conservar en un espacio permanente y cuidado.  </p>
              </article>

              <article className={styles.cementerioCard}>
                <div className={styles.cementerioFoto}>
                  <Image
                    src="/images/home/cementerio-05.webp"
                    alt="Urnas personalizadas"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.cementerioImagen}
                  />
                </div>

                <h3 className={styles.cementerioNombre}>Urnas personalizadas</h3>
                <p className={styles.cementerioTexto}>Una forma significativa y personal para conservar a tu ser querido.</p>
              </article>

            </div>
            <div className={styles.cementerioAccion}>
              <Link href="/cementerio" className={styles.cementerionCta}>
                Conocer Cementerio Bravo
              </Link>
            </div>
          </div>

        </section>

      </main>
    </>
  );
}