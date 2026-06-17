/* ============================================
   KRIS FOLLOWERS SOSMED - Main JavaScript
   ============================================ */

// === Product Data ===
const products = [
    // Instagram Followers Indo
    { id: 'igf100', category: 'instagram-followers', name: 'Instagram Followers 100', price: 6000, amount: 100, label: '100 Followers' },
    { id: 'igf150', category: 'instagram-followers', name: 'Instagram Followers 150', price: 8000, amount: 150, label: '150 Followers' },
    { id: 'igf200', category: 'instagram-followers', name: 'Instagram Followers 200', price: 11000, amount: 200, label: '200 Followers' },
    { id: 'igf250', category: 'instagram-followers', name: 'Instagram Followers 250', price: 12000, amount: 250, label: '250 Followers' },
    { id: 'igf300', category: 'instagram-followers', name: 'Instagram Followers Basic 300', price: 16000, amount: 300, label: '300 Followers' },
    { id: 'igf350', category: 'instagram-followers', name: 'Instagram Followers 350', price: 18000, amount: 350, label: '350 Followers' },
    { id: 'igf400', category: 'instagram-followers', name: 'Instagram Followers 400', price: 21000, amount: 400, label: '400 Followers' },
    { id: 'igf450', category: 'instagram-followers', name: 'Instagram Followers 450', price: 23000, amount: 450, label: '450 Followers' },
    { id: 'igf500', category: 'instagram-followers', name: 'Instagram Followers 500', price: 26000, amount: 500, label: '500 Followers' },
    { id: 'igf1000', category: 'instagram-followers', name: 'Instagram Followers 1000', price: 41000, amount: 1000, label: '1000 Followers' },
    // Instagram Like
    { id: 'igl100', category: 'instagram-like', name: 'Instagram Like 100', price: 1000, amount: 100, label: '100 Likes' },
    { id: 'igl200', category: 'instagram-like', name: 'Instagram Like 200', price: 1500, amount: 200, label: '200 Likes' },
    { id: 'igl400', category: 'instagram-like', name: 'Instagram Like 400', price: 2500, amount: 400, label: '400 Likes' },
    { id: 'igl600', category: 'instagram-like', name: 'Instagram Like 600', price: 3500, amount: 600, label: '600 Likes' },
    { id: 'igl1000', category: 'instagram-like', name: 'Instagram Like 1000', price: 5000, amount: 1000, label: '1000 Likes' },
    // TikTok Followers
    { id: 'ttf100', category: 'tiktok-followers', name: 'TikTok Followers 100', price: 9000, amount: 100, label: '100 Followers' },
    { id: 'ttf150', category: 'tiktok-followers', name: 'TikTok Followers 150', price: 12000, amount: 150, label: '150 Followers' },
    { id: 'ttf200', category: 'tiktok-followers', name: 'TikTok Followers 200', price: 15000, amount: 200, label: '200 Followers' },
    { id: 'ttf250', category: 'tiktok-followers', name: 'TikTok Followers 250', price: 17000, amount: 250, label: '250 Followers' },
    { id: 'ttf300', category: 'tiktok-followers', name: 'TikTok Followers 300', price: 21000, amount: 300, label: '300 Followers' },
    // TikTok Like
    { id: 'ttl100', category: 'tiktok-like', name: 'TikTok Like 100', price: 1500, amount: 100, label: '100 Likes' },
    { id: 'ttl200', category: 'tiktok-like', name: 'TikTok Like 200', price: 2500, amount: 200, label: '200 Likes' },
    { id: 'ttl300', category: 'tiktok-like', name: 'TikTok Like 300', price: 3500, amount: 300, label: '300 Likes' },
    { id: 'ttl400', category: 'tiktok-like', name: 'TikTok Like 400', price: 4500, amount: 400, label: '400 Likes' },
    { id: 'ttl500', category: 'tiktok-like', name: 'TikTok Like 500', price: 5500, amount: 500, label: '500 Likes' },
    { id: 'ttl1000', category: 'tiktok-like', name: 'TikTok Like 1000', price: 10500, amount: 1000, label: '1000 Likes' },
    // TikTok View
    { id: 'ttv100', category: 'tiktok-view', name: 'TikTok View 100', price: 3000, amount: 100, label: '100 Views' },
    { id: 'ttv200', category: 'tiktok-view', name: 'TikTok View 200', price: 5000, amount: 200, label: '200 Views' },
    { id: 'ttv300', category: 'tiktok-view', name: 'TikTok View 300', price: 7000, amount: 300, label: '300 Views' },
    { id: 'ttv400', category: 'tiktok-view', name: 'TikTok View 400', price: 8000, amount: 400, label: '400 Views' },
    { id: 'ttv500', category: 'tiktok-view', name: 'TikTok View 500', price: 10000, amount: 500, label: '500 Views' },
    { id: 'ttv1000', category: 'tiktok-view', name: 'TikTok View 1000', price: 15000, amount: 1000, label: '1000 Views' }
];

const categoryNames = {
    'instagram-followers': 'Instagram Followers',
    'instagram-like': 'Instagram Like',
    'tiktok-followers': 'TikTok Followers',
    'tiktok-like': 'TikTok Like',
    'tiktok-view': 'TikTok View'
};

