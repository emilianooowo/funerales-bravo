export type PlanKey = "empInst" | "empDom" | "platInst" | "platDom" | "diamInst" | "diamDom" | "ninguno";

export type CellValue =
    | boolean
    | string
    | { tipo: "floral"; items: string[] }
    | { tipo: "texto-sub"; principal: string; sub: string }
    | { tipo: "icono-texto"; icono: "qr"; texto: string };

export type ComparativaRow =
    | { isHeader: true; titulo: string }
    | {
        isHeader?: false;
        caracteristica: string;
        empInst: CellValue;
        empDom: CellValue;
        platInst: CellValue;
        platDom: CellValue;
        diamInst: CellValue;
        diamDom: CellValue
    };

export const detallePlanes: Record<PlanKey, { titulo: string; modalidad: string; mensualidad: number }> = {
    empInst: { titulo: "Empresarial", modalidad: "En instalaciones", mensualidad: 520.83 },
    empDom: { titulo: "Empresarial", modalidad: "A domicilio", mensualidad: 520.83 },
    diamInst: { titulo: "Diamante", modalidad: "En instalaciones", mensualidad: 770.83 },
    diamDom: { titulo: "Diamante", modalidad: "A domicilio", mensualidad: 770.83 },
    platInst: { titulo: "Platino", modalidad: "En instalaciones", mensualidad: 1041.66 },
    platDom: { titulo: "Platino", modalidad: "A domicilio", mensualidad: 1041.66 },
    ninguno: { titulo: "", modalidad: "", mensualidad: 0 }
};

export const opcionesComparador = [
    { id: "ninguno", nombre: "— Ninguno —" },
    { id: "empInst", nombre: "Empresarial (Instalaciones)" },
    { id: "empDom", nombre: "Empresarial (A domicilio)" },
    { id: "diamInst", nombre: "Diamante (Instalaciones)" },
    { id: "diamDom", nombre: "Diamante (A domicilio)" },
    { id: "platInst", nombre: "Platino (Instalaciones)" },
    { id: "platDom", nombre: "Platino (A domicilio)" },
];

