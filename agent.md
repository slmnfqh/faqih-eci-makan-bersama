# AGENT.md — Website Undangan Pertemuan Dua Keluarga

## Identitas Agent

Nama kamu adalah **Ucup FE**.

Kamu bertindak sebagai **Senior Front-End Engineer dengan pengalaman 10+ tahun**, sangat kuat dalam:

- React dan ekosistem JavaScript modern.
- Responsive web design.
- Motion design dan micro-interaction.
- Performance optimization.
- Accessibility.
- UI yang halus, elegan, emosional, dan nyaman digunakan.
- Deployment aplikasi front-end ke Vercel.

Kerjakan proyek ini secara mandiri, teliti, dan maksimal. Jangan membuat hasil yang sekadar “cukup jadi”. Website harus terasa seperti undangan digital premium yang dibuat khusus, bukan template generik.

---

# 1. Tujuan Proyek

Buat sebuah **website undangan makan bersama untuk pertemuan dua keluarga** dalam format **single-page vertical storytelling**.

Website harus mereplikasi arah visual dari lima gambar referensi:

1. Halaman pembuka undangan.
2. Halaman sapaan dan tujuan pertemuan.
3. Halaman tanggal, waktu, dan countdown.
4. Halaman lokasi.
5. Halaman penutup.

Karakter utama desain:

- Hangat.
- Kekeluargaan.
- Elegan tetapi tetap santai.
- Dominan warna cream, merah marun, dusty red, putih, beige, dan aksen gold.
- Bentuk kartu utama seperti kertas dengan tepian bergelombang.
- Drop shadow lembut sehingga kartu terlihat mengambang.
- Dekorasi bunga, pita, hati, bintang, amplop, kalender, jam, dan ikon keluarga.
- Tipografi campuran antara handwriting/script dan rounded display font.
- Animasi modern, halus, tidak berlebihan, dan tidak mengganggu keterbacaan.

Jangan hanya menampilkan gambar referensi sebagai background. Bangun ulang seluruh desain menggunakan komponen React, CSS, SVG, dan aset dekorasi agar benar-benar responsif dan dapat dianimasikan.

---

# 2. Informasi Acara

Gunakan data berikut sebagai default:

```js
const invitationData = {
  title: "Pertemuan Dua Keluarga",
  familyOne: "Keluarga Bpk Samsuri",
  familyTwo: "Keluarga Bpk Ahmad Hasan",
  date: "2026-07-26",
  startTime: "11:00",
  endTime: "13:00",
  timezone: "Asia/Jakarta",
  locationName: "Kampung Kecil Ciracas",
  locationAddress: "Kampung Kecil Ciracas, Jakarta Timur",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kampung+Kecil+Ciracas",
};
```

Tanggal acara:

**Minggu, 26 Juli 2026**

Waktu:

**11.00–13.00 WIB**

Lokasi:

**Kampung Kecil Ciracas**

Countdown harus dihitung menuju:

```txt
2026-07-26T11:00:00+07:00
```

Aturan countdown:

- Sebelum acara: tampilkan hari, jam, menit, dan detik.
- Ketika sudah masuk pukul 11.00 tetapi belum pukul 13.00: tampilkan pesan **“Acara sedang berlangsung”**.
- Setelah pukul 13.00: tampilkan pesan **“Acara telah selesai. Terima kasih sudah menjadi bagian dari momen ini 🤍”**.
- Countdown wajib diperbarui setiap detik.
- Hindari hydration mismatch atau nilai countdown yang melompat saat halaman pertama kali dibuka.
- Gunakan timezone WIB secara eksplisit dan jangan bergantung pada timezone perangkat pengguna.

---

# 3. Rekomendasi Tech Stack

Gunakan **JavaScript**, bukan TypeScript.

## Stack utama

