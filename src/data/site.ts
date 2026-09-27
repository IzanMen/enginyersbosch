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
    footerValues: ['Rigor', 'Proximitat', 'Experiència', 'Resolució'], copyright: 'Tots els drets reservats', manageCookies: 'Gestionar cookies',
    legalLinks: { privacy: 'Política de privacitat', legal: 'Avís legal', cookies: 'Política de cookies' },
  },
  es: {
    localeName: 'ES', nav: { home: 'Inicio', services: 'Servicios', projects: 'Proyectos', contact: 'Contacto' },
    contactCta: 'Hablemos de tu proyecto', learnMore: 'Más información', viewAll: 'Ver todos los proyectos', close: 'Cerrar', all: 'Todos',
    breadcrumb: 'Inicio', phone: 'Teléfono', email: 'Correo electrónico', address: 'Dirección', directions: 'Cómo llegar', references: 'Referencias de clientes disponibles bajo petición.',
    footerStatement: 'Ingeniería industrial con criterio, cercanía y capacidad resolutiva al servicio de Menorca.',
    footerValues: ['Rigor', 'Cercanía', 'Experiencia', 'Resolución'], copyright: 'Todos los derechos reservados', manageCookies: 'Gestionar cookies',
    legalLinks: { privacy: 'Política de privacidad', legal: 'Aviso legal', cookies: 'Política de cookies' },
  },
  en: {
    localeName: 'EN', nav: { home: 'Home', services: 'Services', projects: 'Projects', contact: 'Contact' },
    contactCta: 'Let’s discuss your project', learnMore: 'Find out more', viewAll: 'View all projects', close: 'Close', all: 'All',
    breadcrumb: 'Home', phone: 'Phone', email: 'Email', address: 'Address', directions: 'Get directions', references: 'Client references are available on request.',
    footerStatement: 'Industrial engineering with rigour, a personal approach and effective solutions for Menorca.',
    footerValues: ['Rigour', 'Proximity', 'Experience', 'Resolution'], copyright: 'All rights reserved', manageCookies: 'Manage cookies',
    legalLinks: { privacy: 'Privacy policy', legal: 'Legal notice', cookies: 'Cookie policy' },
  },
} satisfies Record<Lang, unknown>;

