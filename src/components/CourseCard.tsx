import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, color, onClick }) => {
  return (
    <div 
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${color}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <ChevronRight className="text-white" size={24} />
      </div>
      <p className="text-white/90">{description}</p>
    </div>
  );
}

export default CourseCard;