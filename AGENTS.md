# Objektif Proyek: Kloning UI/UX Website ETHOL PENS (Pendekatan Bertahap)

**Tujuan Utama:** Membuat replika tampilan (Pixel-Perfect) dari *landing page* website ETHOL PENS (https://ethol.pens.ac.id/) menggunakan framework React dan Vite. Tampilan harus **benar-benar sama persis** (warna, tipografi, jarak, efek, bayangan, dan responsivitas) dengan referensi asli. 

Untuk memastikan tingkat keakuratan yang maksimal, pengerjaan harus dilakukan **satu per satu (komponen demi komponen atau section demi section)**, tidak sekaligus.

## 🛠 Tech Stack & Versi (Wajib Diikuti)

Berdasarkan konfigurasi `package.json` proyek saat ini, gunakan versi spesifik berikut:
* **React:** `^19.3.1`
* **React DOM:** `^19.3.1`
* **Vite:** `^8.3.5`
* **TypeScript:** `^6.0.0`
* **Styling:** Gunakan **Tailwind CSS v4.3.3** secara eksklusif.

## ⚛️ Standar & Best Practices React 19
1. **Functional Components & Hooks:** Gunakan *Functional Components* secara eksklusif. Gunakan hooks bawaan (`useState`, `useEffect`) untuk interaktivitas (misal: *sticky navbar*, *mobile menu*, *FAQ accordion*).
2. **Component Composition:** Pecah UI menjadi komponen-komponen kecil yang *reusable*.
3. **Semantic HTML:** Gunakan tag semantik (`<nav>`, `<section>`, `<header>`, `<footer>`).
4. **Strict Mode:** Pastikan aplikasi berjalan sempurna di bawah `<React.StrictMode>`.
5. **TypeScript Interfaces:** Definisikan `interface` atau `type` untuk semua *props* komponen secara ketat.

## 📂 Instruksi Eksekusi Bertahap & Penanganan Aset untuk AI

Tolong patuhi instruksi berikut dalam memberikan respons atau kode:

1. **Kerjakan Satu Per Satu (PENTING):** Jangan berikan seluruh kode halaman sekaligus. Mulailah dari satu komponen (misalnya: `Navbar` saja, atau `Hero Section` saja). Setelah saya mengonfirmasi tampilannya sudah *pixel-perfect* dan sama persis dengan aslinya, baru kita lanjut ke section berikutnya.
2. **Fokus Pixel-Perfect:** Perhatikan dengan sangat detail setiap *padding*, *margin*, kode warna spesifik, ketebalan font, dan *line-height* dari referensi HTML yang saya berikan. Tampilan harus sama persis dengan web ETHOL.
3. **Fetch & Simpan Aset Gambar (PENTING):** Jika terdapat gambar dari web aslinya, Anda harus mengambil (*fetch*) gambar-gambar tersebut dari web ETHOL PENS, OLEH ANDA SECARA LANGSUNG. Namun jika interaksi tersebut tidak bisa dilakukan oleh Anda, berikan saya instruksi atau cara langsung untuk mendownload dan menaruh gambar-gambar tersebut tepat ke dalam folder proyek saya (misalnya di folder `/public` atau `/src/assets`).
4. **Ekstraksi SVG Inline:** Ambil semua *path* SVG secara langsung dari referensi HTML murni yang diberikan. Jangan gunakan *library* ikon eksternal jika ikon aslinya sudah berupa SVG *inline*.
5. **Responsiveness:** Tampilan harus sempurna di *Mobile*, *Tablet*, dan *Desktop*, DAN MEMILIKI TAMPILAN RESPONSIF YANG SAMA PERSIS DENGAN WEB ASLINYA JUGA. Pastikan penulisan kelas Tailwind menggunakan pendekatan *Mobile-First*.