export const home = {
  ca: {
    title: 'Enginyeria que fa possible cada projecte.',
    outlined: 'possible',
    intro: 'Projectam, dirigim i legalitzam espais, instal·lacions i activitats a Menorca.',
    statYears: 'Anys d’experiència', statFiles: 'Expedients gestionats', statPlace: 'Estudi a Ciutadella', statSince: 'Al teu costat des de',
    servicesEyebrow: 'Els nostres serveis', servicesTitle: 'Solucions tècniques, de la idea a la realitat.',
    servicesIntro: 'Un únic equip per projectar, coordinar i tramitar amb precisió cada fase.',
    projectsEyebrow: 'Projectes', projectsTitle: 'Resultats que formen part de Menorca.',
    projectsIntro: 'Una selecció de projectes d’activitats, instal·lacions, construcció i estructures resolts per l’estudi.',
    trustEyebrow: 'Confiança demostrable', trustTitle: 'Quatre dècades resolent allò complex.',
    trustBody: 'Coneixem el territori, la normativa i les administracions. Aquesta experiència ens permet anticipar decisions i donar una resposta tècnica àgil, clara i viable.',
    trustItems: [
      ['Tracte directe', 'Cada projecte té un interlocutor tècnic proper de principi a fi.'],
      ['Solvència tècnica', 'Solucions funcionals i optimitzades en qualitat, cost i normativa.'],
      ['Gestió completa', 'Projecte, direcció, legalització i tràmits coordinats des del mateix despatx.'],
    ],
  },
  es: {
    title: 'Ingeniería que hace posible cada proyecto.',
    outlined: 'posible',
    intro: 'Proyectamos, dirigimos y legalizamos espacios, instalaciones y actividades en Menorca.',
    statYears: 'Años de experiencia', statFiles: 'Expedientes gestionados', statPlace: 'Estudio en Ciutadella', statSince: 'A tu lado desde',
    servicesEyebrow: 'Nuestros servicios', servicesTitle: 'Soluciones técnicas, de la idea a la realidad.',
    servicesIntro: 'Un único equipo para proyectar, coordinar y tramitar con precisión cada fase.',
    projectsEyebrow: 'Proyectos', projectsTitle: 'Resultados que forman parte de Menorca.',
    projectsIntro: 'Una selección de proyectos de actividades, instalaciones, construcción y estructuras resueltos por el estudio.',
    trustEyebrow: 'Confianza demostrable', trustTitle: 'Cuatro décadas resolviendo lo complejo.',
    trustBody: 'Conocemos el territorio, la normativa y las administraciones. Esa experiencia nos permite anticipar decisiones y dar una respuesta técnica ágil, clara y viable.',
    trustItems: [
      ['Trato directo', 'Cada proyecto tiene un interlocutor técnico cercano de principio a fin.'],
      ['Solvencia técnica', 'Soluciones funcionales y optimizadas en calidad, coste y normativa.'],
      ['Gestión completa', 'Proyecto, dirección, legalización y trámites coordinados desde el mismo despacho.'],
    ],
  },
  en: {
    title: 'Engineering that makes every project possible.',
    outlined: 'possible',
    intro: 'We design, manage and legalise spaces, installations and business activities in Menorca.',
    statYears: 'Years of experience', statFiles: 'Completed dossiers', statPlace: 'Ciutadella studio', statSince: 'By your side since',
    servicesEyebrow: 'Our services', servicesTitle: 'Technical solutions, from idea to reality.',
    servicesIntro: 'One team to design, coordinate and manage every stage with precision.',
    projectsEyebrow: 'Projects', projectsTitle: 'Results that are part of Menorca.',
    projectsIntro: 'A selection of business activity, installations, construction and structural projects delivered by the studio.',
    trustEyebrow: 'Proven confidence', trustTitle: 'Four decades solving complex challenges.',
    trustBody: 'We know the territory, regulations and public authorities. That experience helps us anticipate decisions and provide an agile, clear and viable technical response.',
    trustItems: [
      ['Direct contact', 'Every project has a nearby technical lead from beginning to end.'],
      ['Technical expertise', 'Functional solutions optimised for quality, cost and compliance.'],
      ['Complete management', 'Design, site management, legalisation and administration from one studio.'],
    ],
  },
} satisfies Record<Lang, unknown>;

export const servicePage = {
  ca: { eyebrow: 'Serveis', title: 'Convertim cada repte en una solució tècnica viable.', intro: 'Enginyeria industrial integral per donar forma, seguretat i recorregut administratiu al teu projecte.' },
  es: { eyebrow: 'Servicios', title: 'Convertimos cada reto en una solución técnica viable.', intro: 'Ingeniería industrial integral para dar forma, seguridad y recorrido administrativo a tu proyecto.' },
  en: { eyebrow: 'Services', title: 'We turn every challenge into a viable technical solution.', intro: 'Integrated industrial engineering that gives your project form, safety and a clear administrative path.' },
};