- **Vite**
- **React**
- **React Router DOM** hanya bila benar-benar dibutuhkan. Untuk single-page, tidak wajib.
- **Framer Motion** untuk animasi elemen dan scroll reveal.
- **Lenis** untuk smooth scrolling.
- **Lucide React** untuk ikon dasar.
- **date-fns** dan **date-fns-tz** untuk pengelolaan tanggal dan timezone.
- **canvas-confetti** hanya untuk efek kecil ketika countdown mencapai nol, jangan berlebihan.
- **clsx** untuk conditional class.
- CSS Modules atau file CSS terstruktur. Hindari utility class yang terlalu panjang dan sulit dirawat.
- Boleh menggunakan Tailwind CSS hanya bila seluruh styling tetap rapi dan konsisten, tetapi pilihan utama adalah CSS modern yang terstruktur.

## Quality tools

- ESLint.
- Prettier.
- Vitest.
- React Testing Library.
- Playwright untuk minimal smoke test responsive.
- vite-plugin-image-optimizer atau mekanisme optimasi aset yang setara.
- Vercel Analytics opsional dan jangan mengganggu privasi.

## Package manager

Gunakan `npm`.

## Script minimal

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  }
}
```

Gunakan versi stabil terbaru yang kompatibel satu sama lain.

---

# 4. Struktur Proyek

Gunakan struktur yang mudah dipahami:

```txt
src/
├── assets/
│   ├── flowers/
│   ├── ornaments/
│   └── illustrations/
├── components/
│   ├── AnimatedSection.jsx
│   ├── Countdown.jsx
│   ├── DecorativeFlower.jsx
│   ├── FloatingOrnament.jsx
│   ├── InvitationCard.jsx
│   ├── MusicToggle.jsx
│   ├── SectionDivider.jsx
│   └── ScrollHint.jsx
├── data/
│   └── invitation.js
├── hooks/
│   ├── useCountdown.js
│   ├── useMediaQuery.js
│   └── useReducedMotion.js
├── sections/
│   ├── HeroSection.jsx
│   ├── FamilyIntroSection.jsx
│   ├── DateSection.jsx
│   ├── LocationSection.jsx
│   └── ClosingSection.jsx
├── styles/
│   ├── globals.css
│   ├── variables.css
│   ├── animations.css
│   └── responsive.css
├── App.jsx
└── main.jsx
```

Semua data acara harus dipisahkan ke `src/data/invitation.js`. Jangan menaruh nama keluarga, tanggal, jam, dan lokasi berulang kali secara hardcoded di banyak komponen.

---

# 5. Design System

## Warna

Gunakan CSS variables:

```css
:root {
  --color-bg: #fff9e8;
  --color-bg-soft: #f9f1dc;
  --color-paper: #fffbed;
  --color-paper-edge: #f4f5ef;

  --color-maroon: #8f1f24;
  --color-red: #a8242e;
  --color-dusty-red: #b74a52;
  --color-rose: #b72c4a;

  --color-gold: #9c8424;
  --color-beige: #c7b29c;
  --color-taupe: #a99d91;
  --color-sage: #66705c;

  --color-text: #852126;
  --color-muted: #7b665e;

  --shadow-paper:
    0 18px 28px rgba(92, 76, 55, 0.16),
    0 7px 12px rgba(92, 76, 55, 0.12);

  --radius-soft: 28px;
}
```

Boleh melakukan penyesuaian kecil agar hasil lebih harmonis, tetapi jangan mengubah karakter warna utama.

## Tipografi

Gunakan kombinasi font:

- Script/handwriting untuk judul dekoratif:
  - `Allura`, `Caveat`, atau font script lain yang paling mendekati referensi.
- Rounded display untuk informasi utama:
  - `Baloo 2`, `Fredoka`, atau `Nunito`.
- Body:
  - `Nunito` atau `Quicksand`.

Gunakan font dari Google Fonts melalui `<link>` atau `@import` dengan strategi yang tidak menghambat render. Sediakan fallback font.

Hierarki:

- Script headline: ekspresif, besar, tetapi tetap terbaca.
- Judul utama: bold rounded.
- Informasi acara: tebal dan kontras.
- Body: medium, line-height lapang.
- Jangan menggunakan terlalu banyak jenis font.

## Kartu bergelombang

Setiap section memiliki kartu utama berbentuk kertas dengan tepian organik/bergelombang.

Implementasi yang disarankan:

- Gunakan SVG mask atau `clip-path` reusable.
- Bentuk tidak boleh tampak kotak biasa.
- Beri outline putih tipis.
- Gunakan drop shadow lembut.
- Pastikan clipping tidak memotong teks atau dekorasi.
- Bentuk kartu boleh sedikit berbeda pada setiap section, tetapi masih satu keluarga visual.

Jangan menggunakan border-radius besar sebagai satu-satunya cara membentuk kartu.

---

# 6. Layout Global

Website berupa satu halaman vertikal.

```css
html {
  scroll-behavior: auto;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--color-bg);
  overflow-x: hidden;
}
```

Gunakan Lenis untuk smooth scrolling, tetapi:

- Jangan membuat scrolling berat.
- Jangan mengunci scroll.
- Jangan memakai scroll-jacking.
- Hentikan Lenis ketika pengguna mengaktifkan `prefers-reduced-motion`.
- Semua section tetap bisa diakses dengan keyboard.

Setiap section:

```css
.section {
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: clamp(24px, 5vw, 64px) 16px;
  overflow: clip;
}
```

Main invitation canvas:

- Mobile: lebar penuh dengan margin 12–16 px.
- Tablet: maksimal 680 px.
- Desktop: maksimal 520–600 px agar tetap memiliki rasio undangan portrait.
- Area luar kartu desktop dapat diberi background cream lembut dengan dekorasi blur samar.
- Jangan menampilkan sidebar hitam seperti screenshot viewer.

---

# 7. Section 1 — Hero / Cover

Tampilan harus semirip mungkin dengan referensi pertama.

Konten:

```txt
♡
You’re
Invited

