/**
 * GLOBAL CONFIGURATION
 * Ubah data di sini untuk klien yang berbeda.
 * Format Tanggal: YYYY-MM-DDTHH:mm:ss (Standar ISO 8601)
 */
export const WEDDING_CONFIG = {
    groomName: "Reza",
    brideName: "Anjar",
    weddingDate: "2026-08-12T08:00:00", 
    timezone: "Asia/Jakarta",

    // Profil Mempelai
    groom: {
        fullName: "Reza Mahendra Putra",
        title: "Putra Pertama dari",
        parents: "Bapak H. Ahmad Sudrajat & Ibu Hj. Siti Nurhaliza",
        photo: "assets/images/couple/groom.jpg",
        instagram: "https://instagram.com/reza",
    },
    bride: {
        fullName: "Anjar Wulandari",
        title: "Putri Kedua dari",
        parents: "Bapak Drs. Budi Santoso & Ibu Sri Mulyani",
        photo: "assets/images/couple/bride.jpg",
        instagram: "https://instagram.com/anjar",
    },

    // Detail Acara
    events: {
        akad: {
            title: "Akad Nikah",
            date: "Rabu, 12 Agustus 2026",
            time: "08.00 - 10.00 WIB",
            location: "Masjid Agung Al-Azhar",
            address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
            mapsUrl: "https://maps.google.com/?q=Masjid+Agung+Al-Azhar+Jakarta",
            mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sid!2sid!4v1"
        },
        resepsi: {
            title: "Resepsi Pernikahan",
            date: "Rabu, 12 Agustus 2026",
            time: "11.00 - 14.00 WIB",
            location: "Hotel Mulia Senayan",
            address: "Jl. Asia Afrika, Senayan, Jakarta Pusat",
            mapsUrl: "https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta",
            mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3!2d106.8!3d-6.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sid!2sid!4v1"
        }
    },

    // Love Story
    loveStory: [
        {
            year: "2019",
            title: "Pertama Bertemu",
            description: "Kami pertama kali bertemu di sebuah acara kampus. Senyumnya yang hangat membuat hari itu terasa berbeda."
        },
        {
            year: "2020",
            title: "Mulai Dekat",
            description: "Obrolan ringan berubah menjadi panggilan telepon panjang setiap malam. Kami tahu ada yang istimewa di antara kami."
        },
        {
            year: "2022",
            title: "Lamaran",
            description: "Di bawah langit sore yang jingga, aku memberanikan diri untuk melamar. Dan dia berkata, 'Iya'."
        },
        {
            year: "2026",
            title: "Hari Bahagia",
            description: "InsyaAllah kami akan menyatukan langkah dalam ikatan suci pernikahan."
        }
    ], // <-- PERHATIKAN ADA KOMA DI SINI

    // Data Amplop Digital
    bankAccounts: [
        {
            bankName: "Bank Central Asia (BCA)",
            accountNumber: "1234567890",
            accountName: "Reza Mahendra Putra",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png"
        },
        {
            bankName: "Bank Mandiri",
            accountNumber: "0987654321",
            accountName: "Anjar Wulandari",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bank_Mandiri_logo_en.svg/1200px-Bank_Mandiri_logo_en.svg.png"
        }
    ],
    qrisImage: "assets/images/qris/qris-dummy.jpg"
};