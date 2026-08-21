"use client";

import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero/Hero";
import { Minus, Flower, QrCode, ChevronDown } from "lucide-react";
import styles from "./Prevision.module.css";
import { comparativaPlanes, opcionesComparador, detallePlanes, PlanKey, ComparativaRow } from "@/data/prevision";

type FilaDatos = Exclude<ComparativaRow, { isHeader: true }>;

const InfoPlanHeader = ({ planKey, ocultarEnMovil = false }: { planKey: PlanKey, ocultarEnMovil?: boolean }) => {
    if (planKey === "ninguno") {
        return <div className={`${styles.infoPlanHeader} ${ocultarEnMovil ? styles.columnaOcultaMovil : ""}`}></div>;
    }

    const detalle = detallePlanes[planKey];
    return (
        <div className={`${styles.infoPlanHeader} ${ocultarEnMovil ? styles.columnaOcultaMovil : ""}`}>
            <h2 className={styles.tituloPlan}>{detalle.titulo}</h2>
            <span className={styles.modalidadPlan}>{detalle.modalidad}</span>

            <span className={styles.precioPlan}>
                ${detalle.mensualidad.toLocaleString('en-US', { minimumFractionDigits: 2 })}/mes*
            </span>
            <a href="tel:+529622361377" className={styles.botonDorado}>
                Más información
            </a>
        </div>
    );
};

export default function PrevisionClient() {
    const [plan1, setPlan1] = useState<PlanKey>("empInst");
    const [plan2, setPlan2] = useState<PlanKey>("platInst");
    const [plan3, setPlan3] = useState<PlanKey>("diamInst");

    const refsElementos = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observador = new IntersectionObserver(
            (entradas: IntersectionObserverEntry[]) => {
                entradas.forEach((entrada: IntersectionObserverEntry) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        refsElementos.current.forEach((ref: HTMLElement | null) => {
            if (ref) observador.observe(ref);
        });

        return () => observador.disconnect();
    }, []);

    const handleSelectChange = (setter: React.Dispatch<React.SetStateAction<PlanKey>>) =>
        (e: React.ChangeEvent<HTMLSelectElement>) => setter(e.target.value as PlanKey);

    const renderValor = (fila: FilaDatos, planKey: PlanKey) => {
        if (planKey === "ninguno") return null;

        const valor = fila[planKey];
        const caracteristica = fila.caracteristica;

        if (valor === false) return <Minus size={20} strokeWidth={2.5} className={styles.iconoMinus} />;
        if (valor === true) return <span className={styles.textoPrincipal}>{caracteristica}</span>;
        if (typeof valor === "string") return <span className={styles.textoPrincipal}>{valor}</span>;

        if (typeof valor === "object") {
            if (valor.tipo === "floral") {
                return (
                    <div className={styles.contenedorFloral}>
                        {valor.items.map((item: string, idx: number) => (
                            <div key={idx} className={styles.miniCard}>
                                <Flower size={24} strokeWidth={1.5} className={styles.iconoFlor} />
                                <span className={styles.labelFloral}>{item}</span>
                            </div>
                        ))}
                    </div>
                );
            }

            if (valor.tipo === "texto-sub") {
                return (
                    <div className={styles.celdaTextoSub}>
                        <span className={styles.textoPrincipal}>{valor.principal}</span>
                        <span className={styles.textoSub}>{valor.sub}</span>
                    </div>
                );
            }

            if (valor.tipo === "icono-texto" && valor.icono === "qr") {
                return (
                    <div className={styles.celdaTextoSub}>
                        <QrCode size={26} strokeWidth={1.5} className={styles.iconoQr} />
                        <span className={styles.textoPrincipal}>{valor.texto}</span>
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <main className={styles.paginaPrevision}>
            <Hero
                titulo="Previsión Funeraria"
                paginaActual="Previsión"
                colorAcento="var(--carbon)"
            />

            <section className={styles.seccionComparativa}>
                <div className={`${styles.contenedorComparativa} ${styles.fadeAnimacion}`} ref={(el: HTMLElement | null) => { if (el) refsElementos.current.push(el) }}>

                    <div className={styles.stickySelectores}>
                        <div className={styles.gridTresColumnas}>
                            <div className={styles.wrapperSelector}>
                                <select className={styles.selectorElegante} value={plan1} onChange={handleSelectChange(setPlan1)}>
                                    {opcionesComparador.map(op => <option key={op.id} value={op.id}>{op.nombre}</option>)}
                                </select>
                                <ChevronDown size={16} className={styles.iconoSelector} />
                            </div>
                            <div className={styles.wrapperSelector}>
                                <select className={styles.selectorElegante} value={plan2} onChange={handleSelectChange(setPlan2)}>
                                    {opcionesComparador.map(op => <option key={op.id} value={op.id}>{op.nombre}</option>)}
                                </select>
                                <ChevronDown size={16} className={styles.iconoSelector} />
                            </div>
                            <div className={`${styles.wrapperSelector} ${styles.columnaOcultaMovil}`}>
                                <select className={styles.selectorElegante} value={plan3} onChange={handleSelectChange(setPlan3)}>
                                    {opcionesComparador.map(op => <option key={op.id} value={op.id}>{op.nombre}</option>)}
                                </select>
                                <ChevronDown size={16} className={styles.iconoSelector} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoPlanesNoSticky}>
                        <div className={styles.gridTresColumnas}>
                            <InfoPlanHeader planKey={plan1} />
                            <InfoPlanHeader planKey={plan2} />
                            <InfoPlanHeader planKey={plan3} ocultarEnMovil={true} />
                        </div>
                    </div>

                    <div className={styles.cuerpoTabla}>
                        {comparativaPlanes.map((fila: ComparativaRow, filaIdx: number) => {
                            if (fila.isHeader) {
                                return (
                                    <div key={filaIdx} className={styles.filaSeparadorH2}>
                                        <h2 className={styles.tituloSeccionTabla}>{fila.titulo}</h2>
                                    </div>
                                );
                            }

                            // La llamada ahora es mucho más limpia
                            return (
                                <div key={filaIdx} className={styles.filaComparativa}>
                                    <div className={styles.celdaValor}>{renderValor(fila, plan1)}</div>
                                    <div className={styles.celdaValor}>{renderValor(fila, plan2)}</div>
                                    <div className={`${styles.celdaValor} ${styles.columnaOcultaMovil}`}>{renderValor(fila, plan3)}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}