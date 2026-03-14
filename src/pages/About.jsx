import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <div className="pt-24 pb-20 overflow-hidden bg-background">
      {/* Hero */}
      <section className="section-padding text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A0F2C] leading-tight mb-6 max-w-4xl mx-auto">
          We Believe Every Student Deserves an AI-Ready Education
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ILM Academy was built on a simple belief — quality AI education should not be limited to elite institutions or urban centers. It belongs everywhere.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="rounded-2xl shadow-xl border border-gray-100" />
          <div>
            <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Our Story</span>
            <h2 className="text-3xl font-extrabold text-primary-dark mb-6">From 30 Students to a National Movement</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ILM Academy began as a passionate team of educators and technologists who saw a growing gap — while the world was moving toward AI, Indian classrooms were operating with 20th-century tools.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, ILM Academy stands at the intersection of education and technology — not as a technology company trying to teach, but as educators who deeply understand technology. Partnering with Super AI Polaris allows us to bring enterprise-grade AI tools directly into schools.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section-padding bg-background">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary-dark mb-4">Our Core Values</h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Innovation First", d: "We continually update curriculum to reflect the latest developments in AI." },
              { t: "Inclusion Always", d: "Programs for all backgrounds. Scholarships, EMI, and rural outreach." },
              { t: "Impact Over Metrics", d: "Success is measured by skills gained and jobs secured, not just numbers." },
              { t: "Integrity in Everything", d: "Transparent pricing. Honest counselling. Delivering what we promise." }
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card h-full text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{v.t}</h3>
                  <p className="text-sm text-gray-600">{v.d}</p>
                </div>
              </FadeIn>
            ))}
         </div>
      </section>
    </div>
  );
};

export default About;