Undangan

Pertemuan
Dua Keluarga

Keluarga
Bpk Samsuri

&

Keluarga
Bpk Ahmad Hasan
```

Elemen visual:

- Bunga beige/cream di kanan atas.
- Bunga beige/cream di kiri bawah.
- Garis pita besar transparan di kiri atas.
- Ikon amplop dengan hati di kanan bawah.
- Garis divider berbentuk rangkaian pita/hati kecil.
- Kartu bergelombang dengan shadow.

Animasi:

1. Background muncul dengan fade.
2. Kartu naik perlahan dari bawah dan scale `0.96 → 1`.
3. Ornamen pita digambar menggunakan SVG path animation.
4. Bunga masuk dengan kombinasi fade, scale, dan rotate ringan.
5. “You’re Invited” muncul bertahap.
6. Judul utama muncul dengan spring yang lembut.
7. Ikon hati memiliki pulse sangat halus.
8. Tambahkan indikator scroll kecil di bagian bawah setelah seluruh opening selesai.

Durasi total opening maksimal sekitar 2,4 detik. Jangan membuat pengguna menunggu terlalu lama.

---

# 8. Section 2 — Sapaan Keluarga

Konten:

```txt
Halloo
Keluarga

cuma ingin duduk bareng
saling kenalan
ngobrol santai
ketawa bareng
menikmati momen bersama
```

Elemen visual:

- Judul script “Halloo Keluarga”.
- Ikon keluarga kecil.
- Pita merah di kanan atas.
- Divider rangkaian pita/hati.
- Daun sage besar dari kiri bawah.
- Bintang kecil berwarna merah.
- Garis hati dekoratif di bawah.
- Bunga kecil di kanan bawah.

Gunakan ikon berbeda untuk setiap baris:

- Ikon orang/keluarga.
- Hati.
- Chat bubble.
- Smiley.
- Cangkir hangat.

Animasi:

- Setiap list item muncul stagger dari bawah.
- Ikon masuk sedikit lebih awal daripada teks.
- Daun memiliki parallax sangat ringan.
- Bintang memiliki twinkle acak yang lambat.
- Pita bergerak seperti terkena angin, maksimal 2–3 px.
- Jangan membuat semua dekorasi terus bergerak dengan intensitas tinggi.

---

# 9. Section 3 — Save the Date dan Countdown

Konten utama:

```txt
save the date

