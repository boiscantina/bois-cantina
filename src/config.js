// ============================================================================
// CONFIGURACIÓN EDITABLE DE LA LANDING PAGE (BOIS — CAFÉ & CANTINA · MAR DEL PLATA)
// Optimizada con Copywriting de Conversión + SEO Local + GEO (4.9★ · +271 reseñas)
// Colores oficiales de marca: Azul BOIS (#1A4861), Salvia (#D9DFA5), Crema (#FCFBE4)
// ============================================================================

export const SITE_CONFIG = {
  brandName: "BOIS",
  brandSub: "café & cantina",
  city: "Mar del Plata",
  neighborhood: "Zona Paseo Aldrey (a 5 cuadras)",
  addressFull:
    "Tucumán esq. Castelli · Zona Paseo Aldrey, Mar del Plata",
  addressShort:
    "Tucumán esq. Castelli · A 5 cuadras de Paseo Aldrey",
  logos: {
    fullBlue: "/logos/bois-azul.png",
    fullCream: "/logos/bois-crema.png",
    monogramBlue: "/logos/bs-azul.png",
    monogramCream: "/logos/bs-crema.png",
  },

  // Copy principal del Hero (optimizado en ritmo y puntuación sin perder ninguna idea)
  taglineBody:
    "Nos destacamos por nuestras hamburguesas con blend de tapa de asado y roast beef. Durante el día también servimos café Fruto Negro importado de Bolivia y un menú ejecutivo súper abundante; y por la noche la cantina abre su barcito de tragos, cervezas, tapeo, sándwiches, buena música y transmisión de todos los eventos deportivos.",

  // Micro-etiquetas al pie del Hero (sin repetir lo que ya dice el párrafo)
  heroTags: [
    "Salón & deck exterior",
    "Delivery & Take Away",
    "Opciones Sin TACC & Veganas",
  ],

  // Horarios Oficiales (Salón y Delivery)
  schedule: {
    salon: [
      { days: "Lunes a Viernes", hours: "08:00 a 00:00 hs (de corrido)" },
      { days: "Sábados", hours: "10:00 a 15:30 hs y 19:00 a 00:00 hs" },
      { days: "Domingos", hours: "19:00 a 00:00 hs" },
    ],
    delivery: [
      { days: "Mediodía (Lun a Sáb)", hours: "12:00 a 15:30 hs" },
      { days: "Noche (Lun a Dom)", hours: "19:00 a 23:30 hs" },
    ],
  },

  // Datos de reputación reales de Google Maps (Social Proof)
  googleRating: {
    score: "4.9",
    reviewsCount: "271",
    label: "Calificación en Google Maps",
    highlights: [
      "Papas fritas crocantes «un mil» y porciones abundantes",
      "Ambientación cálida, buena música y festejos de cumpleaños",
      "Opciones con Pan Sin TACC y Medallones Veganos",
    ],
  },

  // Contacto y Conversión (WhatsApp es el único canal oficial de pedidos y reservas)
  contact: {
    whatsappPhone: "5492234251674", // +54 9 2234 25-1674 en formato internacional wa.me
    whatsappDisplay: "+54 9 2234 25-1674",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Tucum%C3%A1n+2901,+Mar+del+Plata,+Provincia+de+Buenos+Aires,+Argentina",
    defaultWhatsappMessage:
      "¡Hola BOIS! Vi su web y quiero hacer un pedido / reservar una mesa.",
    ctaPrimaryText: "Pedidos & reservas por WhatsApp",
    ctaHeaderText: "Pedidos & reservas",
    ctaMapsText: "Cómo llegar",
    ctaFloatingText: "Pedidos & reservas",
  },

  // Imagen de fondo principal del Hero y sección interactiva de 3 pilares debajo del Hero
  heroBackgroundImage: "/images/hero-bois.jpg",
  introSection: {
    title: "Especialistas en buenos planes y amigos de todo el barrio.",
    lead: "El punto de encuentro en el barrio, de la mañana a la noche.",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Tucuman+2901,+Mar+del+Plata,+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapAddressLabel: "Tucumán esq. Castelli",
    mapZoneLabel: "A 5 cuadras del Paseo Aldrey · Mar del Plata",
    ctaReservationText: "Reservá tu mesa para hoy",
    ctaReservationPrompt:
      "¡Hola BOIS! Vi su web y quiero reservar una mesa para hoy.",
    ctaMenuText: "Conocé nuestras cartas",
    pillars: [
      {
        id: "cafeteria",
        chip: "🕗 Desde 08 hs · Café Bolivia",
        title: "Cafetería",
        emoji: "☕",
        highlights: [
          { bold: "Café Fruto Negro", text: " para arrancar con ricos " },
          { bold: "desayunos y meriendas", text: ", o como el " },
          { bold: "café post-almuerzo", text: " del menú ejecutivo." },
        ],
        actionLabel: "Ver carta de Cafetería & Fit",
        menuUrl: "/menus/menu-bebidas.pdf",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
        imageTag: "☕ Desayunos, Meriendas & Café Fruto Negro Post-Almuerzo",
      },
      {
        id: "mediodia",
        chip: "🕚 Desde 11 hs · Almuerzos",
        title: "Menú del Día & Cocina",
        emoji: "🍽️",
        highlights: [
          { bold: "Menú Ejecutivo", text: " rico, abundante y " },
          { bold: "con bebida", text: ". Además: " },
          { bold: "lomitos, milanesas, desmenuzados", text: " y burgers." },
        ],
        actionLabel: "Ver Menú Ejecutivo del día",
        menuUrl: "/menus/menu-mediodia.pdf",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
        imageTag: "🍽️ Desde las 11 hs: Menú Ejecutivo Abundante, Lomitos & Milanesas",
      },
      {
        id: "noche",
        chip: "🕖 Noches · Barra & Deportes",
        title: "Propuesta de Noche",
        emoji: "🍹",
        highlights: [
          { bold: "Tragos, tapeo y cervezas", text: " + toda la carta, con " },
          { bold: "buena música", text: ", gran ambiente y " },
          { bold: "eventos deportivos en vivo", text: "." },
        ],
        actionLabel: "Ver carta de Burgers, Tapeo & Barra",
        menuUrl: "/menus/menu-principal.pdf",
        image: "/images/hero-bois.jpg",
        imageTag: "🍹 Noches de Tragos, Tapeo, Cervezas & Deportes en Vivo",
      },
    ],
  },

  // Sección: Las Estrellas de la Casa (Foco 100% en técnica, insumos y personalización)
  burgersSection: {
    eyebrow: "LAS ESTRELLAS DE LA CASA",
    title: "Burgers abundantes, jugosas y las más elogiadas",
    description:
      "Nada de medallones congelados. Usamos materia prima de calidad, cocinamos con técnica y detalle para que cada burger que probás salga tope de gama.",
    specs: [
      "Blend propio de tapa de asado y roastbeef",
      "Pan de papa brioche con cúrcuma",
      "Papas fritas siempre ricas & crocantes",
      "Promos todos los días",
      "Opción sin TACC & medallón vegano",
    ],
  },

  // Las 3 Hamburguesas Destacadas (con ingredientes reales de la carta oficial y todas salen con papas)
  starBurgers: [
    {
      id: "combo-bacon-bbq-cheeseburger",
      name: "Bacon BBQ + Cheeseburger",
      ctaLabel: "Pedir Combo",
      badge: "Combo más pedido de la semana",
      description:
        "La dupla imbatible: una Bacon BBQ (medallón de carne, cheddar fundido, bacon crocante y barbacoa) + una Cheeseburger clásica (medallón de carne, cheddar, mostaza, ketchup y cebolla picada). Ambas salen con papas.",
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
      whatsappPrompt:
        "¡Hola BOIS! Quiero pedir el combo de Bacon BBQ + Cheeseburger con papas 🍔🍟",
    },
    {
      id: "bacon-jam",
      name: "Bacon Jam",
      ctaLabel: "Pedir Bacon Jam",
      badge: "Estrella de la casa",
      description:
        "Equilibrio adictivo entre dulce, ahumado y ácido: medallón de carne smasheado, cheddar fundido, nuestra mermelada casera de bacon, pepino y la exclusiva salsa BS. Sale con papas.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      whatsappPrompt: "¡Hola BOIS! Quiero pedir una Burger Bacon Jam con papas 🍔🥓",
    },
    {
      id: "final-four",
      name: "Final Four",
      ctaLabel: "Pedir Final Four",
      badge: "Para amantes del roque",
      description:
        "Una bomba de cuatro quesos (cheddar, mozzarella, roquefort intenso y provoleta) con cebolla caramelizada, bacon crocante y salsa Chick-fil-A. Disponible doble o triple y sale con papas.",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      whatsappPrompt: "¡Hola BOIS! Quiero pedir una Burger Final Four con papas 🧀🍔",
    },
  ],

  // 3 Pilares Gastronómicos complementarios (compactos y fáciles de escanear)
  highlightsCards: [
    {
      title: "Tapeo, Lomitos & Especiales",
      badge: "Promos todos los días",
      text: "Especiales de pollo y ternera desmenuzada, lomitos (con papas o ensalada), tequeños, dedos de pollo con alioli y papas crocantes.",
    },
    {
      title: "Barra, Cervezas & Coctelería",
      badge: "Barman en barra",
      text: "Cervezas La Paloma y Patagonia, vino Nicasia Red Blend, Aperol Spritz, Cuba Libre, Fernet Branca, Gin Tanqueray, Jack Daniel's y Coca de vidrio.",
    },
    {
      title: "Café de Bolivia & Opciones Fit",
      badge: "10% OFF Gimnasio Vecino",
      text: "Café Fruto Negro, medialunas recién horneadas, tostón con palta y huevo, huevos con panceta, pancake fit y batidos de proteína.",
    },
  ],

  // Los 3 Menús PDF
  menus: [
    {
      id: "menu-principal",
      title: "Smash Burgers & Cantina",
      subtitle:
        "Burgers (opciones Sin TACC y veganas), lomitos, especiales de pollo y ternera desmenuzada, tequeños y picadas.",
      schedule: "Noche, eventos deportivos y delivery",
      badge: "Carta Principal",
      fileUrl: "/menus/menu-principal.pdf",
      fileName: "BOIS-Menu-Burgers-y-Cantina.pdf",
    },
    {
      id: "menu-mediodia",
      title: "Menú Ejecutivo (Mediodía)",
      subtitle:
        "Un nuevo plato casero cada día, rico y abundante con bebida incluida (salón, take away o delivery).",
      schedule: "Lunes a viernes al mediodía",
      badge: "Con bebida incluida",
      fileUrl: "/menus/menu-mediodia.pdf",
      fileName: "BOIS-Menu-Ejecutivo.pdf",
    },
    {
      id: "menu-bebidas",
      title: "Cafetería, Fit & Barra",
      subtitle:
        "Café Fruto Negro, pastelería, desayunos fit/proteicos, cervezas artesanales, vinos y coctelería.",
      schedule: "Mañana, tarde y noche",
      badge: "Café, Fit & Tragos",
      fileUrl: "/menus/menu-bebidas.pdf",
      fileName: "BOIS-Menu-Cafeteria-y-Bebidas.pdf",
    },
  ],

  // Banner de conversión inteligente (Cumpleaños, Reservas y Pedidos)
  reservationTip: {
    title: "¿Festejás tu cumpleaños, venís en grupo o querés pedir sin esperas?",
    subtitle:
      "Podés reservar el lugar para festejar tu cumple con buena música, tragos y una ambientación cálida (salón & deck exterior), o adelantar tu pedido por WhatsApp.",
  },

  // Sobre Nosotros (Debajo de los menús PDF)
  about: {
    eyebrow: "Tucumán esq. Castelli · Mar del Plata",
    title:
      "Tu punto de encuentro a 5 cuadras del Paseo Aldrey, sin importar la hora ni el plan.",
    paragraphs: [
      "Sabemos lo que es no tener ganas de cocinar, buscar un lugar donde todos queden conformes o necesitar un buen café para activar el día. Por eso en BOIS tenés todo resuelto: desayunos y meriendas para frenar un poco, menú ejecutivo abundante para salvar tus mediodías y las mejores Smash Burgers, tragos y platos de la casa para cortar la semana.",
      "Buena música, ambiente cálido y la mesa lista para venir con amigos o festejar tu cumple.",
    ],
    features: [
      {
        title: "Festejá tu Cumpleaños",
        desc: "Reservá el lugar o tu mesa por WhatsApp para festejar con amigos",
      },
      {
        title: "Salón & Deck Exterior",
        desc: "Ambientación cálida, buena música, tragos y la mejor onda",
      },
      {
        title: "Promos Diarias & 10% OFF Gym",
        desc: "Descuentos todos los días y beneficio con el gimnasio vecino",
      },
      {
        title: "Sin TACC, Vegano & Fit",
        desc: "Pan sin gluten, medallones veganos y desayunos proteicos",
      },
    ],
  },

  // Preguntas Frecuentes Desplegables (Alineadas con el Schema FAQPage para SEO y GEO)
  faqs: [
    {
      q: "¿Se puede reservar el lugar para festejar cumpleaños?",
      a: "¡Sí! Podés reservar mesas o el lugar para festejar tu cumpleaños con amigos en un ambiente cálido, con buena música, barra de tragos, tapeo y nuestras Smash Burgers. Escribinos por WhatsApp al +54 9 2234 25-1674.",
    },
    {
      q: "¿Cuáles son los horarios de apertura y de delivery?",
      a: "Lunes a viernes de 08:00 a 00:00 hs de corrido; sábados de 10:00 a 15:30 y de 19:00 a 00:00 hs; domingos de 19:00 a 00:00 hs. Delivery de 12:00 a 15:30 hs (lun a sáb) y de 19:00 a 23:30 hs.",
    },
    {
      q: "¿Dónde están ubicados y cómo reservo o hago un pedido?",
      a: "En Tucumán esq. Castelli, a 5 cuadras del Paseo Aldrey, Mar del Plata. Pedidos y reservas únicamente por WhatsApp al +54 9 2234 25-1674.",
    },
    {
      q: "¿Tienen hamburguesas Sin TACC u opciones veganas?",
      a: "Sí, todas nuestras Smash Burgers pueden pedirse con pan sin gluten (Sin TACC) o medallón vegano/vegetariano.",
    },
    {
      q: "¿Qué opciones tienen para desayunar, entrenar (Fit) o almorzar?",
      a: "Café Fruto Negro de Bolivia, medialunas, tostón con palta y huevo, pancake fit y batidos de proteína (10% OFF cruzado con el gym vecino). De lunes a viernes, menú ejecutivo con bebida incluida.",
    },
  ],

  // Reseñas Reales de Comensales en Google Maps (5 estrellas verificadas)
  reviews: [
    {
      id: 1,
      author: "Barbara Prada",
      avatarImg: "/images/reviews/barbara.png",
      initials: "BP",
      avatarBg: "#E8ECE0",
      avatarColor: "#1A4861",
      isLocalGuide: true,
      subtitle: "Local Guide · 30 reseñas · 10 fotos",
      date: "Hace 8 meses",
      rating: 5,
      tag: "«Si hubiera 10 estrellas, se las pondríamos»",
      categories: ["burgers", "tragos", "atencion", "local_guide"],
      helpfulCount: 8,
      paragraphs: [
        "Conocimos Bois de casualidad, salíamos de un recital y estábamos buscando donde cenar medio tarde. Vimos las reseñas y nos acercamos.",
        "La verdad, si hubiera 10 estrellas, se las pondríamos: las burgers son riquísimas, las papas increíbles, la cerveza y los tragos nos encantaron también.",
        "Pero lo que más destacamos es la excelente y cálida atención. Recomendable por donde lo mires, se transformará en un must cada vez que visitemos Mardel. ¡Los felicito!"
      ],
      text: "Conocimos Bois de casualidad, salíamos de un recital y estábamos buscando donde cenar medio tarde. Vimos las reseñas y nos acercamos. La verdad, si hubiera 10 estrellas, se las pondríamos: las burgers son riquísimas, las papas increíbles, la cerveza y los tragos nos encantaron también. Pero lo que más destacamos es la excelente y cálida atención. Recomendable por donde lo mires, se transformará en un must cada vez que visitemos Mardel. ¡Los felicito!",
    },
    {
      id: 2,
      author: "Antonella Michielin",
      avatarImg: "/images/reviews/antonella.png",
      initials: "AM",
      avatarBg: "#FDF5D8",
      avatarColor: "#854D0E",
      isLocalGuide: true,
      subtitle: "Local Guide · 51 reseñas · 19 fotos",
      date: "Hace 10 meses",
      rating: 5,
      tag: "Burgers, Papas «Un Mil» & Aperol",
      categories: ["burgers", "tragos", "atencion", "local_guide"],
      helpfulCount: 12,
      paragraphs: [
        "Exquisita la hamburguesa, si cerrás los ojos se disfruta el doble. Las papas un mil.",
        "Encima quería pedir un aperol y no le tenía ni un poco de fe, pero me dejaron sin palabras. La birra es de La Paloma.",
        "Una esquina muy exclusiva, cada detalle está muy bien ejecutado. Todo es precioso, el baño, la música y la atención es lo que más se destaca. Lo recomendaría y volvería sin dudas. Agradecida por esta joyita local."
      ],
      text: "Exquisita la hamburguesa, si cerrás los ojos se disfruta el doble. Las papas un mil. Encima quería pedir un aperol y no le tenía ni un poco de fe, pero me dejaron sin palabras. La birra es de La Paloma. Una esquina muy exclusiva, cada detalle está muy bien ejecutado. Todo es precioso, el baño, la música y la atención es lo que más se destaca. Lo recomendaría y volvería sin dudas. Agradecida por esta joyita local.",
    },
    {
      id: 3,
      author: "Tobias Vidal",
      avatarImg: "/images/reviews/tobias.png",
      initials: "TV",
      avatarBg: "#E0EBF0",
      avatarColor: "#1A4861",
      isLocalGuide: true,
      subtitle: "Local Guide · 16 reseñas · 6 fotos",
      date: "Hace 10 meses",
      rating: 5,
      tag: "Calidad Humana & Barra de Tragos",
      categories: ["tragos", "atencion", "local_guide"],
      helpfulCount: 6,
      paragraphs: [
        "Quiero sumar algo que para mí tiene muchísimo valor: la calidad humana de este espacio es única. Hacía mucho que no salía a un lugar y la pasaba tan bien.",
        "Fui por un trago y la vibra del lugar me llevó a terminar tomando cuatro 🥴 😄. De verdad, se los recomiendo."
      ],
      text: "Quiero sumar algo que para mí tiene muchísimo valor: la calidad humana de este espacio es única. Hacía mucho que no salía a un lugar y la pasaba tan bien. Fui por un trago y la vibra del lugar me llevó a terminar tomando cuatro 🥴 😄. De verdad, se los recomiendo.",
    },
    {
      id: 4,
      author: "Gabriel Franco",
      avatarImg: "/images/reviews/gabriel.png",
      initials: "GF",
      avatarBg: "#F3F2E2",
      avatarColor: "#1A4861",
      isLocalGuide: false,
      subtitle: "8 reseñas · 2 fotos",
      date: "Hace 8 meses",
      rating: 5,
      tag: "«Las burgas, 10 puntos, todo a tope»",
      categories: ["burgers", "atencion"],
      helpfulCount: 5,
      paragraphs: [
        "Las burgas, 10 puntos, pan, contenido, carne, todo a tope. El ambiente del lugar es muy cálido y lindo.",
        "Pd: el baño estaba más hermoso que el de mi casa, excelente y bien merecidas las 5 estrellas. ¡Muy recomendable!"
      ],
      text: "Las burgas, 10 puntos, pan, contenido, carne, todo a tope. El ambiente del lugar es muy cálido y lindo. Pd: el baño estaba más hermoso que el de mi casa, excelente y bien merecidas las 5 estrellas. ¡Muy recomendable!",
    },
    {
      id: 5,
      author: "Matias Peloso",
      avatarImg: "/images/reviews/matias.png",
      initials: "MP",
      avatarBg: "#E5EBD5",
      avatarColor: "#2D4A22",
      isLocalGuide: false,
      subtitle: "5 reseñas",
      date: "Hace 8 meses",
      rating: 5,
      tag: "Atención Rápida & Súper Abundante",
      categories: ["burgers", "atencion"],
      helpfulCount: 4,
      paragraphs: [
        "Vinimos con mi novia por unas buenas hamburguesas y encontramos más que eso!!",
        "La MVP es todo lo que está bien y te deja más que lleno, sobre todo la atención y lo rápido que llegó a la mesa, volvería felizmente a comer acá!!"
      ],
      text: "Vinimos con mi novia por unas buenas hamburguesas y encontramos más que eso!! La MVP es todo lo que está bien y te deja más que lleno, sobre todo la atención y lo rápido que llegó a la mesa, volvería felizmente a comer acá!!",
    },
    {
      id: 6,
      author: "Desty 9",
      avatarImg: "/images/reviews/desty.png",
      initials: "D9",
      avatarBg: "#1A4861",
      avatarColor: "#FCFBE4",
      isLocalGuide: true,
      subtitle: "Local Guide · 33 reseñas · 48 fotos",
      date: "Hace 7 meses",
      rating: 5,
      tag: "Sándwich de Ternera & Burgers 10 Puntos",
      categories: ["burgers", "cantina", "local_guide"],
      helpfulCount: 6,
      paragraphs: [
        "Que rico el sándwich de ternera desmenuzada, las hamburguesas tambien 10 puntos"
      ],
      text: "Que rico el sándwich de ternera desmenuzada, las hamburguesas tambien 10 puntos",
    },
    {
      id: 7,
      author: "Gastón Zentner",
      avatarImg: "/images/reviews/gaston.png",
      initials: "GZ",
      avatarBg: "#1E3A8A",
      avatarColor: "#DBEAFE",
      isLocalGuide: true,
      subtitle: "Local Guide · 402 reseñas · 178 fotos",
      date: "Hace 3 meses",
      rating: 5,
      tag: "Lomitos, Burgers & Panes Caseros",
      categories: ["burgers", "cantina", "local_guide"],
      helpfulCount: 15,
      paragraphs: [
        "Muy buenas Hamburguesas y lomitos. Todo con panes caseros. Riquísimo todo."
      ],
      text: "Muy buenas Hamburguesas y lomitos. Todo con panes caseros. Riquísimo todo.",
    },
    {
      id: 8,
      author: "María Oliver",
      avatarImg: "/images/reviews/maria.png",
      initials: "M",
      avatarBg: "#00897B",
      avatarColor: "#FFFFFF",
      isLocalGuide: false,
      subtitle: "3 reseñas",
      date: "Hace 8 meses",
      rating: 5,
      tag: "De Café a Cena y Desayuno: «Un Imprescindible»",
      categories: ["cafeteria", "burgers", "atencion"],
      helpfulCount: 9,
      paragraphs: [
        "Increíble lugar! Vinimos primero por un café y terminamos regresando para cenar unas hamburguesas buenísimas.",
        "Nos gustó tanto que al día siguiente repetimos para desayunar unos huevos con panceta espectaculares.",
        "Comida deliciosa, buen ambiente y servicio de 10! Un imprescindible de la zona!"
      ],
      text: "Increíble lugar! Vinimos primero por un café y terminamos regresando para cenar unas hamburguesas buenísimas. Nos gustó tanto que al día siguiente repetimos para desayunar unos huevos con panceta espectaculares. Comida deliciosa, buen ambiente y servicio de 10! Un imprescindible de la zona!",
    },
    {
      id: 9,
      author: "Anselmo Gomez",
      avatarImg: "/images/reviews/anselmo.png",
      initials: "A",
      avatarBg: "#795548",
      avatarColor: "#FFFFFF",
      isLocalGuide: false,
      subtitle: "15 reseñas · 1 foto",
      date: "Hace 6 meses",
      rating: 5,
      tag: "Milanesa Napolitana Gigante, Papas & Burger",
      categories: ["burgers", "cantina"],
      helpfulCount: 11,
      paragraphs: [
        "La milanesa a la napolitana exquisita y un tamaño para que un gordo como yo se llene.",
        "Mención honorífica para las papas que es insulto llamarlas guarnición, son un plato principal, crocancia perfecta.",
        "La hamburguesa maravillosa, se la pidió mi mujer y yo le dí un buen bocado y era un manjar. Es más, hasta la limonada fue sublime. Precios muy buenos también"
      ],
      text: "La milanesa a la napolitana exquisita y un tamaño para que un gordo como yo se llene. Mención honorífica para las papas que es insulto llamarlas guarnición, son un plato principal, crocancia perfecta. La hamburguesa maravillosa, se la pidió mi mujer y yo le dí un buen bocado y era un manjar. Es más, hasta la limonada fue sublime. Precios muy buenos también",
    },
  ],

  // Sección de Instagram (con las 2 cuentas oficiales: @boisburgers y @boiscantina)
  instagram: {
    accounts: [
      {
        handle: "@boisburgers",
        label: "Seguinos en @boisburgers",
        url: "https://www.instagram.com/boisburgers/",
      },
      {
        handle: "@boiscantina",
        label: "Seguinos en @boiscantina",
        url: "https://www.instagram.com/boiscantina/",
      },
    ],
    sectionTitle: "Seguinos en Instagram",
    sectionSubtitle:
      "Enterate de nuestras promos de todos los días, las Burgers en @boisburgers y la agenda de eventos deportivos y plancitos en @boiscantina.",
    posts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        caption: "Classic BS con nuestras papas fritas crocantes «un mil» y Coca de vidrio bien helada 🔥🍔",
        likes: "642",
        tag: "@boisburgers · Classic BS",
        url: "https://www.instagram.com/boisburgers/",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
        caption: "Bacon BBQ con extra provoleta. También disponible con pan sin gluten (Sin TACC) o medallón vegano 🛵",
        likes: "589",
        tag: "@boisburgers · Sin TACC & Vegano",
        url: "https://www.instagram.com/boisburgers/",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
        caption: "Promos y descuentos todos los días en burgers, lomitos, especiales de pollo y ternera, tequeños y dedos de pollo 🧀✨",
        likes: "478",
        tag: "@boisburgers · Promos Diarias",
        url: "https://www.instagram.com/boisburgers/",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
        caption: "Cerveza La Paloma, Patagonia, Nicasia Red Blend, Tanqueray, Jack Daniel's y todos los eventos deportivos 🍹🍻",
        likes: "412",
        tag: "@boiscantina · Barra & Eventos",
        url: "https://www.instagram.com/boiscantina/",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        caption: "De lunes a viernes un nuevo menú ejecutivo rico y súper abundante con bebida incluida 🍽️",
        likes: "365",
        tag: "@boiscantina · Ejecutivo",
        url: "https://www.instagram.com/boiscantina/",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
        caption: "Post-entreno o merienda: tostón con palta y huevo, pancake fit, batidos de proteína y café Fruto Negro (10% OFF cruzado con el gym vecino) ☕🥑",
        likes: "334",
        tag: "@boiscantina · Fit & Café",
        url: "https://www.instagram.com/boiscantina/",
      },
    ],
  },
};

