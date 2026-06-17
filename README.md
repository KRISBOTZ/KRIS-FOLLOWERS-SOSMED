# KRIS FOLLOWERS SOSMED

Website penjualan layanan **Followers, Likes, dan Views** untuk Instagram dan TikTok dengan tampilan premium, modern, responsif, dan mudah digunakan.

## Fitur Utama
- Halaman Beranda
- Halaman Produk
- Halaman Cara Kerja
- Halaman Pembayaran
- Halaman Cek Pesanan
- Halaman Kontak
- Halaman Tentang
- Dashboard Admin
- Login Admin
- Desain Responsive
- Dark Mode Premium
- Loading Screen Modern
- Animasi Interaktif

## Struktur Project

```text
assets/
├── css/
│   ├── base.css
│   └── components.css
├── js/
│   └── main.js
├── banner/
├── payment/
├── index.html
├── beranda.html
├── produk.html
├── cara-kerja.html
├── pembayaran.html
├── cek-pesanan.html
├── kontak.html
├── tentang.html
├── admin-login.html
├── admin-dashboard.html
├── server.js
└── package.json
```

> Catatan: Struktur folder/file dapat sedikit berbeda tergantung penempatan di project, namun file utama yang tersedia mengikuti daftar di atas.

## Deployment GitHub Pages (Static)

Website ini **tidak perlu** backend saat dipublish ke GitHub Pages (semua fitur transaksi/pesan/admin menggunakan LocalStorage). 

Langkah:

1. Pastikan semua file website sudah berupa **static**:
   - Hanya `HTML/CSS/JS` + gambar (`assets/**`).
   - Disarankan tidak mengirim file build/Node: `node_modules/`, `dist/`.
2. Upload seluruh isi folder project ke repo GitHub (termasuk `index.html` di root dan folder `assets/`).
3. Di GitHub repo: buka **Settings → Pages**.
4. Pilih:
   - Branch: `main`
   - Folder: `/ (root)`
5. Simpan. GitHub Pages akan mulai melayani dalam beberapa menit.

> Pastikan akses utama adalah `https://<username>.github.io/<repo>/` yang mengarah ke `index.html` (root).


## Struktur Project

```text
KRIS FOLLOWERS SOSMED/
│
├── index.html
├── beranda.html
├── produk.html
├── cara-kerja.html
├── pembayaran.html
├── cek-pesanan.html
├── kontak.html
├── admin-login.html
├── admin-dashboard.html
│
└── assets/
    ├── banner/
    ├── css/
    │   ├── base.css
    │   └── components.css
    ├── js/
    │   └── main.js
    └── payment/
        └── qris.jpg
```

## Cara Mengganti Banner
- Ganti gambar di:
  - `assets/banner/banner1.jpg` sampai `assets/banner/banner5.jpg`

## Cara Mengganti Produk
- Produk default didefinisikan di `assets/js/main.js` pada variabel `products`.
- Admin dapat mengubah harga/tambah/hapus produk melalui `admin-dashboard.html` (tersimpan di LocalStorage).

## Cara Login Admin
- Masuk ke `admin-login.html`.
- Kredensial:
  - Email/Num: `krisdesign0@gmail.com` **atau** `0857-8255-4720`
  - Password: `KRISADMIN01`

# KRIS-FOLLOWERS-SOSMED