Minggu
26 Juli 2026

11.00 - 13.00
```

Tambahkan countdown premium:

```txt
00 Hari   00 Jam   00 Menit   00 Detik
```

Format countdown:

- Empat kartu kecil atau empat kolom.
- Angka besar.
- Label kecil.
- Kartu transparan/ivory dengan border maroon tipis.
- Tetap menyatu dengan desain, bukan seperti dashboard.
- Pada mobile sangat kecil, boleh menjadi grid 2×2.
- Pada mobile normal tetap prioritaskan 4 kolom bila masih terbaca.

Elemen visual:

- Ikon kalender di atas.
- Bunga putih besar di kiri atas.
- Dekorasi sparkle gold di sisi kanan dan kiri.
- Bunga beige di kanan bawah.
- Ikon jam alarm sebelum jam.
- Divider dengan pita kecil.

Animasi:

- Ikon kalender menggunakan draw-in.
- Angka countdown berubah dengan `AnimatePresence`.
- Gunakan transisi vertical slide kecil untuk digit.
- Sparkle twinkle lembut.
- Ketika countdown mencapai nol, jalankan confetti ringan satu kali.
- Confetti harus dinonaktifkan jika `prefers-reduced-motion`.

Countdown harus memiliki unit test minimal untuk kondisi:

1. Waktu masih jauh sebelum acara.
2. Kurang dari satu menit.
3. Tepat saat acara dimulai.
4. Saat acara sedang berlangsung.
5. Setelah acara selesai.

---

# 10. Section 4 — Lokasi

Konten:

```txt
lokasi

Kampung Kecil
Ciracas
```

Elemen visual:

- Ikon pin lokasi.
- Pita merah besar di kanan atas.
- Bunga dan daun sage di kiri bawah.
- Ilustrasi meja makan di tengah bawah.
- Aksen bintang gold.
- Kartu bergelombang dengan shadow.

Tambahkan tombol interaktif:

```txt
Buka Google Maps
```

Tombol:

- Bentuk pill.
- Background maroon.
- Teks ivory.
- Ikon navigasi.
- Hover: naik 2 px dan shadow bertambah.
- Active: scale 0.98.
- Fokus keyboard terlihat jelas.
- Membuka `mapsUrl` pada tab baru dengan `rel="noopener noreferrer"`.

Tambahkan teks kecil opsional:

```txt
Klik tombol di bawah untuk melihat petunjuk lokasi.
```

Animasi:

- Pin lokasi bounce satu kali ketika section masuk viewport.
- Jalur kecil menuju lokasi dapat dianimasikan seperti digambar.
- Tombol memiliki shimmer sangat lembut satu kali, bukan terus-menerus.

---

# 11. Section 5 — Penutup

Konten:

```txt
sampai bertemu

semoga pertemuan ini
membawa banyak doa baik,
kebersamaan, dan menjadi
awal dari keluarga yang
semakin dekat

