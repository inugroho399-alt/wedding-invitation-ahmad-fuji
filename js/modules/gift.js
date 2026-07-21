import { WEDDING_CONFIG } from '../config.js';
import { copyToClipboard, showToast } from '../utils/clipboard.js';

export function initGift() {
    // 1. Populate data dari config
    const gift = WEDDING_CONFIG.gift;
    if (!gift) return;

    // Alamat
    const addressName = document.getElementById('gift-address-name');
    const addressText = document.getElementById('gift-address-text');
    if (addressName) addressName.textContent = gift.address.name;
    if (addressText) addressText.textContent = gift.address.fullAddress;

    // Rekening
    const bankLogo = document.getElementById('gift-bank-logo');
    const bankName = document.getElementById('gift-bank-name');
    const bankNumber = document.getElementById('gift-bank-number');
    if (bankLogo) bankLogo.src = gift.bank.logo;
    if (bankName) bankName.textContent = gift.bank.accountName;
    if (bankNumber) bankNumber.textContent = gift.bank.accountNumber;

    // 2. Toggle reveal saat tombol "Kirim Gift" diklik
    const btnTrigger = document.getElementById('btn-gift-trigger');
    const giftReveal = document.getElementById('gift-reveal');
    
    if (btnTrigger && giftReveal) {
        btnTrigger.addEventListener('click', () => {
            giftReveal.classList.toggle('show');
            
            // Ubah teks tombol saat di-toggle
            if (giftReveal.classList.contains('show')) {
                btnTrigger.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                    Tutup
                `;
            } else {
                btnTrigger.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path><polyline points="12 2 12 12"></polyline><path d="M12 12L4 8"></path><path d="M12 12l8-4"></path></svg>
                    Kirim Gift
                `;
            }
        });
    }

    // 3. Copy Alamat
    const btnCopyAddress = document.querySelector('.btn-copy-address');
    if (btnCopyAddress) {
        btnCopyAddress.addEventListener('click', () => {
            const text = document.getElementById('gift-address-text').textContent;
            copyToClipboard(text).then(() => {
                showToast('Alamat berhasil disalin!');
            }).catch(() => {
                showToast('Gagal menyalin alamat');
            });
        });
    }

    // 4. Copy Rekening
    const btnCopyRekening = document.querySelector('.btn-copy-rekening');
    if (btnCopyRekening) {
        btnCopyRekening.addEventListener('click', () => {
            const number = document.getElementById('gift-bank-number').textContent;
            copyToClipboard(number).then(() => {
                showToast('Nomor rekening berhasil disalin!');
            }).catch(() => {
                showToast('Gagal menyalin nomor rekening');
            });
        });
    }
}