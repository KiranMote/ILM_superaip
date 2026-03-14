import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, ArrowRight, PlayCircle, Download } from 'lucide-react';

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

const Books = () => {
  const books = [
    {
      class: "1",
      title: "AI & Coding for Young Learners",
      description: "A carefully crafted introduction to computers, mouse skills, and logic using relatable characters and interactive exercises.",
      topics: ["Introduction to computers", "Mouse and keyboard skills", "Understanding how computers work", "Basic software navigation"],
      image: "/books/1.jpg"
    },
    {
      class: "2",
      title: "AI & Coding for Young Learners",
      description: "Building digital confidence through playful exploration. Students learn how everyday machines follow instructions and basic sequences.",
      topics: ["Playful characters and logic", "Interactive pattern exercises", "Digital confidence building", "Everyday technology"],
      image: "/books/2.jpg"
    },
    {
      class: "3",
      title: "AI & Coding for Young Learners",
      description: "A fun transition into structured thinking. Introduces block-based coding and computational thinking concepts.",
      topics: ["Introduction to algorithms", "Logical thinking basics", "Block-based coding basics", "What is AI?"],
      image: "/books/3.jpg"
    },
    {
      class: "4",
      title: "AI & Coding for Young Learners",
      description: "Exploring how AI learns. Students understand machine learning concepts at a high level and see where AI exists in daily life.",
      topics: ["How AI learns", "AI in daily life", "Advanced block coding", "Digital citizenship"],
      image: "/books/4.jpg"
    },
    {
      class: "5",
      title: "AI & Coding for Young Learners",
      description: "Deeper engagement with code and logic. Introduction to data concepts and pattern recognition.",
      topics: ["Deeper block coding", "Introduction to data", "Pattern recognition", "AI tools for creativity"],
      image: "/books/5.jpg"
    },
    {
      class: "6",
      title: "AI & Coding for Young Learners",
      description: "Applying learned concepts creatively. Using AI assistance for art, storytelling, and problem-solving.",
      topics: ["AI assisted art & music", "Storytelling with AI", "Data classification", "Algorithmic thinking"],
      image: "/books/6.jpg"
    },
    {
      class: "7",
      title: "AI & Coding for Young Learners",
      description: "Transitioning towards text-based programming. Python basics and foundational machine learning concepts.",
      topics: ["Python basics", "Machine learning concepts", "Simple AI project building", "Visual neural networks"],
      image: "/books/7.jpg"
    },
    {
      class: "8",
      title: "AI & Coding for Young Learners",
      description: "Practical application through robotics integration and more complex problem-solving in Python.",
      topics: ["Robotics integration", "Intermediate Python", "Data handling", "AI model training"],
      image: "/books/8.jpg"
    },
    {
      class: "9",
      title: "AI & Coding for Young Learners",
      description: "Preparing for board-level contexts. Advanced Python, data science, and hands-on computer vision basics.",
      topics: ["Advanced Python", "Data science fundamentals", "Computer vision basics", "AI ethics"],
      image: "/books/9.jpg"
    },
    {
      class: "10",
      title: "AI & Coding for Young Learners",
      description: "Building functional applications. Creating chatbots, utilizing APIs, and understanding advanced algorithms.",
      topics: ["Chatbot building", "Advanced data models", "Preparing for board exams", "API integrations"],
      image: "/books/10.jpg"
    },
    {
      class: "11",
      title: "AI & Coding for Young Learners",
      description: "Bridging school to college. Full AI/ML project development and comprehensive Generative AI exploration.",
      topics: ["Full AI/ML project development", "LLM exploration", "Generative AI tools", "Career pathways"],
      image: "/books/11.jpg"
    },
    {
      class: "12",
      title: "AI & Coding for Young Learners",
      description: "Mastery and deployment. Building deployable AI solutions and finalizing technical portfolios for careers.",
      topics: ["Model deployment", "Capstone projects", "Advanced Neural Networks", "Industry readiness"],
      image: "/books/12.jpg"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-bold tracking-wider text-sm uppercase mb-4 block">Class 1–12 AI Textbook Series</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A0F2C] leading-tight mb-6 max-w-4xl mx-auto">
              Every concept. Every class. <br /><span className="text-primary">Made for curious minds.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Super AI Polaris publishes a complete series of AI & Robotics textbooks for Class 1 to 12. CBSE and ICSE aligned, NEP 2020 compliant, and designed with modern illustrations and relatable examples to make AI learning accessible, joyful, and rigorous.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Schools</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Home Learning</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Teacher Reference</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> CBSE & ICSE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRESSION TIMELINE */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary-dark mb-4">Grade-Wise Learning Progression</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A structured path from digital literacy to advanced machine learning.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10"></div>
            
            <div className="space-y-12 relative">
              {[
                { band: "Class 1–2", title: "Discovery", desc: "Introduction to computers, mouse and keyboard skills, understanding how computers work, basic software navigation. Playful characters and interactive exercises build digital confidence." },
                { band: "Class 3–4", title: "Exploration", desc: "Introduction to algorithms, logical thinking, block-based coding, and simple AI concepts — what is AI, how does it learn, where do we see it daily." },
                { band: "Class 5–6", title: "Application", desc: "Deeper block coding, introduction to data, pattern recognition, AI tools for creativity — art, music, storytelling with AI assistance." },
                { band: "Class 7–8", title: "Creation", desc: "Python basics, machine learning concepts, AI project building, robotics integration, and introduction to neural networks through visual tools." },
                { band: "Class 9–10", title: "Innovation", desc: "Advanced Python, data science fundamentals, computer vision basics, chatbot building, and AI ethics — preparing for board-level and competitive contexts." },
                { band: "Class 11–12", title: "Mastery", desc: "Full AI/ML project development, LLM exploration, generative AI tools, career pathways in AI — bridging school to college and career." }
              ].map((stage, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">{stage.band}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{stage.title}</h3>
                      <p className="text-gray-600">{stage.desc}</p>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-lg items-center justify-center">
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary-dark mb-4">Complete Book Catalog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore each grade-level textbook featuring age-appropriate lessons, hands-on projects, and modern illustrations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {books.map((book, i) => (
              <FadeIn key={i}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-8 group">
                  <div className="shrink-0 w-full md:w-[200px] flex justify-center items-start">
                    <div className="relative rounded-lg overflow-hidden shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-500">
                      <img src={book.image} alt={`Class ${book.class} Cover`} className="w-full h-auto object-cover max-h-[300px]" onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://via.placeholder.com/300x420?text=Cover+Not+Found";
                        }} />
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <span className="text-xs font-bold tracking-wide text-primary uppercase mb-2">Class {book.class}</span>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">
                      {book.title}
                    </h3>
                    <div className="flex gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-4">
                      <span className="px-2 py-1 bg-gray-100 rounded">CBSE</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">ICSE</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">NEP 2020</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-xs font-bold text-gray-800 mb-2 uppercase">What Students Learn:</p>
                      <ul className="space-y-1">
                        {book.topics.map((topic, j) => (
                          <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" /> {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <button className="btn-secondary text-sm py-2 px-4 flex-1">Preview</button>
                      <button className="btn-primary text-sm py-2 px-4 flex-1">Institution Order</button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE SERIES */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <BookOpen className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold mb-6">About the Series</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Published by Super AI Polaris, this textbook series provides structured, progressive educational content on Artificial Intelligence and coding for Class 1 through 12. Every effort has been made to ensure accuracy, curriculum relevance, and age-appropriate pedagogy with concepts, examples, and tools designed purely for educational enrichment.
            <br/><br/>
            The series is intended to inspire curiosity and build foundational AI literacy encouraging students and educators to stay updated as technology evolves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
             <button className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full font-bold shadow-glow transition-all flex items-center justify-center gap-2">
               Request Sample Copies
             </button>
             <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2">
               <PlayCircle size={20} /> View Series Overview
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
