import { constants } from "buffer"

export const menuBar = [
    'Care Center 165',
    'Pandawa',
    'Mobile JKN',
]
export const menuContentImage = [
    "/img/call-center.png",
    "/img/pandawa.png",
    "/img/mobile-jkn-bg.webp",
]
export const menuContent = [
    // Care Center 165
    [
        {
            title: 'BPJS Kesehatan Care 165',
            content: 'merupakan kanal layanan informasi non tatap muka yang dapat diakses oleh peserta maupun masyarakat umum melalui telepon rumah, handphone, maupun akun resmi media sosial BPJS Kesehatan setiap hari selama 24 Jam. Adapun jenis layanan pada BPJS Kesehatan Care Center 165 sebagai berikut:',

        },
        {
            title: 'Layanan Voice Interactive JKN (VIKA)',
            content: 'merupakan layanan informasi melalui mesin penjawab dengan menu pilihan yang dapat dipilih peserta saat menghubungi layanan BPJS Kesehatan Care Center 165 untuk melakukan pengecekan status peserta dan tagihan iuran',

        },
        {
            title: 'Layanan perubahan/mutasi data peserta',
            content: 'yang dilayani oleh agent Care Center 165, antara lain: Perubahan data FKTP (paling cepat sudah terdaftar 3 bulan di FKTP sebelumnya), Perubahan kelas perawatan (paling cepat sudah terdaftar 1 tahun dari kelas perawatan sebelumnya dan dalam status peserta aktif), Perubahan data nomor HP untuk login ke Mobile JKN, Perubahan NPWP, e-mail dan alamat domisili',

        },
        {
            title: 'Pemberian informasi dan penyampaian pengaduan',
            content: 'terkait Program JKN dilayani oleh agent BPJS Kesehatan Care ',

        },
        {
            title: 'Informasi dan penyampaian pengaduan',
            content: 'melalui akun resmi media sosial BPJS Kesehatan (Twitter, Facebook, Instagram, YouTube dan TikTok)',

        },
    ],
    // Pandawa
    [
        {
            title: 'Pelayanan Administrasi Melalui WhatsApp (PANDAWA)',
            content: 'merupakan Kanal Layanan tanpa Tatap Muka/tanpa kontak fisik antara frontliner dan peserta dengan menggunakan media WhatsApp untuk memfasilitasi peserta dalam mendapatkan layanan administrasi kepesertaan. PANDAWA dapat diakses oleh Peserta melalui nomor 0811-8-165-165 selama 24 jam. Adapun jenis layanan pada PANDAWA yaitu:',

        },
        {
            title: 'Pendaftaran baru:',
            content: 'PNS/TNI/POLRI, Warga Negara Asing, Pekerja Bukan Penerima Upah (PBPU)/mandiri',

        },
        {
            title: 'Penambahan anggota keluarga:',
            content: 'Penambahan anggota keluarga: PNS/TNI/POLRI dan Pensiunan/Veteran-PK, Penerima Bantuan Iuran APBN (Bayi Baru Lahir), Pekerja Bukan Penerima Upah (PBPU)/mandiri',

        },
        {
            title: 'Pengaktifan kembali status kepesertaan:',
            content: 'Anak berusia > 21 tahun masih kuliah, Registrasi ulang (PNS/TNI/POLRI/Pensiunan/Veteran-Perintis Kemerdekaan), Registrasi ulang bayi berusia > 3 bulan melengkapi NIK, WNI Kembali dari luar negeri, Data ganda',

        },
        {
            title: 'Pindah jenis peserta:',
            content: 'non aktif menjadi Pekerja Bukan Penerima Upah (PBPU)/mandiri',

        },
        {
            title: 'Perubahan/perbaikan data:',
            content: 'Perubahan Identitas (NIK, Nomor KK, Nama, Tanggal Lahir, Jenis Kelamin, Alamat), Nomor handphone, Golongan dan gaji (PNS dan TNI/POLRI)',

        },
        {
            title: 'Ubah Fasilitas Kesehatan Tingkat Pertama (FKTP):',
            content: 'Peserta TNI/POLRI, Sebelum 3 bulan (bagi peserta pindah domisili/pindah tugas)',

        },
        {
            title: 'Pengurangan Anggota keluarga:',
            content: 'Pelaporan peserta meninggal dunia, Pembaruan Kartu Keluarga (KK baru/pisah KK), Pelaporan WNI pergi keluar negeri',

        },
        {
            title: 'Perubahan kelas rawat:',
            content: 'bagi peserta yang belum membayar iuran pertama',

        },
        {
            title: 'Update Virtual Account (VA):',
            content: 'peserta segmen Pekerja Bukan Penerima Upah (PPU)',

        },
    ],
    // Mobile JKN
    [
        {
            title: 'Aplikasi Mobile JKN ',
            content: 'Merupakan kanal layanan tanpa tatap muka berbasis digital untuk memfasilitasi peserta dalam mendapatkan informasi dan layanan administrasi kepesertaan yang berkaitan dengan program Jaminan Kesehatan Nasional, dengan memanfaatkan teknologi informasi dalam bentuk Aplikasi melalui telepon pintar (smartphone) berbasis Android dan iOS, yang dapat diunduh melalui Google Playstore atau Apps Store. Mobile JKN memiliki fitur sebagai berikut: ',

        },
        {
            title: 'Fitur-fitur dalam Aplikasi Mobile JKN:',
            content: '1. Fitur Pendaftaran Peserta: Calon peserta dapat melakukan pendaftaran peserta PBPU/BP dengan memasukkan nomor KTP sekaligus melakukan pendaftaran autodebit selanjutnya peserta akan mendapatkan email sesuai yang terdaftar pada Aplikasi Mobile JKN',
        },
        {
            title: '2. Fitur Peserta:',
            content: 'Menampilkan informasi kepesertaan peserta dan anggota keluarga'
        },
        {
            title: '3. Fitur Perubahan Data Peserta:',
            content: 'Menampilkan menu ubah data peserta, meliputi perubahan nomor handphone, alamat email, alamat surat, pindah FKTP dan pindah kelas',
        },
        {
            title: '4. Fitur Ketersediaan Tempat Tidur:',
            content: 'Menampilkan ketersediaan tempat tidur Rumah Sakit sesuai kelas, yang informasi ketersediaannya di update oleh Rumah Sakit'
        },
        {
            title: '5. Fitur Obat Ditanggung:',
            content: 'Menampilkan informasi jenis obat yang ditanggung untuk peserta JKN-KIS, meliputi nama, kandungan dan restriksi obat'
        },
        {
            title: '6.	Fitur Lokasi:',
            content: 'Menampilkan informasi alamat kantor BPJS Kesehatan dan Fasilitas Kesehatan yang bekerja sama dengan BPJS Kesehatan'
        },
        {
            title: '7.	Fitur Premi:',
            content: 'Menampilkan informasi tagihan iuran peserta PBPU dan anggota keluarganya'
        },
        {
            title: '8. Fitur Jadwal Tindakan Operasi:',
            content: 'Menampilkan jadwal operasi peserta dan anggota keluarga terdaftar serta dapat mengetahui jadwal operasi di Rumah Sakit yang bekerjasama dengan BPJS Kesehatan, informasi jadwal operasi tersebut di update oleh Rumah Sakit'
        },
        {
            title: '9.	Fitur Pendaftaran Pelayanan: ',
            content: 'Menampilkan pendaftaran pelayanan kesehatan di Fasilitas Kesehatan Tingkat Pertama (FKTP) dan Fasilitas Kesehatan Rujukan Tingkat Lanjutan (FKRTL) yang telah memiliki sistem antrean'
        },
        {
            title: '10. Fitur Skrining Mandiri COVID-19:',
            content: 'Peserta dapat melakukan skrining mandiri sebagai bentuk upaya menekan perkembangan COVID-19'
        },
        {
            title: '11. Fitur Pendaftaran Autodebit:',
            content: 'Menampilkan panduan pendaftaran melaui autodebit sesuai channel auto debit yang dipilih peserta'
        },
        {
            title: '12. Fitur Pembayaran:',
            content: 'Menampilkan panduan pembayaran sesuai channel pembayaran yang bekerja sama dengan BPJS Kesehatan dan pembayaran melalui mobile melalui autodebit Bank dan kartu kredit'
        },
        {
            title: '13. Fitur Catatan Pembayaran:',
            content: 'menampilkan informasi riwayat pembayaran iuran dan pembayaran denda pelayanan'
        },
        {
            title: '14. Fitur FAQ:',
            content: 'Fitur yang berisi pertanyaan dan jawaban terkait program JKN'
        },
        {
            title: '15. Fitur Riwayat Pelayanan:',
            content: 'Menampilkan histori/riwayat pelayanan yang meliputi diagnosa, keluhan dan terapi yang diberikan oleh fasilitas kesehatan dan dapat memberikan penilaian terhadap hasil pelayanan yang diberikan'
        },
        {
            title: '16. Fitur Konsultasi Dokter:',
            content: 'Peserta dapat melakukan konsultasi Kesehatan dengan dokter di FKTP terdaftarnya'
        },
        {
            title: '17. Fitur Skrining Riwayat Kesehatan:',
            content: 'Berisi pertanyaan dan pernyataan terkait riwayat kesehatan yang dapat digunakan oleh peserta dan anggota keluarga terdaftar'
        },
        {
            title: '18. Hasil skrining riwayat kesehatan:',
            content: 'Adalah risiko rendah/ sedang/ tinggi untuk penyakit DM Tipe 2, Hipertensi, Ginjal Kronik dan Jantung Koroner, serta rekomendasi yang harus dilakukan peserta berdasarkan hasil skrining yang telah dilakukan. Skrining hanya dapat dilakukan 1 (satu) tahun sekali'
        },
        {
            title: '19. Fitur Cek VA:',
            content: 'Menampilkan nomor Virtual Account peserta beserta iuran yang harus dibayarkan tiap bulannya'
        },
        {
            title: '20. Fitur Info JKN:',
            content: 'Menampilkan informasi update seputar program JKN-KIS dan BPJS Kesehatan'
        },
        {
            title: '20. Fitur Informasi dan Pengaduan:',
            content: 'Peserta dapat melakukan pengaduan secara tertulis maupun melalui telepon yang akan tersambung secara otomatis ke BPJS Kesehatan Care Center 165'
        },
        {
            title: '21. Fitur Rencana Pembayaran Bertahap (REHAB):',
            content: 'Peserta PBPU/BP dapat melakukan pendaftaran program REHAB sehingga dapat membayarkan tunggakan iurannya secara bertahap'
        },
    ]        
]