export const services = {
  ca: [
    { id: 'activitats', title: 'Projectes d’activitats i llicències d’obertura', short: 'Definició d’usos, instal·lacions i tramitació per obtenir la llicència d’obertura.', body: 'Redactam i desenvolupam projectes per a comerços, despatxos, indústries, hotels, agroturismes i qualsevol iniciativa empresarial. Especifiquem els usos i dissenyam les instal·lacions segons la normativa vigent, fins a la tramitació de la llicència.', image: '/images/bruixes.webp' },
    { id: 'construccio', title: 'Construcció', short: 'Projectes bàsics i executius, direcció d’obra i coordinació de seguretat.', body: 'Definim des dels elements constructius més senzills fins a naus industrials i construccions complexes, amb el detall necessari per executar l’obra i coordinar tots els agents que hi intervenen.', image: '/images/diskont.webp' },
    { id: 'installacions', title: 'Instal·lacions i energies renovables', short: 'Disseny, càlcul i legalització de les instal·lacions de l’edifici.', body: 'Projectam electricitat, climatització, producció d’ACS, fontaneria, sanejament, protecció contra incendis, gas, ventilació, gasoil i energies renovables, inclosa la legalització davant Indústria.', image: '/images/casas.webp' },
    { id: 'urbanisme', title: 'Urbanisme', short: 'Planejament i projectes d’urbanització per a entitats públiques i promotors.', body: 'Col·laboram en estudis de detall, unitats d’actuació, plans parcials i generals. L’experiència en actuacions com Son Xoriguer o Binimel·là ens dona agilitat administrativa i solvència tècnica.', image: '/images/casas.webp' },
    { id: 'estructures', title: 'Càlculs estructurals', short: 'Estructures residencials i industrials segures, funcionals i optimitzades.', body: 'Calculam estructures metàl·liques, de formigó armat, mixtes, de fusta i prefabricades; també bigues, pòrtics, voladissos, fonaments, murs de contenció i soterranis.', image: '/images/vivienda.webp' },
    { id: 'energia', title: 'Certificació energètica d’edificis', short: 'Certificats per a habitatges, edificis plurifamiliars i usos terciaris.', body: 'Realitzam la certificació energètica d’habitatges unifamiliars, habitatges en edificis plurifamiliars, edificis complets, locals comercials, hotels i oficines.', image: '/images/edc.webp' },
    { id: 'tramits', title: 'Tràmits i certificats', short: 'Gestió tècnica davant les administracions i les companyies de serveis.', body: 'Tramitam noves altes i ampliacions de potència elèctrica, cèdules d’habitabilitat per a locals comercials o industrials, inspeccions tècniques d’edificis i altres certificats.', image: '/images/balear.webp' },
    { id: 'estudis', title: 'Estudis i solucions', short: 'Anàlisi personalitzada per millorar instal·lacions, consums i funcionalitat.', body: 'Estudiam cada negoci amb l’objectiu de trobar eficiència i solucions concretes davant qualsevol problemàtica funcional, d’instal·lacions o de consum.', image: '/images/raima.webp' },
  ],
  es: [
    { id: 'actividades', title: 'Proyectos de actividades y licencias de apertura', short: 'Definición de usos, instalaciones y tramitación para obtener la licencia de apertura.', body: 'Redactamos y desarrollamos proyectos para comercios, despachos, industrias, hoteles, agroturismos y cualquier iniciativa empresarial. Especificamos los usos y diseñamos las instalaciones según la normativa vigente, hasta la tramitación de la licencia.', image: '/images/bruixes.webp' },
    { id: 'construccion', title: 'Construcción', short: 'Proyectos básicos y ejecutivos, dirección de obra y coordinación de seguridad.', body: 'Definimos desde los elementos constructivos más sencillos hasta naves industriales y construcciones complejas, con el detalle necesario para ejecutar la obra y coordinar a todos los agentes que intervienen.', image: '/images/diskont.webp' },
    { id: 'instalaciones', title: 'Instalaciones y energías renovables', short: 'Diseño, cálculo y legalización de las instalaciones del edificio.', body: 'Proyectamos electricidad, climatización, producción de ACS, fontanería, saneamiento, protección contra incendios, gas, ventilación, gasoil y energías renovables, incluida la legalización ante Industria.', image: '/images/casas.webp' },
    { id: 'urbanismo', title: 'Urbanismo', short: 'Planeamiento y proyectos de urbanización para entidades públicas y promotores.', body: 'Colaboramos en estudios de detalle, unidades de actuación, planes parciales y generales. La experiencia en actuaciones como Son Xoriguer o Binimel·là nos aporta agilidad administrativa y solvencia técnica.', image: '/images/casas.webp' },
    { id: 'estructuras', title: 'Cálculos estructurales', short: 'Estructuras residenciales e industriales seguras, funcionales y optimizadas.', body: 'Calculamos estructuras metálicas, de hormigón armado, mixtas, de madera y prefabricadas; también vigas, pórticos, voladizos, cimentaciones, muros de contención y sótanos.', image: '/images/vivienda.webp' },
    { id: 'energia', title: 'Certificación energética de edificios', short: 'Certificados para viviendas, edificios plurifamiliares y usos terciarios.', body: 'Realizamos la certificación energética de viviendas unifamiliares, viviendas en edificios plurifamiliares, edificios completos, locales comerciales, hoteles y oficinas.', image: '/images/edc.webp' },
    { id: 'tramites', title: 'Trámites y certificados', short: 'Gestión técnica ante las administraciones y compañías de servicios.', body: 'Tramitamos nuevas altas y ampliaciones de potencia eléctrica, cédulas de habitabilidad para locales comerciales o industriales, inspecciones técnicas de edificios y otros certificados.', image: '/images/balear.webp' },
    { id: 'estudios', title: 'Estudios y soluciones', short: 'Análisis personalizado para mejorar instalaciones, consumos y funcionalidad.', body: 'Estudiamos cada negocio con el objetivo de encontrar eficiencia y soluciones concretas ante cualquier problemática funcional, de instalaciones o de consumo.', image: '/images/raima.webp' },
  ],
  en: [
    { id: 'activities', title: 'Business activity projects and opening licences', short: 'Definition of uses, installations and applications required for an opening licence.', body: 'We prepare projects for shops, offices, industry, hotels, agritourism and other businesses. We define uses and design compliant installations, then manage the opening licence process.', image: '/images/bruixes.webp' },
    { id: 'construction', title: 'Construction', short: 'Concept and detailed design, site management and health and safety coordination.', body: 'We define anything from simple construction elements to industrial units and complex buildings, providing the detail required to deliver the works and coordinate every party involved.', image: '/images/diskont.webp' },
    { id: 'installations', title: 'Installations and renewable energy', short: 'Design, calculation and legalisation of building installations.', body: 'We design electrical, climate control, hot water, plumbing, drainage, fire protection, gas, ventilation, fuel and renewable-energy systems, including their legalisation with the authorities.', image: '/images/casas.webp' },
    { id: 'planning', title: 'Urban planning', short: 'Planning and urban development projects for public bodies and private developers.', body: 'We work on detailed studies, action units and partial or general plans. Projects such as Son Xoriguer and Binimel·là give us proven administrative agility and technical expertise.', image: '/images/casas.webp' },
    { id: 'structures', title: 'Structural calculations', short: 'Safe, functional and optimised residential and industrial structures.', body: 'We calculate steel, reinforced-concrete, composite, timber and precast structures, as well as beams, frames, cantilevers, foundations, retaining walls and basements.', image: '/images/vivienda.webp' },
    { id: 'energy', title: 'Building energy certification', short: 'Certificates for houses, apartment buildings and commercial properties.', body: 'We provide energy certificates for detached and multi-family homes, full residential buildings, commercial premises, hotels and offices.', image: '/images/edc.webp' },
    { id: 'procedures', title: 'Applications and certificates', short: 'Technical administration with public authorities and utility companies.', body: 'We handle new electricity supplies and capacity increases, occupancy certificates for commercial or industrial premises, building inspections and other technical certificates.', image: '/images/balear.webp' },
    { id: 'studies', title: 'Studies and solutions', short: 'Tailored analysis to improve installations, consumption and functionality.', body: 'We study each business to find efficient, concrete solutions for functional, installation and energy-consumption challenges.', image: '/images/raima.webp' },
  ],
} satisfies Record<Lang, Array<{ id: string; title: string; short: string; body: string; image: string }>>;

