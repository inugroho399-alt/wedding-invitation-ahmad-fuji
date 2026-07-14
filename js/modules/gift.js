import { WEDDING_CONFIG } from '../config.js';
import { copyToClipboard, showToast } from '../utils/clipboard.js';

export function initGift() {
    const container = document.getElementById('gift-container');
    if (!container) return;

    const { bankAccounts, qrisImage } = WEDDING_CONFIG;

    // Render Bank Cards
    let html = '';
    bankAccounts.forEach(bank => {
        html += `
            <div class="bank-card">
                <div class="bank-header">
                    <img src="${bank.logo}" alt="${bank.bankName}" class="bank-logo" onerror="this.style.display='none'">
                    <span class="bank-name">${bank.bankName}</span>
                </div>
                <div class="bank-details">
                    <div class="bank-number" id="rek-${bank.accountNumber}">${bank.accountNumber}</div>
                    <div class="bank-owner">a.n. ${bank.accountName}</div>
                </div>
                <button class="btn btn-copy btn-copy-rek" data-number="${bank.accountNumber}">
                    Salin Nomor Rekening
                </button>
            </div>
        `;
    });

    // Render QRIS
    if (qrisImage) {
        html += `
            <div class="qris-wrapper">
                <img src="${qrisImage}" alt="QRIS" class="qris-image">
                <p style="font-size: var(--fs-small); color: var(--color-text-secondary);">Scan QRIS untuk pembayaran cepat</p>
            </div>
        `;
    }

    container.innerHTML = html;

    // Event Listener untuk tombol Copy
    const copyBtns = container.querySelectorAll('.btn-copy-rek');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const number = btn.getAttribute('data-number');
            copyToClipboard(number).then(() => {
                showToast('Nomor Rekening Berhasil Disalin!');
            }).catch(() => {
                showToast('Gagal menyalin nomor rekening');
            });
        });
    });
}