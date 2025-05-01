import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const awards = [
  { nameKey: "award1", image: 'img/pengharagaan/1.jpg' },
  { nameKey: "award2", image: 'img/pengharagaan/2.jpg' },
  { nameKey: "award3", image: 'img/pengharagaan/3.jpg' },
  { nameKey: "award3", image: 'img/pengharagaan/3.jpg' },
  { nameKey: "award3", image: 'img/pengharagaan/3.jpg' },
];

const Penghargaan = () => {
  const { t } = useTranslation();

  return (
    <section id="penghargaan" className="py-16 px-4 bg-gradient-to-r from-white via-blue-400 to-blue-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">{t('awards.title')}</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="w-full max-w-6xl mx-auto"
      >
        {awards.map((award, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={award.image}
                alt={t(award.nameKey)}
                className="w-full h-[360px] sm:h-[400px] object-cover object-top"
              />
              {/* Optional text */}
              {/* <div className="p-4 text-center text-gray-800 font-semibold">{t(award.nameKey)}</div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Penghargaan;
