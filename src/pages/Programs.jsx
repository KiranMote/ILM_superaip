import React from 'react';

const ProgramCard = ({ title, tag, duration, desc, learnPoints, cta, delay }) => (
  <div className="card text-left p-8">
    <div className="flex justify-between items-start mb-4">
      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{tag}</span>
      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">{duration}</span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{desc}</p>
    <div className="mb-8">
      <p className="font-bold text-sm text-gray-900 mb-3">What Students Learn:</p>
      <ul className="space-y-2">
        {learnPoints.map((pt, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-600 items-start">
            <span className="text-accent shrink-0 mt-0.5">•</span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className="btn-secondary w-full">{cta}</button>
  </div>
);

const Programs = () => {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="text-center section-padding pb-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A0F2C] mb-4">Our Programs</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">A curriculum designed in alignment with NEP 2020, powered by Super AI Polaris.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProgramCard 
          title="AI for Schools — K-12"
          tag="Class 1 to 12"
          duration="Full Year"
          desc="Flagship school program delivering grade-wise AI education. Covers digital literacy, Python, ML concepts, and robotics lab assignments."
          learnPoints={[
            "Block-based coding & logic (Class 4-6)",
            "Python basics & algorithms (Class 7-9)",
            "Machine learning & neural networks (Class 10-12)"
          ]}
          cta="View Full Curriculum"
        />
        <ProgramCard 
          title="AI & Robotics Certification"
          tag="Age 10-18"
          duration="3 Months"
          desc="Hands-on, project-based program building real robots with NeuraBOT kits. Pitch projects at ILM Demo Day."
          learnPoints={[
            "Electronics & sensors basics",
            "Arduino & Python for robotics",
            "AI vision & object detection"
          ]}
          cta="Enroll in Robotics"
        />
        <ProgramCard 
          title="AI Teacher Training"
          tag="Educators"
          duration="40 Hours"
          desc="India needs 10M AI-ready teachers by 2030. This program certifies educators to handle digital tools safely and effectively."
          learnPoints={[
            "Using NeuraEdge and NeuraEduBOT",
            "Designing AI-integrated lesson plans",
            "AI ethics and digital safety"
          ]}
          cta="Register as an Educator"
        />
      </div>
    </div>
  );
};

export default Programs;
