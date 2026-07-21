import { WEDDING_CONFIG } from '../config.js';

export function initTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    const stories = WEDDING_CONFIG.loveStory;
    
    container.innerHTML = stories.map((story, index) => `
        <div class="timeline-item reveal delay-${Math.min(index + 1, 3)}">
            <div class="timeline-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
            <div class="timeline-card">
                <div class="timeline-date">${story.year}</div>
                <h3 class="timeline-title">${story.title}</h3>
                <p class="timeline-desc">${story.description}</p>
            </div>
        </div>
    `).join('');

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