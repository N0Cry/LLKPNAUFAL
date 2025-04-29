// components/RegistrationForm.jsx
export default function RegistrationForm() {
    return (
      <section className="py-16 px-4 bg-yellow-100">
        <h3 className="text-4xl font-bold text-center text-blue-700 mb-12">Kasih Komentarmu tentang LKP NAUFAL</h3>
        <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Nama Lengkap</label>
            <input type="text" id="name" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Masukkan Nama"/>
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold">Komentarmu</label>
            <input type="text" id="name" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Masukkan Komentar"/>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input type="email" id="email" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Masukkan Email"/>
          </div>
          <div className="mb-6">
            <label htmlFor="course" className="block text-gray-700 font-semibold">Pilih kalangan</label>
            <select id="course" className="w-full p-3 mt-2 border border-gray-300 rounded-lg">
              <option value="web-dev">Perwakilan Murid</option>
              <option value="web-dev">Siswa/Siswi</option>
              <option value="graphic-design">Mahasiswa/Mahasiswi</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">Kirim Sekarang</button>
        </form>
      </section>
    )
  }
  