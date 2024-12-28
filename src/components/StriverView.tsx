import React from 'react';

const steps = [
  { title: "Learn the basics", count: 31, link: "src/components/learnbasic.html" },
  { title: "Learn Important Sorting Techniques", count: 7 },
  { title: "Solve Problems on Arrays", count: 40 },
  { title: "Binary Search", count: 32 },
  { title: "Strings", count: 15 },
  { title: "Learn LinkedList", count: 31 },
  { title: "Recursion", count: 25 },
  { title: "Bit Manipulation", count: 18 },
  { title: "Stack and Queues", count: 30 },
  { title: "Sliding Window & Two Pointer", count: 12 },
  { title: "Heaps", count: 17 },
  { title: "Greedy Algorithms", count: 16 },
  { title: "Binary Trees", count: 39 },
  { title: "Binary Search Trees", count: 16 },
  { title: "Graphs", count: 54 },
  { title: "Dynamic Programming", count: 56 },
  { title: "Tries", count: 7 },
  { title: "Strings Advanced", count: 43 }
];

const StriverView = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-green-50 p-6 rounded-xl mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Striver's A2Z DSA Course/Sheet</h1>
        <div className="bg-white p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">FAQ</h2>
          <p className="text-gray-600">
            This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner. 
            The lecture quality is better than what you get in paid courses, the only thing we don't provide is doubt support, 
            but trust me our YouTube video comments resolve that as well, we have a wonderful community of 250K+ people who 
            engage in all of the videos.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">0% complete (0/455)</p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">Step {index + 1}: {step.title}</h3>
                <span className="text-sm text-gray-500">0/{step.count}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <a
                href={step.link ? step.link : "https://example.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-white bg-green-600 rounded font-bold text-center hover:bg-green-700"
              >
                Start
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StriverView;
