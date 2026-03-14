import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Company */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src="/logo.png" alt="ILM Educational Trust & Super AIP" className="h-16 w-auto mb-4 bg-white/90 p-2 rounded-lg" />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
              India's premier AI education partner — delivering AI, robotics, and digital skills to students, teachers, and institutions across India. Official partner of Super AI Polaris.
            </p>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Tech Park, Bengaluru, Karnataka 560001, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:contact@ilmacademy.in" className="hover:text-white transition-colors">contact@ilmacademy.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="text-white font-bold mb-4">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/programs" className="hover:text-accent transition-colors">AI for Schools (K-12)</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">AI & Robotics Certification</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">AI Teacher Training</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">Higher Education AI Suite</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">AI & Robotics Books</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">Online Live Classes</Link></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About ILM Academy</Link></li>
              <li><Link to="/partnership" className="hover:text-accent transition-colors">Our Partnership</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Leadership Team</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Careers at ILM</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">News & Blog</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Events & Workshops</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-accent transition-colors">Admission Process</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Fee Structure & EMI</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Student Login</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Partner Section & Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-sm text-gray-500">Proud Technology Partner:</span>
            <a href="https://www.superaipolaris.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="font-heading font-bold text-white tracking-wider">Super AI Polaris</span>
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Youtube size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all"><Facebook size={18} /></a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ILM Academy. All rights reserved. | Powered by Super AI Polaris.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
