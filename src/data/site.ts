export const languages = ['ca', 'es', 'en'] as const;
export type Lang = (typeof languages)[number];
export type PageKey = 'home' | 'services' | 'projects' | 'contact' | 'privacy' | 'legal' | 'cookies';

export const routes: Record<Lang, Record<PageKey, string>> = {
  ca: { home: '', services: 'serveis', projects: 'projectes', contact: 'contacte', privacy: 'politica-privacitat', legal: 'avis-legal', cookies: 'politica-cookies' },
  es: { home: '', services: 'servicios', projects: 'proyectos', contact: 'contacto', privacy: 'politica-privacidad', legal: 'aviso-legal', cookies: 'politica-cookies' },
  en: { home: '', services: 'services', projects: 'projects', contact: 'contact', privacy: 'privacy-policy', legal: 'legal-notice', cookies: 'cookie-policy' },
};

export const pageHref = (lang: Lang, page: PageKey) => `/${lang}/${routes[lang][page] ? `${routes[lang][page]}/` : ''}`;

export const ui = {
  ca: {
    localeName: 'CA', nav: { home: 'Inici', services: 'Serveis', projects: 'Projectes', contact: 'Contacte' },
    contactCta: 'Parlem del teu projecte', learnMore: 'Més informació', viewAll: 'Veure tots els projectes', close: 'Tancar', all: 'Tots',
    breadcrumb: 'Inici', phone: 'Telèfon', email: 'Correu electrònic', address: 'Adreça', directions: 'Com arribar-hi', references: 'Referències de clients disponibles sota petició.',
    footerStatement: 'Enginyeria industrial amb criteri, proximitat i capacitat resolutiva al servei de Menorca.',
    copyright: 'Tots els drets reservats', manageCookies: 'Gestionar cookies',
    legalLinks: { privacy: 'Política de privacitat', legal: 'Avís legal', cookies: 'Política de cookies' },
  },
  es: {
    localeName: 'ES', nav: { home: 'Inicio', services: 'Servicios', projects: 'Proyectos', contact: 'Contacto' },
    contactCta: 'Hablemos de tu proyecto', learnMore: 'Más información', viewAll: 'Ver todos los proyectos', close: 'Cerrar', all: 'Todos',
    breadcrumb: 'Inicio', phone: 'Teléfono', email: 'Correo electrónico', address: 'Dirección', directions: 'Cómo llegar', references: 'Referencias de clientes disponibles bajo petición.',
    footerStatement: 'Ingeniería industrial con criterio, cercanía y capacidad resolutiva al servicio de Menorca.',
    copyright: 'Todos los derechos reservados', manageCookies: 'Gestionar cookies',
    legalLinks: { privacy: 'Política de privacidad', legal: 'Aviso legal', cookies: 'Política de cookies' },
  },
  en: {
    localeName: 'EN', nav: { home: 'Home', services: 'Services', projects: 'Projects', contact: 'Contact' },
    contactCta: 'Let’s discuss your project', learnMore: 'Find out more', viewAll: 'View all projects', close: 'Close', all: 'All',
    breadcrumb: 'Home', phone: 'Phone', email: 'Email', address: 'Address', directions: 'Get directions', references: 'Client references are available on request.',
    footerStatement: 'Industrial engineering with rigour, a personal approach and effective solutions for Menorca.',
    copyright: 'All rights reserved', manageCookies: 'Manage cookies',
    legalLinks: { privacy: 'Privacy policy', legal: 'Legal notice', cookies: 'Cookie policy' },
  },
} satisfies Record<Lang, unknown>;