// Helper para armar el link de WhatsApp compatible con WhatsApp Business y estándar (api.whatsapp.com)
export function getWhatsAppUrl(customMessage) {
  const text = encodeURIComponent(
    customMessage || SITE_CONFIG.contact.defaultWhatsappMessage
  );
  return `https://api.whatsapp.com/send?phone=${SITE_CONFIG.contact.whatsappPhone}&text=${text}`;
}

// ============================================================================
// CALCULADORA DE ESTADO EN TIEMPO REAL (HUSO HORARIO ARGENTINA: Mar del Plata)
// Lunes a Viernes: 08:00 a 00:00 hs de corrido
// Sábados: 10:00 a 15:30 hs y 19:00 a 00:00 hs
// Domingos: 19:00 a 00:00 hs
// Delivery: 12:00 a 15:30 hs (Lun a Sáb) y 19:00 a 23:30 hs (Lun a Dom)
// ============================================================================
export function getBoisLiveStatus() {
  try {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).formatToParts(now);

    const map = {};
    for (const p of parts) {
      map[p.type] = p.value;
    }

    const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const day = dayMap[map.weekday] ?? now.getDay();
    const hour = parseInt(map.hour, 10) % 24;
    const minute = parseInt(map.minute, 10) || 0;
    const mins = hour * 60 + minute;

    let isOpen = false;
    let detail = "";

    if (day >= 1 && day <= 5) {
      // Lunes a Viernes: 08:00 (480) a 24:00 (1440)
      if (mins >= 480 && mins < 1440) {
        isOpen = true;
        detail = "De corrido hasta las 00 hs";
      } else {
        isOpen = false;
        detail = "Abrimos hoy a las 08 hs";
      }
    } else if (day === 6) {
      // Sábados: 10:00 (600) a 15:30 (930) y 19:00 (1140) a 24:00 (1440)
      if (mins >= 600 && mins < 930) {
        isOpen = true;
        detail = "Hasta las 15:30 hs · Volvemos a las 19 hs";
      } else if (mins >= 1140 && mins < 1440) {
        isOpen = true;
        detail = "Hasta las 00 hs";
      } else if (mins < 600) {
        isOpen = false;
        detail = "Abrimos hoy a las 10 hs";
      } else {
        isOpen = false;
        detail = "Volvemos a abrir hoy a las 19 hs";
      }
    } else {
      // Domingos: 19:00 (1140) a 24:00 (1440)
      if (mins >= 1140 && mins < 1440) {
        isOpen = true;
        detail = "Hasta las 00 hs";
      } else {
        isOpen = false;
        detail = "Domingos de 19 a 00 hs";
      }
    }

    // Estado del Delivery: 12:00-15:30 (Lun a Sáb) y 19:00-23:30 (Lun a Dom)
    const isDeliveryMidday = day >= 1 && day <= 6 && mins >= 720 && mins < 930;
    const isDeliveryNight = mins >= 1140 && mins < 1410;
    const isDeliveryOpen = isDeliveryMidday || isDeliveryNight;

    return {
      isOpen,
      label: isOpen ? "Estamos abiertos" : "Estamos cerrados",
      detail,
      isDeliveryOpen,
      deliveryLabel: isDeliveryOpen
        ? "Delivery activo ahora"
        : "Delivery: 12 a 15:30 y 19 a 23:30 hs",
    };
  } catch {
    return {
      isOpen: true,
      label: "Estamos abiertos",
      detail: "Lun a Vie 8 a 00 hs · Sáb 10 a 15:30 y 19 a 00 hs · Dom 19 a 00 hs",
      isDeliveryOpen: true,
      deliveryLabel: "Delivery: 12 a 15:30 y 19 a 23:30 hs",
    };
  }
}
