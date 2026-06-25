export type DojoClass = {
  name: string;
  ages: string;
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

export const dojo = {
  name: "Genseiryu Karatedo",
  tagline: "Traditional karate training for focus, confidence, and discipline.",
  intro:
    "A welcoming dojo for children, teens, and adults, rooted in respectful training and steady personal progress.",
  heroImage: {
    src: "images/hero-dojo.svg",
    alt: "Stylized karate dojo artwork with a red rising sun",
    caption: "Demo artwork for the first presentation. Replace with a real dojo photo later.",
  },
  instructor: {
    name: "Sensei Daniel Cohen",
    title: "Chief Instructor, 4th Dan",
    bio: "Sensei Daniel has taught traditional karate for more than fifteen years, with a calm approach that balances discipline, fitness, confidence, and respect. New students are guided step by step, while experienced students continue to refine kihon, kata, and kumite.",
  },
  contact: {
    email: "info@genseiryu-demo.org",
    phone: "+972-50-123-4567",
    whatsapp: "https://wa.me/972500000000",
    address: "Community Sports Hall, Herzl Street 18, Haifa",
  },
  google: {
    calendarName: "Genseiryu Public Dojo Calendar",
    calendarEmbed:
      "https://calendar.google.com/calendar/embed?src=en.israel%23holiday%40group.v.calendar.google.com&ctz=Asia%2FJerusalem&mode=AGENDA",
    calendarPublicUrl: "https://calendar.google.com/",
    mapsUrl: "https://maps.google.com/",
    driveGalleryFolderUrl: "https://drive.google.com/",
  },
  classes: [
    {
      name: "Kids Karate",
      ages: "Ages 6-11",
      schedule: "Monday & Wednesday, 17:00-17:50",
      description: "A playful but focused class for movement, listening skills, confidence, and karate basics.",
    },
    {
      name: "Youth Karate",
      ages: "Ages 12-16",
      schedule: "Tuesday & Thursday, 18:15-19:15",
      description: "Structured training for stronger technique, self-control, partner drills, and grading preparation.",
    },
    {
      name: "Adults Karate",
      ages: "Adults",
      schedule: "Tuesday & Thursday, 20:00-21:15",
      description: "Traditional karate for fitness, practical movement, stress relief, and long-term self-development.",
    },
  ] satisfies DojoClass[],
  forms: [
    {
      name: "Registration Form",
      description: "Download the student registration form for the demo.",
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
      description: "A short guide with what to bring, dojo etiquette, and first-month tips.",
      url: "forms/genseiryu-beginner-pack.html",
      fileName: "genseiryu-beginner-pack.html",
    },
  ] satisfies DojoForm[],
  gallery: [
    {
      title: "Kata Practice",
      description: "Focused solo practice for balance, rhythm, and precision.",
      src: "images/kata-practice.svg",
      alt: "Stylized karate student practicing kata in a warm dojo",
    },
    {
      title: "Kids Class",
      description: "Confidence, respect, and movement skills for younger students.",
      src: "images/kids-class.svg",
      alt: "Stylized children training karate together",
    },
    {
      title: "Dojo Atmosphere",
      description: "A calm training space where students can focus and improve.",
      src: "images/dojo-atmosphere.svg",
      alt: "Stylized traditional dojo interior",
    },
    {
      title: "Kumite Practice",
      description: "Controlled partner drills with safety, timing, and respect.",
      src: "images/kumite-practice.svg",
      alt: "Stylized karate partner practice",
    },
  ] satisfies GalleryImage[],
};