export const projectPage = {
  ca: { eyebrow: 'Projectes', title: 'Una selecció de projectes realitzats durant més de 40 anys.', intro: 'Solucions d’enginyeria implantades en hotels, comerços, indústria, restauració i habitatge arreu de Menorca.', filter: 'Filtrar projectes' },
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
  ca: { eyebrow: 'Contacte', title: 'El teu projecte comença amb una conversa.', intro: 'Explica’ns què necessites. T’ajudarem a ordenar el procés i a trobar la solució tècnica adequada.', visit: 'Visita’ns a Ciutadella', teamEyebrow: 'Equip', teamTitle: 'Experiència, criteri i atenció directa.', teamIntro: 'Un equip de professionals amb experiència en el sector i en el tracte amb l’administració.' },
  es: { eyebrow: 'Contacto', title: 'Tu proyecto empieza con una conversación.', intro: 'Cuéntanos qué necesitas. Te ayudaremos a ordenar el proceso y a encontrar la solución técnica adecuada.', visit: 'Visítanos en Ciutadella', teamEyebrow: 'Equipo', teamTitle: 'Experiencia, criterio y atención directa.', teamIntro: 'Un equipo de profesionales con experiencia en el sector y en el trato con la administración.' },
  en: { eyebrow: 'Contact', title: 'Your project starts with a conversation.', intro: 'Tell us what you need. We will help structure the process and find the right technical solution.', visit: 'Visit us in Ciutadella', teamEyebrow: 'Team', teamTitle: 'Experience, judgement and direct attention.', teamIntro: 'A professional team with extensive engineering and public-administration experience.' },
};

