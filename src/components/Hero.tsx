import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Master Data Structures & Algorithms
        </h1>
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Why DSA Matters?</h2>
            <p className="text-lg text-white/90">
              Data Structures and Algorithms form the foundation of computer science and software development. 
              They are essential for writing efficient code, solving complex problems, and excelling in technical interviews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p>Develop strong analytical and problem-solving skills</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p>Learn to write efficient and optimized code</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p>Excel in technical interviews and advance your career</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;