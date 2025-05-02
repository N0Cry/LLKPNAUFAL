import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const galleryItems = [
  {
    category: 'sismah',
    images: [
      'img/belajar siswa_mahasiswa/1.jpg',
      'img/belajar siswa_mahasiswa/2.jpg',
      'img/belajar siswa_mahasiswa/3.jpg',
    ],
  },
  {
    category: 'calistung',
    images: [
      'img/calistung anak anak/1.jpg',
      'img/calistung anak anak/2.jpg',
      'img/calistung anak anak/3.jpg',
      'img/calistung anak anak/4.jpg',
      'img/calistung anak anak/5.jpg',
      'img/calistung anak anak/6.jpg',
    ],
  },
  {
    category: 'tataBoga',
    images: [
      'img/tataboga/1.jpg',
      'img/tataboga/2.jpg',
      'img/tataboga/3.jpg',
    ],
  },
  {
    category: 'komputer',
    images: ['img/komputer/1.jpg'],
  },
];

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section
      id="galeri"
      className="py-16 px-6 bg-gradient-to-r from-white via-blue-400 to-blue-500 text-white"
    >
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
        className="rounded-xl overflow-hidden px-2"
      >
        {galleryItems.flatMap(({ category, images }) =>
          images.map((src, index) => (
            <SwiperSlide key={`${category}-${index}`}>
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden relative group">
                <img
                  src={src}
                  alt={`Galeri ${category} ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-4 py-2 text-sm sm:text-base transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  {t(`gallery.${category}`)}
                </figcaption>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
}
