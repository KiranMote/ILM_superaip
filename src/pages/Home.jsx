import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle, BarChart, ShieldCheck, Zap, BookOpen, Users, Award, PlayCircle } from 'lucide-react';

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

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "Who can enroll at ILM Academy?", a: "Anyone! We have programs for students from Class 1 onwards, working professionals, teachers, and institutions. There is no age bar for our online courses." },
    { q: "Are ILM Academy certificates recognized?", a: "Yes. All our certificates are co-branded with Super AI Polaris — recognized by CBSE-affiliated schools, state board institutions, colleges, and employers across India." },
    { q: "Do I need prior coding or AI knowledge to enroll?", a: "No. Most of our programs start from absolute zero. Our beginner courses are designed for students with no technical background at all." },
    { q: "Are online classes live or recorded?", a: "Our online classes are live, instructor-led sessions. All sessions are recorded and made available for 30 days so you can revise at your own pace." },
    { q: "What is NeuraEduBOT and how does it help me?", a: "NeuraEduBOT is an AI-powered tutor, part of the Super AI Polaris platform. It is available 24/7 to answer your subject doubts, recommend practice problems, and track your learning progress." }
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 -mr-40 mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 mb-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white rounded-full py-2 px-4 shadow-sm border border-gray-100 mb-6 w-max">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-gray-700">Official Partner of Super AI Polaris</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0A0F2C] leading-[1.15] mb-6">
              Where Traditional <span className="text-primary tracking-tight">Learning Meets</span> the Intelligence of Tomorrow.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Equipping students from Class 1 to postgrads with future-ready skills — AI, robotics, and machine learning — backed by Super AI Polaris.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary w-full sm:w-auto">Explore Programs</button>
              <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                <PlayCircle size={20} /> Book Free Demo
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary">DS</div>
                <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-700">AM</div>
                <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-700">RK</div>
              </div>
              <p>⭐ 4.8/5 Rating · 10,000+ Students</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-background rounded-xl h-[400px] w-full overflow-hidden flex flex-col">
                 <div className="h-12 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 h-6 bg-gray-100 rounded-md w-1/2"></div>
                 </div>
                 <div className="p-6 flex-grow flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-2">
                       <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=100&h=100" alt="Student Profile" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm hover:scale-110 transition-transform cursor-pointer" />
                       <div>
                         <div className="text-sm font-bold text-gray-800">Learn with NeuraBOT</div>
                         <div className="text-xs font-semibold text-gray-400">Class 6 • Robotics</div>
                       </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 rounded-lg shadow-sm overflow-hidden group relative cursor-pointer border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=300&h=200" alt="Students learning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <div className="h-24 rounded-lg shadow-sm overflow-hidden group relative cursor-pointer border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300&h=200" alt="Teamwork" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <div className="h-24 rounded-lg shadow-sm border-2 border-primary/40 overflow-hidden group relative cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300&h=200" alt="Robotics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    <div className="flex-grow bg-white rounded-xl shadow-sm mt-3 p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-100 hover:border-primary/30 group">
                      <div className="w-1/3 rounded-lg overflow-hidden relative">
                         <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200&h=200" alt="AI Class" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                               <PlayCircle size={16} />
                            </div>
                         </div>
                      </div>
                      <div className="w-2/3 flex flex-col justify-center">
                        <div className="text-sm font-bold text-gray-900 mb-1">Introduction to Machine Learning</div>
                        <div className="text-xs text-gray-500 mb-2">Live Session • 45 mins</div>
                        <div className="mt-auto flex items-center gap-2">
                           <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider">Join Now</span>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -right-6 top-10 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-4 z-20 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><CheckCircle size={20} /></div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">NEP 2020</p>
                <p className="text-sm font-bold text-gray-800">100% Aligned</p>
              </div>
            </div>
            
            <div className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-4 z-20 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-accent"><Award size={20} /></div>
              <div>
                <p className="text-xs text-gray-500 font-semibold">Certified</p>
                <p className="text-sm font-bold text-gray-800">AI Tutors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Trusted by leading schools across India</p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="py-2 animate-marquee whitespace-nowrap flex gap-12 items-center text-xl font-heading font-bold text-gray-300">
            <span>Delhi Public School</span> <span>•</span> 
            <span>Ryan International</span> <span>•</span> 
            <span>Kendriya Vidyalaya</span> <span>•</span> 
            <span>CSJMU Kanpur</span> <span>•</span> 
            <span>Amity</span> <span>•</span>
            <span>Delhi Public School</span> <span>•</span> 
            <span>Ryan International</span> <span>•</span> 
            <span>Kendriya Vidyalaya</span> <span>•</span> 
            <span>CSJMU Kanpur</span> <span>•</span> 
            <span>Amity</span>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 bg-[#0A0F2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[
            { n: "10k+", l: "Students Enrolled" },
            { n: "200+", l: "Certified Educators" },
            { n: "50+", l: "Partner Schools" },
            { n: "98%", l: "Satisfaction Rate" },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.n}</p>
                <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{stat.l}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">Not Just an Academy. A Movement.</h2>
          <p className="text-gray-600">Through our partnership with Super AI Polaris, every student gets access to enterprise-grade AI tools, robotics labs, and a curriculum mirroring top global institutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { i: <Zap className="text-accent" size={32} />, t: "AI-Powered Learning", d: "Powered by NeuraEduBOT, an AI tutor available 24/7 to answer student doubts instantly." },
            { i: <ShieldCheck className="text-primary" size={32} />, t: "NEP 2020 Aligned", d: "Designed to prepare students for board exams, competitive exams, and industry careers." },
            { i: <Award className="text-accent" size={32} />, t: "Certified Teachers", d: "Educators trained through Super AI Polaris's rigorous 40-hour AI Teacher certification." },
            { i: <CheckCircle className="text-primary" size={32} />, t: "Hands-On Robotics", d: "Build, code, and deploy real AI-powered robots developing critical thinking skills." },
            { i: <BookOpen className="text-accent" size={32} />, t: "Flexible Learning", d: "Offline, online live, or hybrid. Morning, afternoon, and evening batches available." },
            { i: <Award className="text-primary" size={32} />, t: "Recognized Certification", d: "Co-branded with Super AI Polaris — recognized by schools and employers across India." },
          ].map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card h-full group hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.i}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.t}</h3>
                <p className="text-gray-600 line-clamp-3">{feature.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-64 h-64 border-[40px] border-background rounded-full -mr-32 opacity-50 pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-48 h-48 border-[20px] border-primary/5 rounded-full -ml-24 mb-20 pointer-events-none"></div>
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">A Program for Every Stage</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {[
            { t: "AI for Schools — K-12", tag: "Class 1 to 12", d: "Flagship school curriculum covering digital literacy, Python, ML, and AI ethics." },
            { t: "AI & Robotics Certification", tag: "Age 10–18", d: "Hands-on robotics building with NeuraBOT kits. Circuitry, Arduino, Python vision." },
            { t: "AI Teacher Training", tag: "Educators", d: "40-hour rigorous certification for integrating AI tools into modern classrooms." },
            { t: "Higher Education AI Suite", tag: "Colleges", d: "NeuraEdge LMS, NeuraEaglei smart examination, and faculty training." },
          ].map((prog, i) => (
            <FadeIn key={i}>
              <div className="flex bg-background rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4">{prog.tag}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{prog.t}</h3>
                  <p className="text-gray-600 mb-6">{prog.d}</p>
                  <a href="#" className="font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-secondary">View All Programs</button>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Your AI Journey Starts Today.</h2>
            <p className="text-primary-100 text-lg">Don't wait for tomorrow's world to arrive. Prepare for it now. Join ILM Academy and unlock the power of AI education.</p>
          </div>
          <div className="shrink-0 flex flex-col items-center sm:items-end">
             <button className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg shadow-glow transition-all active:scale-95">Get Free Counselling</button>
             <p className="mt-4 text-sm font-medium text-primary-200">📞 Or call: +91 98765 43210</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
