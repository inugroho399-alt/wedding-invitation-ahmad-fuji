import { showToast } from '../utils/clipboard.js';

export function initRSVP() {
    const form = document.getElementById('rsvp-form');
    if (!form) return;

    // PASTIKAN URL INI BENAR (Tanpa tanda ? di belakang)
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxZ85YJe6GIUaY__3Jc_tC3W6VtIa6yzvXG73VSGoH7EZE9vQwt50z1UuT4EFDuD57XFw/exec';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('guest-name-input').value.trim();
        const status = document.querySelector('input[name="attendance"]:checked').value;
        const message = document.getElementById('guest-message').value.trim();

        if (!name || !message) {
            showToast('Mohon lengkapi nama dan pesan');
            return;
        }

        // Tampilkan loading di toast
        showToast('Mengirim ucapan...');

        // KUNCI RAHASIA: Gunakan URLSearchParams untuk bypass CORS
        fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            body: new URLSearchParams({
                name: name,
                attendance: status,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                form.reset();
                document.querySelector('input[name="attendance"][value="Hadir"]').checked = true;
                showToast('Terima kasih! Ucapan Anda telah terkirim.');
            } else {
                showToast('Gagal menyimpan data. Coba lagi nanti.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showToast('Koneksi bermasalah. Pastikan internet stabil.');
        });
    });
}