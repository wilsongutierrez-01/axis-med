// src/lib/seo.ts
export type PageSeo = {
  title: string;
  description: string;
  urlPath: string; // path relativo, ej: "/diagnosis"
  image?: string; // absolute URL preferible
  imageWidth?: number;
  imageHeight?: number;
  language?: string;
  extras?: Record<string, any>;
};

const SITE = {
  siteUrl: "https://www.axismedins.com",
  siteName: "AXIS-MED",
  contactEmail: "axismed.info@gmail.com",
  phone: "+503 77422509",
  logo: "https://www.axismedins.com/logoIcon.svg",
};

export const siteMeta = SITE;

/**
 * Map of pages. Añade/ajusta cada entrada según lo necesites.
 * Las keys son identificadores (puedes usar la ruta).
 */
export const pages: Record<string, PageSeo> = {
  "/": {
    title: "AXIS-MED | Diagnóstico por Imágenes y Tecnología Médica",
    description: "Más de 30 años de experiencia en salud: ultrasonografía, radiografía, cirugía y veterinaria en El Salvador y Latinoamérica.",
    urlPath: "/",
    image: `${SITE.siteUrl}/preview.webp`,
    imageWidth: 1200,
    imageHeight: 630,
    language: "es",
  },
  "/diagnosis": {
    title: "Equipos de Diagnóstico por Imagen | AXIS-MED",
    description: "Equipos de diagnóstico por imagen: ultrasonido, rayos X y soluciones médicas confiables. Venta, instalación y soporte técnico en El Salvador.",
    urlPath: "/diagnosis",
    image: `${SITE.siteUrl}/img/diagnosis/diagnosisDoctor.webp`,
    imageWidth: 1200,
    imageHeight: 630,
    language: "es",
  },
  "/support": {
    title: "Soporte Técnico | AXIS-MED",
    description: "Soporte técnico y mantenimiento para equipos médicos — instalación, calibración y servicio postventa.",
    urlPath: "/support",
    image: `${SITE.siteUrl}/img/support/support.webp`,
    imageWidth: 1200,
    imageHeight: 630,
    language: "es",
  },
  "/surgery": {
    title: "Instrumental Quirúrgico | AXIS-MED",
    description: "Instrumental quirúrgico de alta calidad — equipos y suministros para centros de salud y hospitales.",
    urlPath: "/surgery",
    image: `${SITE.siteUrl}/img/surgery/doctor.webp`,
    imageWidth: 1200,
    imageHeight: 630,
    language: "es",
  },
  "/veterinary": {
    title: "Soluciones Veterinarias | AXIS-MED",
    description: "Soluciones y equipos para veterinaria: diagnóstico, instrumental y accesorios para el cuidado animal.",
    urlPath: "/veterinary",
    image: `${SITE.siteUrl}/img/vet/vetBanner.webp`,
    imageWidth: 1200,
    imageHeight: 630,
    language: "es",
  },
  "/contact": {
    title: "Contacto | AXIS-MED",
    description: "Contacta a AXIS-MED para cotizaciones, soporte técnico y consultas sobre equipos médicos.",
    urlPath: "/contact",
    image: `${SITE.siteUrl}/logoIcon.svg`,
    imageWidth: 600,
    imageHeight: 600,
    language: "es",
  },
  // añade más páginas si las tienes
};

/** Helper: devuelva meta por ruta; permite overrides rápidos */
export function getPageSeo(path: string, override?: Partial<PageSeo>): PageSeo {
  const found = pages[path] ?? pages["/"];
  return { ...found, ...override };
}
