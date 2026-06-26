export type DojoClass = {
  name: string;
  ages: string;
  days: string;
  time: string;
  schedule: string;
  description: string;
};

export type DojoForm = {
  name: string;
  description: string;
  url: string;
  fileName: string;
};

export type GalleryImage = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

export type HomeCard = {
  eyebrow: string;
  title: string;
  description: string;
  lines: string[];
  cta: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Language = "en" | "nl";

export type LocalizedDojoContent = {
  navItems: Array<{ label: string; href: string }>;
  eyebrow: {
    hero: string;
    google: string;
    about: string;
    classes: string;
    calendar: string;
    gallery: string;
    forms: string;
    faq: string;
    contact: string;
  };
  tagline: string;
  intro: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  trust: string[];
  homeCards: HomeCard[];
  googleManagedItems: Array<{
    title: string;
    description: string;
  }>;
  googleHeading: string;
  googleBody: string;
  trialTitle: string;
  trialBody: string;
  aboutHeading: string;
  classesHeading: string;
  classesNote: string;
  calendarHeading: string;
  calendarBody: string;
  calendarPrivacyNote: string;
  calendarCta: string;
  galleryHeading: string;
  galleryBody: string;
  galleryCta: string;
  formsHeading: string;
  formsBody: string;
  faqHeading: string;
  faqBody: string;
  downloadLabel: string;
  contactHeading: string;
  footerNote: string;
  heroImageCaption: string;
  instructor: {
    name: string;
    title: string;
    bio: string;
  };
  classes: DojoClass[];
  faqItems: FaqItem[];
  forms: DojoForm[];
  gallery: GalleryImage[];
};

export const dojoBase = {
  name: "Genseiryu Karatedo",
  heroImage: {
    src: "images/dojo-hero-realistic.png",
    alt: "Karate instructor leading students in a traditional dojo",
  },
  contact: {
    email: "info@genseiryu-karatedo.org",
    phone: "+972-50-123-4567",
    whatsapp: "https://wa.me/972500000000",
    address: "Winkelcentrum Westwijk Amstelveen, Westwijkplein, 1187 LV Amstelveen",
  },
  google: {
    calendarName: "Genseiryu Public Dojo Calendar",
    calendarEmbed:
      "https://calendar.google.com/calendar/embed?src=463dc836f24c121a343ef078657f72302c722c8c7d3b6bbcce7d6f1ec2341ffd%40group.calendar.google.com&ctz=Europe%2FAmsterdam&mode=MONTH",
    calendarPublicUrl:
      "https://calendar.google.com/calendar/embed?src=463dc836f24c121a343ef078657f72302c722c8c7d3b6bbcce7d6f1ec2341ffd%40group.calendar.google.com&ctz=Europe%2FAmsterdam&mode=MONTH",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Winkelcentrum%20Westwijk%20Amstelveen%2C%20Westwijkplein%2C%201187%20LV%20Amstelveen",
    driveGalleryFolderUrl: "https://drive.google.com/",
  },
};

export const dojoContent: Record<Language, LocalizedDojoContent> = {
  en: {
    navItems: [
      { label: "About", href: "about" },
      { label: "Classes", href: "classes" },
      { label: "Why us", href: "benefits" },
      { label: "Calendar", href: "calendar" },
      { label: "Gallery", href: "gallery" },
      { label: "Forms", href: "forms" },
      { label: "FAQ", href: "faq" },
      { label: "Contact", href: "contact" },
    ],
    eyebrow: {
      hero: "Traditional karate dojo",
      google: "Why train with us",
      about: "About the dojo",
      classes: "Classes",
      calendar: "Dojo Calendar",
      gallery: "Gallery",
      forms: "Student forms",
      faq: "FAQ",
      contact: "Contact",
    },
    tagline: "Traditional karate training for focus, confidence, and discipline.",
    intro:
      "A welcoming dojo for children, teens, and adults, rooted in respectful training and steady personal progress.",
    heroPrimaryCta: "Start Training",
    heroSecondaryCta: "View Calendar",
    trust: [
      "Traditional karatedo for every level",
      "Classes for children, youth, and adults",
      "Personal attention in a respectful dojo",
    ],
    homeCards: [
      {
        eyebrow: "Next lessons",
        title: "Train this week",
        description: "Regular groups for children, youth, and adults.",
        lines: ["Mon 17:00 - Kids Karate", "Tue 18:15 - Youth Karate", "Tue 20:00 - Adults Karate"],
        cta: "View all classes",
        href: "#classes",
      },
      {
        eyebrow: "Location",
        title: "Easy to find",
        description: "Winkelcentrum Westwijk Amstelveen, Westwijkplein, 1187 LV Amstelveen.",
        lines: ["Parking nearby", "Visitors welcome", "Ask before your first class"],
        cta: "Open in Maps",
        href: dojoBase.google.mapsUrl,
      },
      {
        eyebrow: "Calendar",
        title: "Dojo events",
        description: "Check class times, holidays, gradings, and seminars.",
        lines: ["Month view", "Public dojo calendar", "Updated before events"],
        cta: "Open calendar",
        href: "#calendar",
      },
      {
        eyebrow: "Forms",
        title: "Before you start",
        description: "Download registration and beginner information.",
        lines: ["Registration form", "Health declaration", "Beginner pack"],
        cta: "Download forms",
        href: "#forms",
      },
    ],
    googleManagedItems: [
      {
        title: "Traditional Karatedo",
        description: "Train kihon, kata, kumite, discipline, and respect in every class.",
      },
      {
        title: "Clear Progress",
        description: "Students learn step by step with structure, patience, and visible goals.",
      },
      {
        title: "For Young And Old",
        description: "Separate groups help every student train at the right pace and intensity.",
      },
      {
        title: "Welcoming Dojo",
        description: "A serious training atmosphere where new students can feel comfortable.",
      },
    ],
    googleHeading: "Strong training, calm atmosphere, steady growth.",
    googleBody:
      "Karate is more than punches and kicks. Students build focus, confidence, coordination, and respect while learning traditional technique in a safe environment.",
    trialTitle: "New students are welcome to try a class.",
    trialBody:
      "Come watch a lesson, ask questions, or book a trial class to see if the dojo feels right for you or your child.",
    aboutHeading: "Traditional training with a personal approach.",
    classesHeading: "Clear information for parents and students.",
    classesNote: "Class times may change during holidays or summer break. Please check the calendar before visiting.",
    calendarHeading: "Upcoming classes and dojo events.",
    calendarBody:
      "Check the latest class times, holidays, seminars, gradings, and special events before you visit.",
    calendarPrivacyNote:
      "Visitors are welcome to contact the dojo before joining a first class.",
    calendarCta: "Open full calendar",
    galleryHeading: "A glimpse inside training.",
    galleryBody:
      "See the atmosphere of regular training, from focused kata practice to energetic children's classes.",
    galleryCta: "View Full Photo Album",
    formsHeading: "Prepare for your first lesson.",
    formsBody:
      "Download the forms and information pack before your first visit, or contact the dojo if you have questions.",
    faqHeading: "Questions before the first class.",
    faqBody: "Simple answers for parents, new students, and visitors.",
    downloadLabel: "Download",
    contactHeading: "Ask a question or plan your first visit.",
    footerNote: "Traditional karate training for focus, confidence, and discipline.",
    heroImageCaption: "Focused training in a calm, traditional dojo atmosphere.",
    instructor: {
      name: "Sensei Daniel Cohen",
      title: "Chief Instructor, 4th Dan",
      bio: "Sensei Daniel has taught traditional karate for more than fifteen years, with a calm approach that balances discipline, fitness, confidence, and respect. New students are guided step by step, while experienced students continue to refine kihon, kata, and kumite.",
    },
    classes: [
    {
      name: "Kids Karate",
      ages: "Ages 6-11",
      days: "Monday & Wednesday",
      time: "17:00-17:50",
      schedule: "Monday & Wednesday, 17:00-17:50",
      description: "A playful but focused class for movement, listening skills, confidence, and karate basics.",
    },
    {
      name: "Youth Karate",
      ages: "Ages 12-16",
      days: "Tuesday & Thursday",
      time: "18:15-19:15",
      schedule: "Tuesday & Thursday, 18:15-19:15",
      description: "Structured training for stronger technique, self-control, partner drills, and grading preparation.",
    },
    {
      name: "Adults Karate",
      ages: "Adults",
      days: "Tuesday & Thursday",
      time: "20:00-21:15",
      schedule: "Tuesday & Thursday, 20:00-21:15",
      description: "Traditional karate for fitness, practical movement, stress relief, and long-term self-development.",
    },
    ],
    faqItems: [
      {
        question: "Can beginners join?",
        answer: "Yes. New students can watch a lesson or join a trial class. The instructor will explain what to do step by step.",
      },
      {
        question: "What should my child bring?",
        answer: "Comfortable sports clothing and a water bottle are enough for the first lesson. A karate gi can be arranged later.",
      },
      {
        question: "Do class times change during holidays?",
        answer: "Sometimes. The class cards show the regular schedule, but the public calendar is the best place to check changes.",
      },
      {
        question: "Where is the dojo?",
        answer: "Training is listed at Winkelcentrum Westwijk Amstelveen, Westwijkplein, 1187 LV Amstelveen. Use the Maps link before visiting.",
      },
    ],
    forms: [
    {
      name: "Registration Form",
      description: "Student and parent details for joining the dojo.",
      url: "forms/genseiryu-registration-form.html",
      fileName: "genseiryu-registration-form.html",
    },
    {
      name: "Health Declaration",
      description: "Download the health declaration before the first lesson.",
      url: "forms/genseiryu-health-declaration.html",
      fileName: "genseiryu-health-declaration.html",
    },
    {
      name: "Beginner Information Pack",
      description: "What to bring, dojo etiquette, and first-month tips.",
      url: "forms/genseiryu-beginner-pack.html",
      fileName: "genseiryu-beginner-pack.html",
    },
    ],
    gallery: [
    {
      title: "Kata Practice",
      description: "Focused solo practice for balance, rhythm, and precision.",
      src: "images/dojo-kata-realistic.png",
      alt: "Karate student practicing kata in a warm dojo",
    },
    {
      title: "Kids Class",
      description: "Confidence, respect, and movement skills for younger students.",
      src: "images/dojo-kids-class-realistic.png",
      alt: "Children training karate together in a wooden dojo",
    },
    {
      title: "Dojo Atmosphere",
      description: "A calm training space where students can focus and improve.",
      src: "images/dojo-atmosphere-realistic.png",
      alt: "Quiet traditional dojo with polished wooden floor",
    },
    {
      title: "Kumite Practice",
      description: "Controlled partner drills with safety, timing, and respect.",
      src: "images/dojo-kumite-realistic.png",
      alt: "Two karate students practicing controlled partner drills",
    },
    ],
  },
  nl: {
    navItems: [
      { label: "Over ons", href: "about" },
      { label: "Lessen", href: "classes" },
      { label: "Waarom wij", href: "benefits" },
      { label: "Agenda", href: "calendar" },
      { label: "Galerij", href: "gallery" },
      { label: "Formulieren", href: "forms" },
      { label: "FAQ", href: "faq" },
      { label: "Contact", href: "contact" },
    ],
    eyebrow: {
      hero: "Traditionele karate dojo",
      google: "Waarom bij ons trainen",
      about: "Over de dojo",
      classes: "Lessen",
      calendar: "Dojo agenda",
      gallery: "Galerij",
      forms: "Formulieren",
      faq: "FAQ",
      contact: "Contact",
    },
    tagline: "Karate voor focus, vertrouwen en discipline.",
    intro:
      "Een toegankelijke dojo voor kinderen, tieners en volwassenen, met respectvolle training en duidelijke persoonlijke groei.",
    heroPrimaryCta: "Start met trainen",
    heroSecondaryCta: "Bekijk agenda",
    trust: [
      "Traditionele karatedo voor elk niveau",
      "Lessen voor kinderen, jeugd en volwassenen",
      "Persoonlijke aandacht in een respectvolle dojo",
    ],
    homeCards: [
      {
        eyebrow: "Volgende lessen",
        title: "Train deze week",
        description: "Vaste groepen voor kinderen, jeugd en volwassenen.",
        lines: ["Ma 17:00 - Kinderkarate", "Di 18:15 - Jeugdkarate", "Di 20:00 - Volwassenen"],
        cta: "Bekijk alle lessen",
        href: "#classes",
      },
      {
        eyebrow: "Locatie",
        title: "Makkelijk te vinden",
        description: "Winkelcentrum Westwijk Amstelveen, Westwijkplein, 1187 LV Amstelveen.",
        lines: ["Parkeren dichtbij", "Bezoekers welkom", "Vraag gerust voor je eerste les"],
        cta: "Open in Maps",
        href: dojoBase.google.mapsUrl,
      },
      {
        eyebrow: "Agenda",
        title: "Dojo evenementen",
        description: "Bekijk lestijden, vakanties, examens en seminars.",
        lines: ["Maandoverzicht", "Publieke dojo-agenda", "Bijgewerkt voor evenementen"],
        cta: "Open agenda",
        href: "#calendar",
      },
      {
        eyebrow: "Formulieren",
        title: "Voor je begint",
        description: "Download inschrijving en beginnersinformatie.",
        lines: ["Inschrijfformulier", "Gezondheidsverklaring", "Beginnerspakket"],
        cta: "Download formulieren",
        href: "#forms",
      },
    ],
    googleManagedItems: [
      {
        title: "Traditionele karatedo",
        description: "Train kihon, kata, kumite, discipline en respect in elke les.",
      },
      {
        title: "Duidelijke vooruitgang",
        description: "Leer stap voor stap met structuur, geduld en duidelijke doelen.",
      },
      {
        title: "Voor jong en oud",
        description: "Aparte groepen helpen elke leerling op het juiste tempo te trainen.",
      },
      {
        title: "Welkom in de dojo",
        description: "Een serieuze trainingssfeer waar nieuwe leerlingen zich prettig kunnen voelen.",
      },
    ],
    googleHeading: "Sterke training, rustige sfeer, gestage groei.",
    googleBody:
      "Karate is meer dan stoten en trappen. Leerlingen bouwen focus, zelfvertrouwen, coordinatie en respect op terwijl ze traditionele techniek leren in een veilige omgeving.",
    trialTitle: "Nieuwe leerlingen zijn welkom voor een proefles.",
    trialBody:
      "Kom een les bekijken, stel vragen of plan een proefles om te ervaren of de dojo past bij jou of je kind.",
    aboutHeading: "Traditionele training met persoonlijke aandacht.",
    classesHeading: "Duidelijke informatie voor ouders en leerlingen.",
    classesNote: "Lestijden kunnen veranderen tijdens vakanties of de zomervakantie. Bekijk de agenda voordat je langskomt.",
    calendarHeading: "Aankomende lessen en dojo-evenementen.",
    calendarBody:
      "Bekijk de nieuwste lestijden, vakanties, seminars, examens en speciale evenementen voordat je langskomt.",
    calendarPrivacyNote:
      "Bezoekers kunnen altijd contact opnemen met de dojo voor hun eerste les.",
    calendarCta: "Open volledige agenda",
    galleryHeading: "Een kijkje in de training.",
    galleryBody:
      "Bekijk de sfeer van de training, van geconcentreerde kata tot energieke kinderlessen.",
    galleryCta: "Bekijk volledig fotoalbum",
    formsHeading: "Bereid je voor op je eerste les.",
    formsBody:
      "Download de formulieren en het informatiepakket voor je eerste bezoek, of neem contact op met de dojo als je vragen hebt.",
    faqHeading: "Vragen voor de eerste les.",
    faqBody: "Korte antwoorden voor ouders, nieuwe leerlingen en bezoekers.",
    downloadLabel: "Download",
    contactHeading: "Stel een vraag of plan je eerste bezoek.",
    footerNote: "Traditionele karatetraining voor focus, zelfvertrouwen en discipline.",
    heroImageCaption: "Geconcentreerde training in een rustige, traditionele dojo.",
    instructor: {
      name: "Sensei Daniel Cohen",
      title: "Hoofdinstructeur, 4e dan",
      bio: "Sensei Daniel geeft al meer dan vijftien jaar traditionele karatelessen, met een rustige aanpak die discipline, conditie, zelfvertrouwen en respect combineert. Nieuwe leerlingen worden stap voor stap begeleid, terwijl gevorderde leerlingen kihon, kata en kumite blijven verfijnen.",
    },
    classes: [
      {
        name: "Karate voor kinderen",
        ages: "Leeftijd 6-11",
        days: "Maandag en woensdag",
        time: "17:00-17:50",
        schedule: "Maandag en woensdag, 17:00-17:50",
        description: "Een speelse maar gerichte les voor beweging, luisteren, zelfvertrouwen en karatebasis.",
      },
      {
        name: "Karate voor jeugd",
        ages: "Leeftijd 12-16",
        days: "Dinsdag en donderdag",
        time: "18:15-19:15",
        schedule: "Dinsdag en donderdag, 18:15-19:15",
        description: "Gestructureerde training voor sterkere techniek, zelfbeheersing, partneroefeningen en examens.",
      },
      {
        name: "Karate voor volwassenen",
        ages: "Volwassenen",
        days: "Dinsdag en donderdag",
        time: "20:00-21:15",
        schedule: "Dinsdag en donderdag, 20:00-21:15",
        description: "Traditionele karate voor conditie, praktische beweging, ontspanning en persoonlijke ontwikkeling.",
      },
    ],
    faqItems: [
      {
        question: "Kunnen beginners meedoen?",
        answer: "Ja. Nieuwe leerlingen kunnen een les bekijken of een proefles volgen. De instructeur legt stap voor stap uit wat je doet.",
      },
      {
        question: "Wat moet mijn kind meenemen?",
        answer: "Voor de eerste les zijn sportkleding en een waterfles genoeg. Een karatepak kan later worden geregeld.",
      },
      {
        question: "Veranderen lestijden tijdens vakanties?",
        answer: "Soms. De leskaarten tonen het vaste schema, maar de publieke agenda is de beste plek om wijzigingen te controleren.",
      },
      {
        question: "Waar is de dojo?",
        answer: "De training staat vermeld bij Winkelcentrum Westwijk Amstelveen, Westwijkplein, 1187 LV Amstelveen. Gebruik de Maps-link voordat je langskomt.",
      },
    ],
    forms: [
      {
        name: "Inschrijfformulier",
        description: "Gegevens van leerling en ouder/verzorger voor inschrijving bij de dojo.",
        url: "forms/genseiryu-registration-form.html",
        fileName: "genseiryu-inschrijfformulier.html",
      },
      {
        name: "Gezondheidsverklaring",
        description: "Download de gezondheidsverklaring voor de eerste les.",
        url: "forms/genseiryu-health-declaration.html",
        fileName: "genseiryu-gezondheidsverklaring.html",
      },
      {
        name: "Informatiepakket voor beginners",
        description: "Een korte gids met wat je meeneemt, dojo-etiquette en tips voor de eerste maand.",
        url: "forms/genseiryu-beginner-pack.html",
        fileName: "genseiryu-beginnerspakket.html",
      },
    ],
    gallery: [
      {
        title: "Kata training",
        description: "Gerichte solo-oefening voor balans, ritme en precisie.",
        src: "images/dojo-kata-realistic.png",
        alt: "Karateleerling oefent kata in een warme dojo",
      },
      {
        title: "Kinderles",
        description: "Zelfvertrouwen, respect en bewegingsvaardigheid voor jonge leerlingen.",
        src: "images/dojo-kids-class-realistic.png",
        alt: "Kinderen trainen samen karate in een houten dojo",
      },
      {
        title: "Dojo sfeer",
        description: "Een rustige trainingsruimte waar leerlingen zich kunnen concentreren en groeien.",
        src: "images/dojo-atmosphere-realistic.png",
        alt: "Rustige traditionele dojo met gepolijste houten vloer",
      },
      {
        title: "Kumite training",
        description: "Gecontroleerde partneroefeningen met veiligheid, timing en respect.",
        src: "images/dojo-kumite-realistic.png",
        alt: "Twee karateleerlingen oefenen gecontroleerde partnertechnieken",
      },
    ],
  },
};