// === Utility: Format Price ===
function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// === Utility: Generate Order Code ===
function generateOrderCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'KFS-';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// === Utility: Get Date String ===
function getDateString() {
    const d = new Date();
    return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// === LocalStorage Helpers ===
function getOrders() {
    try { return JSON.parse(localStorage.getItem('kfs_orders')) || []; } catch(e) { return []; }
}

function saveOrders(orders) {
    localStorage.setItem('kfs_orders', JSON.stringify(orders));
}

function getProducts() {
    try { return JSON.parse(localStorage.getItem('kfs_products')) || products; } catch(e) { return products; }
}

function saveProducts(p) {
    localStorage.setItem('kfs_products', JSON.stringify(p));
}

function getSiteData() {
    try { return JSON.parse(localStorage.getItem('kfs_site_data')) || {}; } catch(e) { return {}; }
}

function saveSiteData(data) {
    localStorage.setItem('kfs_site_data', JSON.stringify(data));
}

function getTestimonials() {
    try { return JSON.parse(localStorage.getItem('kfs_testimonials')) || []; } catch(e) { return []; }
}

function saveTestimonials(t) {
    localStorage.setItem('kfs_testimonials', JSON.stringify(t));
}

function isAdmin() {
    return localStorage.getItem('kfs_admin') === 'true';
}

// === Toast Notification ===
function showToast(message, type) {
    type = type || 'info';
    const toast = document.getElementById('toast');
    if (!toast) return;
    const icon = toast.querySelector('.toast-icon');
    const msg = toast.querySelector('.toast-message');
    toast.className = 'toast ' + type;
    const icons = { success: '✓', error: '✗', info: 'ℹ' };
    icon.textContent = icons[type] || 'ℹ';
    msg.textContent = message;
    toast.classList.add('active');
    setTimeout(function() { toast.classList.remove('active'); }, 3000);
}

// === Loading Screen ===
function initLoading() {
    var loading = document.getElementById('loading-screen');
    if (!loading) return;
    setTimeout(function() {
        loading.classList.add('hidden');
    }, 1000);
}

// === Header Scroll ===
function initHeader() {
    var header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// === Hamburger Menu ===
function initHamburger() {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('.nav-links');
    if (!hamburger || !nav) return;
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    // Close on link click (mobile)
    nav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// === Banner Slider ===
function initBannerSlider() {
    var slides = document.querySelectorAll('.banner-slide');
    var dots = document.querySelectorAll('.banner-dot');
    if (!slides.length) return;

    var current = 0;
    var total = slides.length;
    if (total <= 1) return;

    function goTo(index) {
        slides.forEach(function(s) { s.classList.remove('active'); });
        dots.forEach(function(d) { d.classList.remove('active'); });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        current = index;
    }

    if (dots.length) {
        dots.forEach(function(dot, i) {
            dot.addEventListener('click', function() { goTo(i); });
        });
    }

    // Auto slide
    setInterval(function() {
        goTo((current + 1) % total);
    }, 5000);

    // Activate first
    goTo(0);
}

// === Render Products ===
function renderProducts(containerId, filter) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var prods = getProducts();
    if (filter && filter !== 'all') {
        prods = prods.filter(function(p) { return p.category === filter; });
    }

    if (!prods.length) {
        container.innerHTML = '<div class="no-results"><div class="icon">🔍</div><h3>Produk Tidak Ditemukan</h3><p>Coba kata kunci lain atau filter berbeda.</p></div>';
        return;
    }

    var html = '';
    prods.forEach(function(p) {
        html += '<div class="product-card" data-category="' + p.category + '">';
        html += '<div class="product-category">' + (categoryNames[p.category] || p.category) + '</div>';
        html += '<div class="product-name">' + p.name + '</div>';
        html += '<div class="product-price">' + formatPrice(p.price) + '</div>';
        html += '<div class="product-desc">' + p.label + ' • ' + (categoryNames[p.category] || p.category) + '</div>';
        html += '<div class="product-actions">';
        html += '<button class="btn btn-primary btn-sm" onclick="openOrderModal(\'' + p.id + '\')">Beli Sekarang</button>';
        html += '</div></div>';
    });
    container.innerHTML = html;
}

// === Order Modal ===
var currentProductId = null;

function openOrderModal(productId) {
    currentProductId = productId;
    var prods = getProducts();
    var product = prods.find(function(p) { return p.id === productId; });
    if (!product) { showToast('Produk tidak ditemukan', 'error'); return; }

    var overlay = document.getElementById('order-modal');
    if (!overlay) return;

    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-price').textContent = formatPrice(product.price);
    document.getElementById('order-product').value = product.id;
    document.getElementById('order-amount').value = product.amount;

    overlay.classList.add('active');
}

function closeOrderModal() {
    var overlay = document.getElementById('order-modal');
    if (overlay) overlay.classList.remove('active');
}

function submitOrder() {
    var name = document.getElementById('order-name').value.trim();
    var username = document.getElementById('order-username').value.trim();
    var productId = document.getElementById('order-product').value;
    var amount = parseInt(document.getElementById('order-amount').value);
    var wa = document.getElementById('order-wa').value.trim();

    if (!name) { showToast('Nama wajib diisi', 'error'); return; }
    if (!username) { showToast('Username/Link Akun wajib diisi', 'error'); return; }
    if (!wa) { showToast('Nomor WhatsApp wajib diisi', 'error'); return; }

    var prods = getProducts();
    var product = prods.find(function(p) { return p.id === productId; });
    if (!product) { showToast('Produk tidak valid', 'error'); return; }

    var order = {
        code: generateOrderCode(),
        date: getDateString(),
        name: name,
        username: username,
        product: product.name,
        productId: product.id,
        amount: amount,
        price: product.price,
        wa: wa,
        status: 'pending',
        timestamp: Date.now()
    };

    var orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);

    closeOrderModal();
    // Reset form
    document.getElementById('order-name').value = '';
    document.getElementById('order-username').value = '';
    document.getElementById('order-wa').value = '';

    showToast('Pesanan berhasil dibuat! Kode: ' + order.code, 'success');
}

// === Track Order ===
function trackOrder() {
    var codeInput = document.getElementById('track-code');
    var resultDiv = document.getElementById('track-result');
    if (!codeInput || !resultDiv) return;

    var code = codeInput.value.trim().toUpperCase();
    if (!code) { showToast('Masukkan kode pesanan', 'error'); return; }

    var orders = getOrders();
    var order = orders.find(function(o) { return o.code === code; });

    if (!order) {
        resultDiv.innerHTML = '<div class="no-results"><div class="icon">🔍</div><h3>Pesanan Tidak Ditemukan</h3><p>Periksa kembali kode pesanan Anda.</p></div>';
        return;
    }

    var statusText = {
        pending: 'Menunggu Pembayaran',
        pending_verification: 'Menunggu Verifikasi Admin',
        processing: 'Diproses',
        completed: 'Selesai',
        'Menunggu Verifikasi Admin': 'Menunggu Verifikasi Admin'
    };

    var statusLabels = [
        { key: 'pending', label: 'Menunggu Pembayaran' },
        { key: 'pending_verification', label: 'Menunggu Verifikasi Admin' },
        { key: 'processing', label: 'Diproses' },
        { key: 'completed', label: 'Selesai' }
    ];

    // normalize order.status to map
    var curKey = order.status;
    if (curKey === 'Menunggu Verifikasi Admin') curKey = 'pending_verification';

    var currentIdx = statusLabels.findIndex(function(s) { return s.key === curKey; });
    if (currentIdx === -1) currentIdx = 0;

    var timelineHtml = '<div class="status-timeline">';
    statusLabels.forEach(function(s, i) {
        var cls = 'status-dot';
        if (i < currentIdx) cls += ' completed';
        else if (i === currentIdx) cls += ' active';
        var labelCls = 'status-label';
        if (i <= currentIdx) labelCls += ' completed';
        var stepLabel = (i < currentIdx ? '✓' : (i + 1));
        timelineHtml += '<div class="status-step"><div class="' + cls + '">' + stepLabel + '</div><div class="' + labelCls + '">' + s.label + '</div></div>';
    });
    timelineHtml += '</div>';

    resultDiv.innerHTML = '<div class="glass-card">' +
        '<h3 style="margin-bottom:16px">Detail Pesanan</h3>' +
        '<table style="width:100%;border-collapse:collapse">' +
        '<tr><td style="padding:8px 0;color:var(--text-muted)">Kode</td><td style="padding:8px 0;font-weight:700">' + order.code + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:var(--text-muted)">Tanggal</td><td style="padding:8px 0">' + order.date + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:var(--text-muted)">Nama</td><td style="padding:8px 0">' + order.name + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:var(--text-muted)">Produk</td><td style="padding:8px 0">' + order.product + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:var(--text-muted)">Jumlah</td><td style="padding:8px 0">' + order.amount + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:var(--text-muted)">Harga</td><td style="padding:8px 0;font-weight:700;color:var(--primary)">' + formatPrice(order.price) + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:var(--text-muted)">Status</td><td style="padding:8px 0"><span class="status-badge ' + order.status + '">' + (statusText[order.status] || statusText[curKey] || order.status) + '</span></td></tr>' +
        '</table>' +
        '<div style="margin-top:24px"><h4 style="margin-bottom:12px;font-size:0.9rem;color:var(--text-muted)">Status Pesanan</h4>' + timelineHtml + '</div>' +
        '</div>';
}

// === Copy to Clipboard ===
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showToast('Nomor berhasil disalin!', 'success');
        }).catch(function() {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showToast('Nomor berhasil disalin!', 'success'); }
    catch(e) { showToast('Gagal menyalin', 'error'); }
    document.body.removeChild(ta);
}