export const about = {
  ca: {
    title: 'Som un estudi d’enginyeria industrial ubicat a Ciutadella de Menorca.',
    body: 'Des de 1985, treballam amb particulars, empreses i professionals en projectes d’activitats, instal·lacions, obres i estructures, així com en certificacions i tràmits tècnics. Combinam l’experiència i el coneixement del territori amb una manera de treballar propera i pràctica. Escoltam cada necessitat, estudiam les opcions i t’acompanyam durant el projecte i la seva tramitació davant les administracions.',
  },
  es: {
    title: 'Somos un estudio de ingeniería industrial ubicado en Ciutadella de Menorca.',
    body: 'Desde 1985, trabajamos con particulares, empresas y profesionales en proyectos de actividades, instalaciones, obras y estructuras, así como en certificaciones y trámites técnicos. Combinamos la experiencia y el conocimiento del territorio con una forma de trabajar cercana y práctica. Escuchamos cada necesidad, estudiamos las opciones y te acompañamos durante el proyecto y su tramitación ante las administraciones.',
  },
  en: {
    title: 'We are an industrial engineering studio based in Ciutadella de Menorca.',
    body: 'Since 1985, we have worked with private clients, companies and professionals on activity, installation, construction and structural projects, as well as certifications and technical procedures. We combine experience and local knowledge with a practical, approachable way of working. We listen to every need, study the options and support you throughout the project and its administrative process.',
  },
} satisfies Record<Lang, { title: string; body: string }>;

const googleReviews = [
  'Jordi es un gran profesional. Hemos contado con él para varios proyectos en comunidades de vecinos y la verdad es que es un 10. Se ha prestado a incontables reuniones con los vecinos para que todos entendieran bien la magnitud de las obras que se iban a realizar. Además, siempre piensa en sus clientes, buscando las opciones más seguras y mirando por su economía. Sin dudarlo, lo recomiendo.',
  'Gran equipo de profesionales. Estamos muy agradecidos a Jordi y Jaume, que siempre están pendientes de cumplir con rapidez y agilidad las necesidades de los clientes. Gracias por la ayuda que siempre nos prestáis.',
  'Empresa muy cercana. Cualquier problema que hemos tenido nos lo han solucionado y han estado muy pendientes de nuestra marca. Profesionales y rápidos.',
  'Muy ágiles y eficaces en la tramitación de la licencia.',
  'Molt agraïda del vostre servei tan professional i bon tracte.',
];

export const home = {
  ca: {
    title: 'Enginyeria que fa possible cada projecte.',
    outlined: 'possible',
    intro: 'Projectam, dirigim i tramitam obres, instal·lacions i activitats a Menorca. T’acompanyam amb un tracte proper i solucions tècniques adaptades a les teves necessitats.',
    statYears: 'Anys d’experiència', statFiles: 'Expedients gestionats', statPlace: 'Estudi a Ciutadella', statSince: 'Des de 1985', statSinceText: 'Al teu costat',
    servicesEyebrow: 'Els nostres serveis', servicesTitle: 'Solucions tècniques per a cada projecte',
    servicesIntro: 'Des de la redacció del projecte fins a la direcció d’obra i la tramitació, t’oferim el suport tècnic que necessites en cada fase.',
    projectsEyebrow: 'Projectes', projectsTitle: 'Projectes que formen part de Menorca',
    projectsIntro: 'Una selecció de projectes d’activitats, instal·lacions, construcció i estructures resolts per l’estudi.',
    trustEyebrow: 'Confiança demostrable', trustTitle: 'Quatre dècades resolent allò complex.',
    trustBody: 'Coneixem el territori, la normativa i les administracions. Aquesta experiència ens permet anticipar decisions i donar una resposta tècnica àgil, clara i viable.',
    reviewsTitle: 'Opinions dels nostres clients', reviewSource: 'Ressenya publicada a Google',
    reviewsPrevious: 'Ressenya anterior', reviewsNext: 'Ressenya següent', reviews: googleReviews,
  },
  es: {
    title: 'Ingeniería que hace posible cada proyecto.',
    outlined: 'posible',
    intro: 'Proyectamos, dirigimos y legalizamos espacios, instalaciones y actividades en Menorca.',
    statYears: 'Años de experiencia', statFiles: 'Expedientes gestionados', statPlace: 'Estudio en Ciutadella', statSince: 'Desde 1985', statSinceText: 'A tu lado',
    servicesEyebrow: 'Nuestros servicios', servicesTitle: 'Soluciones técnicas, de la idea a la realidad.',
    servicesIntro: 'Un único equipo para proyectar, coordinar y tramitar con precisión cada fase.',
    projectsEyebrow: 'Proyectos', projectsTitle: 'Resultados que forman parte de Menorca.',
    projectsIntro: 'Una selección de proyectos de actividades, instalaciones, construcción y estructuras resueltos por el estudio.',
    trustEyebrow: 'Confianza demostrable', trustTitle: 'Cuatro décadas resolviendo lo complejo.',
    trustBody: 'Conocemos el territorio, la normativa y las administraciones. Esa experiencia nos permite anticipar decisiones y dar una respuesta técnica ágil, clara y viable.',
    reviewsTitle: 'Opiniones de nuestros clientes', reviewSource: 'Reseña publicada en Google',
    reviewsPrevious: 'Reseña anterior', reviewsNext: 'Reseña siguiente', reviews: googleReviews,
  },
  en: {
    title: 'Engineering that makes every project possible.',
    outlined: 'possible',
    intro: 'We design, manage and legalise spaces, installations and business activities in Menorca.',
    statYears: 'Years of experience', statFiles: 'Completed dossiers', statPlace: 'Ciutadella studio', statSince: 'Since 1985', statSinceText: 'By your side',
    servicesEyebrow: 'Our services', servicesTitle: 'Technical solutions, from idea to reality.',
    servicesIntro: 'One team to design, coordinate and manage every stage with precision.',
    projectsEyebrow: 'Projects', projectsTitle: 'Results that are part of Menorca.',
    projectsIntro: 'A selection of business activity, installations, construction and structural projects delivered by the studio.',
    trustEyebrow: 'Proven confidence', trustTitle: 'Four decades solving complex challenges.',
    trustBody: 'We know the territory, regulations and public authorities. That experience helps us anticipate decisions and provide an agile, clear and viable technical response.',
    reviewsTitle: 'What our clients say', reviewSource: 'Review published on Google',
    reviewsPrevious: 'Previous review', reviewsNext: 'Next review', reviews: googleReviews,
  },
} satisfies Record<Lang, unknown>;

