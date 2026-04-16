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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Venue not found</h2>
          <Link to="/sports" className="btn-primary">Back to venues</Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedSlot) {
      toast.error('Please select a time slot first!');
      return;
    }
    toast.success(`Successfully booked ${venue.name} for ${selectedDate} at ${selectedSlot}!`);
    setSelectedSlot(null);
  };

  const dates = ['Today', 'Tomorrow', 'Day After'];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link to="/sports" className="inline-flex items-center text-slate-500 hover:text-primary-600 mb-6 transition-colors">
          <ChevronLeft size={20} className="mr-1" /> Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content (Images + Details) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-sm">
              <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:text-primary-600 shadow-sm transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Title & Info */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-2">{venue.name}</h1>
                  <div className="flex items-center text-slate-500 text-lg">
                    <MapPin size={20} className="mr-1 text-primary-500 shrink-0" />
                    <span>{venue.location}</span>
                  </div>
                </div>
                <div className="bg-white border border-slate-100 rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
                  <Star className="text-accent-500 fill-accent-500" size={20} />
                  <span className="font-bold text-slate-900">{venue.rating}</span>
                  <span className="text-slate-400">({venue.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {venue.sport}
                </span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <CheckCircle size={14} className="mr-1 text-accent-500" /> Verified Venue
                </span>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Info size={24} className="mr-2 text-primary-500" /> About Venue
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {venue.about}
              </p>
            </div>

            {/* Amenities Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {venue.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book a Slot</h3>
              <div className="border-b border-slate-100 mb-6"></div>

              {/* Date Selection */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <Clock size={18} className="mr-2 text-primary-500" /> Select Date
                </h4>
                <div className="flex gap-2">
                  {dates.map(date => (
                    <button 
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg border transition-colors ${
                        selectedDate === date 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot Selection */}
              <div className="mb-8">
                <h4 className="font-semibold text-slate-900 mb-3">Available Slots</h4>
                <div className="grid grid-cols-2 gap-3">
                  {venue.slots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-3 px-4 rounded-xl text-center font-medium transition-all ${
                        selectedSlot === slot
                          ? 'bg-primary-600 text-white shadow-md transform scale-[1.02]'
                          : 'bg-slate-50 border border-slate-100 text-slate-700 hover:border-primary-300 hover:bg-primary-50/50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>



              <button 
                onClick={handleBooking}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-sm ${
                  selectedSlot 
                    ? 'btn-primary' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
                disabled={!selectedSlot}
              >
                {selectedSlot ? 'Confirm Booking' : 'Select a Slot'}
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center">
                <CheckCircle size={12} className="mr-1" /> Instant confirmation
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
