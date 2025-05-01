import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const awards = [
  { nameKey: "ANJING", image: 'img/pengharagaan/1.jpg'},
  { nameKey: "", image: "" },
  { nameKey: "", image: "" },
];


const Penghargaan = () => { 
  const { t } = useTranslation()
  return (
    <section id="penghargaan" className="py-16 px-6 bg-gradient-to-r from-white via-blue-400 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">{t('awards.title')}</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-12">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img src={award.image} alt={t(award.nameKey)} className="w-full h-64 object-cover" />

            <div className="p-4">
              <h3 className="text-center text-xl font-semibold text-gray-700">{t(award.nameKey)}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Penghargaan;
