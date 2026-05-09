import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, Filter, Star, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { venues, sportsCategories, locations } from '../../data/dummyData';

const SportsListing = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedSport, setSelectedSport] = useState(searchParams.get('filter') || 'All');
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || 'Mumbai (All)');
  const [priceRange, setPriceRange] = useState(2000);
  const [filteredVenues, setFilteredVenues] = useState(venues);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = venues;

    if (searchTerm) {
      result = result.filter(v => 
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.sport.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedSport !== 'All') {
      result = result.filter(v => v.sport === selectedSport || v.sport === 'Multiple');
    }
    
    if (selectedLocation !== 'Mumbai (All)') {
      result = result.filter(v => v.location.includes(selectedLocation));
    }

    // Price filtering removed as price data is no longer used

    setFilteredVenues(result);
  }, [searchTerm, selectedSport, selectedLocation, priceRange]);

  const popularSearches = ['Basketball', 'Turf', 'Indoor', 'Swimming'];

  return (
    <div className="bg-background min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        
        {/* Header & Smart Search */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-none mb-6 text-text-main">
                Find your <span className="gradient-text-blue">Arena</span>
              </h1>
              <p className="text-xl text-text-secondary font-medium max-w-xl">
                Elite sports facilities across Mumbai, vetted for performance and safety.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-primary-500 font-black tracking-[0.2em] text-xs uppercase">Live Inventory</span>
              <div className="bg-primary-500/10 text-primary-500 px-4 py-2 rounded-full font-bold text-sm border border-primary-500/20">
                {filteredVenues.length} Results Available
              </div>
            </div>
          </motion.div>
          
          <div className="relative space-y-6">
            <div className="glass-card-premium p-4 flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-500" size={24} />
                <input 
                  type="text" 
                  placeholder="Search by venue name or sport..." 
                  className="w-full pl-16 pr-6 py-5 bg-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-bold text-lg placeholder-text-muted text-text-main"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-4 w-full lg:w-auto">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${isFilterOpen ? 'bg-primary-500 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-text-main border border-border-main'}`}
                >
                  <Filter size={20} />
                  Filters
                </button>
                <button className="btn-primary py-5 px-10 hidden sm:block">Search</button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap items-center gap-4 px-2">
              <span className="text-xs font-black uppercase tracking-widest opacity-40">Popular:</span>
              {popularSearches.map(tag => (
                <button 
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-bold hover:bg-primary-500/10 hover:border-primary-500/30 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Advanced Filter Drawer */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="glass-card-premium p-8 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest opacity-50 flex items-center gap-2">
                        <Sparkles size={14} className="text-primary-500" /> Sport Type
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['All', ...sportsCategories.map(c => c.name)].map(sport => (
                          <button
                            key={sport}
                            onClick={() => setSelectedSport(sport)}
                            className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border ${selectedSport === sport ? 'bg-primary-500 border-primary-500 text-white shadow-lg' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                          >
                            {sport}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest opacity-50 flex items-center gap-2">
                        <MapPin size={14} className="text-primary-500" /> Location
                      </label>
                      <select 
                        className="w-full p-4 bg-white/5 border border-border-main rounded-2xl font-bold appearance-none cursor-pointer focus:ring-2 focus:ring-primary-500/50 outline-none text-text-main"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        {locations.map(loc => (
                          <option key={loc} value={loc} className="bg-background text-text-main">{loc}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest opacity-50 flex items-center gap-2">
                        <Sparkles size={14} className="text-primary-500" /> Premium Status
                      </label>
                      <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <CheckCircle size={20} className="text-primary-500" />
                        <span className="text-sm font-bold text-text-main">Vetted & Verified Venues Only</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10 flex justify-end gap-4">
                    <button 
                      onClick={() => {
                        setSelectedSport('All');
                        setSelectedLocation('Mumbai (All)');
                        setPriceRange(2000);
                        setSearchTerm('');
                      }}
                      className="px-6 py-3 text-xs font-black uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                    >
                      Reset All
                    </button>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="btn-primary px-8 py-3 text-xs uppercase tracking-widest"
                    >
                      Apply Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Results Grid */}
        <AnimatePresence mode="popLayout">
          {filteredVenues.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredVenues.map((venue) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={venue.id} 
                  className="glass-card-premium group flex flex-col overflow-hidden h-full"
                >
                  <div className="relative h-72 overflow-hidden p-4">
                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md px-4 py-2 rounded-2xl text-sm font-black flex items-center gap-1.5 shadow-2xl">
                      <Star className="text-yellow-500 fill-yellow-500" size={16} />
                      {venue.rating}
                    </div>
                    <div className="absolute bottom-8 left-8 bg-primary-600/90 backdrop-blur-md text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl">
                      {venue.sport}
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-display font-black mb-3 tracking-tight line-clamp-1 group-hover:text-primary-500 transition-colors text-text-main">{venue.name}</h3>
                    <div className="flex items-center text-text-secondary mb-8 text-sm font-medium">
                      <MapPin size={20} className="mr-2 text-primary-500" />
                      <span className="line-clamp-1">{venue.location}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {venue.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="bg-primary-500/10 text-primary-500 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-primary-500/20">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8 border-t border-[var(--border-color)]">
                      <Link to={`/venue/${venue.id}`} className="btn-primary w-full text-center py-4 block">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card-premium py-32 text-center"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-500/10 mb-8 text-primary-500">
                <Search size={40} className="stroke-[3]" />
              </div>
              <h3 className="text-4xl font-display font-black mb-4 tracking-tight text-text-main">No Venues Found</h3>
              <p className="text-xl text-text-secondary max-w-lg mx-auto font-medium">
                We couldn't match your criteria. Try adjusting your filters or search terms for better results.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSport('All');
                  setSelectedLocation('Mumbai (All)');
                  setPriceRange(2000);
                }}
                className="mt-10 btn-primary px-12 py-4"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


export default SportsListing;
