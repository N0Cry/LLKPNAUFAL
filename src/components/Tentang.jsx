import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Tentang = () => {
  const { t } = useTranslation();

  return (
    <section id="tentang" className="py-16 px-6 bg-gradient-to-r from-white via-blue-400 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          {t('tentang.title')}
        </h2>

        <div className="space-y-10 text-gray-800 text-justify">
          {/* Visi Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">{t('history.title')}</h3>
            <p>{t('history.description')}</p>
          </div>
          {/* Visi Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">{t('vision.title')}</h3>
            <p>{t('vision.description')}</p>
          </div>

          {/* Misi Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">{t('mission.title')}</h3>
            <p>{t('mission.description')}</p>
          </div>

          {/* Tujuan Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">{t('goal.title')}</h3>
            <p>{t('goal.description')}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tentang;

