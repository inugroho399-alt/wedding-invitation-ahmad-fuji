export function initPWA() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('PWA Service Worker Registered'))
                .catch(err => console.log('PWA Registration Failed', err));
        });
    }
}