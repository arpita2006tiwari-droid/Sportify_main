import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Calendar, Search } from 'lucide-react';

const reasons = [
  {
    icon: <CheckCircle className="text-blue-500" size={24} />,
    title: "Premium Sports Venues",
    description: "Access elite sports facilities across Mumbai's best locations."
  },
  {
    icon: <Calendar className="text-purple-500" size={24} />,
    title: "Instant Online Booking",
    description: "Book your slots in seconds with our seamless real-time system."
  },
  {
    icon: <Users className="text-blue-600" size={24} />,
    title: "Trusted by Local Athletes",
    description: "Join a community of 1000+ passionate Mumbai players."
  },
  {
    icon: <Search className="text-purple-600" size={24} />,
    title: "Easy Venue Discovery",
    description: "Find the perfect field or court with our advanced search filters."
  }
];

const WhyChoose = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-20 max-w-xl mx-auto lg:mx-0 bg-surface/50 backdrop-blur-2xl p-3 rounded-[2rem] shadow-2xl flex items-center border border-border-main w-[95%] lg:w-full transition-all hover:bg-surface/80"
            >
              Why Mumbai Chooses <span className="gradient-text-blue">Sportify</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-8 border border-border-main group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors duration-300 text-text-main">{reason.title}</h4>
                  <p className="text-text-secondary leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visuals */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl mt-10"
              >
                <img src={`${import.meta.env.BASE_URL}images/felix-yu-Ii7adwWwNh4-unsplash.jpg`} alt="Basketball" className="w-full h-80 object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={`${import.meta.env.BASE_URL}images/eduardo-cano-photo-co-6aHmLVmw1qk-unsplash.jpg`} alt="Gymnastics" className="w-full h-80 object-cover" />
              </motion.div>

              {/* Stats Cards Overlay */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 bg-surface/80 backdrop-blur-2xl border border-border-main p-6 rounded-3xl shadow-3xl z-20 text-center animate-float"
              >
                <p className="text-4xl font-black text-primary-500">50+</p>
                <p className="text-text-main text-sm font-bold uppercase tracking-widest mt-1">Venues</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 right-0 translate-x-1/4 bg-gradient-to-br from-primary-600 to-purple-600 p-6 rounded-3xl shadow-3xl z-20 text-center text-white"
              >
                <p className="text-3xl font-black">24/7</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mt-1">Booking</p>
              </motion.div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-500/20 blur-[100px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