export const servicePage = {
  ca: { eyebrow: 'Els nostres serveis', title: 'Solucions tècniques per a cada projecte', intro: 'Des de la redacció del projecte fins a la direcció d’obra i la tramitació, t’oferim el suport tècnic que necessites en cada fase.' },
  es: { eyebrow: 'Servicios', title: 'Convertimos cada reto en una solución técnica viable.', intro: 'Ingeniería industrial integral para dar forma, seguridad y recorrido administrativo a tu proyecto.' },
  en: { eyebrow: 'Services', title: 'We turn every challenge into a viable technical solution.', intro: 'Integrated industrial engineering that gives your project form, safety and a clear administrative path.' },
};

export const services = {
  ca: [
    { id: 'activitats', title: 'Projectes d’activitats', short: 'Implantació, reforma o modificació d’activitats en locals, establiments i naus industrials.', body: 'Redactam projectes per a la implantació, reforma o modificació d’activitats en locals, establiments i naus industrials. Definim els usos, les condicions de l’espai i les instal·lacions necessàries, i preparam la documentació tècnica per tramitar l’inici o la modificació de l’activitat davant l’administració.', image: '/images/bruixes.webp' },
    { id: 'installacions', title: 'Projectes d’instal·lacions', short: 'Disseny, càlcul i legalització d’instal·lacions adaptades a cada edifici i ús.', body: 'Projectam i calculam instal·lacions elèctriques, de climatització, ventilació, fontaneria, sanejament, protecció contra incendis i energies renovables, entre d’altres. Adaptam cada solució a les necessitats de l’edifici i del seu ús, i gestionam la documentació tècnica per a la seva legalització i posada en servei.', image: '/images/casas.webp' },
    { id: 'obra', title: 'Projectes d’obra', short: 'Obra nova, reforma i adequació d’espais dins el nostre àmbit professional.', body: 'Redactam projectes d’obra nova, reforma i adequació d’espais dins el nostre àmbit professional. Definim les solucions constructives i les instal·lacions, i assumim la direcció d’obra i la coordinació de seguretat i salut segons les necessitats de cada actuació.', image: '/images/diskont.webp' },
    { id: 'energia', title: 'Certificació energètica', short: 'Certificats d’eficiència energètica per a habitatges, locals i edificis.', body: 'Elaboram certificats d’eficiència energètica de habitatges, locals i edificis. Avaluam les seves característiques constructives i instal·lacions, determinam la qualificació energètica i proposam mesures de millora. També gestionam el registre del certificat davant l’organisme competent.', image: '/images/edc.webp' },
    { id: 'estructures', title: 'Càlculs estructurals', short: 'Estructures per a obres noves i intervencions en edificis existents.', body: 'Estudiam i calculam estructures per a obres noves i intervencions en edificis existents. Treballam amb estructures metàl·liques, de formigó, fusta i solucions mixtes, i resolvem elements concrets com bigues, pòrtics, fonaments i murs de contenció.', image: '/images/vivienda.webp' },
    { id: 'tramits', title: 'Tràmits i certificats', short: 'Certificats, informes i documentació tècnica per a gestions administratives.', body: 'Preparam certificats, informes i documentació tècnica per a gestions davant ajuntaments, organismes públics i altres entitats. T’ajudam a identificar la documentació necessària i a donar resposta als requeriments tècnics de cada expedient.', image: '/images/balear.webp' },
  ],
  es: [
    { id: 'actividades', title: 'Proyectos de actividades', short: 'Implantación, reforma o modificación de actividades en locales, establecimientos y naves industriales.', body: 'Redactamos proyectos para la implantación, reforma o modificación de actividades en locales, establecimientos y naves industriales. Definimos los usos, las condiciones del espacio y las instalaciones necesarias, y preparamos la documentación técnica para tramitar el inicio o la modificación de la actividad ante la administración.', image: '/images/bruixes.webp' },
    { id: 'instalaciones', title: 'Proyectos de instalaciones', short: 'Diseño, cálculo y legalización de instalaciones adaptadas a cada edificio y uso.', body: 'Proyectamos y calculamos instalaciones eléctricas, de climatización, ventilación, fontanería, saneamiento, protección contra incendios y energías renovables, entre otras. Adaptamos cada solución a las necesidades del edificio y de su uso, y gestionamos la documentación técnica para su legalización y puesta en servicio.', image: '/images/casas.webp' },
    { id: 'obra', title: 'Proyectos de obra', short: 'Obra nueva, reforma y adecuación de espacios dentro de nuestro ámbito profesional.', body: 'Redactamos proyectos de obra nueva, reforma y adecuación de espacios dentro de nuestro ámbito profesional. Definimos las soluciones constructivas y las instalaciones, y asumimos la dirección de obra y la coordinación de seguridad y salud según las necesidades de cada actuación.', image: '/images/diskont.webp' },
    { id: 'energia', title: 'Certificación energética', short: 'Certificados de eficiencia energética para viviendas, locales y edificios.', body: 'Elaboramos certificados de eficiencia energética de viviendas, locales y edificios. Evaluamos sus características constructivas e instalaciones, determinamos la calificación energética y proponemos medidas de mejora. También gestionamos el registro del certificado ante el organismo competente.', image: '/images/edc.webp' },
    { id: 'estructuras', title: 'Cálculos estructurales', short: 'Estructuras para obras nuevas e intervenciones en edificios existentes.', body: 'Estudiamos y calculamos estructuras para obras nuevas e intervenciones en edificios existentes. Trabajamos con estructuras metálicas, de hormigón, madera y soluciones mixtas, y resolvemos elementos concretos como vigas, pórticos, cimentaciones y muros de contención.', image: '/images/vivienda.webp' },
    { id: 'tramites', title: 'Trámites y certificados', short: 'Certificados, informes y documentación técnica para gestiones administrativas.', body: 'Preparamos certificados, informes y documentación técnica para gestiones ante ayuntamientos, organismos públicos y otras entidades. Te ayudamos a identificar la documentación necesaria y a dar respuesta a los requerimientos técnicos de cada expediente.', image: '/images/balear.webp' },
  ],
  en: [
    { id: 'activities', title: 'Activity projects', short: 'Implementation, refurbishment or modification of activities in premises, establishments and industrial units.', body: 'We prepare projects for the implementation, refurbishment or modification of activities in premises, establishments and industrial units. We define the uses, the conditions of the space and the required installations, and prepare the technical documentation to process the start or modification of the activity with the authorities.', image: '/images/bruixes.webp' },
    { id: 'installations', title: 'Installation projects', short: 'Design, calculation and legalisation of installations adapted to each building and use.', body: 'We design and calculate electrical, climate control, ventilation, plumbing, drainage, fire protection and renewable energy installations, among others. We adapt each solution to the needs of the building and its use, and manage the technical documentation for legalisation and commissioning.', image: '/images/casas.webp' },
    { id: 'works', title: 'Building works projects', short: 'New-build, refurbishment and space adaptation projects within our professional scope.', body: 'We prepare new-build, refurbishment and space adaptation projects within our professional scope. We define construction solutions and installations, and undertake site management and health and safety coordination according to the needs of each project.', image: '/images/diskont.webp' },
    { id: 'energy', title: 'Energy certification', short: 'Energy efficiency certificates for homes, premises and buildings.', body: 'We prepare energy efficiency certificates for homes, premises and buildings. We assess their construction characteristics and installations, determine the energy rating and propose improvement measures. We also manage the registration of the certificate with the competent authority.', image: '/images/edc.webp' },
    { id: 'structures', title: 'Structural calculations', short: 'Structures for new works and interventions in existing buildings.', body: 'We study and calculate structures for new works and interventions in existing buildings. We work with steel, concrete, timber and mixed structures, and resolve specific elements such as beams, frames, foundations and retaining walls.', image: '/images/vivienda.webp' },
    { id: 'procedures', title: 'Procedures and certificates', short: 'Certificates, reports and technical documentation for administrative procedures.', body: 'We prepare certificates, reports and technical documentation for procedures with town councils, public bodies and other entities. We help you identify the required documentation and respond to the technical requirements of each file.', image: '/images/balear.webp' },
  ],
} satisfies Record<Lang, Array<{ id: string; title: string; short: string; body: string; image: string }>>;

