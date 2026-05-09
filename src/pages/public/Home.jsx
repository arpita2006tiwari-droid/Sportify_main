import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { sportsCategories, venues } from '../../data/dummyData';
import PremiumFeatures from '../../components/public/PremiumFeatures';
import Testimonials from '../../components/public/Testimonials';
import WhyChoose from '../../components/public/WhyChoose';
import VenueMap from '../../components/public/VenueMap';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Mumbai (All)');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading for the premium experience
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    const handleMouseMove = (e) => {
      const glow = document.getElementById('cursor-glow');
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/sports?search=${searchTerm}&location=${selectedLocation}`);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-navy-950 flex flex-col items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center text-white font-black text-3xl shadow-[0_0_50px_rgba(37,99,235,0.5)]"
        >
          S
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-white font-display font-black tracking-[0.3em] uppercase text-sm opacity-50"
        >
          Loading Excellence
        </motion.p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Cursor Glow Effect */}
      <div className="cursor-glow hidden lg:block" style={{ transform: 'translate(-50%, -50%)' }} id="cursor-glow"></div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden pt-6 lg:pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[60%] h-full bg-primary-600/10 blur-[120px] rounded-full -mr-20 -mt-20"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-500/10 blur-[100px] rounded-full -ml-10 -mb-10"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left mb-16 lg:mb-0 pt-10"
          >
            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] font-playfair leading-[0.9] mb-8 flex flex-col justify-center lg:justify-start items-center lg:items-start italic">
              <span className="gradient-text-blue w-full text-center lg:text-left drop-shadow-2xl font-black py-2 px-4">SPORTS</span>
              <span className="text-text-main font-black tracking-tighter w-full text-center lg:text-left drop-shadow-2xl opacity-90 not-italic">IN MUMBAI</span>
            </h1>
            <p className="text-text-secondary text-2xl sm:text-3xl lg:text-4xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0 font-dancing">
              Premium venues, elite performance — book your space in the heart of Mumbai.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-16">
              <Link to="/sports" className="btn-primary text-xl px-12 py-5 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)] flex items-center gap-3 group">
                Find a Venue <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a href="#features" className="text-sm font-black uppercase tracking-[0.2em] border-b-2 border-primary-500/30 hover:border-primary-500 transition-all py-1">
                Explore Tech
              </a>
            </div>

            {/* Quick Search */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-20 max-w-xl mx-auto lg:mx-0 bg-surface/50 backdrop-blur-2xl p-3 rounded-[2rem] shadow-2xl flex items-center border border-border-main w-[95%] lg:w-full transition-all hover:bg-surface/80"
            >
              <div className="pl-5 text-primary-500 flex items-center justify-center">
                <Search size={22} className="stroke-[2.5px]" />
              </div>
              <input 
                type="text" 
                placeholder="Find your favorite sport..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 px-6 bg-transparent border-none focus:ring-0 text-[var(--text-main)] outline-none text-xl placeholder-slate-400 font-medium"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
              />
              <button type="submit" onClick={handleSearch} className="btn-primary px-10 py-4 text-lg hidden sm:block">
                Search
              </button>
            </motion.div>
          </motion.div>

          {/* Right Hexagon Cluster */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative h-[320px] sm:h-[450px] lg:h-[600px] flex items-center justify-center -mt-16 lg:mt-0 z-0 animate-float"
          >
            <div className="relative w-[500px] h-[660px] mx-auto scale-[0.55] sm:scale-75 lg:scale-100 shrink-0 drop-shadow-3xl">
              <style>{`
                .hex-clip { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
              `}</style>

              {/* Center - Basketball */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-30 transition-all duration-500 hover:scale-110 hover:z-50 hover:brightness-110 ring-4 ring-primary-500/30">
                 <img src={`${import.meta.env.BASE_URL}images/august-phlieger-CREqtqgBFcU-unsplash.jpg`} alt="Basketball Hoop" className="w-full h-full object-cover" />
              </div>

              {/* Top Left - Basketball */}
              <div className="absolute top-1/2 left-1/2 ml-[-144px] mt-[-165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-500 hover:scale-110 hover:z-50 ring-2 ring-white/10">
                 <img src={`${import.meta.env.BASE_URL}images/felix-yu-Ii7adwWwNh4-unsplash.jpg`} alt="Basketball" className="w-full h-full object-cover" />
              </div>

              {/* Top Right - Basketball */}
              <div className="absolute top-1/2 left-1/2 ml-[144px] mt-[-165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-500 hover:scale-110 hover:z-50 ring-2 ring-white/10">
                 <img src={`${import.meta.env.BASE_URL}images/felix-yu-Ii7adwWwNh4-unsplash.jpg`} alt="Basketball Player" className="w-full h-full object-cover" />
              </div>

              {/* Bottom Left - Basketball */}
              <div className="absolute top-1/2 left-1/2 ml-[-144px] mt-[165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-500 hover:scale-110 hover:z-50 ring-2 ring-white/10">
                 <img src={`${import.meta.env.BASE_URL}images/jesse-orrico-mse1vdzZXjA-unsplash.jpg`} alt="Basketball" className="w-full h-full object-cover opacity-90" />
              </div>

              {/* Bottom Right - Basketball */}
              <div className="absolute top-1/2 left-1/2 ml-[144px] mt-[165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20 transition-all duration-500 hover:scale-110 hover:z-50 ring-2 ring-white/10">
                 <img src={`${import.meta.env.BASE_URL}images/jesse-orrico-mse1vdzZXjA-unsplash.jpg`} alt="Basketball Court" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Features Section */}
      <div id="features">
        <PremiumFeatures />
      </div>

      {/* Why Choose Sportify */}
      <WhyChoose />

      {/* Explore Section */}
      <section className="py-24 lg:py-32 bg-background border-t border-border-main" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-7xl font-black mb-6 tracking-tight text-text-main"
            >
              Explore by <span className="gradient-text-blue py-2">Sport</span>
            </motion.h2>
            <p className="text-xl text-text-muted">Pick your passion and find your field.</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {sportsCategories.map((sport, index) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/sports?filter=${sport.name}`} className="group block">
                  <div className="relative h-80 md:h-[500px] rounded-[3rem] overflow-hidden mb-6 shadow-3xl transition-all duration-700 transform group-hover:-translate-y-4">
                    <img src={sport.image} alt={sport.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    
                    <div className="absolute inset-0 p-12 flex flex-col justify-end items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-black text-4xl md:text-5xl drop-shadow-2xl capitalize tracking-tight mb-2">{sport.name}</span>
                      <div className="flex items-center text-primary-400 font-black tracking-widest text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {sport.count} venues Available <ChevronRight size={18} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Venues with scroll reveal */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-text-main"
            >
              Popular in <span className="gradient-text-blue">Mumbai</span>
            </motion.h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">Top-rated facilities loved by our community. Book your slot before they run out!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {venues.slice(0, 3).map((venue, index) => (
              <motion.div 
                key={venue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-premium group flex flex-col overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden p-4">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-sm font-black text-navy-900 flex items-center gap-1.5 shadow-xl">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    {venue.rating}
                  </div>
                  <div className="absolute bottom-8 left-8 bg-primary-600/90 backdrop-blur-md text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                    {venue.sport}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-text-main mb-3 group-hover:text-primary-500 transition-colors">{venue.name}</h3>
                  <div className="flex items-center text-text-secondary mb-8 text-sm font-medium">
                    <MapPin size={18} className="mr-2 text-primary-500" />
                    <span className="line-clamp-1">{venue.location}</span>
                  </div>
                  <div className="mt-auto pt-8 border-t border-[var(--border-color)]">
                    <Link to={`/venue/${venue.id}`} className="btn-primary w-full text-center py-4 flex items-center justify-center gap-2 group/btn">
                      Book Slot <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <VenueMap />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-9xl font-black text-text-main mb-10 tracking-tighter leading-none"
          >
            Ready to <br />
            <span className="gradient-text-blue">Dominate?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl lg:text-3xl text-text-muted mb-16 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Join Mumbai's elite sport community. Secure your arena, elevate your game, and become a part of the Sportify legacy.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/sports" className="btn-primary text-xl px-16 py-6 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.6)]">
              Secure a Venue
            </Link>
            <Link to="/about" className="text-lg font-black uppercase tracking-widest hover:text-primary-500 transition-colors">
              Experience More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

