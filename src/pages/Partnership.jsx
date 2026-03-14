import React from 'react';

const Partnership = () => {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="text-center section-padding pb-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A0F2C] mb-4">ILM Academy × Super AI Polaris</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">A Partnership Built to Transform Indian Education</p>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-left">
          In 2024, ILM Academy and Super AI Polaris signed a strategic partnership agreement to jointly deliver AI education solutions across India. Under this agreement, ILM Academy serves as Super AI Polaris's ground-level education delivery partner — bringing their technology directly into schools, colleges, and learning centers.
        </p>
      </div>

      <div className="section-padding bg-white pt-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-dark">What Each Party Brings</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">ILM Academy Brings</h3>
            <ul className="space-y-4 text-gray-700 font-medium">
              <li>✓ Physical & online learning centers</li>
              <li>✓ Trained faculty & counselors</li>
              <li>✓ Student community (10,000+)</li>
              <li>✓ School & institutional relationships</li>
              <li>✓ Regional language support</li>
              <li>✓ Local marketing & outreach</li>
            </ul>
          </div>
          <div className="border border-primary/20 rounded-2xl p-8 bg-primary/5">
            <h3 className="text-2xl font-bold text-primary-dark mb-6 border-b border-primary/20 pb-4">Super AI Polaris Brings</h3>
            <ul className="space-y-4 text-primary-dark font-medium">
              <li>✓ NeuraEdge LMS Platform</li>
              <li>✓ NeuraEduBOT AI Tutor</li>
              <li>✓ NeuraEaglei Exam Platform</li>
              <li>✓ NeuraBOT Robotics Kits</li>
              <li>✓ 20+ AI & Robotics Books</li>
              <li>✓ AI Teacher Certification Program</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-padding grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">For Schools & Institutions</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Schools and colleges that partner with ILM Academy get the full Super AI Polaris ecosystem at their doorstep — including platform setup, teacher training, student onboarding, robotics lab installation, and ongoing support.
          </p>
          <button className="btn-primary w-full sm:w-auto">Apply for Institutional Partnership →</button>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">For Individual Students</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Individual students enrolling in any ILM Academy program automatically get access to the Super AI Polaris technology stack — including their personal NeuraEduBOT dashboard, course content on NeuraEdge, and exam access via NeuraEaglei.
          </p>
          <button className="btn-secondary w-full sm:w-auto">Enroll as a Student →</button>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
