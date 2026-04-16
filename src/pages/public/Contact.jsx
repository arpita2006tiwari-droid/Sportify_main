import { MapPin, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600">
            Have a question about a venue? Want to list your facility on Sportify? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mr-4 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Our Office</h3>
                    <p className="text-slate-600">Andheri East<br />Mumbai, Maharashtra 400093</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mr-4 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+91 99676 73241<br />Mon-Sat: 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mr-4 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">inspiresports17@gmail.com<br /></p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-colors font-bold text-xs uppercase">
                    IG
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-colors font-bold text-xs uppercase">
                    X
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-colors font-bold text-xs uppercase">
                    FB
                  </a>
                </div>
              </div>
            </div>

            {/* Real Map Visual */}
            <div className="h-64 sm:h-80 bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-200">
              <iframe
                title="Google Maps Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent("Andheri East, Mumbai")}&output=embed&iwloc=near`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" required className="input-field" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" required className="input-field" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" required className="input-field" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select id="subject" className="input-field appearance-none">
                  <option>General Inquiry</option>
                  <option>Venue Listing Inquiry</option>
                  <option>Booking Issue</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="input-field resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
