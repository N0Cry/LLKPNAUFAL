import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="img/logo/LKP NAUFAL LOGO.jpg" alt="Logo" className="w-10 h-10 object-contain rounded-full" />
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400">
            LKP NAUFAL
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <Link to="beranda" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400" activeClass="text-yellow-400" spy={true}>
            {t('nav.home')}
          </Link>
          <Link to="kursus" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400" activeClass="text-yellow-400" spy={true}>
            {t('nav.courses')}
          </Link>
          <Link to="tentang" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400" activeClass="text-yellow-400" spy={true}>
            {t('nav.about')}
          </Link>
          <Link to="galeri" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400" activeClass="text-yellow-400" spy={true}>
            {t('nav.gallery')}
          </Link>
          <Link to="kontak" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400" activeClass="text-yellow-400" spy={true}>
            {t('nav.contact')}
          </Link>

          {/* Language Button */}
          <button onClick={toggleLanguage} className="ml-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-yellow-400 text-white rounded-lg">
            {i18n.language === 'id' ? 'EN' : 'ID'}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Button for Mobile */}
          <button onClick={toggleLanguage} className="px-1 py-0 bg-gradient-to-r from-blue-500 to-yellow-400 text-white rounded-lg" aria-label="Language Toggle">
            {i18n.language === 'id' ? 'EN' : 'ID'}
          </button>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-blue-700 relative w-5 h-5 flex flex-col justify-between items-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
          >
            {/* Hamburger lines with transform and rotation */}
            <span className={`w-6 h-1 bg-blue-700 rounded transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-1 bg-blue-700 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-1 bg-blue-700 rounded transition-all duration-300 ${isOpen ? 'transform -rotate-45 translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 space-y-4 transition-all transform ease-in-out duration-500 opacity-100">
          <Link to="beranda" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 block" activeClass="text-yellow-400" spy={true} onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </Link>
          <Link to="kursus" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 block" activeClass="text-yellow-400" spy={true} onClick={() => setIsOpen(false)}>
            {t('nav.courses')}
          </Link>
          <Link to="tentang" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 block" activeClass="text-yellow-400" spy={true} onClick={() => setIsOpen(false)}>
            {t('nav.about')}
          </Link>
          <Link to="galeri" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 block" activeClass="text-yellow-400" spy={true} onClick={() => setIsOpen(false)}>
            {t('nav.gallery')}
          </Link>
          <Link to="kontak" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-400 block" activeClass="text-yellow-400" spy={true} onClick={() => setIsOpen(false)}>
            {t('nav.contact')}
          </Link>
        </div>
      )}
    </nav>
  );
}
