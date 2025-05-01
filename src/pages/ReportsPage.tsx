import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { Clock, Download, Calendar } from 'lucide-react';

const ReportsPage: React.FC = () => {
  // Mock data for task status
  const taskStatusData = [
    { name: 'To Do', value: 8 },
    { name: 'In Progress', value: 5 },
    { name: 'In Review', value: 3 },
    { name: 'Completed', value: 12 },
  ];
  
  // Mock data for time tracking
  const timeTrackingData = [
    { name: 'Week 1', website: 12, mobile: 5, marketing: 3 },
    { name: 'Week 2', website: 15, mobile: 8, marketing: 2 },
    { name: 'Week 3', website: 10, mobile: 12, marketing: 5 },
    { name: 'Week 4', website: 8, mobile: 15, marketing: 8 },
  ];
  
  // Colors for pie chart
  const COLORS = ['#94a3b8', '#3b82f6', '#8b5cf6', '#22c55e'];
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Reports</h1>
          <p className="text-neutral-500 mt-1">Track project performance and team productivity</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <select className="text-sm border border-neutral-300 rounded-md px-3 py-2">
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-200 transition-colors flex items-center">
            <Download size={18} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <h3 className="text-sm font-medium text-neutral-500">Total Projects</h3>
          <p className="text-2xl font-bold text-neutral-900 mt-1">3</p>
          <div className="mt-4 text-sm text-neutral-600">
            <span className="text-success-500 font-medium">+1</span> from last month
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <h3 className="text-sm font-medium text-neutral-500">Tasks Completed</h3>
          <p className="text-2xl font-bold text-neutral-900 mt-1">12 / 28</p>
          <div className="mt-4 text-sm text-neutral-600">
            <span className="text-success-500 font-medium">43%</span> completion rate
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <h3 className="text-sm font-medium text-neutral-500">Hours Tracked</h3>
          <p className="text-2xl font-bold text-neutral-900 mt-1">86</p>
          <div className="mt-4 text-sm text-neutral-600">
            <span className="text-success-500 font-medium">+12</span> from last month
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-neutral-900">Task Status</h2>
            <div className="text-sm font-medium text-neutral-500">
              Total: 28 tasks
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {taskStatusData.map((status, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm text-neutral-700">{status.name}: </span>
                <span className="text-sm font-medium text-neutral-900 ml-1">{status.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-neutral-900">Time Tracking</h2>
            <div className="flex items-center text-sm font-medium text-neutral-500">
              <Clock size={16} className="mr-1.5" />
              Last 4 weeks
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={timeTrackingData}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }}
                />
                <Legend />
                <Bar dataKey="website" name="Website Redesign" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="mobile" name="Mobile App" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="marketing" name="Marketing Campaign" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-neutral-900">Project Progress</h2>
          <div className="flex items-center text-sm font-medium text-neutral-500">
            <Calendar size={16} className="mr-1.5" />
            June 2023
          </div>
        </div>
        
        <div className="space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-medium text-neutral-900">Website Redesign</span>
                <span className="ml-2 text-sm text-neutral-500">12/20 tasks completed</span>
              </div>
              <span className="text-sm font-medium text-neutral-700">60%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2.5">
              <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-medium text-neutral-900">Mobile App Development</span>
                <span className="ml-2 text-sm text-neutral-500">0/15 tasks completed</span>
              </div>
              <span className="text-sm font-medium text-neutral-700">0%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2.5">
              <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-medium text-neutral-900">Marketing Campaign</span>
                <span className="ml-2 text-sm text-neutral-500">0/8 tasks completed</span>
              </div>
              <span className="text-sm font-medium text-neutral-700">0%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2.5">
              <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
          <div className="p-5 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">Team Performance</h2>
          </div>
          <div className="p-5">
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-neutral-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-neutral-600">JD</span>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-neutral-900">John Doe</div>
                    <div className="text-xs text-neutral-500">Product Manager</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-neutral-900">15 tasks</div>
                  <div className="text-xs text-neutral-500">23 hours tracked</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-neutral-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-neutral-600">JS</span>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-neutral-900">Jane Smith</div>
                    <div className="text-xs text-neutral-500">UI/UX Designer</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-neutral-900">8 tasks</div>
                  <div className="text-xs text-neutral-500">18 hours tracked</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-neutral-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-neutral-600">MJ</span>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-neutral-900">Mike Johnson</div>
                    <div className="text-xs text-neutral-500">Frontend Developer</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-neutral-900">12 tasks</div>
                  <div className="text-xs text-neutral-500">32 hours tracked</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-neutral-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-neutral-600">SW</span>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-neutral-900">Sarah Williams</div>
                    <div className="text-xs text-neutral-500">Backend Developer</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-neutral-900">6 tasks</div>
                  <div className="text-xs text-neutral-500">13 hours tracked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
          <div className="p-5 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-neutral-100">
            <div className="p-5">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-primary-100 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                </div>
                <div>
                  <p className="text-sm text-neutral-800">
                    <span className="font-medium">John Doe</span> completed task <span className="font-medium">"Create project plan"</span>
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">Today at 9:30 AM</p>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-secondary-100 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-secondary-500"></div>
                </div>
                <div>
                  <p className="text-sm text-neutral-800">
                    <span className="font-medium">Jane Smith</span> created wireframes for the homepage
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">Yesterday at 4:23 PM</p>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-accent-100 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-accent-500"></div>
                </div>
                <div>
                  <p className="text-sm text-neutral-800">
                    <span className="font-medium">Mike Johnson</span> added 3 comments to <span className="font-medium">"Implement user authentication"</span>
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">Yesterday at 11:15 AM</p>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-error-100 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-error-500"></div>
                </div>
                <div>
                  <p className="text-sm text-neutral-800">
                    <span className="font-medium">Project deadline</span> for Website Redesign has been updated to July 31, 2023
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;