export const projectPage = {
  ca: { eyebrow: 'Projectes', title: 'Projectes que formen part de Menorca', intro: 'Solucions d’enginyeria implantades en hotels, comerços, indústria, restauració i habitatge arreu de Menorca.', filter: 'Filtrar projectes' },
  es: { eyebrow: 'Proyectos', title: 'Una selección de proyectos realizados durante más de 40 años.', intro: 'Soluciones de ingeniería implantadas en hoteles, comercios, industria, restauración y vivienda por toda Menorca.', filter: 'Filtrar proyectos' },
  en: { eyebrow: 'Projects', title: 'A selection of projects delivered over more than 40 years.', intro: 'Engineering solutions implemented in hotels, shops, industry, hospitality and housing across Menorca.', filter: 'Filter projects' },
};

export const projects = {
  ca: [
    { slug: 'ses-bruixes', title: 'Ses Bruixes Boutique Hotel', category: 'Hotels i activitats', description: 'Projecte d’activitats i instal·lacions de Ses Bruixes Boutique Hotel.', image: '/images/bruixes.webp' },
    { slug: 'cafe-balear', title: 'Restaurant Cafè Balear', category: 'Enginyeria i activitats', description: 'Projecte d’activitats i instal·lacions del restaurant Cafè Balear a Ciutadella.', image: '/images/balear.webp' },
    { slug: 'casas-del-lago', title: 'Hotel Casas del Lago', category: 'Hotels i urbanisme', description: 'Projecte d’activitats de l’Hotel Casas del Lago, situat a Cala’n Bosch.', image: '/images/casas.webp' },
    { slug: 'diskont', title: 'DISKONT Ciutadella', category: 'Construcció industrial', description: 'Projecte d’obra i activitats per a un magatzem logístic amb oficines i molls de descàrrega al polígon industrial.', image: '/images/diskont.webp' },
    { slug: 'raima', title: 'Embotits RAIMA', category: 'Indústria i activitats', description: 'Projecte d’obra i activitats per a una indústria càrnia i punt de venda al polígon industrial de Ciutadella.', image: '/images/raima.webp' },
    { slug: 'iris', title: 'Perruqueria Iris', category: 'Activitats i energia', description: 'Projecte d’activitats per a una perruqueria situada al nucli antic de Ciutadella.', image: '/images/iris.webp' },
    { slug: 'edc', title: 'Botiga de roba edc', category: 'Activitats i renovables', description: 'Projecte d’activitats per a una botiga de roba al nucli antic amb il·luminació completament LED.', image: '/images/edc.webp' },
    { slug: 'habitatge', title: 'Habitatge unifamiliar', category: 'Càlcul estructural', description: 'Càlcul estructural per a un habitatge a Ciutadella de Menorca.', image: '/images/vivienda.webp' },
  ],
  es: [
    { slug: 'ses-bruixes', title: 'Ses Bruixes Boutique Hotel', category: 'Hoteles y actividades', description: 'Proyecto de actividades e instalaciones de Ses Bruixes Boutique Hotel.', image: '/images/bruixes.webp' },
    { slug: 'cafe-balear', title: 'Restaurante Cafè Balear', category: 'Ingeniería y actividades', description: 'Proyecto de actividades e instalaciones del restaurante Cafè Balear en Ciutadella.', image: '/images/balear.webp' },
    { slug: 'casas-del-lago', title: 'Hotel Casas del Lago', category: 'Hoteles y urbanismo', description: 'Proyecto de actividades del Hotel Casas del Lago, situado en Cala’n Bosch.', image: '/images/casas.webp' },
    { slug: 'diskont', title: 'DISKONT Ciutadella', category: 'Construcción industrial', description: 'Proyecto de obra y actividades para un almacén logístico con oficinas y muelles de descarga en el polígono industrial.', image: '/images/diskont.webp' },
    { slug: 'raima', title: 'Embotits RAIMA', category: 'Industria y actividades', description: 'Proyecto de obra y actividades para una industria cárnica y punto de venta en el polígono industrial de Ciutadella.', image: '/images/raima.webp' },
    { slug: 'iris', title: 'Peluquería Iris', category: 'Actividades y energía', description: 'Proyecto de actividades para una peluquería situada en el casco antiguo de Ciutadella.', image: '/images/iris.webp' },
    { slug: 'edc', title: 'Tienda de ropa edc', category: 'Actividades y renovables', description: 'Proyecto de actividades para una tienda de ropa en el casco antiguo con iluminación completa LED.', image: '/images/edc.webp' },
    { slug: 'vivienda', title: 'Vivienda unifamiliar', category: 'Cálculo estructural', description: 'Cálculo estructural para una vivienda en Ciutadella de Menorca.', image: '/images/vivienda.webp' },
  ],
  en: [
    { slug: 'ses-bruixes', title: 'Ses Bruixes Boutique Hotel', category: 'Hotels and activities', description: 'Business activity and installations project for Ses Bruixes Boutique Hotel.', image: '/images/bruixes.webp' },
    { slug: 'cafe-balear', title: 'Cafè Balear Restaurant', category: 'Engineering and activities', description: 'Business activity and installations project for Cafè Balear restaurant in Ciutadella.', image: '/images/balear.webp' },
    { slug: 'casas-del-lago', title: 'Casas del Lago Hotel', category: 'Hotels and planning', description: 'Business activity project for the Casas del Lago Hotel in Cala’n Bosch.', image: '/images/casas.webp' },
    { slug: 'diskont', title: 'DISKONT Ciutadella', category: 'Industrial construction', description: 'Construction and business activity project for a logistics warehouse with offices and loading bays in Ciutadella.', image: '/images/diskont.webp' },
    { slug: 'raima', title: 'Embotits RAIMA', category: 'Industry and activities', description: 'Construction and business activity project for a meat producer and shop in Ciutadella’s industrial estate.', image: '/images/raima.webp' },
    { slug: 'iris', title: 'Iris Hair Salon', category: 'Activities and energy', description: 'Business activity project for a hair salon in Ciutadella’s historic centre.', image: '/images/iris.webp' },
    { slug: 'edc', title: 'edc clothing shop', category: 'Activities and renewables', description: 'Business activity project for a clothing shop in the historic centre with full LED lighting.', image: '/images/edc.webp' },
    { slug: 'house', title: 'Detached house', category: 'Structural calculation', description: 'Structural calculation for a home in Ciutadella de Menorca.', image: '/images/vivienda.webp' },
  ],
} satisfies Record<Lang, Array<{ slug: string; title: string; category: string; description: string; image: string }>>;

