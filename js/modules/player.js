export function initMusicPlayer() {
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');
    const iconPlay = toggleBtn.querySelector('.icon-play');
    const iconPause = toggleBtn.querySelector('.icon-pause');

    if (!audio || !toggleBtn) return;

    const updateIcon = () => {
        if (audio.paused) {
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
            toggleBtn.classList.remove('playing');
        } else {
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
            toggleBtn.classList.add('playing');
        }
    };

    toggleBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Sync UI with audio events
    audio.addEventListener('play', updateIcon);
    audio.addEventListener('pause', updateIcon);

    // Show button only after cover is opened
    // (Kita trigger ini dari cover.js atau observe class 'opened')
    const coverObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.removedNodes.length > 0) {
                // Jika cover dihapus dari DOM, tampilkan tombol musik
                toggleBtn.classList.add('visible');
                coverObserver.disconnect();
            }
        });
    });
    
    const cover = document.getElementById('opening-cover');
    if(cover) coverObserver.observe(document.body, { childList: true, subtree: true });
}