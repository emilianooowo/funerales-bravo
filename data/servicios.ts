export type DetalleServicio = {
    titulo: string;
    texto: string;
    imagen?: string;
};

export type CtaServicio = {
    texto: string;
    enlace: string;
    externo: boolean;
};

export type Servicio = {
    id: string;
    titulo: string;
    descripcion: string;
    cta?: CtaServicio;
    detalles: DetalleServicio[];
};

export const listaServicios: Servicio[] = [
    {
        id: "floreria",
        titulo: "Florería",
        descripcion: "Expresa tu cariño cuando las palabras no alcanzan. Elaboramos homenajes florales con el mayor respeto, garantizando su entrega puntual directamente en la sala.",
        cta: {
            texto: "Visitar Florería",
            enlace: "https://floreriabravo.com.mx",
            externo: true
        },
        detalles: [
            { titulo: "Diseños Personalizados", texto: "Arreglos adaptados a tus preferencias para honrar la memoria de tu ser querido.", imagen: "/images/servicios/floreria-01.jpg" },
            { titulo: "Entrega Inmediata", texto: "Logística coordinada directamente con nuestras salas de velación para evitar contratiempos.", imagen: "/images/servicios/floreria-02.jpg" },
            { titulo: "Calidad Premium", texto: "Selección de las flores más frescas y hermosas de la región.", imagen: "/images/servicios/floreria-03.jpg" }
        ]
    },
    {
        id: "cremapets",
        titulo: "Cremapets",
        descripcion: "El cierre digno y amoroso que tu compañero incondicional merece. Servicios integrales de cremación para mascotas con total transparencia.",
        cta: {
            texto: "Ver detalles",
            enlace: "/cremapets",
            externo: false
        },
        detalles: [
            { titulo: "Servicio Integral", texto: "Cremación, traslados, urna personalizada y certificado incluidos.", imagen: "/images/servicios/cremapets-01.webp" },
            { titulo: "Opción Básica", texto: "Alternativa accesible con entrega de cenizas en bolsa artesanal de yute.", imagen: "/images/cremapets/cremapets-02.jpg" },
            { titulo: "Trato Empático", texto: "Garantizamos el máximo respeto hacia el cuerpo de tu mascota en todo momento.", imagen: "/images/servicios/cremapets-03.webp" }
        ]
    },
    {
        id: "prevision-funeraria",
        titulo: "Previsión funeraria",
        descripcion: "Protege a tu familia de decisiones difíciles y gastos inesperados. Nuestros planes te brindan la tranquilidad absoluta de tener todo resuelto.",
        // cta: {
        //     texto: "Conocer opciones",
        //     enlace: "/prevision-funeraria",
        //     externo: false
        // },
        detalles: [
            { titulo: "Ahorro Garantizado", texto: "Congela los precios actuales y evita el impacto de la inflación a futuro.", imagen: "/images/servicios/prevision-01.jpg" },
            { titulo: "Cobertura Transferible", texto: "Planes flexibles que pueden ser utilizados por cualquier miembro de tu familia.", imagen: "/images/servicios/prevision-02.jpg" },
            { titulo: "Asesoría Personalizada", texto: "Diseñamos un esquema de pagos cómodo y adaptado a tus necesidades.", imagen: "/images/servicios/prevision-03.jpg" }
        ]
    },
    {
        id: "cementerio-bravo",
        titulo: "Cementerio Bravo",
        descripcion: "Un entorno de naturaleza y serenidad eterna. Contamos con espacios tradicionales y un moderno columbario diseñado para resguardar cenizas.",
        // cta: {
        //     texto: "Conocer instalaciones",
        //     enlace: "/contacto",
        //     externo: false
        // },
        detalles: [
            { titulo: "Inhumación Tradicional", texto: "Lotes a perpetuidad rodeados de áreas verdes y mantenimiento constante.", imagen: "/images/servicios/cementerio-01.jpg" },
            { titulo: "Columbario", texto: "Nichos modernos y seguros para el resguardo permanente de urnas con cenizas.", imagen: "/images/servicios/cementerio-02.jpg" },
            { titulo: "Seguridad 24/7", texto: "Instalaciones vigiladas y de acceso controlado para tu total tranquilidad.", imagen: "/images/servicios/cementerio-03.jpg" }
        ]
    },
    {
        id: "urnas-personalizadas",
        titulo: "Urnas personalizadas",
        descripcion: "Ofrecemos una cuidadosa selección de urnas diseñadas con materiales de alta gama, permitiéndote elegir el descanso final que mejor honre su memoria.",
        detalles: [
            { titulo: "Maderas Finas", texto: "Diseños clásicos tallados a mano en maderas preciosas de alta durabilidad.", imagen: "/images/servicios/urna-01.webp" },
            { titulo: "Mármol y Ónix", texto: "Urnas sólidas y elegantes con acabados pulidos que resaltan la belleza de la piedra.", imagen: "/images/servicios/urna-02.webp" },
            { titulo: "Ecológicas", texto: "Opciones biodegradables ideales para ceremonias en el mar o plantación de árboles.", imagen: "/images/servicios/urna-03.webp" }
        ]
    },
    {
        id: "traslados-nacionales",
        titulo: "Traslados nacionales",
        descripcion: "Nos encargamos de toda la logística, permisos y trámites legales para trasladar a tu familiar a cualquier parte de México de manera rápida y segura.",
        detalles: [
            { titulo: "Gestión de Trámites", texto: "Resolución de permisos sanitarios y legales ante las autoridades correspondientes.", imagen: "/images/servicios/traslados-01.jpg" },
            { titulo: "Vía Terrestre", texto: "Flotilla de carrozas modernas y equipadas para traslados interestatales.", imagen: "/images/servicios/traslados-02.jpg" },
            { titulo: "Vía Aérea", texto: "Coordinación directa con aerolíneas para traslados de larga distancia.", imagen: "/images/servicios/traslados-03.jpg" }
        ]
    },
    {
        id: "salas-de-velacion",
        titulo: "Salas de velación",
        descripcion: "Espacios modernos, climatizados y privados, diseñados minuciosamente para brindarte comodidad a ti y a tus acompañantes.",
        detalles: [
            { titulo: "Capillas Privadas", texto: "Ambientes íntimos y silenciosos diseñados para el confort de la familia directa.", imagen: "/images/servicios/salas-01.jpg" },
            { titulo: "Servicio de Cafetería", texto: "Áreas de descanso con servicio de café y bocadillos a disposición.", imagen: "/images/servicios/salas-02.jpg" },
            { titulo: "Climatización 24 hrs", texto: "Espacios perfectamente acondicionados independientemente del clima exterior.", imagen: "/images/servicios/salas-03.jpg" }
        ]
    },
    {
        id: "velacion-a-domicilio",
        titulo: "Velación a domicilio",
        descripcion: "Llevamos nuestros servicios hasta tu hogar. Aseguramos una despedida íntima y cálida, rodeada únicamente de tus seres queridos.",
        detalles: [
            { titulo: "Mobiliario Completo", texto: "Instalación de pedestales, cristo, reclinatorios y alfombras en tu domicilio.", imagen: "/images/servicios/domicilio-01.jpg" },
            { titulo: "Sillas y Toldos", texto: "Acondicionamiento del espacio exterior para recibir cómodamente a tus visitas.", imagen: "/images/servicios/domicilio-02.jpg" },
            { titulo: "Asistencia Continua", texto: "Personal disponible para garantizar el orden y buen funcionamiento del servicio.", imagen: "/images/servicios/domicilio-03.jpg" }
        ]
    }
];