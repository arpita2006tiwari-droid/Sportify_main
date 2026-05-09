import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, Star, Clock, CheckCircle, Info, Share2, ChevronLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { venues } from '../../data/dummyData';

const VenueDetails = () => {
  const { id } = useParams();
  const venue = venues.find(v => v.id === parseInt(id));
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-premium-dark">
        <div className="glass-card p-12 text-center">
          <h2 className="text-4xl font-display font-black text-white mb-8">Arena Not Found</h2>
          <Link to="/sports" className="btn-primary">View All Arenas</Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedSlot) {
      toast.error('Please select a time slot first!');
      return;
    }
    toast.success(`Reserved ${venue.name} for ${selectedDate} at ${selectedSlot}!`);
    setSelectedSlot(null);
  };

  const dates = ['Today', 'Tomorrow', 'Day After'];

  return (
    <div className="bg-background min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        
        {/* Back navigation */}
        <Link to="/sports" className="inline-flex items-center text-text-muted hover:text-primary-600 mb-10 transition-colors font-bold uppercase tracking-widest text-xs">
          <ChevronLeft size={16} className="mr-2" /> Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content (Images + Details) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Image */}
            <div className="relative h-96 sm:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white">
              <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute top-8 right-8 flex gap-4">
                <button className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy-900 hover:bg-primary-600 hover:text-white shadow-2xl transition-all">
                  <Share2 size={24} />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Title & Info */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-50 text-primary-600 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest border border-primary-100">
                    {venue.sport}
                  </span>
                  <span className="bg-white px-4 py-1.5 rounded-xl text-xs font-bold text-slate-400 border border-slate-100 flex items-center shadow-sm">
                    <CheckCircle size={14} className="mr-1.5 text-accent-500" /> Verified Arena
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-black text-text-main tracking-tighter leading-[1.1] mb-4">{venue.name}</h1>
                <div className="flex items-center text-text-secondary text-xl font-medium">
                  <MapPin size={24} className="mr-2 text-primary-500 shrink-0" />
                  <span>{venue.location}</span>
                </div>
              </div>
              <div className="glass-card-light p-6 flex flex-col items-center gap-1 border-white shadow-xl min-w-[160px]">
                <div className="flex items-center gap-2">
                  <Star className="text-accent-500 fill-accent-500" size={24} />
                  <span className="text-3xl font-black text-navy-900">{venue.rating}</span>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{venue.reviews} Reviews</span>
              </div>
            </div>

            {/* About & Amenities Tabs (Modern Stack) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card-light p-10 border-white shadow-xl">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-6 flex items-center">
                  <Info size={24} className="mr-3 text-primary-500" /> Executive Summary
                </h2>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">
                  {venue.about}
                </p>
              </div>

              <div className="glass-card-light p-10 border-white shadow-xl">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-8">Premier Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {venue.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-navy-900 font-bold text-sm bg-white p-4 rounded-2xl border border-slate-50 shadow-sm">
                      <div className="w-1.5 h-6 rounded-full bg-primary-500 mr-4"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-premium-dark p-10 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)] border border-white/5">
              <div className="flex justify-center items-center mb-10">
                <h3 className="text-3xl font-display font-bold text-white tracking-tight text-center">Reserve</h3>
              </div>

              {/* Date Selection */}
              <div className="mb-10">
                <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-4 flex items-center">
                  <Clock size={16} className="mr-2 text-primary-400" /> Select Schedule
                </h4>
                <div className="flex gap-3">
                  {dates.map(date => (
                    <button 
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`flex-1 py-3 text-xs font-black rounded-2xl border transition-all uppercase tracking-widest ${
                        selectedDate === date 
                          ? 'border-primary-500 bg-primary-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                          : 'border-white/10 text-white/40 hover:bg-white/5'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot Selection */}
              <div className="mb-12">
                <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-4">Availability Window</h4>
                <div className="grid grid-cols-2 gap-4">
                  {venue.slots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-4 px-4 rounded-2xl text-center font-bold text-sm transition-all border ${
                        selectedSlot === slot
                          ? 'bg-white text-navy-900 border-white shadow-2xl scale-105'
                          : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleBooking}
                className={`w-full py-5 rounded-[2rem] font-black text-xl transition-all shadow-2xl relative overflow-hidden group/btn ${
                  selectedSlot 
                    ? 'btn-primary' 
                    : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
                }`}
                disabled={!selectedSlot}
              >
                {selectedSlot ? 'Finalize Booking' : 'Select Time Slot'}
              </button>
              
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary-400">
                  <CheckCircle size={14} /> Instant Access
                </div>
                <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/30">
                  Verified Security
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
