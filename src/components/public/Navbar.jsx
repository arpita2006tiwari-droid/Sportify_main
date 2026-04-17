import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
  const isDarkNav = scrolled || isHomePage;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-800 rounded-[0.9rem] flex items-center justify-center text-white font-black text-2xl shadow-[0_8px_25px_-5px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-all duration-500">
              S
            </div>
            <span className={`text-2xl font-display font-black tracking-tight transition-colors duration-500 ${isDarkNav ? 'text-white' : 'text-navy-900'}`}>
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
                    : isDarkNav ? 'text-white/70' : 'text-navy-900/60'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 rounded-full transition-transform duration-500 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <div className={`flex items-center gap-6 pl-8 border-l transition-colors duration-500 ${isDarkNav ? 'border-white/10' : 'border-navy-900/10'}`}>
              <button className={`p-2 rounded-xl transition-all hover:scale-110 ${isDarkNav ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-navy-900/40 hover:text-navy-900 hover:bg-navy-900/5'}`}>
                <Search size={22} className="stroke-[2.5]" />
              </button>
              <Link to="/login" className="btn-primary flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.2em] px-7 py-3 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)]">
                <User size={18} className="stroke-[3]" />
                <span>Register</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${isDarkNav ? 'text-white hover:bg-white/10' : 'text-navy-900 hover:bg-navy-900/5'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-t border-slate-100 py-8 px-6 flex flex-col gap-5 animate-in slide-in-from-top-4 duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                location.pathname === link.path
                  ? 'bg-primary-50 text-primary-600 shadow-sm'
                  : 'text-navy-900/60 hover:bg-slate-50 hover:text-navy-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-100/50 my-4"></div>
          <Link to="/login" onClick={() => setIsOpen(false)} className="btn-primary text-center py-5 font-black uppercase tracking-widest text-sm shadow-xl">
            Register Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
