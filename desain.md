# Dokumen Desain — Business To Berkah

Panduan desain untuk website **Business To Berkah**. Dokumen ini menjadi acuan konsistensi visual, interaksi, dan struktur komponen.

---

## 1. Ringkasan

| Item | Nilai |
|------|-------|
| **Nama** | Business To Berkah |
| **Tagline** | Solusi Digital Untuk Bisnis Anda |
| **Target** | UMKM Indonesia |
| **Stack** | Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion |
| **Bahasa** | Indonesia (`lang="id"`) |
| **Font** | Plus Jakarta Sans (display & body), IBM Plex Mono (mono) |

---

## 2. Palet Warna

Diturunkan dari logo. Dua warna inti: **Teal** (emerald) dan **Brand** (cyan blue).

### Brand (Cyan Blue) — CTA & aksen utama

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `brand` | `#13A6E8` | CTA, link, aksen |
| `brand-dark` | `#0B7FB8` | Hover state CTA |
| `brand-light` | `#38BDD8` | Aksen pada dark bg |
| `brand-soft` | `#E8F6FE` | Background ikon, badge |
| `brand-muted` | `#B8E4F5` | Dekorasi halus |

### Teal (Emerald) — Gradient start

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `teal` | `#16E0B3` | Gradient start, accent |
| `teal-dark` | `#0FB890` | Teks pada bg teal-soft |
| `teal-light` | `#5BEDD0` | Aksen pada dark bg |
| `teal-soft` | `#E0FBF5` | Badge, background |

### Ink (Deep Navy) — Teks & dark section

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `ink` | `#16142E` | Body text, dark section bg |
| `ink-muted` | `#4A4769` | Secondary text |
| `ink-light` | `#8B88A3` | Tertiary text, caption |

### Surface — Background

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `surface` | `#FFFFFF` | Default bg |
| `surface-alt` | `#F8F9FC` | Alternating section bg |
| `surface-soft` | `#F1F2F8` | Card decorative element |

---

## 3. Gradient

| Token / Class | Value | Penggunaan |
|---------------|-------|------------|
| `bg-gradient-brand` | `linear-gradient(135deg, #16E0B3 0%, #13A6E8 100%)` | CTA button, ikon, accent bar |
| `bg-gradient-brand-soft` | `linear-gradient(135deg, rgba(22,224,179,0.08) 0%, rgba(19,166,232,0.08) 100%)` | Ikon bg default |
| `bg-gradient-navy` | `linear-gradient(135deg, #16142E 0%, #1E1B3A 100%)` | Dark section bg (Services, Testimonials) |
| `.text-gradient` | `bg-gradient-to-r from-teal to-brand bg-clip-text text-transparent` | Highlight kata pada heading |
| `.text-gradient-shine` | Gradient teal↔brand dengan animasi `shine` 3s | Hero headline accent |
| `.divider-gradient` | `linear-gradient(90deg, transparent, #16E0B3, #13A6E8, transparent)` | Pemisah antar section |

---

## 4. Tipografi

### Font Family

```css
--font-jakarta: "Plus Jakarta Sans"   /* display & body */
--font-plex-mono: "IBM Plex Mono"      /* mono / code */
```

- `font-display` → Plus Jakarta Sans (h1, h2, h3) dengan `tracking-tight`
- `font-body` → Plus Jakarta Sans (default body)
- `font-mono` → IBM Plex Mono

### Skala Tipografi

| Elemen | Class | Ukuran |
|--------|-------|--------|
| Hero h1 | `text-4xl md:text-5xl lg:text-[3.5rem]` | 36–56px, `font-extrabold`, `leading-[1.1]` |
| Section h2 | `text-3xl md:text-4xl` | 30–36px, `font-extrabold` |
| Card h3 | `text-lg` / `text-xl` | 18–20px, `font-bold` |
| Eyebrow label | `text-sm` | 14px, `font-semibold`, uppercase optional |
| Body | `text-sm` / `text-base` | 14–16px, `leading-relaxed` |
| Caption | `text-xs` | 12px, `text-ink-muted` / `text-white/50` |

