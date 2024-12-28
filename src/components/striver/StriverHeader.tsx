import React from 'react';
import { Book, BookOpen, Code, FileText, User } from 'lucide-react';

const StriverHeader = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <FileText className="w-5 h-5 mr-2" />
              <span>Striver's A2Z Sheet</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <Book className="w-5 h-5 mr-2" />
              <span>SDE Sheet</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>CP Sheet</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-green-600">
              <Code className="w-5 h-5 mr-2" />
              <span>Practice</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-green-600">
              <User className="w-5 h-5 mr-2" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StriverHeader;