export const team = {
  ca: [
    { name: 'José Bosch Seguí', role: 'Enginyer Industrial · Col·legiat 170', bio: 'Gerència, supervisió i direcció de projectes, solucions tècniques i control a peu d’obra.', image: null },
    { name: 'Francisca León', role: 'Memòries tècniques i documentació', bio: 'Elaboració de memòries, gestió administrativa i tràmits amb l’administració.', image: '/images/francisca.webp' },
    { name: 'Tonia Mora', role: 'Delineació i solucions gràfiques', bio: 'Desenvolupament de projectes, plànols i contacte amb industrials.', image: '/images/tonia.webp' },
    { name: 'Jordi Bosch Simó', role: 'Enginyer Mecànic · Col·legiat 1.437', bio: 'Direcció i delineació de projectes, solucions tècniques, control d’obra i seguretat i salut.', image: null },
  ],
  es: [
    { name: 'José Bosch Seguí', role: 'Ingeniero Industrial · Colegiado 170', bio: 'Gerencia, supervisión y dirección de proyectos, soluciones técnicas y control a pie de obra.', image: null },
    { name: 'Francisca León', role: 'Memorias técnicas y documentación', bio: 'Elaboración de memorias, gestión administrativa y trámites con la administración.', image: '/images/francisca.webp' },
    { name: 'Tonia Mora', role: 'Delineación y soluciones gráficas', bio: 'Desarrollo de proyectos, planos y contacto con industriales.', image: '/images/tonia.webp' },
    { name: 'Jordi Bosch Simó', role: 'Ingeniero Mecánico · Colegiado 1.437', bio: 'Dirección y delineación de proyectos, soluciones técnicas, control de obra y seguridad y salud.', image: null },
  ],
  en: [
    { name: 'José Bosch Seguí', role: 'Industrial Engineer · Registration 170', bio: 'Management, project supervision, technical solutions and on-site control.', image: null },
    { name: 'Francisca León', role: 'Technical reports and documentation', bio: 'Technical reports, administration and liaison with public authorities.', image: '/images/francisca.webp' },
    { name: 'Tonia Mora', role: 'Drafting and graphic solutions', bio: 'Project development, technical drawings and coordination with contractors.', image: '/images/tonia.webp' },
    { name: 'Jordi Bosch Simó', role: 'Mechanical Engineer · Registration 1,437', bio: 'Project design and management, technical solutions, site control, health and safety.', image: null },
  ],
} satisfies Record<Lang, Array<{ name: string; role: string; bio: string; image: string | null }>>;

export const contact = {
  phoneDisplay: '(+34) 971 38 48 26', phoneHref: 'tel:+34971384826', email: 'oficina@enginyersbosch.com',
  address: 'C/ Comerciants i Botiguers, 23, 1r · Locals 6 i 7 (POICI), 07760 Ciutadella de Menorca',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=40.005883%2C3.8586725',
  osmEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=3.8527%2C40.0029%2C3.8647%2C40.0089&layer=mapnik&marker=40.005883%2C3.8586725',
  facebook: 'https://www.facebook.com/Enginyersbosch/',
};

export const contactStrip = {
  ca: { eyebrow: 'Tens un projecte?', title: 'Parlem-ne.', body: 'Una conversa clara és el primer pas per convertir una necessitat en una solució viable.' },
  es: { eyebrow: '¿Tienes un proyecto?', title: 'Hablemos.', body: 'Una conversación clara es el primer paso para convertir una necesidad en una solución viable.' },
  en: { eyebrow: 'Have a project?', title: 'Let’s talk.', body: 'A clear conversation is the first step in turning a requirement into a viable solution.' },
};

export const cookieCopy = {
  ca: { title: 'La teva privacitat, sota control', body: 'Només utilitzam emmagatzematge local per recordar la teva elecció. El mapa es carrega des d’OpenStreetMap.', accept: 'Acceptar', reject: 'Rebutjar', settings: 'Llegir la política' },
  es: { title: 'Tu privacidad, bajo control', body: 'Solo utilizamos almacenamiento local para recordar tu elección. El mapa se carga desde OpenStreetMap.', accept: 'Aceptar', reject: 'Rechazar', settings: 'Leer la política' },
  en: { title: 'Your privacy, under your control', body: 'We only use local storage to remember your choice. The map is loaded from OpenStreetMap.', accept: 'Accept', reject: 'Reject', settings: 'Read the policy' },
};
