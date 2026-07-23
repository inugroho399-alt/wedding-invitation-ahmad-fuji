/**
 * GLOBAL CONFIGURATION
 * Ubah data di sini untuk klien yang berbeda.
 * Format Tanggal: YYYY-MM-DDTHH:mm:ss (Standar ISO 8601)
 */
export const WEDDING_CONFIG = {
    groomName: "Ahmad",
    brideName: "Fuji",
    weddingDate: "2026-08-08T09:00:00", 
    timezone: "Asia/Jakarta",

    // Profil Mempelai
    groom: {
        fullName: "Ahmad Kurniawan Dwi Alfiansyah",
        title: "Putra Kedua dari",
        parents: "bp. Sukadi dan ibu Wigiastutikningsih",
        photo: "assets/images/couple/groom.jpg",
        instagram: "https://instagram.com/-",
    },
    bride: {
        fullName: "Fuji Indarti",
        title: "Putri Pertama dari",
        parents: "bp. Surat dan ibu Karmini",
        photo: "assets/images/couple/bride.jpg",
        instagram: "https://instagram.com/fujiind99",
    },

    // Detail Acara
    events: {
        akad: {
            title: "Akad Nikah",
            date: "Sabtu, 8 Agustus 2026",
            time: "09.00 - selesai",
            location: "Rumah mempelai wanita",
            address: "Jaten rt 02 rw 09 Wonokerto, Wonogiri",
            mapsUrl: "https://maps.app.goo.gl/pYEbgp6tsK4DZ7uQ8",
            mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sid!2sid!4v1"
        },
        resepsi: {
            title: "Resepsi Pernikahan",
            date: "Minggu, Agustus 2026",
            time: "11.00 - Selesai",
            location: "Rumah mempelai Pria",
            address: "Nanggulan rt3/2 Kedungsono, Bulu, Sukoharjo",
            mapsUrl: "https://maps.app.goo.gl/bEkH9BUQmugjNHyd9",
            mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d106.8!3d-6.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sid!2sid!4v1"
        }
    },

    // Love Story
    loveStory: [
        {
            year: "7 Juli 2023",
            title: "Pertama Bertemu",
            description: "Pertama kenal karena iseng . Kebetulan temen saya adalah temen dia juga secara sengaja memperkenalkan kami dengan memberikan nomer WhatsApp dia kepada saya dan saya memulai chat hanya percakapan biasa dan belum ada perasaan apa apa karena memang belum pernah bertemu."
        },
        {
            year: "8 Agustus 2023",
            title: "Mulai Dekat",
            description: "Setelah hampir satu bulan kami chatting, akhirnya kami memutuskan untuk bertemu. Cukup deg-degan saat itu. Kami mengobrol dan makan bersama. Sejujurnya saya cukup salting saat itu, tapi mencoba untuk bersikap biasa saja. Singkat cerita sejak saat pertemuan pertama itu kami semakin dekat dan semakin sering bertemu. Dan kami pun menjalin asmara meskipun tidak ada kata jadian"
        },
        {
            year: "20 Desember 2025",
            title: "Lamaran",
            description: "Setelah sekian lama menjalin hubungan akhirnya kami memutuskan untuk melangkah ke jenjang yang lebih serius. Sedikit cerita, memang saat kami sedang ngobrol dan bercanda dia sering bilang ingin dilamar saat hari ulang tahunnya . Dan benar saja, tepat di hari ulang tahun dia saya datang bersama keluarga besar untuk melamar dia. Hari itu benar2 hari yang berkesan untuk saya, karena di hari istimewa itu saya memberikan kado terindah . Meskipun berlangsung sederhana tetapi terasa hangat dan tentu saja senyum bahagia terpancar dari keluarga kami."
        },
        {
            year: "8 Agustus 2026",
            title: "Hari Bahagia",
            description: "Hari demi hari berlalu, hari yang ditunggu-tunggu semakin dekat. Alhamdulillah segala urusan dilancarkan. Tidak terasa sebentar lagi kami akan mengikat janji dihadapan Allah sebagai pasangan halal yang sah. Barakallah🤍"
        }
    ], // <-- PERHATIKAN ADA KOMA DI SINI

        // Data Amplop Digital
    gift: {
        address: {
            name: "Ahmad Kurniawan Dwi Alfiansyah",
            fullAddress: "Nanggulan rt3/2 Kedungsono, Bulu, Sukoharjo"
        },
        bank: {
            bankName: "BCA",
            accountNumber: "0154300607",
            accountName: "Ahmad Kurniawan Dwi Alfiansyah",
            logo: "https://inv.mehnikah.com/wp-content/uploads/2025/04/bca-1.webp"
        }
    },
};