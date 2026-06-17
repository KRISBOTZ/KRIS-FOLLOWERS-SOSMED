# TODO - GitHub Pages Readiness

- [x] T1: Ubah semua referensi `<script src="assets/js/main.js">` menjadi `<script defer ...>` supaya loading lebih cepat.
- [x] Buat `.gitignore` untuk mengabaikan node_modules/.env/.cache/dist.
- [x] Perbarui `README.md` dengan panduan Deployment GitHub Pages mode static (tanpa backend).
- [ ] Audit lanjutan (butuh verifikasi tool untuk isi `server.js`/`package.json`):
  - [ ] Pastikan tidak ada referensi backend yang tersisa.
  - [ ] Verifikasi tidak ada asset/link yang 404.
  - [ ] Optimasi loading lebih lanjut bila diperlukan (mis. preload kritikal assets).
- [ ] Verifikasi fitur end-to-end setelah deploy:
  - [ ] Order → halaman pembayaran → konfirmasi → cek-pesanan
  - [ ] Login admin → kelola pesanan & produk
  - [ ] Jam live clock admin (auto/manual/sync/reset)
- [ ] Buat laporan lengkap masalah & perbaikannya.

