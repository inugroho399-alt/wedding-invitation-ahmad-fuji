export function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const btnClose = document.getElementById('lightbox-close');
    const btnPrev = document.getElementById('lightbox-prev');
    const btnNext = document.getElementById('lightbox-next');

    if (!galleryItems.length || !lightbox) return;

    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

    const openLightbox = (index) => {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    };

    // Event Listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    btnClose.addEventListener('click', closeLightbox);
    btnPrev.addEventListener('click', showPrev);
    btnNext.addEventListener('click', showNext);

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
}