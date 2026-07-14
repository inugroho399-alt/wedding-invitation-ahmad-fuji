import { WEDDING_CONFIG } from '../config.js';

export function initCountdown() {
    const countdownDate = new Date(WEDDING_CONFIG.weddingDate).getTime();
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl) return;

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            // Jika acara sudah lewat
            document.getElementById('countdown').innerHTML = '<h3 class="text-accent">Acara Telah Selesai</h3>';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    };

    updateCountdown(); // Jalankan sekali agar tidak ada delay 1 detik di awal
    const timerInterval = setInterval(updateCountdown, 1000);
}