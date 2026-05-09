import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aravind Sharma",
    sport: "Basketball Player",
    location: "Andheri",
    image: "https://i.pravatar.cc/150?u=aravind",
    review: "The easiest court booking experience I've had in Mumbai. No more calling around or dealing with middlemen. Pure convenience!",
    rating: 5
  },
  {
    name: "Priya Deshmukh",
    sport: "Parent",
    location: "Thane",
    image: "https://i.pravatar.cc/150?u=priya",
    review: "Found amazing gymnastics coaching for my daughter. The venue quality is top-notch and the booking process was seamless.",
    rating: 5
  },
  {
    name: "Rohan Mehta",
    sport: "College Student",
    location: "Wadala",
    image: "https://i.pravatar.cc/150?u=rohan",
    review: "As a student, discovering new venues for weekend matches used to be hard. Sportify made it so simple and transparent.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black text-text-main mb-6 tracking-tight"
          >
            What Mumbai <span className="gradient-text-blue">Players Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Trusted by athletes, students, and sports communities across Mumbai.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-premium p-8 group glow-border"
            >
              <Quote className="text-primary-500/20 absolute top-8 right-8" size={60} />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-primary-500 to-purple-500">
                  <img src={item.image} alt={item.name} className="w-full h-full rounded-full object-cover border-2 border-navy-950" />
                </div>
                <div>
                  <h4 className="text-text-main font-bold text-lg">{item.name}</h4>
                  <p className="text-primary-500 text-sm font-semibold">{item.sport} • {item.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed italic">
                "{item.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
