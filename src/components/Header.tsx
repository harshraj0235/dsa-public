import React from 'react';
import { BookOpen, Code, User, FileText } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const isMainView = currentView === 'main';
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {!isMainView && (
              <button 
                onClick={() => onNavigate('main')}
                className="mr-4 text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
            )}
            <h1 className="text-2xl font-bold text-gray-900">DSA Learning Hub</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5 mr-1" />
              Profile
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <FileText className="w-5 h-5 mr-1" />
              Blogs
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <BookOpen className="w-5 h-5 mr-1" />
              Notes
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Code className="w-5 h-5 mr-1" />
              Practice
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;