// === Payment Confirmation ===
function confirmPayment() {
    var confirmBtn = document.getElementById('confirm-payment-btn');
    var payLoadingEl = document.getElementById('pay-loading');
    var checkboxEl = document.getElementById('pay-confirmed-checkbox');

    if (confirmBtn && confirmBtn.disabled) return;
    if (checkboxEl && !checkboxEl.checked) {
        showToast('Centang "Saya sudah melakukan pembayaran" terlebih dahulu', 'error');
        return;
    }

    var methodBtn = document.querySelector('[data-method].active');
    var paymentMethod = methodBtn ? methodBtn.dataset.method : '';
    if (!paymentMethod) {
        showToast('Pilih metode pembayaran terlebih dahulu', 'error');
        return;
    }

    if (confirmBtn) confirmBtn.disabled = true;
    if (payLoadingEl) payLoadingEl.style.display = 'block';

    var overlay = document.createElement('div');
    overlay.className = 'bb-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    overlay.innerHTML = '<div class="bb-modal-card">' +
        '<div class="bb-modal-title">Konfirmasi Pembayaran</div>' +
        '<div class="bb-modal-body">Apakah kamu yakin sudah melakukan pembayaran? Data yang dikirim tidak dapat dibatalkan.</div>' +
        '<div class="bb-modal-actions">' +
          '<button class="bb-modal-btn bb-modal-yes" type="button">Ya</button>' +
          '<button class="bb-modal-btn bb-modal-no" type="button">Batal</button>' +
        '</div>' +
      '</div>';

    if (!document.getElementById('bb-modal-style')) {
        var st = document.createElement('style');
        st.id = 'bb-modal-style';
        st.textContent = '.bb-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(6px)}' +
            '.bb-modal-card{width:min(560px,92vw);border-radius:18px;background:rgba(15,23,42,.82);border:1px solid rgba(0,212,255,.25);box-shadow:0 0 0 1px rgba(0,212,255,.08),0 20px 70px rgba(0,0,0,.6);padding:18px 18px 14px;color:var(--text-primary)}' +
            '.bb-modal-title{font-weight:900;color:var(--primary);font-size:1.1rem;margin-bottom:10px;text-shadow:0 0 20px rgba(0,212,255,.25)}' +
            '.bb-modal-body{color:var(--text-secondary);line-height:1.7;font-size:.95rem;margin-bottom:14px}' +
            '.bb-modal-actions{display:flex;gap:12px;justify-content:flex-end}' +
            '.bb-modal-btn{border-radius:12px;padding:10px 14px;font-weight:900;cursor:pointer;border:1px solid rgba(255,255,255,.10);transition:var(--transition)}' +
            '.bb-modal-yes{background:rgba(0,212,255,.10);border-color:rgba(0,212,255,.35);color:var(--primary);box-shadow:0 0 18px rgba(0,212,255,.10)}' +
            '.bb-modal-yes:hover{transform:translateY(-1px);box-shadow:0 0 24px rgba(0,212,255,.18)}' +
            '.bb-modal-no{background:rgba(255,255,255,.04);color:var(--text-secondary)}' +
            '.bb-modal-no:hover{transform:translateY(-1px)}';
        document.head.appendChild(st);
    }

    function cleanup() {
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        if (payLoadingEl) payLoadingEl.style.display = 'none';
    }

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) cleanup();
    });

    document.body.appendChild(overlay);

    var yesBtn = overlay.querySelector('.bb-modal-yes');
    var noBtn = overlay.querySelector('.bb-modal-no');

    if (noBtn) {
        noBtn.addEventListener('click', function() {
            cleanup();
            if (confirmBtn) confirmBtn.disabled = false;
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            var orders = getOrders();
            if (!orders || !orders.length) {
                cleanup();
                showToast('Tidak ada pesanan ditemukan. Buat pesanan terlebih dahulu.', 'error');
                return;
            }

            var order = orders[0];
            // Simpan data pesanan (order) + metode + waktu konfirmasi
            order.paymentMethod = paymentMethod;
            order.timestampKonfirmasi = Date.now();
            // Ubah status sesuai requirement
            order.status = 'Menunggu Verifikasi Admin';

            saveOrders(orders);

            cleanup();
            showToast('Konfirmasi pembayaran berhasil! Menunggu verifikasi admin.', 'success');
            window.location.href = 'cek-pesanan.html';
        });
    }
}

// === Customer Messages (LocalStorage) ===
function getCustomerMessages() {
    try { return JSON.parse(localStorage.getItem('customer_messages')) || []; } catch (e) { return []; }
}

function saveCustomerMessages(messages) {
    localStorage.setItem('customer_messages', JSON.stringify(messages));
}