export const contactPage = {
  ca: { eyebrow: 'Tens un projecte?', title: 'Parlem-ne', intro: 'Si vols iniciar una activitat, executar una obra, renovar una instal·lació o gestionar un tràmit tècnic, explica’ns què necessites. Estudiarem el teu cas i t’orientarem sobre els passos a seguir.', visit: 'Visita’ns a Ciutadella' },
  es: { eyebrow: 'Contacto', title: 'Tu proyecto empieza con una conversación.', intro: 'Cuéntanos qué necesitas. Te ayudaremos a ordenar el proceso y a encontrar la solución técnica adecuada.', visit: 'Visítanos en Ciutadella' },
  en: { eyebrow: 'Contact', title: 'Your project starts with a conversation.', intro: 'Tell us what you need. We will help structure the process and find the right technical solution.', visit: 'Visit us in Ciutadella' },
};

export const contact = {
  phoneDisplay: '(+34) 971 38 48 26', phoneHref: 'tel:+34971384826', whatsappHref: 'https://wa.me/34971384826', email: 'oficina@enginyersbosch.com',
  address: 'C/ Comerciants i Botiguers, 23, 1r · Locals 6 i 7 (POICI), 07760 Ciutadella de Menorca',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=40.005883%2C3.8586725',
  osmEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=3.8527%2C40.0029%2C3.8647%2C40.0089&layer=mapnik&marker=40.005883%2C3.8586725',
  facebook: 'https://www.facebook.com/Enginyersbosch/',
  instagram: 'https://www.instagram.com/jordiboschingenieria/',
};

