import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CourseCard from './components/CourseCard';
import StriverView from './components/StriverView';
import TopicList from './components/TopicList';

const topics = [
  { name: "Arrays", count: 36 },
  { name: "Matrix", count: 10 },
  { name: "Strings", count: 43 },
  { name: "Searching and Sorting", count: 36 },
  { name: "Linked List", count: 36 },
  { name: "Bit Manipulation", count: 10 },
  { name: "Greedy", count: 35 },
  { name: "Backtracking", count: 19 },
  { name: "Dynamic Programming", count: 60 },
  { name: "Stacks and Queues", count: 38 },
  { name: "Binary Trees", count: 35 },
  { name: "Binary Search Tree", count: 22 },
  { name: "Graphs", count: 44 },
  { name: "Heap", count: 18 },
  { name: "Trie", count: 6 }
];

type View = 'main' | 'striver' | 'apna' | 'love';

function App() {
  const [currentView, setCurrentView] = useState<View>('main');

  const renderContent = () => {
    switch (currentView) {
      case 'striver':
        return <StriverView />;
      case 'apna':
        return <TopicList topics={topics} color="bg-gradient-to-br from-red-500 to-red-700" provider="Apna College" />;
      case 'love':
        return <TopicList topics={topics} color="bg-gradient-to-br from-yellow-500 to-yellow-600" provider="Love Babbar" />;
      default:
        return (
          <>
            <Hero />
            <div className="max-w-4xl mx-auto px-6 py-12">
              <div className="grid gap-6">
                <CourseCard
                  title="Striver's A2Z DSA Course"
                  description="A comprehensive DSA course with 455+ problems organized in 18 detailed steps"
                  color="bg-gradient-to-br from-green-500 to-green-700"
                  onClick={() => setCurrentView('striver')}
                />
                <CourseCard
                  title="Apna College DSA Sheet"
                  description="Curated collection of DSA problems covering all important topics"
                  color="bg-gradient-to-br from-red-500 to-red-700"
                  onClick={() => setCurrentView('apna')}
                />
                <CourseCard
                  title="Love Babbar DSA Sheet"
                  description="Popular DSA problem collection with systematic topic coverage"
                  color="bg-gradient-to-br from-yellow-500 to-yellow-600"
                  onClick={() => setCurrentView('love')}
                />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;