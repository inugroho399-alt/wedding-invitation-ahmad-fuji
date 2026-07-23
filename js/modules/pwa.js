export function initPWA() {
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            // PAKSA CEK UPDATE SETIAP KALI HALAMAN DIBUKA
            registration.update(); 
            
            // Jika ada SW baru, langsung refresh halaman secara otomatis
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'activated') {
                        console.log('Versi baru ditemukan! Auto-refresh...');
                        window.location.reload();
                    }
                });
            });
        });
    });
}
}