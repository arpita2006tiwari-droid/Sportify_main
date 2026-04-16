import { CheckCircle, ShieldCheck, Zap, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 pt-8">
              <div className="inline-block border border-slate-300 rounded-full px-5 py-1.5 text-sm font-medium text-slate-700 mb-8 border-slate-300/60 shadow-sm bg-white/50 backdrop-blur-sm">
                About Sportify
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-medium text-slate-900 leading-tight tracking-tight mb-10">
                At our sports centers, we bring sport and community together. From beginners to professionals – everyone can find their place here.
              </h1>
              <a href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white rounded-full px-7 py-3.5 font-medium hover:bg-slate-800 transition-colors group">
                Get in touch 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>
            </div>

            {/* Right Content - Image Collage */}
            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Large Image */}
                <div className="relative rounded-[2rem] overflow-hidden flex-1 sm:w-[60%] h-80 sm:h-[420px] group shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200" 
                    alt="Basketball Court" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Top floating pill */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                      Basketball venue
                    </span>
                  </div>

                  {/* Bottom Text and Action button */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <p className="text-white text-lg font-medium leading-snug pr-4">
                      A space for training, relaxing, and friendly matches
                    </p>
                    <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 hover:bg-white hover:text-black transition-colors cursor-pointer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </div>
                  </div>
                </div>

                {/* Small Image & Text Column */}
                <div className="flex-1 sm:w-[40%] flex flex-col gap-6">
                  {/* Small Image */}
                  <div className="relative rounded-[2rem] overflow-hidden h-48 sm:h-56 group shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&q=80&w=800" 
                      alt="Gymnastics Center" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    <div className="absolute top-5 left-5">
                      <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                        Gymnastics
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-5 text-white font-medium">
                      Pro Center
                    </div>
                  </div>

                  {/* Text & Arrows */}
                  <div className="px-2 flex flex-col justify-between flex-1">
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      Discover your new favorite place – play, train, and compete.
                    </p>
                    <div className="flex gap-3">
                      <button className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <button className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-[#F9F9F9] border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Dark Card */}
            <div className="bg-[#111111] rounded-[2.5rem] overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[480px]">
              {/* Image half */}
              <div className="w-full sm:w-1/2 h-64 sm:h-full relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800" 
                  alt="Basketball Court" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Text half */}
              <div className="w-full sm:w-1/2 p-8 sm:p-10 flex flex-col justify-center relative">
                <h2 className="text-3xl font-medium text-white leading-tight mb-4">
                  Premium Basketball Courts for Training and Play
                </h2>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Our professional courts are designed for both individual practice and group sessions.
                </p>
                
                <div className="mt-auto flex justify-between items-end">
                  <a href="/sports" className="inline-flex items-center gap-2 border border-white/30 text-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition-colors group">
                    Book a court 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                  
                  <div className="flex items-center gap-4 text-white/50 text-sm">
                    1/2
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Large Text & Feature */}
            <div className="flex flex-col h-full lg:pt-10">
              <h2 className="text-5xl md:text-[3.5rem] font-medium text-slate-900 leading-[1.1] mb-16 tracking-tight">
                Experience the Best in Sports and More
              </h2>
              
              <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 mt-auto">
                {/* Overlapping small image */}
                <div className="relative w-40 h-48 sm:w-48 sm:h-56 shrink-0 rounded-3xl overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1519861531473-920026073fd6?auto=format&fit=crop&q=80&w=600" 
                    alt="Sports equipment" 
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-800 hover:scale-110 transition-all z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                  </button>
                </div>
                
                {/* Feature Description */}
                <div className="pt-4 max-w-xs">
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Our facilities feature state-of-the-art courts, training zones, and spaces for tournaments or casual games. A place where sport and leisure come together perfectly.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">4</div>
              <div className="text-primary-100 font-medium tracking-wide">Venues</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">50k+</div>
              <div className="text-primary-100 font-medium tracking-wide">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">2</div>
              <div className="text-primary-100 font-medium tracking-wide">Sports</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">300k+</div>
              <div className="text-primary-100 font-medium tracking-wide">Bookings</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
