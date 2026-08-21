"use client";

import Hero from "@/components/Hero/Hero";
import styles from "./Prevision.module.css";

export default function PrevisionClient() {
    return (
        <main className={styles.paginaPrevision}>

            {/* H1 Semántico y directo */}
            <Hero
                titulo="Previsión Funeraria"
                paginaActual="Previsión"
                colorAcento="var(--dorado)" // O el color temático que prefieras
            />

            <section className={styles.seccionContenido}>
                <div className={styles.contenedor}>
                    <h2>Tranquilidad para los que más amas</h2>
                    <p>Contenido en desarrollo...</p>
                </div>
            </section>

        </main>
    );
}