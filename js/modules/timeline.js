import { WEDDING_CONFIG } from '../config.js';

export function initTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    const stories = WEDDING_CONFIG.loveStory;
    
    // Generate HTML dari config agar mudah diganti untuk klien lain
    container.innerHTML = stories.map((story, index) => `
        <div class="timeline-item reveal delay-${Math.min(index + 1, 3)}">
            <div class="timeline-dot"></div>
            <div class="timeline-year">${story.year}</div>
            <h3 class="timeline-title">${story.title}</h3>
            <p class="timeline-desc">${story.description}</p>
        </div>
    `).join('');

    // Re-init Intersection Observer untuk elemen timeline yang baru dibuat
    // karena initScrollReveal() sudah jalan sebelumnya (elemen ini belum ada)
    reObserveNewElements(container);
}

function reObserveNewElements(container) {
    const newReveals = container.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    newReveals.forEach(el => observer.observe(el));
}