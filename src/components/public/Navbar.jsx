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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'} ${location.pathname !== '/' && !scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              S
            </div>
            <span className={`text-2xl font-display font-bold ${scrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
              Sportify
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : scrolled || location.pathname !== '/' ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-slate-300/50">
              <button className={`p-2 rounded-full hover:bg-black/5 transition-colors ${scrolled || location.pathname !== '/' ? 'text-slate-600' : 'text-white'}`}>
                <Search size={20} />
              </button>
              <Link to="/login" className="btn-primary flex items-center gap-2">
                <User size={18} />
                <span>Login</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${scrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg font-medium ${
                location.pathname === link.path
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-100 my-2"></div>
          <Link to="/login" onClick={() => setIsOpen(false)} className="mx-4 btn-primary text-center">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
