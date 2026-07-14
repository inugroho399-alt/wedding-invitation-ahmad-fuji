import { getGuestName } from '../utils/url.js';

export function initCover() {
    const cover = document.getElementById('opening-cover');
    const mainContent = document.getElementById('main-content');
    const btnOpen = document.getElementById('btn-open-invitation');
    const guestNameElement = document.getElementById('guest-name');
    const bgMusic = document.getElementById('bg-music');

    if (!cover || !btnOpen) return;

    // 1. Terapkan Nama Tamu Dinamis
    if (guestNameElement) {
        guestNameElement.textContent = getGuestName();
    }

    // 2. Kunci Scroll Background
    document.body.classList.add('no-scroll');

    // 3. Event Listener Tombol Buka
    btnOpen.addEventListener('click', () => {
        // Trigger Audio (Wajib via interaksi user)
        if (bgMusic) {
            bgMusic.volume = 0.5; // Volume 50% agar tidak kaget
            bgMusic.play().catch(error => {
                console.log("Audio Play Prevented:", error);
            });
        }

        // Buka Cover (Animasi CSS)
        cover.classList.add('opened');
        
        // Tampilkan Main Content
        if (mainContent) {
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 1s ease-in';
        }

        // Buka Kunci Scroll
        document.body.classList.remove('no-scroll');

        // Hapus elemen cover dari DOM setelah animasi selesai (1000ms)
        setTimeout(() => {
            cover.remove();
        }, 1000);
    });
}