function sanitizeText(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/\u0000/g, '')
        .replace(/[<>]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function isValidEmail(email) {
    var e = String(email || '').trim();
    // simple but effective format check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function getISODateTimeLocal(d) {
    // yyyy-mm-dd hh:mm:ss (local)
    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
}

function getCustomerMessageStats(messages) {
    messages = messages || [];
    var total = messages.length;
    var belumDibaca = messages.filter(function(m) { return m.status === 'Belum Dibaca'; }).length;
    var sudahDibaca = messages.filter(function(m) { return m.status === 'Sudah Dibaca'; }).length;
    var keluhan = messages.filter(function(m) { return m.category === 'Keluhan'; }).length;
    var kritik = messages.filter(function(m) { return m.category === 'Kritik'; }).length;
    var saran = messages.filter(function(m) { return m.category === 'Saran'; }).length;
    return { total: total, belumDibaca: belumDibaca, sudahDibaca: sudahDibaca, keluhan: keluhan, kritik: kritik, saran: saran };
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/'/g, '&#39;');
}

// === Contact Form ===
function submitContact(e) {
    // GitHub Pages: form kontak hanya menyimpan ke LocalStorage (tanpa backend)
    // Backend code yang memanggil API harus dihapus.

    if (e) e.preventDefault();
    var nameEl = document.getElementById('contact-name');
    var emailEl = document.getElementById('contact-email');
    var catEl = document.getElementById('contact-category');
    var messageEl = document.getElementById('contact-message');
    if (!nameEl || !emailEl || !catEl || !messageEl) return;

    var name = sanitizeText(nameEl.value);
    var email = sanitizeText(emailEl.value);
    var category = sanitizeText(catEl.value);
    var message = sanitizeText(messageEl.value);

    if (!name || !email || !category || !message) {
        showToast('Semua field wajib diisi', 'error');
        return;
    }
    if (!isValidEmail(email)) {
        showToast('Email tidak valid', 'error');
        return;
    }

    // rate limit: 1 message per 30 seconds (per browser)
    var now = Date.now();
    var lastTs = parseInt(localStorage.getItem('kfs_last_customer_message_ts') || '0', 10);
    if (lastTs && (now - lastTs) < 30000) {
        showToast('Terlalu sering mengirim pesan. Silakan tunggu beberapa detik lalu coba lagi.', 'error');
        return;
    }

    var messages = getCustomerMessages();

    // Simulate prepared statement / parameterized insert by building a safe object
    // (In real backend this would be DB prepared statement.)
    var id = 'cm_' + now + '_' + Math.random().toString(16).slice(2);
    var createdAt = getISODateTimeLocal(new Date());

    messages.unshift({
        id: id,
        name: name,
        email: email,
        category: category,
        message: message,
        status: 'Belum Dibaca',
        created_at: createdAt,
        updated_at: createdAt
    });

    saveCustomerMessages(messages);
    localStorage.setItem('kfs_last_customer_message_ts', String(now));

    // realtime notification token (storage event)
    localStorage.setItem('kfs_customer_message_new_ts', String(now));

    showToast('Pesan berhasil dikirim. Terima kasih atas masukan Anda.', 'success');

    // clear input
    nameEl.value = '';
    emailEl.value = '';
    catEl.value = '';
    messageEl.value = '';
}

// === Admin Messages (Customer Messages Dashboard) ===
function getCustomerMessageUnreadCount() {
    var messages = getCustomerMessages();
    return messages.filter(function(m) { return m.status === 'Belum Dibaca'; }).length;
}

function renderCustomerMessagesAdmin() {
    if (!isAdmin()) { checkAdminAuth(); return; }

    var tableWrap = document.getElementById('admin-customer-messages-table');
    var statsContainer = document.getElementById('admin-customer-messages-stats');
    if (!tableWrap) return;

    var messages = getCustomerMessages();

    // search
    var searchInput = document.getElementById('admin-customer-search');
    var searchTerm = (searchInput && searchInput.value) ? searchInput.value.toLowerCase().trim() : '';
    if (searchTerm) {
        messages = messages.filter(function(m) {
            return (m.name || '').toLowerCase().includes(searchTerm) || (m.email || '').toLowerCase().includes(searchTerm);
        });
    }

    // filters
    var catSel = document.getElementById('admin-customer-filter-category');
    var statusSel = document.getElementById('admin-customer-filter-status');
    var dateSel = document.getElementById('admin-customer-filter-date');

    if (catSel && catSel.value) {
        messages = messages.filter(function(m) { return m.category === catSel.value; });
    }
    if (statusSel && statusSel.value) {
        messages = messages.filter(function(m) { return m.status === statusSel.value; });
    }

    if (dateSel && dateSel.value) {
        var now = new Date();
        var start = null;
        if (dateSel.value === 'today') {
            start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
        } else if (dateSel.value === 'last7') {
            start = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        } else if (dateSel.value === 'last30') {
            start = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        }
        if (start) {
            messages = messages.filter(function(m) {
                var ts = Date.parse(String(m.created_at || '').replace(' ', 'T'));
                if (isNaN(ts)) return false;
                return ts >= start.getTime();
            });
        }
    }

    // stats
    if (statsContainer) {
        var stats = getCustomerMessageStats(getCustomerMessages());
        statsContainer.innerHTML =
            '<div class="admin-stat-card"><h3>Total Pesan</h3><div class="value">' + stats.total + '</div></div>' +
            '<div class="admin-stat-card"><h3>Belum Dibaca</h3><div class="value">' + stats.belumDibaca + '</div></div>' +
            '<div class="admin-stat-card"><h3>Pesan Sudah Dibaca</h3><div class="value">' + stats.sudahDibaca + '</div></div>' +
            '<div class="admin-stat-card"><h3>Total Keluhan</h3><div class="value">' + stats.keluhan + '</div></div>' +
            '<div class="admin-stat-card"><h3>Total Kritik</h3><div class="value">' + stats.kritik + '</div></div>' +
            '<div class="admin-stat-card"><h3>Total Saran</h3><div class="value">' + stats.saran + '</div></div>';
    }

    if (!messages.length) {
        tableWrap.innerHTML = '<div class="no-results"><div class="icon">📩</div><h3>Tidak Ada Pesan Customer</h3></div>';
        return;
    }

    var html = '';
    html += '<table class="admin-table"><thead><tr>' +
        '<th>ID Pesan</th>' +
        '<th>Nama</th>' +
        '<th>Email</th>' +
        '<th>Isi Pesan</th>' +
        '<th>Kategori</th>' +
        '<th>Tanggal</th>' +
        '<th>Status</th>' +
        '<th>Aksi</th>' +
        '</tr></thead><tbody>';

    messages.forEach(function(m) {
        var statusBadgeClass = (m.status === 'Belum Dibaca') ? 'pending' : 'completed';
        html += '<tr>' +
            '<td style="color:var(--text-muted);font-size:0.8rem">' + escapeHtml(m.id) + '</td>' +
            '<td>' + escapeHtml(m.name) + '</td>' +
            '<td>' + escapeHtml(m.email) + '</td>' +
            '<td>' + escapeHtml(m.message) + '</td>' +
            '<td>' + escapeHtml(m.category) + '</td>' +
            '<td style="font-size:0.8rem">' + escapeHtml(m.created_at) + '</td>' +
            '<td><span class="status-badge ' + statusBadgeClass + '">' + escapeHtml(m.status) + '</span></td>' +
            '<td>' +
                '<div class="admin-actions" style="display:flex;gap:8px;flex-wrap:wrap">' +
                    '<button class="btn btn-sm btn-secondary" type="button" onclick="adminToggleCustomerMessage(\'' + m.id + '\')">' +
                        (m.status === 'Belum Dibaca' ? 'Tandai Sudah Dibaca' : 'Sudah Dibaca') +
                    '</button>' +
                    '<button class="btn btn-sm btn-secondary" type="button" onclick="adminDeleteCustomerMessage(\'' + m.id + '\')" style="border-color:rgba(239,68,68,0.3);color:#ef4444">Hapus</button>' +
                '</div>' +
            '</td>' +
            '</tr>';
    });

    html += '</tbody></table>';
    tableWrap.innerHTML = html;
}

function adminToggleCustomerMessage(id) {
    var messages = getCustomerMessages();
    var idx = messages.findIndex(function(m) { return m.id === id; });
    if (idx === -1) return;
    var now = getISODateTimeLocal(new Date());
    messages[idx].status = 'Sudah Dibaca';
    messages[idx].updated_at = now;
    saveCustomerMessages(messages);
    adminRefreshCustomerUI();
    showToast('Pesan berhasil ditandai sebagai Sudah Dibaca', 'success');
}

function adminDeleteCustomerMessage(id) {
    if (!confirm('Yakin ingin menghapus pesan ini?')) return;
    var messages = getCustomerMessages();
    messages = messages.filter(function(m) { return m.id !== id; });
    saveCustomerMessages(messages);
    adminRefreshCustomerUI();
    showToast('Pesan berhasil dihapus', 'success');
}

function adminRefreshCustomerUI() {
    // badge count + rerender table if present
    var unread = getCustomerMessageUnreadCount();
    var badge = document.getElementById('admin-customer-badge');
    if (badge) {
        badge.textContent = String(unread);
        badge.style.display = unread > 0 ? 'inline-flex' : 'none';
    }
    if (document.getElementById('admin-customer-messages-table')) {
        renderCustomerMessagesAdmin();
    }
}

function initCustomerMessageRealtime() {
    // Update badge when new message created in other tab (storage event)
    window.addEventListener('storage', function(e) {
        if (!e || !e.key) return;
        if (e.key === 'kfs_customer_message_new_ts' || e.key === 'customer_messages') {
            adminRefreshCustomerUI();
            // toast only when on admin dashboard
            if (document.getElementById('admin-customer-messages-table')) {
                showToast('Pesan baru dari customer', 'info');
            }
        }
    });

    // fallback polling for environments where storage event doesn't fire
    setInterval(function() {
        if (document.getElementById('admin-customer-messages-table')) {
            adminRefreshCustomerUI();
        }
    }, 10000);
}


// === Admin Login ===
function adminLogin() {
    var emailOrPhone = document.getElementById('admin-email').value.trim();
    var password = document.getElementById('admin-password').value.trim();
    var errorDiv = document.getElementById('admin-login-error');

    if ((emailOrPhone === 'krisdesign0@gmail.com' || emailOrPhone === '0857-8255-4720') && password === 'KRISADMIN01') {
        localStorage.setItem('kfs_admin', 'true');
        window.location.href = 'admin-dashboard.html';
    } else {
        if (errorDiv) {
            errorDiv.textContent = 'Email/Nomor atau Password salah!';
            errorDiv.classList.add('show');
        }
    }
}

// === Admin Logout ===
function adminLogout() {
    localStorage.removeItem('kfs_admin');
    window.location.href = 'admin-login.html';
}

// === Check Admin Auth ===
function checkAdminAuth() {
    if (!isAdmin()) {
        window.location.href = 'admin-login.html';
    }
}

// === Admin Render Dashboard ===
function renderAdminDashboard() {
    if (!isAdmin()) { checkAdminAuth(); return; }
    var orders = getOrders();
    var container = document.getElementById('admin-orders-table');
    var statsContainer = document.getElementById('admin-stats');
    if (!container) return;

    var pending = orders.filter(function(o) { return o.status === 'pending'; }).length;
    var processing = orders.filter(function(o) { return o.status === 'processing'; }).length;
    var completed = orders.filter(function(o) { return o.status === 'completed'; }).length;
    var totalRevenue = orders.filter(function(o) { return o.status === 'completed'; }).reduce(function(sum, o) { return sum + o.price; }, 0);

    if (statsContainer) {
        statsContainer.innerHTML =
            '<div class="admin-stat-card"><h3>Total Pesanan</h3><div class="value">' + orders.length + '</div></div>' +
            '<div class="admin-stat-card"><h3>Menunggu</h3><div class="value">' + pending + '</div></div>' +
            '<div class="admin-stat-card"><h3>Diproses</h3><div class="value">' + processing + '</div></div>' +
            '<div class="admin-stat-card"><h3>Selesai</h3><div class="value">' + completed + '</div></div>' +
            '<div class="admin-stat-card"><h3>Pendapatan</h3><div class="value">' + formatPrice(totalRevenue) + '</div></div>';
    }

    var searchTerm = '';
    var searchInput = document.getElementById('admin-search');
    if (searchInput) searchTerm = searchInput.value.toLowerCase();

    var filtered = orders;
    if (searchTerm) {
        filtered = orders.filter(function(o) {
            return o.code.toLowerCase().includes(searchTerm) ||
                   o.name.toLowerCase().includes(searchTerm) ||
                   o.product.toLowerCase().includes(searchTerm);
        });
    }

    var statusText = { pending: 'Menunggu Pembayaran', processing: 'Diproses', completed: 'Selesai', 'Menunggu Verifikasi Admin': 'Menunggu Verifikasi Admin', pending_verification: 'Menunggu Verifikasi Admin' };

    if (!filtered.length) {
        container.innerHTML = '<div class="no-results"><div class="icon">📦</div><h3>Tidak Ada Pesanan</h3></div>';
        return;
    }

    var html = '<table class="admin-table"><thead><tr><th>Kode</th><th>Tanggal</th><th>Nama</th><th>Produk</th><th>Jumlah</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead><tbody>';
    filtered.forEach(function(o) {
        html += '<tr>' +
            '<td style="font-weight:700;color:var(--primary)">' + o.code + '</td>' +
            '<td style="font-size:0.8rem">' + o.date + '</td>' +
            '<td>' + o.name + '</td>' +
            '<td>' + o.product + '</td>' +
            '<td>' + o.amount + '</td>' +
            '<td style="font-weight:700;color:var(--primary)">' + formatPrice(o.price) + '</td>' +
            '<td><span class="status-badge ' + o.status + '">' + (statusText[o.status] || o.status) + '</span></td>' +
            '<td><div class="admin-actions"><select onchange="updateOrderStatus(\'' + o.code + '\', this.value)">' +
            '<option value="pending"' + (o.status === 'pending' ? ' selected' : '') + '>Pending</option>' +
            '<option value="processing"' + (o.status === 'processing' ? ' selected' : '') + '>Proses</option>' +
            '<option value="completed"' + (o.status === 'completed' ? ' selected' : '') + '>Selesai</option>' +
            '</select></div></td></tr>';
    });
    html += '</tbody></table>';
    container.innerHTML = html;
}

function updateOrderStatus(code, status) {
    var orders = getOrders();
    var idx = orders.findIndex(function(o) { return o.code === code; });
    if (idx !== -1) {
        orders[idx].status = status;
        saveOrders(orders);
        showToast('Status pesanan ' + code + ' diubah menjadi ' + status, 'success');
        renderAdminDashboard();
    }
}

// === Admin Render Products ===
function renderAdminProducts() {
    if (!isAdmin()) { checkAdminAuth(); return; }
    var prods = getProducts();
    var container = document.getElementById('admin-products-table');
    if (!container) return;

    var html = '<table class="admin-table"><thead><tr><th>ID</th><th>Nama Produk</th><th>Kategori</th><th>Harga</th><th>Aksi</th></tr></thead><tbody>';
    prods.forEach(function(p) {
        html += '<tr>' +
            '<td style="color:var(--text-muted);font-size:0.8rem">' + p.id + '</td>' +
            '<td>' + p.name + '</td>' +
            '<td>' + (categoryNames[p.category] || p.category) + '</td>' +
            '<td style="font-weight:700;color:var(--primary)">' + formatPrice(p.price) + '</td>' +
            '<td><button class="btn btn-sm btn-secondary" onclick="editProduct(\'' + p.id + '\')">Edit</button> ' +
            '<button class="btn btn-sm btn-secondary" onclick="deleteProduct(\'' + p.id + '\')" style="border-color:rgba(239,68,68,0.3);color:#ef4444">Hapus</button></td></tr>';
    });
    html += '</tbody></table>';
    container.innerHTML = html;
}

function editProduct(id) {
    var prods = getProducts();
    var p = prods.find(function(x) { return x.id === id; });
    if (!p) return;

    var newPrice = prompt('Harga baru untuk ' + p.name + ' (Rp):', p.price);
    if (newPrice !== null && !isNaN(parseInt(newPrice)) && parseInt(newPrice) > 0) {
        p.price = parseInt(newPrice);
        saveProducts(prods);
        showToast('Harga ' + p.name + ' berhasil diubah', 'success');
        renderAdminProducts();
    }
}

function deleteProduct(id) {
    if (!confirm('Yakin ingin menghapus produk ini?')) return;
    var prods = getProducts();
    prods = prods.filter(function(p) { return p.id !== id; });
    saveProducts(prods);
    showToast('Produk berhasil dihapus', 'success');
    renderAdminProducts();
}

function showAddProductForm() {
    var name = prompt('Nama Produk:');
    if (!name) return;
    var category = prompt('Kategori (instagram-followers, instagram-like, tiktok-followers, tiktok-like, tiktok-view):');
    if (!category) return;
    var price = prompt('Harga (Rp):');
    if (!price || isNaN(parseInt(price))) return;
    var amount = prompt('Jumlah:');
    if (!amount || isNaN(parseInt(amount))) return;

    var prods = getProducts();
    var newId = 'custom-' + Date.now();
    prods.push({
        id: newId,
        category: category,
        name: name,
        price: parseInt(price),
        amount: parseInt(amount),
        label: amount + ' ' + (categoryNames[category] || category)
    });
    saveProducts(prods);
    showToast('Produk berhasil ditambahkan', 'success');
    renderAdminProducts();
}

// === Init Products Page ===
function initProductsPage() {
    renderProducts('products-grid', 'all');

    var filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            renderProducts('products-grid', btn.dataset.filter);
        });
    });

    var searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            var activeFilter = document.querySelector('.filter-btn.active');
            var filter = activeFilter ? activeFilter.dataset.filter : 'all';
            var prods = getProducts();
            if (filter && filter !== 'all') {
                prods = prods.filter(function(p) { return p.category === filter; });
            }
            var term = searchInput.value.toLowerCase();
            if (term) {
                prods = prods.filter(function(p) {
                    return p.name.toLowerCase().includes(term) ||
                           (categoryNames[p.category] || '').toLowerCase().includes(term);
                });
            }
            var container = document.getElementById('products-grid');
            if (!container) return;
            if (!prods.length) {
                container.innerHTML = '<div class="no-results"><div class="icon">🔍</div><h3>Produk Tidak Ditemukan</h3><p>Coba kata kunci lain.</p></div>';
                return;
            }
            var html = '';
            prods.forEach(function(p) {
                html += '<div class="product-card">';
                html += '<div class="product-category">' + (categoryNames[p.category] || p.category) + '</div>';
                html += '<div class="product-name">' + p.name + '</div>';
                html += '<div class="product-price">' + formatPrice(p.price) + '</div>';
                html += '<div class="product-desc">' + p.label + ' • ' + (categoryNames[p.category] || p.category) + '</div>';
                html += '<div class="product-actions">';
                html += '<button class="btn btn-primary btn-sm" onclick="openOrderModal(\'' + p.id + '\')">Beli Sekarang</button>';
                html += '</div></div>';
            });
            container.innerHTML = html;
        });
    }
}