### Weight

`400` (regular) · `500` (medium) · `600` (semibold) · `700` (bold) · `800` (extrabold)

---

## 5. Spacing & Layout

### Container

- Max width: `max-w-6xl` (1152px) untuk section utama
- Max width: `max-w-3xl` (768px) untuk section sempit (FAQ)
- Horizontal padding: `px-6` (24px)

### Section padding

- Vertical: `py-20` (mobile) / `py-28` (desktop) — `md:py-28`

### Grid

- 2 kolom: `lg:grid-cols-2` — Services, Advantages
- 3 kolom: `md:grid-cols-3` — Testimonials, Pricing
- 4 kolom: `lg:grid-cols-4` — Portfolio bento
- Gap: `gap-5` (cards) / `gap-6`–`gap-8` (large cards)

### Alternating section background

Section background bergantian `bg-white` dan `bg-surface-alt` untuk ritme visual:

| Section | Background |
|---------|-----------|
| ActivityMarquee | `bg-slate-50/80` |
| Hero | `bg-white` + blob |
| Advantages | `bg-surface-alt` + animasi |
| Portfolio | `bg-surface-alt` → `bg-white` (bento card) |
| Pricing | `bg-white` |
| Services | `bg-gradient-navy` (dark) |
| FAQ | `bg-surface-alt` + animasi |
| Testimonials | `bg-gradient-navy` (dark) |
| Contact | `bg-gradient-brand` (full color) |
| Footer | dark |

---

## 6. Shadow & Border Radius

### Shadow

| Token | Value | Penggunaan |
|-------|-------|------------|
| `shadow-soft` | `0 4px 24px -4px rgba(22, 20, 46, 0.06)` | Card default |
| `shadow-card` | `0 20px 60px -15px rgba(22, 20, 46, 0.12)` | Card hover, floating element |
| `shadow-glow` | `0 0 40px -8px rgba(19, 166, 232, 0.35)` | Ikon brand, CTA hover |
| `shadow-glow-teal` | `0 0 40px -8px rgba(22, 224, 179, 0.35)` | Teal accent glow |

### Border Radius

| Class | Value | Penggunaan |
|-------|-------|------------|
| `rounded-full` | 9999px | Button, badge, avatar, FAB |
| `rounded-2xl` | 1rem | Ikon container, small card |
| `rounded-3xl` | 1.5rem | Card utama |
| `rounded-[1.75rem]` | 1.75rem | Large card (Advantages, Services) |
| `rounded-[2rem]` / `4xl` | 2rem | Hero image, carousel |

---

## 7. Komponen Utama

### Button

**Primary (gradient)**
```tsx
<a className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105">
```

**Secondary (outline)**
```tsx
<a className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand">
```

**Ghost link**
```tsx
<a className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3">
```

### Card

```tsx
<motion.article className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card">
```

Pola card standar:
- `group` untuk hover child elements
- `rounded-3xl` + `shadow-soft` → `shadow-card` on hover
- `-translate-y-1.5` lift effect
- Gradient glow blob (`bg-gradient-brand opacity-0 blur-2xl group-hover:opacity-10`)
- Top gradient bar (scaleX origin-left on hover)

### Badge / Pill

```tsx
<span className="rounded-full bg-teal-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-dark">
```

### Icon Container

```tsx
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
```

### Eyebrow + Heading

```tsx
<span className="text-sm font-semibold text-brand">KEUNGGULAN</span>
<h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
  Judul <span className="text-gradient">Highlight</span>
</h2>
<p className="mt-3 text-ink-muted">Deskripsi singkat.</p>
```

---

## 8. Animasi & Interaksi

### Library

- **Framer Motion** untuk semua animasi (scroll reveal, hover, layout)
- **CSS keyframes** untuk marquee, shine, pulse