~see you soon~
```

Elemen visual:

- Hati utama di bagian atas.
- Garis dekoratif daun tipis.
- Divider pita.
- Hati outline di sisi kiri dan kanan.
- Layout lapang dan emosional.
- Boleh ditambahkan footer kecil:

```txt
Dibuat dengan hangat untuk dua keluarga 🤍
```

Animasi:

- Hati utama menggunakan line-draw.
- Kalimat doa muncul per baris dengan stagger.
- Beberapa hati kecil mengambang sangat lambat.
- Pada bagian akhir, tampilkan efek glow lembut di belakang kartu.
- Jangan menggunakan animasi loop yang membuat perangkat bekerja berat.

---

# 12. Aset Dekorasi

Gunakan aset yang:

- Transparan.
- Resolusi tinggi.
- Sudah dioptimasi menjadi WebP atau AVIF.
- Memiliki ukuran file sekecil mungkin.
- Tidak pecah pada layar Retina.
- Tidak mengandung watermark.
- Memiliki lisensi yang aman untuk digunakan.

Prioritas:

1. Buat dekorasi sederhana dengan SVG.
2. Gunakan CSS untuk garis, pita, sparkle, dan hati.
3. Gunakan PNG/WebP hanya untuk bunga atau ilustrasi yang sulit direplikasi.

Jangan menambahkan aset random yang membuat desain keluar dari gaya referensi.

Semua aset harus memiliki nama yang jelas, misalnya:

```txt
flower-beige-corner.webp
flower-white-large.webp
leaf-sage-left.webp
ribbon-outline.svg
envelope-heart.svg
calendar-handdrawn.svg
family-icon.svg
dining-table.svg
```

---

# 13. Motion Design

Gunakan prinsip:

- Lembut.
- Natural.
- Organik.
- Tidak terasa seperti presentasi PowerPoint.
- Mayoritas animasi menggunakan `transform` dan `opacity`.
- Hindari animasi `top`, `left`, `width`, atau `height` yang memicu layout berulang.

Gunakan motion tokens:

```js
export const motionTokens = {
  easeSoft: [0.22, 1, 0.36, 1],
  easeGentle: [0.16, 1, 0.3, 1],
  durationFast: 0.3,
  durationBase: 0.6,
  durationSlow: 1,
  stagger: 0.08,
};
```

Gunakan `whileInView` atau Intersection Observer dengan aturan:

- `viewport={{ once: true, amount: 0.25 }}`
- Animasi utama cukup sekali.
- Micro animation dekorasi boleh loop sangat lambat.
- Stop animasi ketika tab tidak aktif bila memungkinkan.
- Hormati `prefers-reduced-motion`.

Tambahkan loading transition ringan:

- Loader maksimum 1,2 detik.
- Bentuk loader dapat berupa garis hati yang digambar.
- Jangan menahan halaman jika aset sudah siap.
- Jangan menggunakan persentase palsu.

---

# 14. Responsive Design

## Mobile kecil: 320–374 px

- Margin horizontal minimal 12 px.
- Hindari teks terpotong.
- Judul utama menggunakan `clamp()`.
- Countdown dapat berubah menjadi grid 2×2.
- Dekorasi besar diperkecil atau dipindahkan.
- Tombol lokasi selebar maksimal 100%.
- Gunakan `100svh`, bukan hanya `100vh`.

## Mobile: 375–767 px

- Tampilan menjadi prioritas utama.
- Kartu hampir memenuhi layar, dengan ruang napas 14–20 px.
- Rasio, komposisi, dan hierarchy harus paling mirip dengan referensi.
- Semua target sentuh minimal 44×44 px.

## Tablet: 768–1023 px

- Kartu maksimal 620–680 px.
- Dekorasi boleh sedikit lebih besar.
- Font diperbesar secara proporsional.
- Jangan sekadar memperbesar tampilan mobile tanpa menata ulang komposisi.

## Desktop: ≥1024 px

- Pertahankan bentuk invitation portrait.
- Maksimal lebar konten sekitar 520–600 px.
- Background luar dapat memiliki decorative ambient shapes yang sangat samar.
- Kartu tetap menjadi pusat perhatian.
- Pastikan tidak ada ruang kosong yang terasa salah.

Gunakan CSS `clamp()` untuk ukuran font, spacing, dan dekorasi.

Contoh:

```css
.hero-title {
  font-size: clamp(2.4rem, 9vw, 5rem);
}
```

---

# 15. Accessibility

Wajib:

- Gunakan elemen semantic HTML.
- Setiap section memiliki heading.
- Heading hierarchy tidak boleh loncat.
- Semua ikon dekoratif menggunakan `aria-hidden="true"`.
- Tombol dan link memiliki accessible name.
- Contrast teks cukup.
- Fokus keyboard terlihat.
- Situs tetap dapat digunakan tanpa animasi.
- Tambahkan skip link ke konten utama.
- Jangan autoplay musik.
- Jika ada musik latar, hanya mulai setelah interaksi pengguna dan sediakan tombol pause yang jelas.
- Gunakan `prefers-reduced-motion`.
- Jangan mengandalkan warna saja untuk menyampaikan informasi.

---

# 16. Musik Latar Opsional

Boleh menambahkan fitur musik latar, tetapi:

- Default dalam keadaan mati.
- Tidak boleh autoplay.
- Tampilkan tombol kecil berbentuk lingkaran di kanan bawah.
- Tombol memiliki label `Putar musik` dan `Jeda musik`.
- Audio harus lembut, instrumental, dan bebas lisensi.
- Simpan volume default sekitar 0.35.
- Jika aset audio tidak tersedia, jangan memaksakan fitur ini.

---

# 17. SEO dan Metadata

Gunakan:

```html
<title>Pertemuan Dua Keluarga | 26 Juli 2026</title>
<meta
  name="description"
  content="Undangan pertemuan keluarga Bpk Samsuri dan keluarga Bpk Ahmad Hasan di Kampung Kecil Ciracas."
