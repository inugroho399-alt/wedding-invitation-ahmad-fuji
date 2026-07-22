import { WEDDING_CONFIG } from '../config.js';

// Format ke UTC (Standar Internasional, anti-tolak di semua HP)
function fmtICS(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
}

// Netralkan karakter khusus (koma, enter) agar tidak merusak file
function escapeICS(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

export function initCalendar() {
    const btn = document.getElementById('btn-save-calendar');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const cfg = WEDDING_CONFIG;
        if (!cfg || !cfg.weddingDate) {
            alert("Tanggal pernikahan belum diatur di config.js");
            return;
        }

        const start = new Date(cfg.weddingDate);
        
        // PENGECEKAN OTOMATIS: Kalau format tanggal di config.js salah, beri tahu
        if (isNaN(start.getTime())) {
            alert("Format tanggal di config.js salah!\nPastikan formatnya: YYYY-MM-DDTHH:MM:SS\nContoh: 2026-08-08T08:00:00");
            return;
        }

        const end = new Date(start.getTime() + 5 * 60 * 60 * 1000); // durasi 5 jam
        const now = new Date();

        const rawLocation = cfg.events?.akad?.location
            ? `${cfg.events.akad.location}, ${cfg.events.akad.address || ''}`
            : '';

        // Susun file .ics (WAJIB pakai \r\n untuk jeda baris)
        const ics = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Wedding Invitation//ID',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `UID:${Date.now()}-wedding@invitation`,
            `DTSTAMP:${fmtICS(now)}`,
            `DTSTART:${fmtICS(start)}`,
            `DTEND:${fmtICS(end)}`,
            `SUMMARY:${escapeICS(`Pernikahan ${cfg.groomName} & ${cfg.brideName}`)}`,
            `LOCATION:${escapeICS(rawLocation)}`,
            `DESCRIPTION:${escapeICS('Mohon doa restu Anda untuk pernikahan kami.')}`,
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n'); 

        const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pernikahan-${cfg.groomName}-${cfg.brideName}.ics`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    });
}