// Versi Bahasa Indonesia dari seluruh teks situs.
// Teks yang memang sudah Indonesia (deskripsi pekerjaan, pendidikan, proyek, pesan form)
// dipakai apa adanya. Struktur harus identik dengan en.js (urutan item array sama).
const id = {
  nav: {
    skills: 'Keahlian',
    experience: 'Pengalaman',
    education: 'Pendidikan',
    certificates: 'Sertifikat',
    projects: 'Proyek',
    contact: 'Kontak',
  },

  hero: {
    quote: 'Talk is cheap. Show me the code.',
    quoteAuthor: '— Linus Torvalds',
    role: '// Web Developer',
    greeting: 'Hai, saya',
    greetingSuffix: '',
    viewProjects: 'Lihat Proyek',
    downloadCV: 'Unduh CV',
    stats: ['Proyek', 'Sertifikat', 'Teknologi'],
  },

  skills: {
    heading: 'Teknologi',
    toolsHeading: 'Alat-alat & Lainnya',
    tools: ['GitHub', 'REST API', 'Pengembangan Berbantuan AI (Claude)'],
  },

  experience: {
    heading: 'Pengalaman',
    items: [
      {
        title: 'Marketing Support',
        tasks: [
          'Menyusun dan memonitor KPI toko sebagai instrumen evaluasi performa operasional cabang, serta menyampaikan laporan hasil penilaian kepada manajemen secara berkala.',
          'Melaksanakan penilaian standar visual merchandising dan kualitas pelayanan toko melalui pemantauan rekaman CCTV sesuai standar operasional perusahaan.',
          'Mengelola proses pengadaan peralatan CCTV mulai dari koordinasi pembelian, verifikasi invoice, hingga dokumentasi administrasi untuk kebutuhan toko.',
          'Mendukung pelaksanaan kampanye pemasaran melalui pengelolaan dan distribusi materi promosi (TVC, media digital, dan materi cetak) agar strategi pemasaran berjalan tepat sasaran.',
          'Berkoordinasi lintas fungsi antara tim Marketing dan Supervisor toko dalam proses penilaian, pelaporan performa, serta tindak lanjut hasil evaluasi cabang.',
        ],
      },
      {
        title: 'Administrasi',
        tasks: [
          'Mengelola operasional toko online, mencakup manajemen produk, pemrosesan pesanan, dan pemantauan performa penjualan untuk memastikan kelancaran transaksi digital.',
          'Menyusun dan menginput laporan penjualan harian secara akurat, termasuk pencatatan arus kas masuk dan kas keluar sebagai bahan evaluasi keuangan operasional.',
          'Mengelola pencatatan kas kecil dan kas besar secara tertib dan terdokumentasi untuk mendukung transparansi dan akuntabilitas keuangan toko.',
        ],
      },
    ],
  },

  education: {
    heading: 'Pendidikan',
    items: [
      {
        title: 'Teknik Informatika',
        institution: 'Universitas Buddhi Dharma',
        details: [
          'IPK: 3.51.',
          'Fokus pada pengembangan web modern menggunakan React dan PostgreSQL.',
          'Pengembangan NLP, Data Mining dan Text Mining.',
        ],
      },
      {
        title: 'Proyek Skripsi',
        institution:
          'Implementasi sentimen emosi pada lirik lagu menggunakan Bot Discord dengan metode analisis sentimen berbasis leksikon',
        details: [
          'Mengembangkan Bot Discord untuk memutar lagu.',
          'Mengembangkan Bot Discord untuk menganalisis sentimen emosi lagu.',
          'Mengembangkan sistem kontrol Next, Previous, Pause, Shut Down, dan Show Lyric pada Bot Discord.',
        ],
      },
    ],
  },

  certificates: {
    heading: 'Sertifikat',
    verify: 'Verifikasi Kredensial',
    items: [
      {
        title: 'Claude 101',
        description:
          'Prompt engineering, Projects, Artifacts, Skills, MCP integration, Enterprise Search, dan mode Research.',
      },
      {
        title: 'Claude Code 101',
        description:
          'AI coding agent workflows: Explore→Plan→Code→Commit, context management, CLAUDE.md, subagents, MCP servers, dan hooks.',
      },
    ],
  },

  projects: {
    heading: 'Proyek',
    viewAll: 'Lihat semua di GitHub',
    readMore: 'Baca selengkapnya',
    readLess: 'Tutup',
    viewProject: 'Lihat Proyek',
    items: [
      {
        title: 'Daily Standup',
        description:
          'Aplikasi web yang membantu developer membuat laporan standup harian secara instan, pengguna cukup mengetik apa yang dikerjakan dengan bahasa sehari-hari, lalu aplikasi otomatis mengubahnya menjadi laporan yang rapi dan siap dibagikan ke tim.',
      },
      {
        title: 'Code Explainer',
        description:
          'Web app yang bisa jelasin syntax code pakai model Claude AI, pilih bahasanya, dapat penjelasan per blok logika dalam bahasa Indonesia.',
      },
      {
        title: 'POS Cashier — Point of Sale Web App',
        description:
          'Membangun aplikasi kasir (Point of Sale) berbasis web untuk mendukung operasional transaksi penjualan harian pada bisnis cafe/retail menggunakan teknologi React dan Supabase.',
      },
      {
        title: 'Bot Discord',
        description: 'Bot untuk memutar Musik di Platform Discord.',
      },
      {
        title: 'Implementation Of Text Mining For Emotion Detection',
        description:
          'Mendeteksi sentimen emosi dari teks menggunakan teknik text mining untuk menganalisis dan mengidentifikasi emosi yang terkandung dalam kalimat.',
      },
    ],
  },

  contact: {
    heading: 'Hubungi Saya',
    formHeading: 'Kirim saya pesan',
    namePh: 'Nama Kamu',
    emailPh: 'Email Kamu',
    messagePh: 'Pesan Kamu',
    send: 'Kirim Pesan',
    sending: 'Mengirim…',
    success: 'Pesan terkirim, makasih! Gw bakal bales secepatnya.',
    error: 'Gagal kirim. Coba lagi, atau email langsung ke widyadharta@gmail.com.',
  },

  footer: {
    rights: '© Pedro Widya. Hak cipta dilindungi.',
  },
};

export default id;
