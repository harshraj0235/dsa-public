import React from 'react';
import StriverHeader from './StriverHeader';
import ProgressCard from './ProgressCard';
import TopicCard from './TopicCard';

const StriverView = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <StriverHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Striver's A2Z DSA Course/Sheet
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">FAQ</h2>
            <p className="text-gray-600">
              This course is made for people who want to learn DSA from A to Z for free in a well-organized 
              and structured manner. The lecture quality is better than what you get in paid courses, 
              the only thing we don't provide is doubt support, but trust me our YouTube video comments 
              resolve that as well, we have a wonderful community of 250K+ people who engage in all of the videos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ProgressCard total={455} completed={0} title="Overall Progress" />
            <ProgressCard total={31} completed={0} title="Learn the Basics" />
            <ProgressCard total={40} completed={0} title="Array Problems" />
          </div>
        </div>

        <div className="space-y-6">
          <TopicCard
            title="Learn the Basics"
            description="Master fundamental programming concepts and basic DSA"
            problemCount={31}
            completedCount={0}
            problems={[
              { name: "User Input / Output", difficulty: "Easy" },
              { name: "Data Types", difficulty: "Easy" },
              { name: "If Else statements", difficulty: "Easy" },
            ]}
          />
          
          <TopicCard
            title="Learn Important Sorting Techniques"
            description="Understanding various sorting algorithms and their implementations"
            problemCount={7}
            completedCount={0}
            problems={[
              { name: "Selection Sort", difficulty: "Easy" },
              { name: "Bubble Sort", difficulty: "Easy" },
              { name: "Merge Sort", difficulty: "Medium" },
            ]}
          />
          
          <TopicCard
            title="Arrays"
            description="Solve array problems from easy to hard level"
            problemCount={40}
            completedCount={0}
            problems={[
              { name: "Largest Element in Array", difficulty: "Easy" },
              { name: "Second Largest Element", difficulty: "Easy" },
              { name: "Remove Duplicates", difficulty: "Easy" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default StriverView;