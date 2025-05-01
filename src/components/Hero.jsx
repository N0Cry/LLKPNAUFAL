'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const backgrounds = [
  'img/bg/bg1.jpg',
  'img/bg/bg2.jpg',
];

export default function Hero() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Ganti background tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='beranda' className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black">
      
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBackground}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.7, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-extrabold mb-4 max-sm:text-3xl">
          {t('hero.title')}
        </h1>
        <p className="text-xl mb-10 max-sm:text-lg">
          {t('hero.subtitle')}
        </p>
        <a
          href="#kursus"
          className="inline-block bg-gradient-to-r from-blue-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-yellow-500 transition-all duration-300"
        >
          {t('hero.cta')}
        </a>
      </motion.div>

    </section>
  );
}
