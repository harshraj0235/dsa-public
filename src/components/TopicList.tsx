import React from 'react';

interface Topic {
  name: string;
  count: number;
}

interface TopicListProps {
  topics: Topic[];
  color: string;
  provider: string;
}

const TopicList: React.FC<TopicListProps> = ({ topics, color, provider }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className={`${color} p-6 rounded-xl`}>
        <h1 className="text-3xl font-bold text-white mb-6">{provider} DSA Sheet</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">{topic.name}</h3>
                <span className="text-white/90 text-sm">({topic.count})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicList;