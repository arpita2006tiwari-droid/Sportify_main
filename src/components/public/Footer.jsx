import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                S
              </div>
              <span className="text-2xl font-display font-bold text-white">
                Sportify
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Find and book the best sports venues in Mumbai. We make it easy to play your favorite sports with friends.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors font-bold text-xs uppercase">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors font-bold text-xs uppercase">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors font-bold text-xs uppercase">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors font-bold text-xs uppercase">
                IN
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/sports" className="hover:text-primary-400 transition-colors">Find Venues</Link></li>
              <li><Link to="/sports" className="hover:text-primary-400 transition-colors">Sports Categories</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Popular Sports */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Popular Sports</h3>
            <ul className="space-y-3">
              <li><Link to="/sports?filter=Basketball" className="hover:text-primary-400 transition-colors">Basketball Courts</Link></li>
              <li><Link to="/sports?filter=Gymnastics" className="hover:text-primary-400 transition-colors">Gymnastics Centers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-1" size={20} />
                <span> Andheri East, Mumbai, 400093</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <span>+91 99676 73241</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={20} />
                <span>inspiresports17@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Sportify. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
