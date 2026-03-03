import './App.css'

export default function App() {
  return (
    <>
      {/* ── HEADER — sticky, Flexbox ─────────── */}
      <header className="site-header">
        <span className="logo-text">Gizem Düsmez</span>
        <nav className="nav" aria-label="Ana menü">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <h1>Kişisel Portföy</h1>

        {/* ── HAKKIMDA ──────────────────────── */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src="/profil.jpg"
                alt="Gizem Düsmez'in profil fotoğrafı"
                width={160}
                height={160}
              />
              <figcaption>Gizem Düsmez</figcaption>
            </figure>

            <div className="about-text">
              <p>
                Merhaba! Ben Gizem Düsmez, frontend odaklı bir geliştiriciyim.
                React, TypeScript ve modern CSS konularında çalışıyorum.
                Kullanıcı odaklı, erişilebilir ve performanslı arayüzler
                tasarlamaktan keyif alıyorum.
              </p>

              {/* ── SKILL TAGS — Flexbox Toolbar ── */}
              <ul
                className="skill-tags"
                role="list"
                aria-label="Beceri etiketleri"
              >
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>CSS Grid</li>
                <li>Flexbox</li>
                <li>HTML5</li>
                <li>Git</li>
                <li>a11y</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── PROJELER — CSS Grid ────────────── */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-grid">
            {/* Proje Kartı 1 */}
            <article className="project-card">
              <img
                src="/proje-1.png"
                alt="Proje 1 ana sayfa ekran görüntüsü"
              />
              <div className="project-card-body">
                <h3>Portföy Sitesi</h3>
                <p>
                  LAB-2 ve LAB-3 kapsamında geliştirilen, semantic HTML ve modern
                  CSS design-token sistemi kullanan kişisel portföy sayfası.
                </p>
                <ul className="project-card-tags" aria-label="Kullanılan teknolojiler">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>CSS</li>
                </ul>
                <a
                  href="https://github.com"
                  className="project-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </article>

            {/* Proje Kartı 2 */}
            <article className="project-card">
              <img
                src="/proje-2.png"
                alt="Proje 2 arayüz ekran görüntüsü"
              />
              <div className="project-card-body">
                <h3>Süperkapasitör Araştırma</h3>
                <p>
                  Elsevier ve Scopus API'larından veri çeken, MongoDB'de saklayan
                  ve analiz raporları sunan Python tabanlı araştırma pipeline'ı.
                </p>
                <ul className="project-card-tags" aria-label="Kullanılan teknolojiler">
                  <li>Python</li>
                  <li>MongoDB</li>
                  <li>API</li>
                </ul>
                <a
                  href="https://github.com"
                  className="project-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </article>

            {/* Proje Kartı 3 */}
            <article className="project-card">
              <img
                src="/proje-3.png"
                alt="Proje 3 ekran görüntüsü"
              />
              <div className="project-card-body">
                <h3>AWS CI/CD Pipeline</h3>
                <p>
                  CodePipeline, CodeBuild ve CodeDeploy ile kurulmuş otomatik
                  test ve dağıtım sistemi. Blue/Green ve Canary dağıtım
                  stratejilerini destekler.
                </p>
                <ul className="project-card-tags" aria-label="Kullanılan teknolojiler">
                  <li>AWS</li>
                  <li>CI/CD</li>
                  <li>DevOps</li>
                </ul>
                <a
                  href="https://github.com"
                  className="project-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ── İLETİŞİM ──────────────────────── */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                autoComplete="name"
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="ornek@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Gönder
            </button>
          </form>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────── */}
      <footer>
        <p>© 2026 Gizem Düsmez. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}
