import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="galeri" className="py-16 px-6 bg-gradient-to-r via-blue-400 from-white text-white">
      <h3 className="text-4xl font-bold text-center text-white mb-12">
        {t('gallery.title')}
      </h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-xl overflow-hidden"
      >
        {/* BELAJAR SISWA MAHASISWA */}
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/belajar siswa_mahasiswa/1.jpg"
              alt="Student Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.sismah')}
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/belajar siswa_mahasiswa/2.jpg"
              alt="Student Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.sismah')}
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/belajar siswa_mahasiswa/3.jpg"
              alt="Student Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.sismah')}
            </figcaption>
          </div>
        </SwiperSlide>

        {/* CALISTUNG ANAK ANAK */}
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/calistung anak anak/1.jpg"
              alt="Calistung Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.calistung')}
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/calistung anak anak/2.jpg"
              alt="Calistung Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.calistung')}
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/calistung anak anak/3.jpg"
              alt="Calistung Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.calistung')}
            </figcaption>
          </div>
        </SwiperSlide>

        {/* TATA BOGA  */}
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/tataboga/1.jpg"
              alt="Culinary Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.tataBoga')}
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/tataboga/2.jpg"
              alt="Culinary Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.tataBoga')}
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/tataboga/3.jpg"
              alt="Culinary Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.tataBoga')}
            </figcaption>
          </div>
        </SwiperSlide>
        {/* KOMPUTER */}
        <SwiperSlide>
          <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group">
            <img
              src="img/komputer/1.jpg"
              alt="Computer Activity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <figcaption className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-white p-4 transform group-hover:translate-y-5 transition-transform duration-500">
              {t('gallery.komputer')}
            </figcaption>
          </div>
        </SwiperSlide>     
      </Swiper>
    </section>
  );
}