### Scroll Reveal (standard)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.4, delay: i * 0.08 }}
>
```

- `once: true` — animasi sekali, tidak repeat
- Stagger delay: `i * 0.08` – `i * 0.15`
- Margin: `-30px` / `-50px` (trigger sebelum full visible)

### Hover Pattern

| Element | Effect |
|---------|--------|
| Card | `hover:-translate-y-1.5` + shadow upgrade |
| Icon | `group-hover:scale-110` + bg change |
| Button | `whileHover={{ scale: 1.05 }}` / `hover:scale-105` |
| Image | `group-hover:scale-110` (700ms) |
| Arrow link | `hover:gap-3` (panah geser) |
| Top bar | `scale-x-0 → group-hover:scale-x-100` origin-left |

### Background Animasi (signature pattern)

Diterapkan di: **Advantages, Portfolio, FAQ, Testimonials, Contact**

Empat lapis animasi background:

**1. Mesh blobs (4 buah)**
```tsx
const blobVariants = {
  animate: (i) => ({
    x: [0, 30 * (i % 2 ? -1 : 1), 0],
    y: [0, -25 * (i % 2 ? 1 : -1), 0],
    scale: [1, 1.15, 1],
    transition: { duration: 12 + i * 3, repeat: Infinity, ease: "easeInOut" },
  }),
};
// Class: bg-teal/10-15 atau bg-brand/10-15, blur-3xl, rounded-full
```

**2. Geometric shapes (4 buah, rotate 360°)**
```tsx
const shapeVariants = {
  animate: (i) => ({
    rotate: [0, 360],
    transition: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
  }),
};
// Bentuk: ring (border circle), square (rotate-45), dashed circle, triangle (SVG)
// Warna: border-brand/20 atau border-teal/20
```

**3. Floating dots & plus signs (6 dots + 3 plus)**
```tsx
const floatVariants = {
  animate: (i) => ({
    y: [0, -18, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};
```

**4. Grid pattern overlay**
```tsx
<div style={{
  backgroundImage: "linear-gradient(#13A6E8 1px, transparent 1px), linear-gradient(90deg, #13A6E8 1px, transparent 1px)",
  backgroundSize: "48px 48px",
}} className="absolute inset-0 opacity-[0.04]" />
```

### Marquee

```css
.marquee-track {
  animation: marquee 24s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;  /* pause on hover */
}
```

Digunakan di: ActivityMarquee (report ticker), Testimonials mobile (horizontal scroll).

### Pulse

```tsx
<span className="flex h-2 w-2 rounded-full bg-white">
  <span className="h-full w-full animate-ping rounded-full bg-white opacity-75" />
</span>
```

Digunakan di: Hero badge, Contact badge, FloatingWhatsApp.

### Carousel (Advantages)

- Auto-rotate setiap 3.5 detik via `setInterval`
- `AnimatePresence mode="wait"` untuk crossfade + scale
- Indicator dots: aktif `w-6 bg-white`, inactive `w-1.5 bg-white/40`
- Klik dot untuk navigasi manual

### FloatingWhatsApp

- Muncul setelah scroll > 400px
- FAB pulse ring (`animate-ping`)
- Toggle: icon WhatsApp ↔ `×` dengan rotate
- Chat popup ala WhatsApp (header `#075E54`, body `#ECE5DD`)

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

Semua animasi dihentikan untuk user yang prefer reduced motion.

---

## 9. Layout Responsif

### Breakpoint

| Prefix | Min width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |

### Pola responsif per komponen

| Komponen | Mobile | Tablet (`sm`) | Desktop (`lg`) |
|----------|--------|---------------|----------------|
| Hero | 1 kolom stack | 1 kolom | 2 kolom (copy + visual) |
| Advantages | Stack | 2 kolom kartu | 2 kolom (carousel + 2×3 grid) |
| Services | Stack | Stack | 2 kolom |
| Portfolio | 1 kolom | 2 kolom bento | 4 kolom bento (6 item) |
| Pricing | 1 kolom | 2 kolom | 4 kolom |
| FAQ | Stack | Stack | 2 kolom (sticky header + list) |
| Testimonials | Marquee horizontal | Marquee | 3 kolom grid |
| Contact | Stack center | Stack center | Stack center (max-w-3xl) |

### Sticky pattern

Digunakan di: Advantages (carousel), FAQ (header+CTA) — `lg:sticky lg:top-24`

---

## 10. Struktur Komponen

```
src/
├── app/
│   ├── layout.tsx        # Root layout (font, metadata)
│   ├── page.tsx          # Halaman utama (compose semua section)
│   └── globals.css       # Global styles & utility classes
├── components/
│   ├── Header.tsx              # Navbar
│   ├── Hero.tsx                # Hero section + floating badges
│   ├── ActivityMarquee.tsx     # Report ticker (marquee)
│   ├── Advantages.tsx          # 6 keunggulan + carousel
│   ├── Services.tsx            # 2 layanan (dark section)
│   ├── Pricing.tsx             # Web + POS pricing
│   ├── Portfolio.tsx           # Bento grid 6 gambar
│   ├── FAQ.tsx                 # Accordion 2-kolom
│   ├── Testimonials.tsx        # Testimoni + marquee mobile
│   ├── Contact.tsx             # CTA section (gradient bg)
│   ├── Footer.tsx              # Footer
│   └── FloatingWhatsApp.tsx    # FAB WhatsApp
├── lib/
│   └── content.ts        # Semua konten data (advantages, services, pricing, dll)
└── tailwind.config.ts    # Konfigurasi design token
```

### Urutan section (page.tsx)

```
ActivityMarquee → Header → Hero → Advantages → Portfolio
→ Pricing → Services → FAQ → Testimonials → Contact → Footer
→ FloatingWhatsApp (fixed overlay)
```

---

## 11. Accessibility

- `scroll-behavior: smooth` pada `:root`
- `overflow-x: hidden` pada body (cegah horizontal scroll dari animasi)
- Focus visible: `outline: 2px solid #13A6E8; outline-offset: 3px`
- `aria-hidden` pada semua elemen dekoratif (blob, shape, dot)
- `aria-label` pada icon-only button (carousel dots, FAB)
- `loading="lazy"` pada gambar non-critical
- `prefers-reduced-motion` dihormati
- Semantic HTML: `<section>`, `<article>`, `<main>`, `<nav>`

---

## 12. Konten Data

Semua konten disimpan di `src/lib/content.ts`:

| Export | Tipe | Jumlah |
|--------|------|--------|
| `advantages` | Array | 6 item |
| `services` | Array | 2 item |
| `webPricing` | Array | 4 paket |
| `posPricing` | Array | 2 paket |
| `portfolio` | Array | 6 item |
| `faqs` | Array | 5 item |
| `testimonials` | Array | 3 item |
| `contact` | Object | whatsapp, email, instagram |

### Kontak

```
WhatsApp : 62895411828671
Email    : admin@businesstoberkah.com
Instagram: @businesstoberkah
```

---

## 13. Pola Desain Khas

### Signature elements

1. **Gradient text** — `.text-gradient` pada 1-2 kata kunci per heading
2. **Gradient icon container** — `bg-gradient-brand` rounded square dengan `shadow-glow`
3. **Top gradient bar** — garis `bg-gradient-brand` muncul scaleX dari kiri saat card hover
4. **Floating badge** — card kecil absolute positioned dengan animasi float loop
5. **Animated background** — 4 lapis (blob + shape + dot + grid) di section warna terang
6. **Glassmorphism** — `bg-white/5 backdrop-blur-sm` pada dark section card
7. **Eyebrow label** — teks uppercase kecil `text-brand` di atas heading

### Hover state checklist

Setiap card interaktif harus punya minimal:
- [ ] Lift effect (`-translate-y-1.5` atau `y: -8`)
- [ ] Shadow upgrade (`shadow-soft` → `shadow-card`)
- [ ] Image zoom (jika ada gambar)
- [ ] Top gradient bar atau glow blob
- [ ] Icon scale atau color change

---

*Dokumen ini hidup bersama kode. Update saat ada perubahan desain signifikan.*
