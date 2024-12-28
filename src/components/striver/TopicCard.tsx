import React from 'react';
import { ChevronRight, CheckCircle, Circle } from 'lucide-react';

interface Problem {
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed?: boolean;
}

interface TopicCardProps {
  title: string;
  description: string;
  problemCount: number;
  completedCount: number;
  problems: Problem[];
}

const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  problemCount,
  completedCount,
  problems,
}) => {
  const progress = (completedCount / problemCount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{completedCount} of {problemCount} completed</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          {problems.slice(0, 3).map((problem, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                {problem.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300 mr-2" />
                )}
                <span className="text-gray-700">{problem.name}</span>
              </div>
              <span className={`text-sm px-2 py-1 rounded ${
                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {problem.difficulty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicCard;