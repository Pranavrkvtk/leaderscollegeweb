import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, CheckCircle2, Phone, MapPin, Menu, X, Plane, Ship,
  Truck, PackageCheck, GraduationCap, BriefcaseBusiness, Globe2,
  BadgeCheck, Clock3, ChevronDown, Mail
} from "lucide-react";
import "./styles.css";

const phoneOne = "+91 9567829192";
const phoneTwo = "+91 9061431111";

const benefits = [
  { icon: BriefcaseBusiness, title: "Placement assistance", text: "Career guidance and support to help you take your next step." },
  { icon: GraduationCap, title: "Industry expert trainers", text: "Learn practical skills from logistics and supply-chain professionals." },
  { icon: BadgeCheck, title: "Internship + certification", text: "Build hands-on experience and strengthen your professional profile." },
  { icon: Globe2, title: "Global career opportunities", text: "Prepare for opportunities across logistics, freight and supply chain." }
];

const modules = [
  { icon: PackageCheck, n: "01", title: "Logistics fundamentals", text: "Understand how goods move from origin to destination." },
  { icon: Ship, n: "02", title: "Shipping & freight", text: "Explore sea freight, air cargo and freight-forwarding workflows." },
  { icon: Truck, n: "03", title: "Transportation & warehousing", text: "Learn distribution, inventory basics and warehouse operations." },
  { icon: Globe2, n: "04", title: "Import & export basics", text: "Get familiar with international trade processes and documentation." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", interest: "Logistics programme" });
  const [sent, setSent] = useState(false);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitEnquiry = (e) => {
    e.preventDefault();
    const message = `Hello Leaders College, I would like to know more about the 6-month Logistics programme.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AInterested in: ${encodeURIComponent(form.interest)}`;
    window.open(`https://wa.me/919567829192?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <div className="container top-inner">
          <span><MapPin size={14} /> Adikadalayi Rd, Kannur, Kerala</span>
          <span className="top-phones"><Phone size={14} /> {phoneOne} <i /> {phoneTwo}</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => goTo("home")} aria-label="Leaders College home">
            <span className="brand-mark">LC</span>
            <span className="brand-copy"><strong>LEADERS COLLEGE</strong><small>APPROVED BY AICTE</small></span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => goTo("home")}>Home</button>
            <button onClick={() => goTo("programme")}>Programme</button>
            <button onClick={() => goTo("why-us")}>Why Leaders</button>
            <button onClick={() => goTo("contact")}>Contact</button>
            <button className="nav-cta" onClick={() => goTo("contact")}>Enquire now <ArrowRight size={16} /></button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> CAREER-FOCUSED PROFESSIONAL TRAINING</div>
              <h1>Launch your future<br />in <span>Logistics.</span></h1>
              <p className="hero-subtitle">A practical 6-month programme designed to move your ambition forward.</p>
              <div className="hero-pills">
                <span><CheckCircle2 size={16} /> Internship support</span>
                <span><CheckCircle2 size={16} /> Certification</span>
                <span><CheckCircle2 size={16} /> Career guidance</span>
              </div>
              <div className="hero-actions">
                <button className="button button-orange" onClick={() => goTo("contact")}>Enquire for admission <ArrowRight size={18} /></button>
                <button className="button button-ghost" onClick={() => goTo("programme")}>Explore programme <ChevronDown size={17} /></button>
              </div>
              <div className="hero-note"><span className="note-icon"><Clock3 size={17} /></span><span><strong>6 months</strong><small>Learn skills. Build confidence. Get career-ready.</small></span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="visual-card">
                <img src="/src/logistics-poster.jpeg" alt="Logistics programme poster featuring cargo ship, aircraft and trucks" />
                <div className="visual-badge"><span className="badge-icon"><Ship size={20} /></span><span><strong>Global industry</strong><small>One connected world</small></span></div>
              </div>
              <div className="floating-stat stat-top"><span className="stat-icon blue"><Plane size={19} /></span><span><strong>Air freight</strong><small>Connect worldwide</small></span></div>
              <div className="floating-stat stat-bottom"><span className="stat-icon orange"><Truck size={20} /></span><span><strong>Supply chain</strong><small>From source to customer</small></span></div>
            </div>
          </div>
          <div className="hero-wave" />
        </section>

        <section className="trust-row">
          <div className="container trust-grid">
            <div><span className="trust-icon"><BriefcaseBusiness /></span><span><strong>Career support</strong><small>Guidance for your next step</small></span></div>
            <div><span className="trust-icon"><GraduationCap /></span><span><strong>Expert-led learning</strong><small>Practical industry knowledge</small></span></div>
            <div><span className="trust-icon"><BadgeCheck /></span><span><strong>Internship & certificate</strong><small>Build your profile</small></span></div>
            <div><span className="trust-icon"><Globe2 /></span><span><strong>Global perspective</strong><small>Learn an interconnected industry</small></span></div>
          </div>
        </section>

        <section className="section benefits-section" id="why-us">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">WHY LEADERS COLLEGE</span>
              <h2>More than a course.<br /><span>A step toward your career.</span></h2>
              <p>Build a foundation for the fast-moving world of logistics and supply chain management.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <article className="benefit-card" key={title}>
                  <div className="card-icon"><Icon size={25} /></div>
                  <span className="card-index">0{index + 1}</span>
                  <h3>{title}</h3><p>{text}</p>
                  <button className="text-link" onClick={() => goTo("contact")}>Know more <ArrowRight size={16} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="programme-section" id="programme">
          <div className="container programme-layout">
            <div className="programme-intro">
              <span className="section-kicker light-kicker">YOUR LEARNING JOURNEY</span>
              <h2>Understand how<br />the world <span>moves.</span></h2>
              <p>Explore the essential building blocks of logistics, transportation and international trade with a learning path built around real-world applications.</p>
              <button className="button button-orange" onClick={() => goTo("contact")}>Get programme details <ArrowRight size={18} /></button>
              <div className="programme-caption"><span className="caption-line" /> 6-MONTH PROFESSIONAL PROGRAMME</div>
            </div>
            <div className="module-list">
              {modules.map(({ icon: Icon, n, title, text }) => (
                <article className="module-item" key={n}>
                  <div className="module-number">{n}</div>
                  <div className="module-icon"><Icon size={22} /></div>
                  <div className="module-copy"><h3>{title}</h3><p>{text}</p></div>
                  <ArrowRight className="module-arrow" size={19} />
                </article>
              ))}
            </div>
          </div>
          <div className="route-decoration route-one" /><div className="route-decoration route-two" />
        </section>

        <section className="section outcomes-section">
          <div className="container outcomes-layout">
            <div className="outcomes-copy">
              <span className="section-kicker">YOUR NEXT CHAPTER</span>
              <h2>Learn with purpose.<br /><span>Move forward with confidence.</span></h2>
              <p>Develop industry awareness, practical understanding and the confidence to explore entry-level opportunities in logistics and supply chain operations.</p>
              <ul className="check-list">
                <li><CheckCircle2 /> Understand logistics and supply-chain workflows</li>
                <li><CheckCircle2 /> Build practical knowledge with expert guidance</li>
                <li><CheckCircle2 /> Explore internship and placement assistance</li>
                <li><CheckCircle2 /> Receive details about certification and admissions</li>
              </ul>
              <button className="button button-blue" onClick={() => goTo("contact")}>Talk to an advisor <ArrowRight size={18} /></button>
            </div>
            <div className="outcome-visual">
              <div className="outcome-orbit orbit-a" /><div className="outcome-orbit orbit-b" />
              <div className="outcome-center"><Globe2 size={68} strokeWidth={1.25} /><span>YOUR CAREER<br />IN MOTION</span></div>
              <div className="orbit-chip chip-a"><Plane size={20} /><span>Air cargo</span></div>
              <div className="orbit-chip chip-b"><Ship size={20} /><span>Shipping</span></div>
              <div className="orbit-chip chip-c"><Truck size={20} /><span>Transport</span></div>
              <div className="orbit-chip chip-d"><PackageCheck size={20} /><span>Warehousing</span></div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-layout">
            <div className="section-heading">
              <span className="section-kicker">GOOD TO KNOW</span>
              <h2>Questions? <span>Start here.</span></h2>
              <p>Need a little more clarity before you enquire? Here are a few helpful starting points.</p>
            </div>
            <div className="faq-list">
              {[
                ["How long is the logistics programme?", "The programme is advertised as a 6-month course. Contact the college to confirm the next batch dates and detailed schedule."],
                ["Does the college provide placement assistance?", "The course promotion mentions placement assistance. Ask the admissions team about the support process, eligibility and current opportunities."],
                ["Is an internship and certification included?", "The promotion highlights internship support and certification. Confirm the exact terms, certificate details and any additional fees with the college."],
                ["How do I get admission details?", "Call either number listed below or send an enquiry through the form. The form opens WhatsApp with your details so you can message the college."]
              ].map(([q, a], i) => (
                <div className={`faq-item ${faqOpen === i ? "active" : ""}`} key={q}>
                  <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}>
                    <span>{q}</span><span className="faq-plus">{faqOpen === i ? "−" : "+"}</span>
                  </button>
                  {faqOpen === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <span className="section-kicker light-kicker">TAKE THE FIRST STEP</span>
              <h2>Your future doesn't<br />have to <span>wait.</span></h2>
              <p>Talk to Leaders College to learn about the logistics programme, admissions and upcoming batches.</p>
              <div className="contact-details">
                <a href="tel:+919567829192"><span className="contact-icon"><Phone size={19} /></span><span><small>Call us</small><strong>{phoneOne}</strong></span></a>
                <a href="tel:+919061431111"><span className="contact-icon"><Phone size={19} /></span><span><small>Call us</small><strong>{phoneTwo}</strong></span></a>
                <div><span className="contact-icon"><MapPin size={19} /></span><span><small>Visit us</small><strong>Adikadalayi Rd, Kannur, Kerala</strong></span></div>
              </div>
            </div>
            <form className="enquiry-card" onSubmit={submitEnquiry}>
              <div className="form-top"><span className="form-icon"><Mail size={21} /></span><div><h3>Request a callback</h3><p>Share your details to enquire on WhatsApp.</p></div></div>
              <label htmlFor="name">Your name</label>
              <input id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" required />
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Enter your phone number" required />
              <label htmlFor="interest">I'm interested in</label>
              <select id="interest" value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}>
                <option>Logistics programme</option><option>Admission details</option><option>Internship and certification</option><option>Placement assistance</option>
              </select>
              <button className="button button-orange submit-button" type="submit">Send enquiry on WhatsApp <ArrowRight size={18} /></button>
              {sent && <p className="form-success">WhatsApp should open in a new tab. Send the pre-filled message to complete your enquiry.</p>}
              <small className="privacy-note">Your details are used to prepare your enquiry message.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <button className="brand footer-brand" onClick={() => goTo("home")}>
            <span className="brand-mark">LC</span>
            <span className="brand-copy"><strong>LEADERS COLLEGE</strong><small>APPROVED BY AICTE</small></span>
          </button>
          <p>Learn today. Move the world tomorrow.</p>
          <button className="back-top" onClick={() => goTo("home")}>Back to top ↑</button>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Leaders College. All rights reserved.</span><span>Logistics programme · Kannur, Kerala</span></div>
      </footer>
      <a className="mobile-call" href="tel:+919567829192"><Phone size={18} /> Call admissions</a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