// === Init Testimonials ===
function initTestimonials() {
    var container = document.getElementById('testimonials-grid');
    if (!container) return;

    var testimonials = getTestimonials();
    if (!testimonials.length) {
        testimonials = [
            { name: 'Rina Amelia', role: 'Instagram Influencer', text: 'Pelayanan cepat dan professional! Followers saya bertambah dalam hitungan jam. Recomended banget!', avatar: 'RA' },
            { name: 'Budi Santoso', role: 'TikTok Content Creator', text: 'Sudah order beberapa kali, hasilnya memuaskan. Harga terjangkau dan proses cepat. Makasih KRIS FOLLOWERS!', avatar: 'BS' },
            { name: 'Sari Dewi', role: 'Online Shop Owner', text: 'Like Instagram saya meningkat drastis. Kualitas terbaik dan aman. Pasti order lagi!', avatar: 'SD' }
        ];
        saveTestimonials(testimonials);
    }

    var html = '';
    testimonials.forEach(function(t) {
        var stars = '';
        for (var i = 0; i < 5; i++) stars += '★';
        html += '<div class="testimonial-card">' +
            '<div class="testimonial-stars">' + stars + '</div>' +
            '<div class="testimonial-text">"' + t.text + '"</div>' +
            '<div class="testimonial-author">' +
            '<div class="testimonial-avatar">' + t.avatar + '</div>' +
            '<div><div class="testimonial-name">' + t.name + '</div>' +
            '<div class="testimonial-role">' + t.role + '</div></div></div></div>';
    });
    container.innerHTML = html;
}

