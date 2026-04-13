import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Waves } from 'lucide-react';

const navLinks = [
  { name: 'О нас', href: '#about' },
  { name: 'Номера', href: '#rooms' },
  { name: 'Цены', href: '#pricing' },
  { name: 'Галерея', href: '#gallery' },
  { name: 'Контакты', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-4'
            : 'bg-white/10 backdrop-blur-md py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-2 text-xl transition-colors duration-300 ${
              isScrolled ? 'text-[#2E6F95]' : 'text-white'
            }`}>
              <Waves className="w-7 h-7 text-[#3FBAC2]" />
              <span className="font-semibold">Приморский</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors duration-300 hover:text-[#3FBAC2] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`flex items-center gap-2 text-sm ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <Phone className="w-4 h-4" />
              <span>+7 (953) 095-81-81</span>
            </div>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-[#3FBAC2] hover:bg-[#3FBAC2]/90 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Забронировать
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-40 shadow-2xl"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-xl py-4 border-b border-gray-200 text-gray-700 hover:text-[#3FBAC2] transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+7 (953) 095-81-81</span>
                </div>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-[#3FBAC2] hover:bg-[#3FBAC2]/90 text-white px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Забронировать
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}