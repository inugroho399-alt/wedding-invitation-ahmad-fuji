export function initLoader() {
    const loader = document.getElementById('loading-screen');
    
    // Tunggu semua aset (gambar, font) selesai di-load
    window.addEventListener('load', () => {
        // Beri jeda 0.5 detik agar user sadar ada loading screen (UX trick)
        setTimeout(() => {
            loader.classList.add('loaded');
        }, 500);
    });
}