import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressCardProps {
  total: number;
  completed: number;
  title: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ total, completed, title }) => {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-6">
        <div className="w-20 h-20">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathColor: '#22c55e',
              textColor: '#22c55e',
              trailColor: '#f3f4f6',
            })}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">
            {completed} of {total} completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;