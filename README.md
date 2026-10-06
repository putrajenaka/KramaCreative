# Krama Creative — Company Profile Website

Website company profile Krama Creative. Statis (HTML + CSS + JavaScript biasa), tanpa build step, tanpa dependency. Bisa langsung di-deploy ke Vercel.

Gaya: hitam-putih interaktif dengan sedikit gradient emas. Referensi struktur: leoburnett.com.

## Struktur

```
.
├── index.html          # Semua markup, dibagi per section dengan banner komentar
├── css/
│   ├── base.css        # Design tokens (warna, font), reset, tipografi umum
│   ├── nav.css         # Progress bar scroll, navbar, logo, tombol tema
│   ├── hero.css        # Hero: canvas, glow emas, headline
│   ├── about.css       # Teks misi + statistik
│   ├── roads.css       # 4 Main Roads
│   ├── work.css        # Filter chip + kartu project
│   ├── services.css    # Daftar layanan
│   ├── clients.css     # Marquee klien
│   ├── contact.css     # Kontak
│   └── cursor.css      # Kursor custom (desktop)
├── js/
│   ├── utils.js        # Helper bersama ($, $$, reduce-motion) — dimuat pertama
│   ├── data.js         # KONTEN: daftar project & klien
│   ├── nav.js          # Progress scroll, menu aktif, toggle tema
│   ├── hero.js         # Constellation canvas
│   ├── about.js        # Kata misi menyala + count-up angka
│   ├── roads.js        # Panel 4 Roads
│   ├── work.js         # Render kartu, filter, drag horizontal
│   ├── clients.js      # Render marquee
│   ├── contact.js      # Efek magnetik email
│   └── cursor.js       # Kursor custom
├── assets/
│   ├── logo.png        # Logo header (hitam, transparan; otomatis dibalik di dark mode)
│   └── favicon.svg
├── vercel.json
└── README.md
```

Setiap section punya pasangan file: markup di `index.html` (cari banner `<!-- ===== NAMA SECTION ===== -->`), style di `css/<section>.css`, perilaku di `js/<section>.js`.

## Jalankan lokal

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

(Atau `npx serve .`) Sebaiknya lewat server lokal, bukan klik dua kali `index.html`.

## Cara edit konten

| Mau ubah | Edit di |
|---|---|
| Tambah / ubah project (format `[kategori, nama, deskripsi]`) | `js/data.js` → `K.projects` |
| Daftar klien di marquee | `js/data.js` → `K.clients` |
| Teks misi, statistik | `index.html` (section ABOUT) |
| Teks layanan | `index.html` (section SERVICES) |
| Kontak (email, IG, WA) | `index.html` (section CONTACT) |
| Warna, gradient emas, font | `css/base.css` (blok `:root`) |
| Logo | ganti `assets/logo.png` (ukuran tinggi 88px, latar transparan) |

Kategori project baru otomatis jadi chip filter baru.

## Deploy ke GitHub dan Vercel

```bash
git init
git add .
git commit -m "Initial commit: Krama Creative website"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Di Vercel: **Add New → Project** → import repo ini. Framework Preset: **Other**. Build Command dan Output Directory dikosongkan. Klik Deploy.

## Catatan

- Font (Bricolage Grotesque, Instrument Serif) dimuat dari Google Fonts, ada fallback font sistem.
- Mendukung dark mode (otomatis ikut sistem + tombol ◐) dan `prefers-reduced-motion`.
- Kartu project masih memakai pola grafis. Untuk thumbnail asli, tambahkan gambar di `assets/` dan sesuaikan template kartu di `js/work.js`.
