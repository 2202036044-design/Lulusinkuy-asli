
import { 
  BookOpen, 
  FileText, 
  Search, 
  Layout, 
  Presentation, 
  GraduationCap, 
  ShieldCheck, 
  Clock, 
  RotateCcw, 
  CheckCircle,
  Users,
  LucideIcon,
  PlusCircle
} from 'lucide-react';
import { Service, Advantage, Testimonial, FAQItem, Step, Review } from './types';

export const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  FileText,
  Layout,
  Search,
  Presentation,
  CheckCircle,
  RotateCcw,
  Clock,
  ShieldCheck,
  Users,
  PlusCircle
};

export const SERVICES: Service[] = [
  { id: '1', title: 'Skripsi & Tesis', description: 'Bantuan riset, pengolahan data, hingga bab akhir untuk kelulusanmu.', icon: 'GraduationCap', rating: 4.9, reviewCount: 156 },
  { id: '2', title: 'Tugas Kuliah', description: 'Selesaikan tugas harian, kuis, dan proyek semester dengan kualitas terbaik.', icon: 'BookOpen', rating: 4.8, reviewCount: 89 },
  { id: '3', title: 'Jurnal Ilmiah', description: 'Penulisan dan pendampingan publikasi jurnal nasional (Sinta) maupun internasional (Scopus).', icon: 'FileText', rating: 4.7, reviewCount: 42 },
  { id: '4', title: 'Proposal', description: 'Penyusunan kerangka penelitian dan landasan teori yang kuat dan teruji.', icon: 'Layout', rating: 4.9, reviewCount: 67 },
  { id: '5', title: 'Makalah', description: 'Penulisan makalah akademis dengan format penulisan yang presisi dan anti-plagiasi.', icon: 'Search', rating: 4.6, reviewCount: 34 },
  { id: '6', title: 'Tugas Lainnya', description: 'Konsultasikan semua jenis tugasmu dengan Tim professional Kami di Lulusin Kuy', icon: 'PlusCircle', rating: 5.0, reviewCount: 28 },
];

export const INITIAL_REVIEWS: Review[] = [
  { id: 'r1', serviceId: '1', userName: 'Budi Santoso', rating: 5, comment: 'Luar biasa membantu!', date: '2023-10-15' },
];

export const ADVANTAGES: Advantage[] = [
  { id: '1', title: 'Kualitas Terjamin', icon: 'CheckCircle' },
  { id: '2', title: 'Bergaransi Revisi', icon: 'RotateCcw' },
  { id: '3', title: 'Pengerjaan Cepat', icon: 'Clock' },
  { id: '4', title: 'Data Aman & Rahasia', icon: 'ShieldCheck' },
  { id: '5', title: 'Tepat Waktu', icon: 'Clock' },
  { id: '6', title: 'Tim Berpengalaman', icon: 'Users' },
];

export const STEPS: Step[] = [
  { id: '1', number: '01', title: 'Konsultasi Gratis', description: 'Diskusikan kebutuhan tugas atau skripsimu dengan admin kami via WhatsApp.' },
  { id: '2', number: '02', title: 'Diskusi Detail', description: 'Tim ahli kami akan mempelajari topik dan memberikan estimasi waktu serta biaya.' },
  { id: '3', number: '03', title: 'Pembayaran', description: 'Lakukan pembayaran DP atau pelunasan untuk memulai proses pengerjaan.' },
  { id: '4', number: '04', title: 'Pengerjaan & Selesai', description: 'Tugas dikerjakan dan dikirim tepat waktu. Revisi tersedia jika diperlukan.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: '1', 
    name: 'Andi Pratama', 
    university: 'Universitas Indonesia', 
    text: 'Sangat terbantu dengan bimbingan skripsinya. Penjelasan tim ahli mudah dimengerti dan revisi cepat ditanggapi.', 
    rating: 5, 
    image: 'https://picsum.photos/100/100?random=1' 
  },
  { 
    id: '2', 
    name: 'Siti Aminah', 
    university: 'UGM Yogyakarta', 
    text: 'Jurnal saya akhirnya tembus Sinta 2 berkat bantuan tim Lulusin Kuy. Benar-benar profesional!', 
    rating: 5, 
    image: 'https://picsum.photos/100/100?random=2' 
  },
  { 
    id: '3', 
    name: 'Budi Santoso', 
    university: 'ITS Surabaya', 
    text: 'Tugas coding yang super sulit bisa selesai tepat waktu. Nilai A di tangan, makasih banyak!', 
    rating: 5, 
    image: 'https://picsum.photos/100/100?random=3' 
  },
];

export const FAQS: FAQItem[] = [
  { 
    id: '1', 
    question: 'Bagaimana jika ada revisi dari dosen pembimbing?', 
    answer: 'Kami memberikan garansi revisi sepuasnya sampai tugas atau skripsi Anda di-ACC oleh dosen (selama tidak menyimpang dari kesepakatan awal/judul). Tim kami akan mendampingi perbaikan sesuai masukan dosen.' 
  },
  { 
    id: '2', 
    question: 'Siapa yang akan mengerjakan tugas/skripsi saya?', 
    answer: 'Tugas Anda dikerjakan oleh tim profesional yang terdiri dari lulusan universitas ternama (S1 & S2) yang kompeten di bidang studinya masing-masing. Kami memilih mentor yang paling sesuai dengan jurusan Anda.' 
  },
  { 
    id: '3', 
    question: 'Saya belum punya judul skripsi, apakah bisa dibantu?', 
    answer: 'Tentu bisa! Kami menyediakan layanan konsultasi pencarian judul yang up-to-date, menarik, dan mudah di-ACC. Kami akan berikan beberapa opsi judul beserta alasan logisnya.' 
  },
  { 
    id: '4', 
    question: 'Apakah saya akan dibimbing sampai paham materinya?', 
    answer: 'Pasti. Kami tidak hanya sekadar "jual putus". Anda bisa berkonsultasi dan meminta penjelasan mengenai materi yang kami kerjakan agar Anda siap dan percaya diri saat presentasi atau sidang.' 
  },
  { 
    id: '5', 
    question: 'Apakah bisa menerima pesanan dengan deadline mepet/kilat?', 
    answer: 'Bisa. Kami memiliki layanan "Prioritas" untuk pengerjaan super cepat (H-1 atau beberapa jam sebelumnya). Namun, slot terbatas dan akan dikenakan biaya tambahan sesuai tingkat urgensi.' 
  },
  { 
    id: '6', 
    question: 'Apakah melayani olah data statistik (SPSS, Eviews, dll)?', 
    answer: 'Ya, kami melayani olah data kuantitatif menggunakan berbagai software seperti SPSS, Eviews, STATA, SmartPLS, hingga Python. Hasilnya lengkap dengan interpretasi data yang mudah dipahami.' 
  },
  { 
    id: '7', 
    question: 'Jurusan apa saja yang bisa dibantu oleh Lulusin Kuy?', 
    answer: 'Tim kami terdiri dari berbagai disiplin ilmu. Kami melayani jurusan Ekonomi, Manajemen, Hukum, Pendidikan, Sastra, Psikologi, Komunikasi, Kesehatan, Teknik, hingga Ilmu Komputer.' 
  },
];
