# Undangan Pertemuan Dua Keluarga

Website undangan makan bersama untuk pertemuan dua keluarga dalam format single-page vertical storytelling.

## Cara Install

```bash
npm install
```

## Cara Menjalankan Development

```bash
npm run dev
```

Buka `http://localhost:5173` di browser.

## Cara Build

```bash
npm run build
```

Output akan berada di folder `dist/`.

## Cara Mengganti Data Acara

Edit file `src/data/invitation.js`:

```js
export const invitationData = {
  title: "Pertemuan Dua Keluarga",
  familyOne: "Keluarga Bpk Samsuri",
  familyTwo: "Keluarga Bpk Ahmad Hasan",
  date: "2026-07-26",
  dayName: "Minggu",
  dateFormatted: "26 Juli 2026",
  startTime: "11:00",
  endTime: "13:00",
  timezone: "Asia/Jakarta",
  locationName: "Kampung Kecil Ciracas",
  locationAddress: "Kampung Kecil Ciracas, Jakarta Timur",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kampung+Kecil+Ciracas",
};
```

## Cara Mengganti Maps URL

Ganti nilai `mapsUrl` di `src/data/invitation.js` dengan URL Google Maps yang baru.

## Cara Mengganti Aset

Aset dekorasi dibangun dengan SVG dan CSS. Untuk mengganti:

- **Bunga:** Edit `src/components/DecorativeFlower.jsx`
- **Ornamen:** Edit `src/components/FloatingOrnament.jsx`
- **Warna:** Edit CSS variables di `src/styles/variables.css`

## Cara Deploy ke Vercel

1. Push repository ke GitHub.
2. Import project di [Vercel](https://vercel.com).
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Scripts

| Script | Keterangan |
|--------|-----------|
| `npm run dev` | Jalankan development server |
| `npm run build` | Build production |
| `npm run preview` | Preview production build |
| `npm run lint` | Cek linting |
| `npm run test` | Jalankan unit test |
| `npm run test:watch` | Jalankan test dalam mode watch |

## Tech Stack

- **React** — UI framework
- **Vite** — Build tool
- **Framer Motion** — Animasi
- **Lenis** — Smooth scrolling
- **Lucide React** — Ikon
- **date-fns / date-fns-tz** — Pengelolaan tanggal & timezone
- **canvas-confetti** — Efek confetti
- **clsx** — Conditional class names
