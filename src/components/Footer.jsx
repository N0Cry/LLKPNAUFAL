import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer id="kontak" className="bg-blue-500 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Info Brand */}
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold">LKP NAUFAL</h4>
          <p className="mt-2 text-sm text-gray-300">
            {t('footer.description')}
          </p>
          <p className="mt-2 text-sm text-gray-300">
            {t('footer.address')}
          </p>
        </div>

        {/* Kontak Sosial */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://wa.me/+6281345277657"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/lkp_naufal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:info.lkpnaufal3511@gmail.com"
            className="hover:text-yellow-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://maps.app.goo.gl/H4fRULAULex9bKmJ6"
            className="hover:text-yellow-400 transition"
            aria-label="Maps"
          >
            <FaLocationDot />
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-200 mt-6">
        &copy; {new Date().getFullYear()} LKP NAUFAL. {t('footer.rights')}
      </p>
    </footer>
  );
}

