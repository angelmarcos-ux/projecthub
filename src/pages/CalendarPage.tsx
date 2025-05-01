import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const CalendarPage: React.FC = () => {
  // Mock data for the calendar
  const currentMonth = "June 2023";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Generate calendar days (example for June 2023)
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3; // June 2023 starts on Thursday (offset by 3)
    return day > 0 && day <= 30 ? day : null;
  });
  
  // Mock events data
  const events = [
    {
      id: '1',
      title: 'Team Meeting',
      date: '2023-06-05',
      time: '10:00 AM - 11:00 AM',
      type: 'meeting',
    },
    {
      id: '2',
      title: 'Project Deadline',
      date: '2023-06-15',
      time: 'All day',
      type: 'deadline',
    },
    {
      id: '3',
      title: 'Client Call',
      date: '2023-06-08',
      time: '2:00 PM - 3:00 PM',
      type: 'call',
    },
    {
      id: '4',
      title: 'Website Design Review',
      date: '2023-06-12',
      time: '11:00 AM - 12:00 PM',
      type: 'meeting',
    },
    {
      id: '5',
      title: 'Marketing Campaign Launch',
      date: '2023-06-20',
      time: 'All day',
      type: 'event',
    },
  ];
  
  const getEventType = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'bg-primary-100 text-primary-700 border-primary-300';
      case 'deadline':
        return 'bg-error-100 text-error-700 border-error-300';
      case 'call':
        return 'bg-secondary-100 text-secondary-700 border-secondary-300';
      case 'event':
        return 'bg-accent-100 text-accent-700 border-accent-300';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-300';
    }
  };
  
  // Get events for a specific day
  const getEventsForDay = (day: number | null) => {
    if (!day) return [];
    const dateStr = `2023-06-${day.toString().padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Calendar</h1>
          <p className="text-neutral-500 mt-1">Schedule and manage project events</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <Plus size={18} className="mr-2" />
            Add Event
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
          <div className="flex items-center">
            <button className="p-1 rounded-md hover:bg-neutral-100 text-neutral-500">
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-lg font-semibold text-neutral-900 mx-4">{currentMonth}</h2>
            <button className="p-1 rounded-md hover:bg-neutral-100 text-neutral-500">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium bg-primary-600 text-white rounded-md hover:bg-primary-700">
              Today
            </button>
            <select className="text-sm border border-neutral-300 rounded-md px-2">
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-7 bg-neutral-50">
          {days.map((day, index) => (
            <div
              key={index}
              className="py-2 text-center text-sm font-medium text-neutral-700 border-b border-neutral-200"
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 grid-rows-5 divide-x divide-y divide-neutral-200">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`min-h-[120px] p-2 ${day ? '' : 'bg-neutral-50'} relative`}
            >
              {day && (
                <>
                  <div className="text-sm font-medium mb-2">{day}</div>
                  <div className="space-y-1">
                    {getEventsForDay(day).map(event => (
                      <div
                        key={event.id}
                        className={`px-2 py-1 text-xs rounded border ${getEventType(event.type)} truncate cursor-pointer hover:opacity-90`}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map(event => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-neutral-900">{event.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{event.time}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getEventType(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                
                <div className="mt-3 pt-3 border-t border-neutral-100 flex justify-between items-center text-sm">
                  <div className="text-neutral-500">
                    {event.date}
                  </div>
                  <div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">Event Categories</h2>
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-primary-500 mr-2"></span>
                  <span className="text-sm text-neutral-700">Meetings</span>
                </div>
                <span className="text-sm text-neutral-500">2</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-error-500 mr-2"></span>
                  <span className="text-sm text-neutral-700">Deadlines</span>
                </div>
                <span className="text-sm text-neutral-500">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary-500 mr-2"></span>
                  <span className="text-sm text-neutral-700">Calls</span>
                </div>
                <span className="text-sm text-neutral-500">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-accent-500 mr-2"></span>
                  <span className="text-sm text-neutral-700">Events</span>
                </div>
                <span className="text-sm text-neutral-500">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;