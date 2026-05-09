import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sports', path: '/sports' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-[var(--border-color)] py-3 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-800 rounded-[0.9rem] flex items-center justify-center text-white font-black text-2xl shadow-[0_8px_25px_-5px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-all duration-500">
                S
              </div>
              <span className="text-2xl font-display font-black tracking-tight transition-colors duration-500 text-text-main">
                Sportify
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-bold text-sm uppercase tracking-widest transition-all duration-500 hover:text-primary-500 group py-2 ${
                    location.pathname === link.path
                      ? 'text-primary-500'
                      : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 rounded-full transition-transform duration-500 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              
              <div className="flex items-center gap-4 pl-8 border-l border-border-main">
                <button 
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl bg-white/5 border border-border-main text-text-main hover:bg-white/10 transition-all duration-300 group"
                  aria-label="Toggle Theme"
                >
                  {isDarkMode ? (
                    <Sun size={20} className="group-hover:rotate-45 transition-transform duration-500 text-yellow-400" />
                  ) : (
                    <Moon size={20} className="group-hover:-rotate-12 transition-transform duration-500 text-text-main" />
                  )}
                </button>
                
                <Link to="/register" className="btn-primary flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.2em] px-7 py-3 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)]">
                  <User size={18} className="stroke-[3]" />
                  <span>Register</span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 text-text-main">
                {isDarkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-text-main"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl shadow-2xl border-t border-[var(--border-color)] py-8 px-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                  location.pathname === link.path
                    ? 'bg-primary-500/10 text-primary-500 shadow-sm'
                    : 'text-[var(--text-main)] opacity-60 hover:bg-white/5 hover:opacity-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-[var(--border-color)] my-4"></div>
            <Link to="/register" onClick={() => setIsOpen(false)} className="btn-primary text-center py-5 font-black uppercase tracking-widest text-sm shadow-xl">
              Register Account
            </Link>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

