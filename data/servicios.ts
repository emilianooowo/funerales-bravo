export type DetalleServicio = {
    titulo: string;
    texto: string;
    imagen?: string;
};

export type Servicio = {
    id: string;
    titulo: string;
    descripcion: string;
    imagenPrincipal: string;
    highlights?: string[];
    enlace?: string;
    externo?: boolean;
    esGrid?: boolean;
    detalles?: DetalleServicio[];
};

export const listaServicios: Servicio[] = [
    {
        id: "floreria",
        titulo: "Florería Bravo",
        descripcion: "Acompaña a tus seres queridos cuando las palabras no alcanzan. Nos encargamos de elaborar y entregar arreglos florales frescos directamente en la sala de velación, sin que tengas que preocuparte por la logística.",
        imagenPrincipal: "/images/servicios/servicios-floreria.webp",
        highlights: ["Envíos al momento", "Atención personalizada", "Diseños florales"],
        enlace: "https://floreriabravo.com.mx",
        externo: true,
        esGrid: false
    },
    {
        id: "cremapets",
        titulo: "Cremapets",
        descripcion: "Brindamos un cierre digno y respetuoso para tu mascota. Nos ocupamos del traslado y de todo el proceso de manera transparente, para que tú solo te enfoques en recordarlo con amor.",
        imagenPrincipal: "/images/cremapets/cremapets-03.jpg",
        highlights: ["Traslados", "Recuerdos", "Urnas personalizadas"],
        enlace: "/cremapets",
        esGrid: false
    },
    {
        id: "prevision",
        titulo: "Previsión Funeraria",
        descripcion: "Protege el patrimonio de tu familia y evita que tomen decisiones difíciles en momentos de dolor. Deja todo organizado desde hoy con un esquema de cuotas totalmente accesible a tu medida.",
        imagenPrincipal: "/images/servicios/servicios-prevision.webp",
        highlights: ["Precio congelado", "Ahorro del 50%", "Pago a meses sin intereses"],
        enlace: "/prevision",
        esGrid: false
    },
    {
        id: "cementerio",
        titulo: "Cementerio Bravo",
        descripcion: "Asegura un espacio de descanso permanente en un entorno de naturaleza y paz. Contamos con instalaciones seguras y cuidadas a perpetuidad para que visites a tu ser querido cuando lo desees.",
        imagenPrincipal: "/images/home/cementerio-01.jpg",
        highlights: ["Columbario", "Espacios ecológicos", "Servicio de cremación"],
        enlace: "/cementerio",
        esGrid: false
    },

    {
        id: "urnas",
        titulo: "Urnas personalizadas",
        descripcion: "Conserva sus cenizas en casa o en un columbario con urnas diseñadas específicamente para honrar su memoria con dignidad.",
        imagenPrincipal: "/images/servicios/servicios-urnas.webp",
        esGrid: true
    },
    {
        id: "salas-velacion",
        titulo: "Salas de velación",
        descripcion: "Espacios íntimos, cómodos y climatizados para recibir a tu familia en completa privacidad durante la despedida.",
        imagenPrincipal: "/images/servicios/servicios-salas.webp",
        esGrid: true
    },
    {
        id: "velacion-domicilio",
        titulo: "Velación a domicilio",
        descripcion: "Llevamos la infraestructura necesaria para que despidas a tu familiar en la intimidad y comodidad de tu hogar.",
        imagenPrincipal: "/images/servicios/servicios-domicilio.webp",
        esGrid: true
    },
    {
        id: "traslados-nacionales",
        titulo: "Traslados nacionales",
        descripcion: "Gestionamos de manera ágil toda la logística y permisos necesarios para llevar a tu familiar de regreso a su lugar de origen.",
        imagenPrincipal: "/images/servicios/servicios-traslados.webp",
        esGrid: true
    }
];