export function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    // Intersection Observer jauh lebih hemat baterai & performa dibanding event 'scroll'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Hapus observasi setelah muncul agar tidak membebani browser
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15, // Muncul saat 15% elemen terlihat
        rootMargin: '0px 0px -50px 0px' 
    });

    reveals.forEach(el => observer.observe(el));
}