import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

// Data penghargaan
const awards = [
  { nameKey: "", image: 'img/pengharagaan/1.jpg' },
  { nameKey: "", image: 'img/pengharagaan/2.jpg' },
  { nameKey: "", image: 'img/pengharagaan/3.jpg' },
  { nameKey: "", image: 'img/pengharagaan/4.jpg' },
  { nameKey: "", image: 'img/pengharagaan/5.jpg' },
  { nameKey: "", image: 'img/pengharagaan/6.jpg' },
  { nameKey: "", image: 'img/pengharagaan/7.jpg' },
  { nameKey: "", image: 'img/pengharagaan/8.jpg' },
];

const Penghargaan = () => {
  const { t } = useTranslation();

  return (
    <section id="penghargaan" className="py-16 px-4 bg-gradient-to-r from-white via-blue-400 to-blue-500 text-white">
      <div className="w-full mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('awards.title')}
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 'auto',
              centeredSlides: true,
            }
          }}
          className="w-full"
        >
          {awards.map((award, index) => (
            <SwiperSlide
              key={index}
              className="sm:!w-[320px] md:!w-[360px]"
            >
             <motion.div
  className="relative group rounded-2xl overflow-hidden shadow-xl"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  <img
    src={award.image}
    alt={t(award.nameKey)}
    title={t(award.nameKey)}
    className="w-full h-[360px] sm:h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
  />

      {/* Overlay semi-transparan */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-4 py-3 text-center backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold">
      🏆 {t(award.nameKey)}
      </div>
      </div> */}
      </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Penghargaan;

