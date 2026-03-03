# CSS Kararları — LAB-3

## 1. Breakpoint Seçimi

**640 px (tablet)** ve **1024 px (masaüstü)** değerleri seçildi.
640 px, bir tablet yatay ekranının alt sınırında içeriğin yan yana dizilimine
izin verdiği noktadır; "about" bölümü bu kırılımda tek sütundan yatay düzene geçer.
1024 px'de masaüstü görünümü devreye girer: ana içerik alanı `max-width: 1200px`
ile sınırlandırılır ve proje grid'i kesinlikle 3 sütuna sabitlenir.
Mobile-first stratejisine uygun olarak **yalnızca `min-width`** kullanıldı.

---

## 2. Layout Tercihleri

**Header için Flexbox:** Header, logonun sola, navigasyonun sağa hizalandığı
tek boyutlu bir satır düzenidir; bu nedenle Flexbox en doğru seçimdir.
Mobilde `flex-direction: column` ile dikey yığın yapısına geçer.

**Proje kartları için Grid:** Kartlar iki boyutlu bir tablo düzeni gerektirir
(satır yükseklikleri eşit, sütun sayısı viewport'a göre değişken).
CSS Grid'in `auto-fit` + `minmax(280px, 1fr)` kombinasyonu, sütun sayısını
JavaScript'siz otomatik olarak belirler. **`auto-fit`** tercih edildi;
`auto-fill`'den farklı olarak boş sütun bırakmaz, kartlar tüm genişliği doldurur.

---

## 3. Design Tokens

**Renk paleti:** `#0f172a` (slate-900) arka plan ile `#6366f1` (indigo-500)
birincil renk, modern koyu-mod portföy tasarımları için standart kontrast oranları
sağlar (WCAG AA uyumlu). Accent olarak cyan (`#06b6d4`) kullanıldı.

**Spacing skalası:** 8 px tabanlı bir sistem kuruldu (`--space-xs: 0.25rem` …
`--space-3xl: 4.5rem`). Bu ölçek, tüm margin/padding değerlerinin tutarlı
görsel ritim oluşturmasını garantiler.

**Clamp ayarları:** Her tipografi token'ı `clamp(MIN, VW_DEĞERİ, MAX)` ile
tanımlandı. Minimum değer küçük ekranları, vw tabanlı orta değer akışkan büyümeyi,
maksimum değer ise büyük ekranlarda aşırı büyümeyi önler.
Örnek: `--text-3xl: clamp(1.75rem, 5vw, 2.5rem)` → 28–40 px arası akışkan.

---

## 4. Responsive Stratejiler

**Mobile-first uygulaması:** Medya sorgusu olmayan stiller mobil için geçerlidir
(0–639 px); tablet ve masaüstü kuralları sırasıyla `@media (min-width: 640px)`
ve `@media (min-width: 1024px)` blokları ile eklenir.

**Değişen elemanlar:**
- **Nav:** Mobilde tam genişlikte dikey yığın, tablet+ yatay sıra.
- **About bölümü:** Mobilde tek sütun ortalanmış, tablet+ yatay (row) soldaki foto, sağda metin.
- **Submit butonu:** Mobilde `width: 100%`, tablet+ `width: auto`.
- **Section padding:** Viewport büyüdükçe artımlı genişler (`md → xl → 3xl`).
- **Project grid:** `auto-fit` ile 1–2 sütun arasında otomatik, masaüstünde `repeat(3, 1fr)` ile 3 sütun sabitlenir.

**Görsel yönetimi:** Proje kartı görselleri `height: 200px; object-fit: cover`
ile sabit yükseklikte kırpılır; genel `img { max-width: 100%; height: auto }`
reset'i diğer tüm görsellerin responsive kalmasını sağlar.
Profil fotoğrafı `border-radius: 9999px` ile dairesel, 160×160 px sabit boyutludur.

---

## 5. Git İş Akışı

```bash
# Yeni branch
git checkout -b feature/responsive-layout

# Commit 1 — Design tokens
git add src/styles/tokens.css
git commit -m "feat: add CSS design tokens (tokens.css)"

# Commit 2 — Responsive nav
git add src/styles/layout.css src/App.css src/index.css
git commit -m "feat: add responsive navigation with Flexbox"

# Commit 3 — Project grid
git add src/App.tsx
git commit -m "feat: add project card grid layout with skill-tags toolbar"

# Commit 4 — 3-breakpoint responsive
git add src/styles/layout.css
git commit -m "feat: implement 3-breakpoint responsive design (mobile/tablet/desktop)"

# Commit 5 — Screenshots (ekran görüntülerini aldıktan sonra)
git add screenshots/
git commit -m "docs: add mobile/tablet/desktop screenshots"

# Commit 6 — CSS kararları dökümanı
git add CSS-KARARLARI.md
git commit -m "docs: add CSS decisions documentation"

# Push
git push -u origin feature/responsive-layout
```

---

## 6. Screenshot İsimlendirme

Ekran görüntüleri `screenshots/` klasöründe şu isimlendirmeyle yer almalıdır:

| Dosya | Viewport |
|-------|----------|
| `screenshot-mobile.png`  | 375 px genişlik  |
| `screenshot-tablet.png`  | 768 px genişlik  |
| `screenshot-desktop.png` | 1280 px genişlik |
