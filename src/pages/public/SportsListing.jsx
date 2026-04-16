import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, Filter, Star } from 'lucide-react';
import { venues, sportsCategories, locations } from '../../data/dummyData';

const SportsListing = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedSport, setSelectedSport] = useState(searchParams.get('filter') || 'All');
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || 'Mumbai (All)');
  const [filteredVenues, setFilteredVenues] = useState(venues);

  useEffect(() => {
    let result = venues;

    if (searchTerm) {
      result = result.filter(v => v.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    if (selectedSport !== 'All') {
      result = result.filter(v => v.sport === selectedSport || v.sport === 'Multiple');
    }
    
    if (selectedLocation !== 'Mumbai (All)') {
      result = result.filter(v => v.location.includes(selectedLocation));
    }

    setFilteredVenues(result);
  }, [searchTerm, selectedSport, selectedLocation]);

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Discover Venues</h1>
          <p className="text-slate-600 mb-8">Find the perfect spot for your next game in Mumbai.</p>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by venue name..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative w-full md:w-48">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                >
                  <option value="All">All Sports</option>
                  {sportsCategories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="relative w-full md:w-56">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mb-6 flex justify-between items-center text-slate-600">
          <span>Showing <strong>{filteredVenues.length}</strong> venues</span>
        </div>

        {filteredVenues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="modern-card p-0 flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                    <Star className="text-accent-500 fill-accent-500" size={14} />
                    {venue.rating} <span className="text-slate-500 font-normal text-xs">({venue.reviews})</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                    {venue.sport}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{venue.name}</h3>
                  <div className="flex items-center text-slate-500 mb-4 text-sm">
                    <MapPin size={16} className="mr-1 shrink-0" />
                    <span className="line-clamp-1">{venue.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venue.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">
                        {amenity}
                      </span>
                    ))}
                    {venue.amenities.length > 3 && (
                      <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">
                        +{venue.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-center">
                    <Link to={`/venue/${venue.id}`} className="btn-primary px-10">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
              <Search className="text-slate-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No venues found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any venues matching your current filters. Try adjusting your search criteria or selecting a different location.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedSport('All');
                setSelectedLocation('Mumbai (All)');
              }}
              className="mt-6 btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsListing;
