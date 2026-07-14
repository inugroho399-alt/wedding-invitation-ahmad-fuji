export function initParallax() {
    const heroBg = document.getElementById('hero-bg');
    if (!heroBg) return;

    // Kita gunakan requestAnimationFrame untuk performa 60fps
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroHeight = document.getElementById('hero').offsetHeight;
                
                // Hanya jalankan parallax jika user masih di area Hero
                if (scrolled <= heroHeight) {
                    // Menggerakkan background ke bawah sepersekian kali kecepatan scroll
                    heroBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}