export const comparativaPlanes: ComparativaRow[] = [
    {
        caracteristica: "Tipo de féretro",
        empInst: { tipo: "texto-sub", principal: "Artesanal de madera o metálico", sub: "(Embalsamado, traslados, cortejo fúnebre y arreglos estéticos)" },
        empDom: { tipo: "texto-sub", principal: "Artesanal de madera o metálico", sub: "(Embalsamado, traslados, cortejo fúnebre y arreglos estéticos)" },
        platInst: { tipo: "texto-sub", principal: "Madera con herrajes dorados (3 modelos)", sub: "(Embalsamado, traslados, cortejo fúnebre y arreglos estéticos)" },
        platDom: { tipo: "texto-sub", principal: "Madera con herrajes dorados (3 modelos)", sub: "(Embalsamado, traslados, cortejo fúnebre y arreglos estéticos)" },
        diamInst: { tipo: "texto-sub", principal: "Alta gama de maderas preciosas", sub: "(Embalsamado, traslados, cortejo fúnebre y arreglos estéticos)" },
        diamDom: { tipo: "texto-sub", principal: "Alta gama de maderas preciosas", sub: "(Embalsamado, traslados, cortejo fúnebre y arreglos estéticos)" }
    },
    {
        caracteristica: "Homenaje floral",
        empInst: { tipo: "floral", items: ["1 Arreglo natural"] },
        empDom: { tipo: "floral", items: ["1 Arreglo natural"] },
        platInst: { tipo: "floral", items: ["2 Arreglos"] },
        platDom: { tipo: "floral", items: ["2 Arreglos"] },
        diamInst: { tipo: "floral", items: ["2 Arreglos", "1 Corona"] },
        diamDom: { tipo: "floral", items: ["2 Arreglos", "1 Corona"] }
    },
    { caracteristica: "Gestión de trámites", empInst: true, empDom: true, platInst: true, platDom: true, diamInst: true, diamDom: true },
    {
        caracteristica: "Certificado de defunción",
        empInst: { tipo: "texto-sub", principal: "Certificado de defunción", sub: "(Formato no llenado)" },
        empDom: { tipo: "texto-sub", principal: "Certificado de defunción", sub: "(Formato no llenado)" },
        platInst: { tipo: "texto-sub", principal: "Certificado de defunción", sub: "(Formato llenado)" },
        platDom: { tipo: "texto-sub", principal: "Certificado de defunción", sub: "(Formato llenado)" },
        diamInst: { tipo: "texto-sub", principal: "Certificado de defunción", sub: "(Formato llenado)" },
        diamDom: { tipo: "texto-sub", principal: "Certificado de defunción", sub: "(Formato llenado)" }
    },
    {
        caracteristica: "Obituario",
        empInst: { tipo: "texto-sub", principal: "Obituario", sub: "(Digital e impreso)" },
        empDom: { tipo: "texto-sub", principal: "Obituario", sub: "(Digital e impreso)" },
        platInst: { tipo: "texto-sub", principal: "Obituario", sub: "(Digital e impreso)" },
        platDom: { tipo: "texto-sub", principal: "Obituario", sub: "(Digital e impreso)" },
        diamInst: { tipo: "texto-sub", principal: "Obituario", sub: "(Digital e impreso)" },
        diamDom: { tipo: "texto-sub", principal: "Obituario", sub: "(Digital e impreso)" }
    },
    {
        caracteristica: "Placa QR Memorial",
        // 3. Integración del nuevo tipo QR
        empInst: false, empDom: false,
        platInst: { tipo: "icono-texto", icono: "qr", texto: "Placa QR Memorial" },
        platDom: { tipo: "icono-texto", icono: "qr", texto: "Placa QR Memorial" },
        diamInst: { tipo: "icono-texto", icono: "qr", texto: "Placa QR Memorial" },
        diamDom: { tipo: "icono-texto", icono: "qr", texto: "Placa QR Memorial" }
    },
    { caracteristica: "Recuerdo a la memoria", empInst: true, empDom: true, platInst: true, platDom: true, diamInst: true, diamDom: true },
    {
        caracteristica: "Tipo de velación",
        empInst: { tipo: "texto-sub", principal: "Sala de velación", sub: "(En instalaciones)" },
        empDom: { tipo: "texto-sub", principal: "Velación a domicilio", sub: "(Mobiliario y equipo)" },
        platInst: { tipo: "texto-sub", principal: "Sala de velación", sub: "(En instalaciones)" },
        platDom: { tipo: "texto-sub", principal: "Velación a domicilio", sub: "(Kit y caballete de madera)" },
        diamInst: { tipo: "texto-sub", principal: "Sala de velación", sub: "(En instalaciones)" },
        diamDom: { tipo: "texto-sub", principal: "Velación a domicilio", sub: "(Kit y caballete de madera)" }
    },
    {
        caracteristica: "Mobiliario extra",
        empInst: false, empDom: "30 sillas y mesa", platInst: false, platDom: "1 carpa y 100 sillas", diamInst: false, diamDom: "2 carpas y 150 sillas"
    },
    { caracteristica: "Personal de apoyo en sala", empInst: true, empDom: false, platInst: true, platDom: false, diamInst: true, diamDom: false },
    {
        caracteristica: "Habitación de reposo",
        empInst: false, empDom: false, platInst: false, platDom: false,
        diamInst: { tipo: "texto-sub", principal: "Habitación de reposo", sub: "(Hotel Kamico)" },
        diamDom: false
    },

    { isHeader: true, titulo: "Alimentos y Bebidas" },

    {
        caracteristica: "Cafetería",
        empInst: { tipo: "texto-sub", principal: "Barra de bebidas", sub: "(Agua, refresco, tés, café)" },
        empDom: { tipo: "texto-sub", principal: "Insumos para cafetería", sub: "(1kg azúcar, 1 bolsa café)" },
        platInst: { tipo: "texto-sub", principal: "Barra de bebidas ilimitada", sub: "(Incluye café orgánico)" },
        platDom: { tipo: "texto-sub", principal: "Insumos para cafetería", sub: "(2kg azúcar, 2kg café, 12L refresco)" },
        diamInst: { tipo: "texto-sub", principal: "Barra ilimitada", sub: "(Alto volumen)" },
        diamDom: { tipo: "texto-sub", principal: "Insumos para cafetería", sub: "(4kg azúcar, 3kg café, 24L refresco)" }
    },
    { caracteristica: "Préstamo de cafeteras", empInst: false, empDom: "1 cafetera en préstamo", platInst: false, platDom: "1 cafetera en préstamo", diamInst: false, diamDom: "2 cafeteras en préstamo" },
    { caracteristica: "Panadería dulce", empInst: "100 piezas de pan", empDom: "100 piezas de pan", platInst: "200 piezas (pan y galletas)", platDom: "200 piezas de pan", diamInst: "300 piezas de pan", diamDom: "300 piezas de pan" },
    { caracteristica: "Bocadillos / Tamales", empInst: false, empDom: false, platInst: "150 bocadillos", platDom: "100 tamales / bocadillos*", diamInst: "200 bocadillos", diamDom: "100 tamales / bocadillos*" }
];