export const contactStrip = {
  ca: { eyebrow: 'Tens un projecte?', title: 'Parlem-ne', body: 'Si vols iniciar una activitat, executar una obra, renovar una instal·lació o gestionar un tràmit tècnic, explica’ns què necessites. Estudiarem el teu cas i t’orientarem sobre els passos a seguir.', formTitle: 'Explica’ns el teu projecte', formIntro: 'Dona’ns els primers detalls i estudiarem com et podem ajudar.', name: 'Nom i cognoms', phone: 'Telèfon', email: 'Correu electrònic', message: 'En què et podem ajudar?', privacy: 'He llegit i accepto la', privacyLink: 'política de privacitat', send: 'Enviar consulta' },
  es: { eyebrow: '¿Tienes un proyecto?', title: 'Hablemos.', body: 'Una conversación clara es el primer paso para convertir una necesidad en una solución viable.', formTitle: 'Cuéntanos tu proyecto', formIntro: 'Danos los primeros detalles y estudiaremos cómo podemos ayudarte.', name: 'Nombre y apellidos', phone: 'Teléfono', email: 'Correo electrónico', message: '¿En qué podemos ayudarte?', privacy: 'He leído y acepto la', privacyLink: 'política de privacidad', send: 'Enviar consulta' },
  en: { eyebrow: 'Have a project?', title: 'Let’s talk.', body: 'A clear conversation is the first step in turning a requirement into a viable solution.', formTitle: 'Tell us about your project', formIntro: 'Share the first details and we will consider how we can help.', name: 'Full name', phone: 'Phone', email: 'Email address', message: 'How can we help?', privacy: 'I have read and accept the', privacyLink: 'privacy policy', send: 'Send enquiry' },
};

export const cookieCopy = {
  ca: { title: 'La teva privacitat, sota control', body: 'Només utilitzam emmagatzematge local per recordar la teva elecció. El mapa es carrega des d’OpenStreetMap.', accept: 'Acceptar', reject: 'Rebutjar', settings: 'Llegir la política' },
  es: { title: 'Tu privacidad, bajo control', body: 'Solo utilizamos almacenamiento local para recordar tu elección. El mapa se carga desde OpenStreetMap.', accept: 'Aceptar', reject: 'Rechazar', settings: 'Leer la política' },
  en: { title: 'Your privacy, under your control', body: 'We only use local storage to remember your choice. The map is loaded from OpenStreetMap.', accept: 'Accept', reject: 'Reject', settings: 'Read the policy' },
};
