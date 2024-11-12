import React from 'react';
import { ArrowRight } from 'lucide-react';

const TopStories = () => {
  const stories = [
    {
      category: "Politics",
      title: "Parliament Passes Landmark Reform Bill",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80",
      time: "2 hours ago"
    },
    {
      category: "Technology",
      title: "Indian Tech Startups Attract Record Investment",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      time: "3 hours ago"
    },
    {
      category: "Sports",
      title: "Cricket Team Announces New Captain for World Cup",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80",
      time: "4 hours ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Top Stories</h2>
        <button className="flex items-center text-orange-500 hover:text-orange-600">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                  {story.category}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{story.time}</p>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-orange-500">
                {story.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStories;