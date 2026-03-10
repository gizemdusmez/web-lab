import { useState, useEffect } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import UIKit from './pages/UIKit'

export default function App() {
  const [showUIKit, setShowUIKit] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  if (showUIKit) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <Button onClick={() => setDarkMode(!darkMode)} variant="secondary" size="sm">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
          <Button onClick={() => setShowUIKit(false)} variant="primary" size="sm">
            Geri Dön
          </Button>
        </div>
        <UIKit />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* ── HEADER — sticky, Flexbox ─────────── */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
          Gizem Düşmez
        </span>
        <nav className="flex items-center gap-2">
          <ul className="flex gap-1">
            <li><a href="#hakkimda" className="px-3 py-1.5 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-all">Hakkımda</a></li>
            <li><a href="#projeler" className="px-3 py-1.5 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-all">Projeler</a></li>
            <li><a href="#iletisim" className="px-3 py-1.5 rounded-full text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-all">İletişim</a></li>
          </ul>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>
          <div className="flex gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Tema Değiştir"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </button>
            <Button onClick={() => setShowUIKit(true)} variant="ghost" size="sm">UI Kit</Button>
          </div>
        </nav>
      </header>

      <main className="animate-fadeInUp">
        {/* ── HERO ──────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 dark:from-slate-950 dark:to-indigo-950 text-white py-24 sm:py-32 flex flex-col items-center text-center px-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
          <h1 className="relative z-10 text-5xl sm:text-7xl font-black tracking-tight mb-4 animate-fadeInUp">
            Gizem Düşmez
          </h1>
          <p className="relative z-10 text-lg sm:text-xl text-purple-100/80 max-w-2xl font-light tracking-wide animate-fadeInUp delay-100">
            Frontend Geliştirici · React · TypeScript · Modern CSS
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 space-y-32">
          {/* ── HAKKIMDA ──────────────────────── */}
          <section id="hakkimda" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold text-primary dark:text-purple-400 mb-12 text-center sm:text-left">Hakkımda</h2>
            <div className="flex flex-col sm:flex-row gap-12 items-center">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/profil.jpg"
                  alt="Gizem Düsmez'in profil fotoğrafı"
                  width={220}
                  height={220}
                  className="relative rounded-full border-4 border-white dark:border-slate-800 shadow-xl object-cover animate-float"
                />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-1 rounded-full shadow-lg text-xs font-bold text-primary italic whitespace-nowrap">
                  Gizem Düsmez
                </span>
              </div>

              <div className="space-y-6 flex-1">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center sm:text-left">
                  Merhaba! Ben Gizem Düsmez, frontend odaklı bir geliştiriciyim.
                  React, TypeScript ve modern CSS konularında çalışıyorum.
                  Kullanıcı odaklı, erişilebilir ve performanslı arayüzler
                  tasarlamaktan keyif alıyorum.
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {['React', 'TypeScript', 'Vite', 'CSS Grid', 'Flexbox', 'HTML5', 'Git', 'Tailwind'].map(skill => (
                    <span key={skill} className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold ring-1 ring-primary/20 hover:scale-105 transition-transform">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── PROJELER ──────────────────────── */}
          <section id="projeler" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold text-primary dark:text-purple-400 mb-12 text-center sm:text-left">Projelerim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Portföy Sitesi"
                description="LAB-2 ve LAB-3 kapsamında geliştirilen, semantic HTML ve modern CSS design-token sistemi kullanan kişisel portföy sayfası."
                tags={['React', 'TypeScript', 'CSS']}
                img="/proje-1.png"
              />
              <ProjectCard
                title="Süperkapasitör Araştırma"
                description="Elsevier ve Scopus API'larından veri çeken, MongoDB'de saklayan ve analiz raporları sunan Python tabanlı araştırma pipeline'ı."
                tags={['Python', 'MongoDB', 'API']}
                img="/proje-2.png"
              />
              <ProjectCard
                title="AWS CI/CD Pipeline"
                description="CodePipeline, CodeBuild ve CodeDeploy ile kurulmuş otomatik test ve dağıtım sistemi. Blue/Green ve Canary dağıtım stratejilerini destekler."
                tags={['AWS', 'CI/CD', 'DevOps']}
                img="/proje-3.png"
              />
            </div>
          </section>

          {/* ── İLETİŞİM ──────────────────────── */}
          <section id="iletisim" className="scroll-mt-32 max-w-2xl mx-auto w-full group">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-primary dark:text-purple-400 mb-4 inline-block">İletişim</h2>
              <p className="text-slate-500">Bir mesaj bırakın, en kısa sürede dönüş yapayım.</p>
            </div>
            <form className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6" noValidate>
              <div className="grid gap-6">
                <Input label="Ad Soyad" placeholder="Adınız ve soyadınız" required />
                <Input label="E-posta" type="email" placeholder="ornek@email.com" required />
              </div>
              <Input label="Mesaj" placeholder="Mesajınızı buraya yazın..." required rows={4} as="textarea" />
              <Button type="submit" className="w-full sm:w-auto" size="lg">Gönder</Button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-slate-900 dark:bg-black py-16 text-center">
        <p className="text-slate-500 text-sm">© 2026 Gizem Düşmez. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  img: string;
}

function ProjectCard({ title, description, tags, img }: ProjectCardProps) {
  return (
    <article className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <span className="text-white text-xs font-bold uppercase tracking-widest">Görüntüle</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string) => (
            <span key={tag} className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-slate-500 tracking-tight uppercase">
              {tag}
            </span>
          ))}
        </div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-purple-400 group-hover:gap-3 transition-all">
          GitHub <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </article>
  )
}
