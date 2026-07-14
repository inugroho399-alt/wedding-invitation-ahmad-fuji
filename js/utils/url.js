/**
 * Mengambil parameter dari URL
 * Contoh: ?to=Bapak+Ahmad -> return "Bapak Ahmad"
 */
export function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    
    if (guestName) {
        // Decode URL encoded characters (misal %20 jadi spasi)
        // Lalu rapikan kapitalisasi huruf (Bapak ahmad -> Bapak Ahmad)
        const decodedName = decodeURIComponent(guestName.replace(/\+/g, ' '));
        return decodedName.replace(/\b\w/g, char => char.toUpperCase());
    }
    
    return 'Tamu Undangan'; // Default jika tidak ada parameter ?to=
}