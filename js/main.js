import { initLoader } from './modules/loader.js';
import { initCover } from './modules/cover.js';
import { initCountdown } from './modules/countdown.js';
import { initParallax } from './modules/hero.js';
import { initScrollReveal } from './utils/animation.js';
import { initTimeline } from './modules/timeline.js';
import { initGallery } from './modules/gallery.js';
import { initMusicPlayer } from './modules/player.js';
import { initNavigation } from './modules/navigation.js';
import { initGift } from './modules/gift.js';
import { initRSVP } from './modules/rsvp.js';
import { initShare } from './modules/share.js';
import { initPWA } from './modules/pwa.js'; // Tambahan

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCover();
    initCountdown();
    initParallax();
    initTimeline();
    initGift();
    initRSVP();
    initShare();
    initPWA(); // Tambahan
    
    setTimeout(() => {
        initScrollReveal();
        initGallery();
        initMusicPlayer();
        initNavigation();
    }, 100);
});