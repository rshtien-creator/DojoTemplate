import {
  CalendarDays,
  Camera,
  Clock,
  Download,
  ExternalLink,
  FileText,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { dojo } from "./config/dojo";

const navItems = ["About", "Classes", "Google", "Calendar", "Gallery", "Forms", "Contact"];

const googleManagedItems = [
  {
    title: "Class Schedule",
    description: "Update classes, holidays, and special events from Google Calendar.",
    icon: CalendarDays,
  },
  {
    title: "Registration Files",
    description: "Replace PDFs or forms in Google Drive without changing the website.",
    icon: FileText,
  },
  {
    title: "Latest Photos",
    description: "Upload fresh photos to a shared Drive folder from the teacher's phone.",
    icon: Camera,
  },
  {
    title: "Location",
    description: "Use a Google Maps link so students can navigate with one tap.",
    icon: Navigation,
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" aria-label={`${dojo.name} home`}>
          <span className="brand-mark">Do</span>
          <span>{dojo.name}</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Static demo website</p>
            <h1>{dojo.tagline}</h1>
            <p>{dojo.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Start Training
              </a>
              <a className="button ghost" href={dojo.google.calendarPublicUrl} target="_blank" rel="noreferrer">
                View Calendar <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img src={dojo.heroImage.src} alt={dojo.heroImage.alt} />
            <p>{dojo.heroImage.caption}</p>
          </div>
        </section>

        <section className="trust-strip" aria-label="Project guarantees">
          <div>
            <ShieldCheck />
            <span>No backend, database, or passwords</span>
          </div>
          <div>
            <Smartphone />
            <span>Teacher manages updates through Google</span>
          </div>
          <div>
            <CalendarDays />
            <span>Free static hosting friendly</span>
          </div>
        </section>

        <section className="section promise-section" id="google">
          <div className="section-heading">
            <p className="eyebrow">Free and low-maintenance</p>
            <h2>The website stays static. Google handles the things that change.</h2>
            <p>
              This keeps the site reliable and free to host. The teacher only needs his existing
              Google account for updates, so we do not build or maintain an admin system.
            </p>
          </div>
          <div className="managed-grid">
            {googleManagedItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="managed-card" key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="no-passwords">
            <LockKeyhole />
            <div>
              <h3>No website passwords to lose, leak, or support.</h3>
              <p>
                Visitors only see public pages and public Google links. Private editing stays inside
                the teacher's own Google account.
              </p>
            </div>
          </div>
        </section>

        <section className="section split" id="about">
          <div>
            <p className="eyebrow">About the dojo</p>
            <h2>Traditional training, modern simple website.</h2>
          </div>
          <div className="panel">
            <h3>{dojo.instructor.name}</h3>
            <p className="muted">{dojo.instructor.title}</p>
            <p>{dojo.instructor.bio}</p>
          </div>
        </section>

        <section className="section" id="classes">
          <div className="section-heading">
            <p className="eyebrow">Classes</p>
            <h2>Clear information for parents and students.</h2>
          </div>
          <div className="card-grid">
            {dojo.classes.map((dojoClass) => (
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
        </section>

        <section className="section calendar-section" id="calendar">
          <div className="section-heading">
            <p className="eyebrow">Google Calendar</p>
            <h2>Schedule updates stay in the teacher's Google account.</h2>
            <p>
              The embedded calendar can be replaced with the dojo's public Google Calendar. No website
              login or admin panel is needed.
            </p>
            <p className="privacy-note">
              Demo calendar: {dojo.google.calendarName}. The site only shows the calendar ID placed in
              the embed URL, not the teacher's full Google account.
            </p>
          </div>
          <iframe
            title={`${dojo.name} calendar`}
            src={dojo.google.calendarEmbed}
            loading="lazy"
          />
        </section>

        <section className="section" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">Hybrid gallery</p>
            <h2>Polished static photos here, latest photos in Google Drive.</h2>
            <p>
              The website can keep a few stable showcase images while the teacher updates the full
              gallery from his phone in Drive.
            </p>
          </div>
          <div className="gallery-grid">
            {dojo.gallery.map((image) => (
              <article className="gallery-card" key={image.title}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </article>
            ))}
          </div>
          <a className="button primary centered" href={dojo.google.driveGalleryFolderUrl} target="_blank" rel="noreferrer">
            Open Latest Photos in Google Drive <ExternalLink size={16} />
          </a>
        </section>

        <section className="section split" id="forms">
          <div>
            <p className="eyebrow">Google Drive forms</p>
            <h2>Documents can be replaced without touching the site.</h2>
            <p>
              The demo downloads local sample documents. For the final version, each button should
              point to a real shared Google Drive file download link.
            </p>
          </div>
          <div className="forms-list">
            {dojo.forms.map((form) => (
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
                <small className="download-label">Download</small>
              </a>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Simple contact paths, no website accounts.</h2>
          </div>
          <div className="contact-grid">
            <a href={`mailto:${dojo.contact.email}`}>
              <Mail />
              {dojo.contact.email}
            </a>
            <a href={dojo.contact.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle />
              WhatsApp
            </a>
            <a href={dojo.google.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin />
              {dojo.contact.address}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>{dojo.name}</span>
        <span>Static demo. Google-managed content. Free-hosting ready.</span>
      </footer>
    </div>
  );
}

export default App;
