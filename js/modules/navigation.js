export function initNavigation() {
    const nav = document.getElementById('bottom-nav');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    if (!nav || !navItems.length) return;

    // Tampilkan Bottom Nav setelah cover dibuka
    const coverObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.removedNodes.length > 0) {
                nav.classList.add('visible');
                coverObserver.disconnect();
            }
        });
    });
    const cover = document.getElementById('opening-cover');
    if(cover) coverObserver.observe(document.body, { childList: true, subtree: true });

    // Smooth scroll saat klik nav
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Offset sedikit
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight Active Nav Item saat di-scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-target') === id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' }); // Trigger saat section tepat di tengah layar

    sections.forEach(section => observer.observe(section));
}