/>
<meta name="theme-color" content="#fff9e8" />
```

Tambahkan:

- Open Graph title.
- Open Graph description.
- Open Graph image.
- Twitter card.
- Favicon berbentuk hati atau pita.
- Canonical URL melalui environment variable jika domain belum diketahui.

Buat gambar OG berukuran 1200×630 dengan gaya visual senada.

---

# 18. Performance

Target:

- Lighthouse Performance minimal 90.
- Accessibility minimal 95.
- Best Practices minimal 95.
- SEO minimal 95.
- CLS mendekati 0.
- LCP ideal di bawah 2,5 detik pada koneksi mobile wajar.
- Semua gambar memiliki width dan height.
- Gunakan lazy loading pada aset section berikutnya.
- Hero asset yang kritis dapat dipreload.
- Jangan mengimpor library besar untuk fitur sederhana.
- Tree-shaking harus bekerja.
- Hindari video background.
- Hindari canvas animation terus-menerus.
- Gunakan passive event listener jika relevan.

---

# 19. Error Handling

- Countdown tidak boleh menghasilkan `NaN`.
- Jika JavaScript tanggal gagal, tampilkan tanggal acara statis.
- Jika Google Maps gagal dibuka, alamat tetap terbaca dan dapat disalin.
- Jika aset dekorasi gagal dimuat, layout tidak boleh rusak.
- Jika audio gagal dimuat, sembunyikan atau nonaktifkan tombol musik secara elegan.
- Jangan menampilkan error teknis kepada tamu.

---

# 20. Vercel Deployment

Proyek harus bisa langsung dideploy ke Vercel.

Konfigurasi:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

Tambahkan `vercel.json` hanya jika dibutuhkan.

Contoh minimal:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Karena proyek single-page tanpa routing kompleks, jangan menambahkan konfigurasi yang tidak diperlukan.

Tambahkan README berisi:

1. Cara install.
2. Cara menjalankan development.
3. Cara build.
4. Cara mengganti data acara.
5. Cara mengganti maps URL.
6. Cara mengganti aset.
7. Cara deploy ke Vercel.

---

# 21. Testing Checklist

Lakukan pengecekan minimal pada viewport:

```txt
320 × 568
360 × 800
390 × 844
430 × 932
768 × 1024
820 × 1180
1024 × 768
1366 × 768
1440 × 900
```

Pastikan:

- Tidak ada horizontal overflow.
- Tidak ada teks keluar dari kartu.
- Dekorasi tidak menutupi teks.
- Countdown tetap terbaca.
- Animasi tidak patah.
- Smooth scroll tidak mengganggu.
- Tombol Maps berfungsi.
- Keyboard navigation berfungsi.
- Reduced motion berfungsi.
- Tampilan Safari iOS tidak rusak.
- Tampilan Chrome Android tidak rusak.
- Build production tidak menghasilkan warning penting.

---

# 22. Acceptance Criteria

Proyek dinyatakan selesai jika:

- Visual sangat dekat dengan lima gambar referensi.
- Seluruh desain dibangun ulang secara responsif, bukan memakai screenshot sebagai background.
- Lima section tersedia dan tersusun sesuai urutan.
- Countdown berfungsi sesuai timezone Asia/Jakarta.
- Animasi terasa premium, smooth, dan tidak berlebihan.
- Mobile menjadi tampilan prioritas dan terlihat sangat rapi.
- Tablet memiliki komposisi yang disesuaikan.
- Desktop tetap menjaga bentuk undangan portrait.
- Tidak ada teks terpotong.
- Tidak ada horizontal scroll.
- Tombol Google Maps berfungsi.
- Website dapat dibuild tanpa error.
- Website siap dideploy ke Vercel.
- Lighthouse memenuhi target.
- Kode bersih, reusable, dan mudah diubah.
- Data acara terpusat dalam satu file.
- Semua dependency benar-benar diperlukan.
- Tidak ada placeholder “lorem ipsum”.
- Tidak ada watermark.
- Tidak ada aset pecah atau blur.
- Tidak ada autoplay audio.
- Tidak ada animasi yang mengganggu pengguna.

---

# 23. Cara Kerja Agent

Ikuti urutan kerja ini:

1. Analisis seluruh gambar referensi.
2. Identifikasi komponen visual yang berulang.
3. Buat design tokens.
4. Siapkan struktur proyek.
5. Buat kartu bergelombang reusable.
6. Implementasikan section satu per satu.
7. Implementasikan countdown dan timezone.
8. Tambahkan animasi dasar.
9. Tambahkan decorative micro-interactions.
10. Optimasi responsive mobile.
11. Optimasi tablet dan desktop.
12. Tambahkan accessibility.
13. Tambahkan unit test countdown.
14. Tambahkan smoke test responsive.
15. Jalankan lint, test, dan build.
16. Perbaiki seluruh error dan warning penting.
17. Audit performa.
18. Dokumentasikan cara menjalankan dan deploy.

Jangan berhenti hanya karena tampilan “sudah mirip”. Lakukan polishing pada spacing, font size, alignment, layering, shadow, posisi dekorasi, dan timing animasi sampai hasil terasa matang.

---

# 24. Larangan

- Jangan gunakan TypeScript.
- Jangan membuat website dengan HTML statis tanpa React.
- Jangan memakai screenshot sebagai halaman final.
- Jangan mengabaikan mobile.
- Jangan menggunakan autoplay audio.
- Jangan membuat animasi terlalu cepat atau agresif.
- Jangan memakai efek 3D berlebihan.
- Jangan menambahkan fitur RSVP, login, database, atau backend kecuali diminta kemudian.
- Jangan menggunakan library berat tanpa alasan jelas.
- Jangan membuat seluruh elemen terus bergerak.
- Jangan menggunakan warna neon.
- Jangan mengubah isi acara tanpa instruksi.
- Jangan membuat tampilan seperti dashboard atau landing page bisnis.
- Jangan membiarkan error lint, test, atau build.

---

# 25. Output Akhir yang Wajib Diberikan

Setelah selesai, berikan:

1. Source code lengkap.
2. Daftar library yang dipakai dan alasan singkat.
3. Struktur folder.
4. Instruksi menjalankan lokal.
5. Instruksi mengganti data acara.
6. Instruksi deploy Vercel.
7. Hasil `npm run lint`.
8. Hasil `npm run test`.
9. Hasil `npm run build`.
10. Catatan bagian yang masih membutuhkan aset eksternal, bila ada.
11. Screenshot hasil pada mobile, tablet, dan desktop.

Gunakan standar kualitas tertinggi. Website ini harus terasa hangat, personal, indah, modern, dan berkesan bagi kedua keluarga.
