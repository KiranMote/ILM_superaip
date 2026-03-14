import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', role: 'Student', program: 'AI for Schools (K-12)', source: 'Google', message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call to backend since this will be handled by Express
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="text-center section-padding pb-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A0F2C] mb-4">We'd Love to Hear From You</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're a curious student, a dedicated teacher, a school administrator, or a business looking to partner — our team is ready to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Send an Enquiry</h2>
          {status === 'success' ? (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg">Thank you! Your message has been sent successfully. We will get back to you within 24 hours.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none" 
                    onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input required type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                    onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                  <input required type="tel" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                    onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City / State *</label>
                  <input required type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                    onChange={e => setFormData({...formData, city: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">I am a:</label>
                <select className="w-full p-3 border border-gray-200 rounded-lg outline-none" onChange={e => setFormData({...formData, role: e.target.value})}>
                  {['Student', 'Teacher', 'School Admin', 'Institution', 'Parent', 'Other'].map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                <select className="w-full p-3 border border-gray-200 rounded-lg outline-none" onChange={e => setFormData({...formData, program: e.target.value})}>
                  {['AI for Schools (K-12)', 'AI & Robotics Certification', 'AI Teacher Training', 'Higher Education AI Suite', 'Books', 'Online Live Classes'].map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea rows="4" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none"
                  onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                {status === 'submitting' ? 'Sending...' : 'Send My Enquiry'}
              </button>
              {status === 'error' && <p className="text-red-500 text-sm mt-2">Error sending message. Please try again later.</p>}
            </form>
          )}
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="bg-[#0A0F2C] text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-gray-300">ILM Academy HQ, Tech Park<br/>Bengaluru, Karnataka 560001, India</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-300">contact@ilmacademy.in<br/>admissions@ilmacademy.in</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-accent shrink-0" size={24} />
                <div>
                  <p className="font-bold">Office Hours</p>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM<br/>Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Embed Placeholder */}
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center text-gray-500 font-medium overflow-hidden border border-gray-100">
             <iframe 
               title="ILM Academy Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9863266224375!2d77.61868471482202!3d12.937213490878107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e5482381f%3A0xe6f4ef1d668fc725!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1629891234567!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy">
             </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
