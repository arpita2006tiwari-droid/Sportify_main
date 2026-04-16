import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronRight, Star } from 'lucide-react';
import { sportsCategories, venues, locations } from '../../data/dummyData';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Mumbai (All)');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/sports?search=${searchTerm}&location=${selectedLocation}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#FAFCF8] pt-6 lg:pt-20">
        {/* Desktop Green Slanted Background */}
        <div 
          className="hidden lg:block absolute top-0 right-0 w-[45%] h-full bg-[#6A7B5A] z-0" 
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
        ></div>
        
        {/* Mobile Green Slanted Background */}
        <div 
          className="block lg:hidden absolute bottom-0 left-0 w-full h-[55%] sm:h-[65%] bg-[#6A7B5A] z-0 opacity-80" 
          style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)' }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 text-center lg:text-left mb-16 lg:mb-0 pt-10">
            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6rem] font-display font-medium leading-[1.0] lg:leading-[1.1] mb-8 tracking-tight flex flex-col justify-center lg:justify-start items-center lg:items-start">
              <span className="text-transparent w-full text-center lg:text-left" style={{ WebkitTextStroke: '2px #E46F59' }}>SPORTS</span>
              <span className="text-[#0B1528] w-full text-center lg:text-left">IN MUMBAI</span>
            </h1>
            <p className="text-slate-600 text-[1.05rem] sm:text-xl lg:text-2xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              Simple, accessible, and high-quality venues — everything you need for the perfect game with your friends.
            </p>
            
            <a href="#categories" className="inline-block text-xl uppercase tracking-widest font-bold text-slate-900 pb-1 border-b-[3px] border-[#E46F59] hover:text-[#E46F59] transition-colors mb-16">
              Find a Venue
            </a>

            {/* Quick Search */}
            <div className="relative z-20 max-w-md mx-auto lg:mx-0 bg-white p-2 rounded-2xl shadow-xl flex items-center border border-slate-100 w-[95%] lg:w-full">
              <input 
                type="text" 
                placeholder="Search sports (e.g. Basketball)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 bg-transparent border-none focus:ring-0 text-slate-700 outline-none text-base"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
              />
              <button type="submit" onClick={handleSearch} className="bg-[#E46F59] text-white rounded-xl px-8 py-3 font-medium hover:bg-[#d45e48] transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Right Hexagon Cluster */}
          <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[450px] lg:h-[600px] flex items-center justify-center -mt-16 lg:mt-0 z-0 overflow-visible">
            <div className="relative w-[500px] h-[660px] mx-auto scale-[0.55] sm:scale-75 lg:scale-100 origin-center lg:origin-center shrink-0">
              {/* Hexagon Path Definition */}
              <style>{`
                .hex-clip { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }
              `}</style>

              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-30 ring-4 ring-white/10 shadow-2xl">
                 <img src="/images/felix-yu-Ii7adwWwNh4-unsplash.jpg" alt="Sport center" className="w-full h-full object-cover" />
              </div>

              {/* Top Left */}
              <div className="absolute top-1/2 left-1/2 ml-[-144px] mt-[-165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20">
                 <img src="/images/maria-budanova-pristavskaya-pJR5MpkKTM8-unsplash.jpg" alt="Gymnastics" className="w-full h-full object-cover" />
              </div>

              {/* Top Right */}
              <div className="absolute top-1/2 left-1/2 ml-[144px] mt-[-165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20">
                 <img src="/images/august-phlieger-CREqtqgBFcU-unsplash.jpg" alt="Basketball indoor" className="w-full h-full object-cover" />
              </div>

              {/* Bottom Left */}
              <div className="absolute top-1/2 left-1/2 ml-[-144px] mt-[165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20">
                 <img src="/images/naveen-ketterer-EIxQkHx4rWk-unsplash.jpg" alt="Swimming" className="w-full h-full object-cover opacity-90" />
              </div>

              {/* Bottom Right */}
              <div className="absolute top-1/2 left-1/2 ml-[144px] mt-[165px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-slate-200 z-20">
                 <img src="/images/eduardo-cano-photo-co-6aHmLVmw1qk-unsplash.jpg" alt="Football turf" className="w-full h-full object-cover opacity-90" />
              </div>
              
              {/* Top Center */}
              <div className="absolute top-1/2 left-1/2 ml-[0px] mt-[-330px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-[#E46F59] opacity-80 z-10 flex items-center justify-center p-6 text-center text-white/90 font-bold tracking-widest text-sm">
                 SPORTIFY
              </div>

              {/* Bottom Center */}
              <div className="absolute top-1/2 left-1/2 ml-[0px] mt-[330px] -translate-x-1/2 -translate-y-1/2 w-48 h-[220px] hex-clip bg-[#6A7B5A] saturate-150 opacity-80 z-10 flex items-end justify-center pb-6 text-white/80 font-medium">
                 Join us
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Explore by Sport</h2>
              <p className="text-slate-600">Find venues for your favorite physical activities</p>
            </div>
            <Link to="/sports" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700 group">
              View All <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {sportsCategories.map((sport) => (
              <Link key={sport.id} to={`/sports?filter=${sport.name}`} className="group w-48 md:w-64 text-center">
                <div className="relative h-56 md:h-64 rounded-3xl overflow-hidden mb-5 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <img src={sport.image} alt={sport.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-60 mix-blend-multiply`}></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-white font-bold text-2xl drop-shadow-lg">{sport.name}</span>
                  </div>
                </div>
                <p className="text-base font-medium text-slate-500">{sport.count} venues</p>
              </Link>
            ))}
          </div>
          <Link to="/sports" className="mt-8 flex md:hidden items-center justify-center w-full btn-secondary">
            View All Sports
          </Link>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Popular Venues in Mumbai</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Top-rated facilities loved by our community. Book your slot before they run out!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.slice(0, 3).map((venue) => (
              <div key={venue.id} className="modern-card p-0 flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                    <Star className="text-accent-500 fill-accent-500" size={14} />
                    {venue.rating}
                  </div>
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                    {venue.sport}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 line-clamp-1">{venue.name}</h3>
                  </div>
                  <div className="flex items-center text-slate-500 mb-4 text-sm">
                    <MapPin size={16} className="mr-1 shrink-0" />
                    <span className="line-clamp-1">{venue.location}</span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-center">
                    <Link to={`/venue/${venue.id}`} className="btn-primary py-2 px-10">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/sports" className="btn-secondary inline-flex items-center gap-2">
              Explore All Venues <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-6">
            Ready to get back in the game?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Join thousands of sports enthusiasts in Mumbai. Find your sport, book a venue, and play!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sports" className="btn-primary text-lg px-8 py-4">
              Find a Venue
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
