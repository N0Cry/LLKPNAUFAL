import { FaBook, FaLaptop, FaBirthdayCake, FaAppleAlt, FaChalkboardTeacher } from 'react-icons/fa'; // Pastikan kamu sudah install react-icons
import { useTranslation } from 'react-i18next';

export default function Features() {
  const fitur = [
    { title: 'calistung', desc: 'age_5', color: 'bg-yellow-100', icon: <FaBook /> },
    { title: 'komputer', desc: 'belajar_komputer', color: 'bg-yellow-100', icon: <FaLaptop /> },
    { title: 'semua_mata_pelajaran', desc: 'seluruh_siswa', color: 'bg-yellow-100', icon: <FaChalkboardTeacher /> },
    { title: 'tata_boga', desc: 'belajar_kue', color: 'bg-yellow-100', icon: <FaBirthdayCake /> },
  ];

  const { t } = useTranslation();

  return (
    <section id="kursus" className="py-16 px-6 bg-gradient-to-r from-white via-blue-400 to-blue-600 text-white">
      <h3 className="text-4xl font-bold text-center text-white mb-12">{t('features.title')}</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {fitur.map((f, i) => (
          <div
            key={i}
            className={`${f.color} p-6 rounded-xl shadow-lg border border-gray-300 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl text-blue-800">{f.icon}</div>
            </div>
            <h4 className="text-2xl font-bold mb-2 text-blue-800">{t(`features.${f.title}`)}</h4>
            <p className="text-gray-700">{t(`features.${f.desc}`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

