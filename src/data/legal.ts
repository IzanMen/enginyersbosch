import type { Lang, PageKey } from './site';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalDocument {
  key: Extract<PageKey, 'privacy' | 'legal' | 'cookies'>;
  title: string;
  updated?: string;
  intro?: string;
  sections: LegalSection[];
}

export const legalDocuments: Record<Lang, Record<'privacy' | 'legal' | 'cookies', LegalDocument>> = {
  es: {
    privacy: {
      key: 'privacy', title: 'Política de privacidad',
      intro: 'En cumplimiento del Reglamento (UE) 2016/679 y de la Ley Orgánica 3/2018, se informa de que los datos personales proporcionados a través de este sitio web serán tratados en los siguientes términos.',
      sections: [
        { heading: 'Responsable del tratamiento', paragraphs: ['Los datos personales serán tratados por JORDI BOSCH SIMO. Domicilio para el ejercicio de derechos: C/ Comerciants i Botiguers, 23, 1º, locales 6 y 7 (POICI), 07760 Ciutadella de Menorca (Illes Balears). Correo electrónico: jordi@enginyersbosch.com.'] },
        { heading: 'Finalidades del tratamiento', items: ['Informarle sobre nuestros productos y servicios cuando lo solicite por correo electrónico.', 'Responder y gestionar sus consultas, comentarios y sugerencias.', 'Gestionar su participación en procesos de selección cuando remita sus datos con esa finalidad.', 'Obtener información estadística y anónima sobre el uso del sitio web.'] },
        { heading: 'Legitimación', paragraphs: ['Los datos enviados para realizar consultas se tratarán con base en el consentimiento del interesado, que puede retirarse en cualquier momento. La información estadística anónima se trata con base en el interés legítimo del responsable.'] },
        { heading: 'Destinatarios', paragraphs: ['Los datos personales no serán comunicados a terceros, salvo obligación legal.'] },
        { heading: 'Conservación', paragraphs: ['Los datos se conservarán mientras sean necesarios para atender la finalidad para la que fueron facilitados y durante los plazos exigibles para responder de posibles responsabilidades. Los datos de procesos de selección podrán conservarse durante dos años; los datos estadísticos, durante tres años.'] },
        { heading: 'Derechos', paragraphs: ['Puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición mediante escrito acompañado de un documento identificativo dirigido al domicilio indicado o a jordi@enginyersbosch.com.', 'Si no está conforme con el tratamiento, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).'] },
        { heading: 'Redes sociales', paragraphs: ['Al seguir nuestros perfiles sociales, consiente el tratamiento de los datos de su perfil conforme a la política de la red correspondiente. Los comentarios publicados pueden convertirse en información pública; sus autores pueden solicitar su retirada al responsable.'] },
      ],
    },
    legal: {
      key: 'legal', title: 'Aviso legal',
      sections: [
        { heading: 'Identificación', paragraphs: ['En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se informa de que el titular del sitio es JORDI BOSCH SIMO.', 'Domicilio: C/ Comerciants i Botiguers, 23, 1º, locales 6 y 7 (POICI), 07760 Ciutadella de Menorca (Illes Balears). Teléfono: 971 384 826. Correo electrónico: jordi@enginyersbosch.com. NIF: 41744511V.'] },
        { heading: 'Propiedad intelectual e industrial', paragraphs: ['Los derechos de propiedad industrial e intelectual de los elementos de este sitio web, incluidas marcas, formatos, diseños gráficos, textos, imágenes y documentos, pertenecen a JORDI BOSCH SIMO y están protegidos por la legislación aplicable.', 'Queda prohibida su reproducción total o parcial sin permiso expreso y por escrito. El acceso al sitio no implica renuncia, transmisión, licencia o cesión de estos derechos.'] },
        { heading: 'Condiciones de uso', paragraphs: ['El acceso a este sitio implica la aceptación de estas condiciones. Queda prohibido utilizar sus contenidos con fines ilícitos o lesivos, dañarlos, inutilizarlos o destinarlos a distribución, transformación o comunicación comercial sin autorización.', 'El acceso y el uso de la información son responsabilidad de quien los realiza. El titular no garantiza la inexistencia absoluta de interrupciones o errores, aunque pondrá sus mejores esfuerzos para evitarlos.'] },
        { heading: 'Enlaces a otras webs', paragraphs: ['Los enlaces externos se facilitan como servicio al usuario. JORDI BOSCH SIMO no opera ni controla esos sitios y no responde de sus contenidos. Sus políticas de privacidad pueden ser diferentes.'] },
        { heading: 'Legislación y jurisdicción', paragraphs: ['Este aviso legal se rige por la normativa española vigente. Cuando la legislación permita pactar un fuero, las partes se someten a los Juzgados y Tribunales de Ciutadella de Menorca.'] },
      ],
    },
    cookies: {
      key: 'cookies', title: 'Política de cookies', updated: 'Actualizada el 27 de septiembre de 2026',
      intro: 'Esta política se aplica a los ciudadanos y residentes legales permanentes del Espacio Económico Europeo y Suiza.',
      sections: [
        { heading: '1. Introducción', paragraphs: ['Este sitio utiliza tecnologías de almacenamiento local y puede cargar recursos de terceros. En este documento explicamos qué se utiliza y con qué finalidad.'] },
        { heading: '2. ¿Qué son las cookies?', paragraphs: ['Una cookie es un pequeño archivo que un sitio envía al navegador para que lo almacene en el dispositivo. La información puede volver al servidor en visitas posteriores. El almacenamiento local del navegador cumple una función parecida, aunque no envía datos automáticamente.'] },
        { heading: '3. ¿Qué son los scripts?', paragraphs: ['Un script es un fragmento de código que hace que el sitio funcione de forma correcta e interactiva. Puede ejecutarse en el servidor o en el dispositivo del usuario.'] },
        { heading: '4. Tecnologías utilizadas', items: ['eb-cookie-consent: preferencia funcional almacenada localmente para recordar si se ha aceptado o rechazado el aviso. Persistencia: hasta que el usuario borre los datos del navegador.', 'OpenStreetMap: el mapa de la página de contacto se carga desde openstreetmap.org. Este proveedor puede recibir la dirección IP y datos técnicos necesarios para entregar el mapa.', 'No se instalan cookies analíticas, publicitarias ni de seguimiento en esta versión del sitio.'] },
        { heading: '5. Consentimiento', paragraphs: ['En la primera visita se muestra un aviso. Puede aceptar o rechazar el almacenamiento de la preferencia. La decisión puede cambiarse en cualquier momento desde el enlace “Gestionar cookies” del pie de página.'] },
        { heading: '6. Activación, desactivación y borrado', paragraphs: ['Puede borrar el almacenamiento local y las cookies desde la configuración de su navegador. Si elimina la preferencia, el aviso volverá a mostrarse en la siguiente visita.'] },
        { heading: '7. Sus derechos', items: ['Saber por qué se necesitan sus datos, qué ocurrirá con ellos y durante cuánto tiempo se conservarán.', 'Acceder, completar, rectificar, borrar o limitar sus datos personales.', 'Retirar el consentimiento y oponerse al tratamiento cuando proceda.', 'Solicitar la portabilidad de sus datos y reclamar ante la autoridad de protección de datos.'] },
        { heading: '8. Datos de contacto', paragraphs: ['JORDI BOSCH SIMO · C/ Comerciants i Botiguers, 23, 1º, locales 6 y 7 (POICI), 07760 Ciutadella de Menorca (Illes Balears), España · jordi@enginyersbosch.com · 971 384 826.'] },
      ],
    },
  },
  ca: {
    privacy: {
      key: 'privacy', title: 'Política de privacitat',
      intro: 'En compliment del Reglament (UE) 2016/679 i de la Llei orgànica 3/2018, s’informa que les dades personals proporcionades a través d’aquest lloc web es tractaran en els termes següents.',
      sections: [
        { heading: 'Responsable del tractament', paragraphs: ['Les dades personals seran tractades per JORDI BOSCH SIMO. Domicili per a l’exercici de drets: C/ Comerciants i Botiguers, 23, 1r, locals 6 i 7 (POICI), 07760 Ciutadella de Menorca (Illes Balears). Correu electrònic: jordi@enginyersbosch.com.'] },
        { heading: 'Finalitats del tractament', items: ['Informar-vos sobre els nostres productes i serveis quan ho sol·liciteu per correu electrònic.', 'Respondre i gestionar consultes, comentaris i suggeriments.', 'Gestionar la participació en processos de selecció quan ens envieu dades amb aquesta finalitat.', 'Obtenir informació estadística i anònima sobre l’ús del lloc web.'] },
        { heading: 'Legitimació', paragraphs: ['Les dades enviades per fer consultes es tractaran sobre la base del consentiment de la persona interessada, que es pot retirar en qualsevol moment. La informació estadística anònima es tracta segons l’interès legítim del responsable.'] },
        { heading: 'Destinataris', paragraphs: ['Les dades personals no es comunicaran a tercers, excepte per obligació legal.'] },
        { heading: 'Conservació', paragraphs: ['Les dades es conservaran mentre siguin necessàries per a la finalitat per a la qual es van facilitar i durant els terminis exigibles per respondre de possibles responsabilitats. Les dades de processos de selecció es podran conservar dos anys; les dades estadístiques, tres anys.'] },
        { heading: 'Drets', paragraphs: ['Podeu exercir els drets d’accés, rectificació, supressió, portabilitat, limitació i oposició mitjançant un escrit amb un document identificatiu adreçat al domicili indicat o a jordi@enginyersbosch.com.', 'Si no esteu conforme amb el tractament, podeu reclamar davant l’Agència Espanyola de Protecció de Dades (www.aepd.es).'] },
        { heading: 'Xarxes socials', paragraphs: ['En seguir els nostres perfils socials, consentiu el tractament de les dades del vostre perfil d’acord amb la política de la xarxa corresponent. Els comentaris publicats poden esdevenir informació pública; els autors en poden sol·licitar la retirada.'] },
      ],
    },
    legal: {
      key: 'legal', title: 'Avís legal',
      sections: [
        { heading: 'Identificació', paragraphs: ['En compliment de l’article 10 de la Llei 34/2002, de serveis de la societat de la informació i del comerç electrònic, s’informa que el titular del lloc és JORDI BOSCH SIMO.', 'Domicili: C/ Comerciants i Botiguers, 23, 1r, locals 6 i 7 (POICI), 07760 Ciutadella de Menorca (Illes Balears). Telèfon: 971 384 826. Correu electrònic: jordi@enginyersbosch.com. NIF: 41744511V.'] },
        { heading: 'Propietat intel·lectual i industrial', paragraphs: ['Els drets de propietat industrial i intel·lectual dels elements d’aquest lloc web, incloses marques, formats, dissenys gràfics, textos, imatges i documents, pertanyen a JORDI BOSCH SIMO i estan protegits per la legislació aplicable.', 'Se’n prohibeix la reproducció total o parcial sense permís exprés i per escrit. L’accés al lloc no implica renúncia, transmissió, llicència o cessió d’aquests drets.'] },
        { heading: 'Condicions d’ús', paragraphs: ['L’accés al lloc implica l’acceptació d’aquestes condicions. Es prohibeix utilitzar-ne els continguts amb finalitats il·lícites o lesives, danyar-los, inutilitzar-los o destinar-los a distribució, transformació o comunicació comercial sense autorització.', 'L’accés i l’ús de la informació són responsabilitat de qui els duu a terme. El titular no garanteix l’absència absoluta d’interrupcions o errors, encara que farà els millors esforços per evitar-los.'] },
        { heading: 'Enllaços a altres webs', paragraphs: ['Els enllaços externs s’ofereixen com a servei a l’usuari. JORDI BOSCH SIMO no opera ni controla aquests llocs i no respon dels seus continguts. Les seves polítiques de privacitat poden ser diferents.'] },
        { heading: 'Legislació i jurisdicció', paragraphs: ['Aquest avís legal es regeix per la normativa espanyola vigent. Quan la legislació permeti pactar un fur, les parts se sotmeten als Jutjats i Tribunals de Ciutadella de Menorca.'] },
      ],
    },
    cookies: {
      key: 'cookies', title: 'Política de cookies', updated: 'Actualitzada el 27 de setembre de 2026',
      intro: 'Aquesta política s’aplica als ciutadans i residents legals permanents de l’Espai Econòmic Europeu i Suïssa.',
      sections: [
        { heading: '1. Introducció', paragraphs: ['Aquest lloc utilitza tecnologies d’emmagatzematge local i pot carregar recursos de tercers. En aquest document explicam què s’utilitza i amb quina finalitat.'] },
        { heading: '2. Què són les cookies?', paragraphs: ['Una cookie és un petit fitxer que un lloc envia al navegador perquè l’emmagatzemi al dispositiu. La informació pot tornar al servidor en visites posteriors. L’emmagatzematge local del navegador compleix una funció semblant, encara que no envia dades automàticament.'] },
        { heading: '3. Què són els scripts?', paragraphs: ['Un script és un fragment de codi que fa que el lloc funcioni correctament i de manera interactiva. Es pot executar al servidor o al dispositiu de l’usuari.'] },
        { heading: '4. Tecnologies utilitzades', items: ['eb-cookie-consent: preferència funcional emmagatzemada localment per recordar si s’ha acceptat o rebutjat l’avís. Persistència: fins que l’usuari esborri les dades del navegador.', 'OpenStreetMap: el mapa de la pàgina de contacte es carrega des d’openstreetmap.org. Aquest proveïdor pot rebre l’adreça IP i les dades tècniques necessàries per lliurar el mapa.', 'No s’instal·len cookies analítiques, publicitàries ni de seguiment en aquesta versió del lloc.'] },
        { heading: '5. Consentiment', paragraphs: ['A la primera visita es mostra un avís. Podeu acceptar o rebutjar l’emmagatzematge de la preferència. La decisió es pot canviar en qualsevol moment des de l’enllaç “Gestionar cookies” del peu de pàgina.'] },
        { heading: '6. Activació, desactivació i esborrat', paragraphs: ['Podeu esborrar l’emmagatzematge local i les cookies des de la configuració del navegador. Si eliminau la preferència, l’avís es tornarà a mostrar en la visita següent.'] },
        { heading: '7. Els vostres drets', items: ['Saber per què es necessiten les dades, què passarà amb elles i durant quant temps es conservaran.', 'Accedir, completar, rectificar, esborrar o limitar les dades personals.', 'Retirar el consentiment i oposar-se al tractament quan correspongui.', 'Sol·licitar la portabilitat de les dades i reclamar davant l’autoritat de protecció de dades.'] },
        { heading: '8. Dades de contacte', paragraphs: ['JORDI BOSCH SIMO · C/ Comerciants i Botiguers, 23, 1r, locals 6 i 7 (POICI), 07760 Ciutadella de Menorca (Illes Balears), Espanya · jordi@enginyersbosch.com · 971 384 826.'] },
      ],
    },
  },
  en: {
    privacy: {
      key: 'privacy', title: 'Privacy policy',
      intro: 'In accordance with Regulation (EU) 2016/679 and Spanish Organic Law 3/2018, personal data provided through this website will be processed under the following terms.',
      sections: [
        { heading: 'Data controller', paragraphs: ['Personal data will be processed by JORDI BOSCH SIMO. Address for the exercise of rights: C/ Comerciants i Botiguers, 23, 1st floor, units 6 and 7 (POICI), 07760 Ciutadella de Menorca (Balearic Islands), Spain. Email: jordi@enginyersbosch.com.'] },
        { heading: 'Purposes of processing', items: ['Provide information about our services when requested by email.', 'Respond to and manage enquiries, comments and suggestions.', 'Manage recruitment applications when information is submitted for that purpose.', 'Obtain anonymous statistical information about use of the website.'] },
        { heading: 'Legal basis', paragraphs: ['Enquiry data is processed on the basis of consent, which can be withdrawn at any time. Anonymous statistical information is processed on the basis of the controller’s legitimate interests.'] },
        { heading: 'Recipients', paragraphs: ['Personal data will not be disclosed to third parties unless required by law.'] },
        { heading: 'Retention', paragraphs: ['Data is retained for as long as necessary for the purpose for which it was supplied and for applicable liability periods. Recruitment data may be retained for two years; statistical data for three years.'] },
        { heading: 'Your rights', paragraphs: ['You may exercise your rights of access, rectification, erasure, portability, restriction and objection by sending a signed request with identification to the address above or to jordi@enginyersbosch.com.', 'You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).'] },
        { heading: 'Social media', paragraphs: ['By following our social profiles, you consent to processing under the policy of the relevant network. Published comments may become public; their authors may ask the controller to remove them.'] },
      ],
    },
    legal: {
      key: 'legal', title: 'Legal notice',
      sections: [
        { heading: 'Identification', paragraphs: ['In accordance with article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce, the owner of this site is JORDI BOSCH SIMO.', 'Address: C/ Comerciants i Botiguers, 23, 1st floor, units 6 and 7 (POICI), 07760 Ciutadella de Menorca (Balearic Islands), Spain. Phone: +34 971 384 826. Email: jordi@enginyersbosch.com. Tax ID: 41744511V.'] },
        { heading: 'Intellectual and industrial property', paragraphs: ['Industrial and intellectual property rights in this website—including trademarks, formats, graphic designs, text, images and documents—belong to JORDI BOSCH SIMO and are protected by applicable law.', 'Total or partial reproduction without express written permission is prohibited. Access does not imply any waiver, transfer, licence or assignment of these rights.'] },
        { heading: 'Terms of use', paragraphs: ['Access implies acceptance of these terms. Content may not be used for unlawful or harmful purposes, damaged or disabled, or distributed, transformed or commercially communicated without permission.', 'Access to and use of the information is the user’s responsibility. The owner cannot guarantee the complete absence of interruptions or errors, although every reasonable effort will be made to prevent them.'] },
        { heading: 'Links to other websites', paragraphs: ['External links are provided as a service. JORDI BOSCH SIMO does not operate or control these sites and is not responsible for their content. Their privacy policies may differ from ours.'] },
        { heading: 'Applicable law and jurisdiction', paragraphs: ['This notice is governed by current Spanish law. Where the law permits a choice of jurisdiction, the parties submit to the Courts of Ciutadella de Menorca.'] },
      ],
    },
    cookies: {
      key: 'cookies', title: 'Cookie policy', updated: 'Updated 27 September 2026',
      intro: 'This policy applies to citizens and legal permanent residents of the European Economic Area and Switzerland.',
      sections: [
        { heading: '1. Introduction', paragraphs: ['This site uses local-storage technology and may load third-party resources. This document explains what is used and why.'] },
        { heading: '2. What are cookies?', paragraphs: ['A cookie is a small file sent by a website for a browser to store on a device. Information may be returned to the server on a later visit. Browser local storage serves a similar purpose but does not send data automatically.'] },
        { heading: '3. What are scripts?', paragraphs: ['A script is a piece of code that helps a website work correctly and interactively. It may run on the server or on the user’s device.'] },
        { heading: '4. Technologies used', items: ['eb-cookie-consent: a functional preference stored locally to remember whether the notice was accepted or rejected. Retention: until the user deletes browser data.', 'OpenStreetMap: the contact-page map is loaded from openstreetmap.org. The provider may receive the IP address and technical data required to deliver the map.', 'This version of the site does not install analytics, advertising or tracking cookies.'] },
        { heading: '5. Consent', paragraphs: ['A notice is shown on the first visit. You can accept or reject storage of the preference. Your choice can be changed at any time using “Manage cookies” in the footer.'] },
        { heading: '6. Enabling, disabling and deleting', paragraphs: ['You can delete local storage and cookies in your browser settings. If the preference is removed, the notice will be shown again on your next visit.'] },
        { heading: '7. Your rights', items: ['Know why personal data is needed, what will happen to it and how long it will be retained.', 'Access, complete, rectify, erase or restrict your personal data.', 'Withdraw consent and object to processing where applicable.', 'Request data portability and complain to the data-protection authority.'] },
        { heading: '8. Contact details', paragraphs: ['JORDI BOSCH SIMO · C/ Comerciants i Botiguers, 23, 1st floor, units 6 and 7 (POICI), 07760 Ciutadella de Menorca (Balearic Islands), Spain · jordi@enginyersbosch.com · +34 971 384 826.'] },
      ],
    },
  },
};
