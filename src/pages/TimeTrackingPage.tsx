import React from 'react';
import { Calendar, Clock, Play, Search, BarChart2 } from 'lucide-react';

const TimeTrackingPage: React.FC = () => {
  const timeEntries = [
    {
      id: '1',
      project: 'Website Redesign',
      task: 'Create wireframes',
      startTime: '2023-06-12T09:00:00Z',
      endTime: '2023-06-12T11:30:00Z',
      duration: 150, // 2.5 hours in minutes
    },
    {
      id: '2',
      project: 'Website Redesign',
      task: 'Stakeholder interviews',
      startTime: '2023-06-12T13:00:00Z',
      endTime: '2023-06-12T15:00:00Z',
      duration: 120, // 2 hours in minutes
    },
    {
      id: '3',
      project: 'Mobile App Development',
      task: 'Research competitors',
      startTime: '2023-06-11T10:00:00Z',
      endTime: '2023-06-11T12:30:00Z',
      duration: 150, // 2.5 hours in minutes
    },
  ];

  // Total time tracked today
  const todayTotal = 270; // 4.5 hours in minutes

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Time Tracking</h1>
          <p className="text-neutral-500 mt-1">Track time spent on tasks and projects</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <Play size={18} className="mr-2" />
            Start Timer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <h3 className="text-sm font-medium text-neutral-500">Today</h3>
          <p className="text-2xl font-bold text-neutral-900 mt-1">
            {Math.floor(todayTotal / 60)}h {todayTotal % 60}m
          </p>
          <div className="mt-4 flex items-center text-sm text-neutral-600">
            <Clock size={16} className="mr-1.5" />
            <span>2 time entries</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <h3 className="text-sm font-medium text-neutral-500">This Week</h3>
          <p className="text-2xl font-bold text-neutral-900 mt-1">13h 30m</p>
          <div className="mt-4 flex items-center text-sm text-neutral-600">
            <Calendar size={16} className="mr-1.5" />
            <span>Jun 12 - Jun 18</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <h3 className="text-sm font-medium text-neutral-500">This Month</h3>
          <p className="text-2xl font-bold text-neutral-900 mt-1">42h 15m</p>
          <div className="mt-4 flex items-center text-sm text-neutral-600">
            <BarChart2 size={16} className="mr-1.5" />
            <span>Jun 1 - Jun 30</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="p-5 border-b border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="text-lg font-semibold text-neutral-900">Recent Time Entries</h2>
            <div className="mt-3 sm:mt-0 relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search entries..."
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
              />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Project / Task
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Start Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  End Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {timeEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-neutral-900">{entry.project}</div>
                    <div className="text-sm text-neutral-500">{entry.task}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {new Date(entry.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {new Date(entry.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                    {Math.floor(entry.duration / 60)}h {entry.duration % 60}m
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-800 mr-3">Edit</button>
                    <button className="text-neutral-600 hover:text-neutral-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-5 py-3 border-t border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="text-sm text-neutral-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border border-neutral-300 rounded-md text-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-50" disabled>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackingPage;