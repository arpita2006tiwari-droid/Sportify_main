import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Shield, Map, UserCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-blue-500" size={24} />,
    title: "Instant Venue Booking",
    description: "Book your favorite sports arena in Mumbai in less than 60 seconds."
  },
  {
    icon: <Clock className="text-purple-500" size={24} />,
    title: "Real-Time Availability",
    description: "Live slot tracking so you never miss a chance to play."
  },
  {
    icon: <Shield className="text-blue-600" size={24} />,
    title: "Verified Sports Centers",
    description: "Every venue is hand-picked and verified for quality and safety."
  },
  {
    icon: <Map className="text-purple-600" size={24} />,
    title: "Interactive Mumbai Map",
    description: "Find venues near you with our smart geographical search."
  },
  {
    icon: <UserCheck className="text-blue-400" size={24} />,
    title: "Easy Registration",
    description: "One-tap sign up for athletes, students, and local clubs."
  },
  {
    icon: <Sparkles className="text-purple-400" size={24} />,
    title: "Smart Recommendations",
    description: "Personalized suggestions based on your sports interests."
  }
];

const PremiumFeatures = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black mb-6 tracking-tight"
          >
            Everything You Need to <span className="gradient-text-blue">Play Better</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Experience the future of sports booking with our premium tech-driven platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-premium p-10 group"
            >
              <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-8 border border-border-main group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-500 transition-colors duration-300 text-text-main">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
              
              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
