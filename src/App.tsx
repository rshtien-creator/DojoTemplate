import { useEffect, useState } from "react";
import {
  CalendarDays,
  Camera,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Mail,
  Menu,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";
import { dojoBase, dojoContent, type Language } from "./config/dojo";

const languageLabels: Record<Language, string> = {
  en: "EN",
  nl: "NL",
};

const managedIcons = [
  CalendarDays,
  FileText,
  Camera,
  Navigation,
];

const homeCardIcons = [
  Clock,
  MapPin,
  CalendarDays,
  FileText,
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("dojo-language");

    return savedLanguage === "nl" ? "nl" : "en";
  });
  const content = dojoContent[language];

  useEffect(() => {
    window.localStorage.setItem("dojo-language", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" aria-label={`${dojoBase.name} home`}>
          <span className="brand-mark">Do</span>
          <span>{dojoBase.name}</span>
        </a>
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} aria-label="Main navigation">
          {content.navItems.map((item) => (
            <a href={`#${item.href}`} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="language-switcher" aria-label="Language selector">
          {(Object.keys(languageLabels) as Language[]).map((item) => (
            <button
              className={language === item ? "active" : ""}
              key={item}
              onClick={() => {
                setLanguage(item);
                setIsMenuOpen(false);
              }}
              type="button"
            >
              {languageLabels[item]}
            </button>
          ))}
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">{content.eyebrow.hero}</p>
            <h1>{content.tagline}</h1>
            <p>{content.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                {content.heroPrimaryCta}
              </a>
              <a className="button ghost" href={dojoBase.google.calendarPublicUrl} target="_blank" rel="noreferrer">
                {content.heroSecondaryCta} <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img src={dojoBase.heroImage.src} alt={dojoBase.heroImage.alt} />
            <p>{content.heroImageCaption}</p>
          </div>
        </section>

        <section className="trust-strip" aria-label="Training highlights">
          <div>
            <ShieldCheck />
            <span>{content.trust[0]}</span>
          </div>
          <div>
            <Smartphone />
            <span>{content.trust[1]}</span>
          </div>
          <div>
            <CalendarDays />
            <span>{content.trust[2]}</span>
          </div>
        </section>

        <section className="home-cards" aria-label="Quick dojo information">
          {content.homeCards.map((card, index) => {
            const Icon = homeCardIcons[index];
            const isExternal = card.href.startsWith("http");

            return (
              <article className="home-card" key={card.title}>
                <div className="home-card-heading">
                  <Icon />
                  <span>{card.eyebrow}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <a href={card.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
                  {card.cta} <ExternalLink size={14} />
                </a>
              </article>
            );
          })}
        </section>

        <section className="section promise-section" id="benefits">
          <div className="section-heading">
            <p className="eyebrow">{content.eyebrow.google}</p>
            <h2>{content.googleHeading}</h2>
            <p>{content.googleBody}</p>
          </div>
          <div className="managed-grid">
            {content.googleManagedItems.map((item, index) => {
              const Icon = managedIcons[index];

              return (
                <article className="managed-card" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="trial-card">
            <MessageCircle />
            <div>
              <h3>{content.trialTitle}</h3>
              <p>{content.trialBody}</p>
            </div>
          </div>
        </section>

        <section className="section split" id="about">
          <div>
            <p className="eyebrow">{content.eyebrow.about}</p>
            <h2>{content.aboutHeading}</h2>
          </div>
          <div className="panel">
            <h3>{content.instructor.name}</h3>
            <p className="muted">{content.instructor.title}</p>
            <p>{content.instructor.bio}</p>
          </div>
        </section>

        <section className="section" id="classes">
          <div className="section-heading">
            <p className="eyebrow">{content.eyebrow.classes}</p>
            <h2>{content.classesHeading}</h2>
          </div>
          <div className="card-grid">
            {content.classes.map((dojoClass) => (
              <article className="class-card" key={dojoClass.name}>
                <p className="pill">{dojoClass.ages}</p>
                <h3>{dojoClass.name}</h3>
                <p>{dojoClass.description}</p>
                <span>
                  <Clock size={16} />
                  {dojoClass.schedule}
                </span>
              </article>
            ))}
          </div>
          <p className="schedule-note">{content.classesNote}</p>
        </section>

        <section className="section calendar-section" id="calendar">
          <div className="section-heading">
            <p className="eyebrow">{content.eyebrow.calendar}</p>
            <h2>{content.calendarHeading}</h2>
            <p>{content.calendarBody}</p>
            <p className="privacy-note">{content.calendarPrivacyNote}</p>
            <a className="button primary calendar-open-button" href={dojoBase.google.calendarPublicUrl} target="_blank" rel="noreferrer">
              {content.calendarCta} <ExternalLink size={16} />
            </a>
          </div>
          <iframe
            title={`${dojoBase.name} calendar`}
            src={dojoBase.google.calendarEmbed}
            loading="lazy"
          />
        </section>

        <section className="section" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">{content.eyebrow.gallery}</p>
            <h2>{content.galleryHeading}</h2>
            <p>{content.galleryBody}</p>
          </div>
          <div className="gallery-grid">
            {content.gallery.map((image) => (
              <article className="gallery-card" key={image.title}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </article>
            ))}
          </div>
          <a className="button primary centered" href={dojoBase.google.driveGalleryFolderUrl} target="_blank" rel="noreferrer">
            {content.galleryCta} <ExternalLink size={16} />
          </a>
        </section>

        <section className="section split" id="forms">
          <div>
            <p className="eyebrow">{content.eyebrow.forms}</p>
            <h2>{content.formsHeading}</h2>
            <p>{content.formsBody}</p>
          </div>
          <div className="forms-list">
            {content.forms.map((form) => (
              <a
                className="form-row"
                href={form.url}
                key={form.name}
                download={form.fileName}
                target="_blank"
                rel="noreferrer"
              >
                <Download />
                <span>
                  <strong>{form.name}</strong>
                  <small>{form.description}</small>
                </span>
                <small className="download-label">{content.downloadLabel}</small>
              </a>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">{content.eyebrow.contact}</p>
            <h2>{content.contactHeading}</h2>
          </div>
          <div className="contact-grid">
            <a href={`mailto:${dojoBase.contact.email}`}>
              <Mail />
              {dojoBase.contact.email}
            </a>
            <a href={dojoBase.contact.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle />
              WhatsApp
            </a>
            <a href={dojoBase.google.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin />
              {dojoBase.contact.address}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>{dojoBase.name}</span>
        <span>{content.footerNote}</span>
      </footer>
    </div>
  );
}

export default App;