// === Init features counter animation ===
function initCounters() {
    var counters = document.querySelectorAll('.hero-stat-value');
    if (!counters.length) return;

    counters.forEach(function(counter) {
        var target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        if (isNaN(target)) return;
        var current = 0;
        var step = Math.ceil(target / 60);
        var interval = setInterval(function() {
            current += step;
            if (current >= target) { current = target; clearInterval(interval); }
            counter.textContent = current + '+';
        }, 25);
    });
}

// === Live Clock (Premium) ===
// Mendukung Auto Time dan Manual Time, juga pilihan zona waktu.
// Semua setting disimpan di LocalStorage agar persist saat refresh.
function initLiveClock() {
    var root = document.getElementById('kfs-live-clock');
    if (!root) return;

    // clock fields
    var hh = document.getElementById('kfs-clock-hh');
    var mm = document.getElementById('kfs-clock-mm');
    var ss = document.getElementById('kfs-clock-ss');
    var day = document.getElementById('kfs-clock-day');
    var date = document.getElementById('kfs-clock-date');
    var month = document.getElementById('kfs-clock-month');
    var year = document.getElementById('kfs-clock-year');
    var tzLabel = document.getElementById('kfs-clock-tz');
    var modeBadge = document.getElementById('kfs-clock-mode-badge');

    if (!hh || !mm || !ss || !day || !date || !month || !year) return;

    var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    function pad2(n) { return n < 10 ? '0' + n : '' + n; }

    function safeGetStored(key, fallback) {
        try {
            var v = localStorage.getItem(key);
            if (v === null || v === undefined) return fallback;
            return v;
        } catch (e) {
            return fallback;
        }
    }

    // Zona waktu => offset menit terhadap UTC
    // WIB = UTC+7 => offset +420 menit
    var TZ_OFFSETS_MIN = { WIB: 420, WITA: 480, WIT: 540, UTC: 0 };

    function getActiveTimezone() {
        var tz = safeGetStored('kfs_clock_timezone', 'WIB');
        if (!TZ_OFFSETS_MIN.hasOwnProperty(tz)) tz = 'WIB';
        return tz;
    }

    function getActiveMode() {
        var mode = safeGetStored('kfs_clock_mode', 'auto');
        if (mode !== 'manual') mode = 'auto';
        return mode;
    }

    function parseTimeHHMMSS(str) {
        // ожидаем HH:MM:SS (00-23 / 00-59 / 00-59)
        var m = String(str || '').trim().match(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/);
        if (!m) return null;
        return { hh: parseInt(m[1], 10), mm: parseInt(m[2], 10), ss: parseInt(m[3], 10) };
    }

    function parseDateYMD(str) {
        // expected YYYY-MM-DD
        var s = String(str || '').trim();
        var m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (!m) return null;
        var y = parseInt(m[1], 10);
        var mo = parseInt(m[2], 10);
        var d = parseInt(m[3], 10);
        // JS months are 0-based
        var dt = new Date(y, mo - 1, d, 0, 0, 0, 0);
        if (isNaN(dt.getTime())) return null;
        // Validate round-trip (e.g. 2026-02-31)
        if (dt.getFullYear() !== y || (dt.getMonth() + 1) !== mo || dt.getDate() !== d) return null;
        return { y: y, mo: mo - 1, d: d };
    }

    // Konversi Date yang merepresentasikan waktu di timezone aktif
    // ke Date UTC epoch untuk ditampilkan (menggunakan getUTC*).
    function getZonedDateFromNow(tz) {
        // Karena kita ingin “jam di timezone tertentu”, cara aman: ambil epoch sekarang lalu tambahkan offset.
        // Offset di sini untuk WIB/WITA/WIT/UTC (tanpa DST).
        var offsetMin = TZ_OFFSETS_MIN[tz];
        return new Date(Date.now() + offsetMin * 60 * 1000);
    }

    // Engine state
    var manualAnchorEpochMs = null; // epoch (UTC ms) untuk anchor manual
    var manualAnchorWallclockMs = null; // untuk drift check (tidak wajib)
    var tickStarted = false;

    function computeManualAnchorEpoch() {
        var tz = getActiveTimezone();
        var manualTime = safeGetStored('kfs_clock_manual_time', '00:00:00');
        var manualDate = safeGetStored('kfs_clock_manual_date', '');

        var t = parseTimeHHMMSS(manualTime);
        var d = parseDateYMD(manualDate);
        if (!t || !d) return null;

        // Kita interpretasikan input manual sebagai waktu “di timezone tz”.
        // Dengan menambahkan offset ke UTC agar epoch sesuai.
        // dtLocalAsUTC = new Date(Date.UTC(y,mo,d,h,m,s)) - offset? Cara yang lebih sederhana:
        // Buat epoch dari komponen seolah-olah itu UTC, lalu kurangi offset.
        var dtAsUTC = Date.UTC(d.y, d.mo, d.d, t.hh, t.mm, t.ss, 0);
        var offsetMin = TZ_OFFSETS_MIN[tz];
        // timezone waktu = UTC + offset => localTime = utcTime + offset => utcTime = localTime - offset
        var epochMs = dtAsUTC - offsetMin * 60 * 1000;
        return epochMs;
    }

    function ensureManualAnchorIfNeeded(force) {
        var mode = getActiveMode();
        if (mode !== 'manual') {
            manualAnchorEpochMs = null;
            manualAnchorWallclockMs = null;
            return;
        }
        if (force || manualAnchorEpochMs === null) {
            var anchor = computeManualAnchorEpoch();
            manualAnchorEpochMs = anchor;
            manualAnchorWallclockMs = anchor;
        }
    }

    function renderModeUI() {
        var mode = getActiveMode();
        var tz = getActiveTimezone();

        if (tzLabel) tzLabel.textContent = ' ' + tz;
        if (modeBadge) {
            modeBadge.textContent = (mode === 'manual' ? '🟠 Manual Mode' : '🟢 Auto Mode');
            modeBadge.className = 'kfs-clock-mode-badge ' + (mode === 'manual' ? 'kfs-manual-badge' : 'kfs-auto-badge');
        }

        // Update panel settings jika ada
        var modeSel = document.getElementById('kfs-clock-mode');
        var tzSel = document.getElementById('kfs-clock-timezone');
        var manualTimeEl = document.getElementById('kfs-clock-manual-time');
        var manualDateEl = document.getElementById('kfs-clock-manual-date');
        if (modeSel) modeSel.value = mode;
        if (tzSel) tzSel.value = tz;
        if (manualTimeEl) manualTimeEl.value = safeGetStored('kfs_clock_manual_time', '00:00:00');
        if (manualDateEl) manualDateEl.value = safeGetStored('kfs_clock_manual_date', '');

        // Enable/disable inputs sesuai mode
        if (manualTimeEl) manualTimeEl.disabled = mode !== 'manual';
        if (manualDateEl) manualDateEl.disabled = mode !== 'manual';
        if (tzSel) tzSel.disabled = false; // timezone bisa diubah juga

        // Tombol indikator (di header panel) - highlight sederhana
        var autoPill = document.getElementById('kfs-mode-pill-auto');
        var manualPill = document.getElementById('kfs-mode-pill-manual');
        if (autoPill && manualPill) {
            if (mode === 'manual') {
                autoPill.classList.remove('kfs-mode-pill-active');
                manualPill.classList.add('kfs-mode-pill-active');
            } else {
                manualPill.classList.remove('kfs-mode-pill-active');
                autoPill.classList.add('kfs-mode-pill-active');
            }
        }
    }

    // Proper manual engine variables
    var manualStartEpochMs = null; // epoch when manual mode saved (anchorEpochMs at that save time)
    var manualSavedAtMs = null; // Date.now at save time

    function applyManualFromStorage() {
        // Called when admin saves or when we first detect manual mode.
        ensureManualAnchorIfNeeded(true);
        if (manualAnchorEpochMs === null) return false;
        manualStartEpochMs = manualAnchorEpochMs;
        manualSavedAtMs = Date.now();
        tickStarted = true;
        return true;
    }

    function getClockDate() {
        var mode = getActiveMode();
        var tz = getActiveTimezone();
        if (mode === 'manual') {
            if (manualStartEpochMs === null || manualSavedAtMs === null) {
                // attempt initialize from storage
                var ok = applyManualFromStorage();
                if (!ok) return getZonedDateFromNow(tz);
            }
            var elapsedMs = Date.now() - manualSavedAtMs;
            var epochMs = manualStartEpochMs + elapsedMs;
            return new Date(epochMs + 0); // epoch already in UTC epoch; for display use offset shift trick below
        }
        return getZonedDateFromNow(tz);
    }

    function update() {
        renderModeUI();

        var mode = getActiveMode();
        var tz = getActiveTimezone();

        var d;
        if (mode === 'manual') {
            if (manualStartEpochMs === null || manualSavedAtMs === null) {
                // initialize manual anchor for first render
                applyManualFromStorage();
            }

            if (manualStartEpochMs === null) {
                d = getZonedDateFromNow(tz);
            } else {
                var elapsedMs = Date.now() - manualSavedAtMs;
                var epochMs = manualStartEpochMs + elapsedMs;
                // For display in selected timezone, reuse shift method:
                d = new Date(epochMs + TZ_OFFSETS_MIN[tz] * 60 * 1000);
            }
        } else {
            d = getZonedDateFromNow(tz);
        }

        hh.textContent = pad2(d.getHours());
        mm.textContent = pad2(d.getMinutes());
        ss.textContent = pad2(d.getSeconds());

        day.textContent = hari[d.getDay()];
        date.textContent = pad2(d.getDate()).replace(/^0/, '');
        month.textContent = bulan[d.getMonth()];
        year.textContent = String(d.getFullYear());
    }

    function alignTick() {
        var now = new Date();
        var msToNext = 1000 - now.getMilliseconds();
        setTimeout(function() {
            update();
            alignTick();
        }, msToNext);
    }

    // Start instant render
    hh.textContent = '00';
    mm.textContent = '00';
    ss.textContent = '00';
    update();
    alignTick();

    // Expose handlers for admin panel buttons
    window.kfsSaveClockSettings = function() {
        try {
            var mode = document.getElementById('kfs-clock-mode');
            var tz = document.getElementById('kfs-clock-timezone');
            var mt = document.getElementById('kfs-clock-manual-time');
            var md = document.getElementById('kfs-clock-manual-date');

            if (!mode || !tz || !mt || !md) return;

            localStorage.setItem('kfs_clock_mode', mode.value);
            localStorage.setItem('kfs_clock_timezone', tz.value);
            localStorage.setItem('kfs_clock_manual_time', mt.value);
            localStorage.setItem('kfs_clock_manual_date', md.value);

            if (mode.value === 'manual') {
                // Reinitialize manual start anchor so clock immediately follows new input
                manualStartEpochMs = null;
                manualSavedAtMs = null;
                applyManualFromStorage();
            } else {
                manualStartEpochMs = null;
                manualSavedAtMs = null;
            }

            showToast('Pengaturan jam tersimpan', 'success');
            update();
        } catch (e) {
            showToast('Gagal menyimpan pengaturan jam', 'error');
        }
    };

    window.kfsResetToAuto = function() {
        try {
            localStorage.setItem('kfs_clock_mode', 'auto');
            // keep timezone choice; reset manual fields to current system for convenience
            localStorage.setItem('kfs_clock_manual_time', '00:00:00');
            localStorage.setItem('kfs_clock_manual_date', '');

            manualStartEpochMs = null;
            manualSavedAtMs = null;

            // sync select values
            var modeSel = document.getElementById('kfs-clock-mode');
            if (modeSel) modeSel.value = 'auto';

            showToast('Kembali ke Auto Time', 'success');
            update();
        } catch (e) {
            showToast('Gagal reset ke Auto Time', 'error');
        }
    };

    window.kfsSyncWithSystem = function() {
        try {
            // set manual datetime = now in selected timezone
            var tz = getActiveTimezone();
            var d = getZonedDateFromNow(tz);

            var manualTime = pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
            var yyyy = d.getFullYear();
            var mm = pad2(d.getMonth() + 1);
            var dd = pad2(d.getDate());
            var manualDate = yyyy + '-' + mm + '-' + dd;

            localStorage.setItem('kfs_clock_mode', 'manual');
            localStorage.setItem('kfs_clock_manual_time', manualTime);
            localStorage.setItem('kfs_clock_manual_date', manualDate);

            var modeSel = document.getElementById('kfs-clock-mode');
            if (modeSel) modeSel.value = 'manual';

            var mt = document.getElementById('kfs-clock-manual-time');
            var md = document.getElementById('kfs-clock-manual-date');
            if (mt) mt.value = manualTime;
            if (md) md.value = manualDate;

            manualStartEpochMs = null;
            manualSavedAtMs = null;
            applyManualFromStorage();

            showToast('Sinkron dengan waktu sistem (Manual Mode)', 'success');
            update();
        } catch (e) {
            showToast('Gagal sinkron dengan waktu sistem', 'error');
        }
    };

    window.kfsResetClockSettings = function() {
        try {
            localStorage.setItem('kfs_clock_mode', 'auto');
            localStorage.setItem('kfs_clock_timezone', 'WIB');
            localStorage.setItem('kfs_clock_manual_time', '00:00:00');
            localStorage.setItem('kfs_clock_manual_date', '');

            manualStartEpochMs = null;
            manualSavedAtMs = null;

            var modeSel = document.getElementById('kfs-clock-mode');
            var tzSel = document.getElementById('kfs-clock-timezone');
            var mt = document.getElementById('kfs-clock-manual-time');
            var md = document.getElementById('kfs-clock-manual-date');
            if (modeSel) modeSel.value = 'auto';
            if (tzSel) tzSel.value = 'WIB';
            if (mt) mt.value = '00:00:00';
            if (md) md.value = '';

            showToast('Reset pengaturan jam selesai', 'success');
            update();
        } catch (e) {
            showToast('Gagal reset pengaturan jam', 'error');
        }
    };

    window.kfsOnModeChange = function() {
        // Instant switch UI; actual anchor updates when admin klik Simpan, tapi requirement: live clock langsung berubah.
        // Jadi: update localStorage mode + reinitialize.
        try {
            var modeSel = document.getElementById('kfs-clock-mode');
            if (!modeSel) return;
            localStorage.setItem('kfs_clock_mode', modeSel.value);

            if (modeSel.value === 'manual') {
                manualStartEpochMs = null;
                manualSavedAtMs = null;
                // anchor computed from current inputs in form (storage might be stale)
                // ensure by pushing current input values into storage then init.
                var tzSel = document.getElementById('kfs-clock-timezone');
                var mt = document.getElementById('kfs-clock-manual-time');
                var md = document.getElementById('kfs-clock-manual-date');
                if (tzSel) localStorage.setItem('kfs_clock_timezone', tzSel.value);
                if (mt) localStorage.setItem('kfs_clock_manual_time', mt.value);
                if (md) localStorage.setItem('kfs_clock_manual_date', md.value);
                applyManualFromStorage();
            } else {
                manualStartEpochMs = null;
                manualSavedAtMs = null;
            }

            update();
        } catch (e) {}
    };
}


