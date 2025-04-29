// components/Testimonials.jsx
export default function Testimonials() {
    return (
      <section className="py-16 px-4 bg-blue-50">
        <h3 className="text-4xl font-bold text-center text-blue-700 mb-12">Testimoni Peserta Kursus</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-80 p-6 bg-white rounded-xl shadow-lg border hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">"LKP NAUFAL memberikan pengalaman belajar yang luar biasa! Pembelajaran fleksibel dan berkualitas tinggi."</p>
            <p className="font-bold text-blue-700">Andi, Siswa Kelas 1 SMA</p>
          </div>
          <div className="w-80 p-6 bg-white rounded-xl shadow-lg border hover:scale-105 transition">
            <p className="text-gray-700 italic mb-4">"Sertifikat dari LKP NAUFAL sangat membantu saya mendapatkan pekerjaan baru. Terima kasih!"</p>
            <p className="font-bold text-blue-700">Siti, Siswi SMK </p>
          </div>
        </div>
      </section>
    )
  }
  