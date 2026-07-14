import { showToast } from '../utils/clipboard.js';

const STORAGE_KEY = 'wedding_wishes';

function getWishes() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [
            { name: "Ahmad Kur", status: "Hadir", message: "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah, mawaddah, warahmah.", timestamp: Date.now() - 100000 }
        ];
    } catch (e) {
        console.warn("LocalStorage tidak tersedia. Mode penyamaran?");
        return []; // Kembalikan array kosong jika error
    }
}

function saveWish(wish) {
    try {
        const wishes = getWishes();
        wishes.unshift(wish);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (e) {
        console.warn("Gagal menyimpan ke LocalStorage.");
        // Fallback: Tidak apa-apa, ucapan tetap tampil di session ini tapi hilang saat refresh
    }
}

function renderWishes() {
    const listContainer = document.getElementById('guestbook-list');
    if (!listContainer) return;

    const wishes = getWishes();
    
    listContainer.innerHTML = wishes.map(w => `
        <div class="wish-card">
            <div class="wish-header">
                <span class="wish-name">${w.name}</span>
                <span class="wish-status">${w.status}</span>
            </div>
            <p class="wish-message">${w.message}</p>
        </div>
    `).join('');
}

export function initRSVP() {
    const form = document.getElementById('rsvp-form');
    if (!form) return;

    // Render awal
    renderWishes();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('guest-name-input').value.trim();
        const status = document.querySelector('input[name="attendance"]:checked').value;
        const message = document.getElementById('guest-message').value.trim();

        if (!name || !message) {
            showToast('Mohon lengkapi nama dan pesan');
            return;
        }

        const newWish = { name, status, message, timestamp: Date.now() };
        saveWish(newWish);
        renderWishes();
        
        // Reset form
        form.reset();
        document.querySelector('input[name="attendance"][value="Hadir"]').checked = true; // Reset radio default
        
        showToast('Terima kasih! Ucapan Anda telah terkirim.');
        
        // Scroll ke list agar user melihat pesannya masuk
        document.getElementById('guestbook-list').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}