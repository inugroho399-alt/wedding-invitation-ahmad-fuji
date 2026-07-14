import { copyToClipboard, showToast } from '../utils/clipboard.js';
import { getGuestName } from '../utils/url.js';

export function initShare() {
    const btnShareWA = document.getElementById('btn-share-wa');
    if (!btnShareWA) return;

    btnShareWA.addEventListener('click', () => {
        const guestName = getGuestName();
        const url = window.location.href;
        const text = `Halo ${guestName}, kami mengundang Anda untuk hadir di hari bahagia kami. Berikut detail undangannya: ${url}`;
        
        // Encode text untuk URL
        const encodedText = encodeURIComponent(text);
        const waUrl = `https://wa.me/?text=${encodedText}`;
        
        window.open(waUrl, '_blank');
    });
}