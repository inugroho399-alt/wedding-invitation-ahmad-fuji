import { WEDDING_CONFIG } from '../config.js';

/** Format objek Date jadi string ICS (waktu lokal): YYYYMMDDTHHMMSS */
function fmtICS(date) {
    const p = (n) => String(n).padStart(2, '0');
    return `${date.getFullYear()}${p(date.getMonth() + 1)}${p(date.getDate())}T${p(date.getHours())}${p(date.getMinutes())}${p(date.getSeconds())}`;
}

export function initCalendar() {
    const btn = document.getElementById('btn-save-calendar');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const cfg = WEDDING_CONFIG;
        const start = new Date(cfg.weddingDate);
        const end = new Date(start.getTime() + 5 * 60 * 60 * 1000); // durasi 5 jam
        const now = new Date();

        const location = cfg.events?.akad?.location
            ? `${cfg.events.akad.location}, ${cfg.events.akad.address || ''}`
            : '';

        // Format file .ics (standar kalender universal: Google, Apple, Outlook)
        const ics = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Wedding Invitation//ID',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `UID:${Date.now()}@wedding-invitation`,
            `DTSTAMP:${fmtICS(now)}`,
            `DTSTART:${fmtICS(start)}`,
            `DTEND:${fmtICS(end)}`,
            `SUMMARY:Pernikahan ${cfg.groomName} & ${cfg.brideName}`,
            `LOCATION:${location}`,
            'DESCRIPTION:Mohon doa restu Anda untuk pernikahan kami.',
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        // Trigger download file .ics
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