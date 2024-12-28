import React, { useState } from 'react';

const steps = [
  { title: "Learn the basics", count: 31, link: "/learntobasic.html" }, // Link to the HTML file
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
  const [activeStep, setActiveStep] = useState(null);

  const handleStartClick = (stepTitle) => {
    if (stepTitle === "Learn the basics") {
      setActiveStep(stepTitle);
    } else {
      window.open(steps.find(step => step.title === stepTitle).link, '_blank');
    }
  };

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
              <button
                onClick={() => handleStartClick(step.title)}
                className="inline-block mt-4 px-4 py-2 text-white bg-green-600 rounded font-bold text-center hover:bg-green-700"
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeStep === "Learn the basics" && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Step 1: Learn the basics</h2>
          <p className="text-gray-600 mb-4">0 / 31</p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">Lec 1: Things to Know in C++/Java/Python or any language</h3>
            <p className="text-gray-600 mb-4">0 / 9</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-green-100">
                    <th className="py-2 px-4 text-left">Status</th>
                    <th className="py-2 px-4 text-left">Problem</th>
                    <th className="py-2 px-4 text-left">Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">User Input / Output</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Data Types</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">If Else statements</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Switch Statement</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">What are arrays, strings?</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">For loops</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">While loops</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Functions (Pass by Reference and Value)</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">Time Complexity [Learn Basics, and then analyse in next Steps]</td>
                    <td className="py-2 px-4">Easy</td>
                    <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StriverView;
