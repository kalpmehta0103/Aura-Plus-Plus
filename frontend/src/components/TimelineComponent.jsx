// TimelineComponent.jsx
import React from 'react';

const TimelineComponent = () => {
  // Hardcoded data: 20 assignments with deadlines
  const assignments = [
    { id: 1, title: 'Assignment 1', deadline: '2024-11-01' },
    { id: 2, title: 'Assignment 2', deadline: '2024-11-03' },
    { id: 3, title: 'Assignment 3', deadline: '2024-11-05' },
    { id: 4, title: 'Assignment 4', deadline: '2024-11-08' },
    { id: 5, title: 'Assignment 5', deadline: '2024-11-10' },
    { id: 6, title: 'Assignment 6', deadline: '2024-11-12' },
    { id: 7, title: 'Assignment 7', deadline: '2024-11-14' },
    { id: 8, title: 'Assignment 8', deadline: '2024-11-16' },
    { id: 9, title: 'Assignment 9', deadline: '2024-11-18' },
    { id: 10, title: 'Assignment 10', deadline: '2024-11-20' },
    { id: 11, title: 'Assignment 11', deadline: '2024-11-22' },
    { id: 12, title: 'Assignment 12', deadline: '2024-11-24' },
    { id: 13, title: 'Assignment 13', deadline: '2024-11-26' },
    { id: 14, title: 'Assignment 14', deadline: '2024-11-28' },
    { id: 15, title: 'Assignment 15', deadline: '2024-11-30' },
    { id: 16, title: 'Assignment 16', deadline: '2024-12-02' },
    { id: 17, title: 'Assignment 17', deadline: '2024-12-04' },
    { id: 18, title: 'Assignment 18', deadline: '2024-12-06' },
    { id: 19, title: 'Assignment 19', deadline: '2024-12-08' },
    { id: 20, title: 'Assignment 20', deadline: '2024-12-10' },
  ];

  return (
    <div className="mt-[20px] flex flex-col items-center px-8">
      {/* Title Section */}
      <p className="text-2xl font-extrabold text-red-500 mb-6">
        Deadlines for Assignment!!
      </p>

      {/* Timeline Scroll Section */}
      <div className="w-3/4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 transition-all duration-300 ease-in-out h-40">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="flex-shrink-0 w-1/4 min-w-[200px] h-900px p-4 bg-gray-100 rounded-lg shadow-lg text-center transform hover:scale-101 hover:bg-gray-200 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {assignment.title}
              </h3>
              <p className="text-gray-600">Deadline: {assignment.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;