import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <nav aria-label="Ana menü">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Kişisel Portföy</h1>

        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>Kısa tanıtım metni buraya.</p>

          <figure>
            <img
              src="/profil.jpg"
              alt="Profil fotoğrafı"
              width={160}
              height={160}
            />
            <figcaption>Ad Soyad</figcaption>
          </figure>
        </section>

        <section id="projeler">
          <h2>Projeler</h2>

          <article>
            <h3>Proje 1</h3>
            <p>Kısa açıklama.</p>
            <img
              src="/proje-1.png"
              alt="Proje 1 ana sayfa ekran görüntüsü"
              width={320}
            />
          </article>

          <article>
            <h3>Proje 2</h3>
            <p>Kısa açıklama.</p>
            <img
              src="/proje-2.png"
              alt="Proje 2 arayüz ekran görüntüsü"
              width={320}
            />
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>

          <form>
            <div>
              <label htmlFor="name">Ad Soyad</label>
              <input id="name" name="name" type="text" required minLength={2} />
            </div>

            <div>
              <label htmlFor="email">E-posta</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div>
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" name="message" required minLength={10} />
            </div>

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Gizem Düsmez. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