// === Page Init ===
document.addEventListener('DOMContentLoaded', function() {
    initLoading();
    initHeader();
    initHamburger();
    initBannerSlider();
    initLiveClock();

    // Page-specific inits

    if (document.getElementById('products-grid')) initProductsPage();
    if (document.getElementById('testimonials-grid')) initTestimonials();
    if (document.querySelector('.admin-layout')) {
        checkAdminAuth();
        renderAdminDashboard();
        adminRefreshCustomerUI();
        initCustomerMessageRealtime();

        // init customer messages section if exists
        if (document.getElementById('admin-customer-messages-table')) {
            renderCustomerMessagesAdmin();
        }
    }
    if (document.getElementById('admin-products-table')) { checkAdminAuth(); renderAdminProducts(); }

    // customer message filters handlers
    var tbl = document.getElementById('admin-customer-messages-table');
    if (tbl) {
        var inputs = [
            'admin-customer-search',
            'admin-customer-filter-category',
            'admin-customer-filter-status',
            'admin-customer-filter-date'
        ];
        inputs.forEach(function(id) {
            var el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('input', function() { renderCustomerMessagesAdmin(); adminRefreshCustomerUI(); });
            el.addEventListener('change', function() { renderCustomerMessagesAdmin(); adminRefreshCustomerUI(); });
        });
    }
});


