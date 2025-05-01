import React from 'react';
import { useProjects } from '../context/ProjectContext';
import { useUsers } from '../context/UserContext';
import { BarChart, BarChart2, CheckCircle, Clock, FilePlus, Users } from 'lucide-react';
import ProjectCard from '../components/projects/ProjectCard';
import TaskChart from '../components/dashboard/TaskChart';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import StatsCard from '../components/dashboard/StatsCard';

const Dashboard: React.FC = () => {
  const { projects } = useProjects();
  const { currentUser } = useUsers();
  
  const activeProjects = projects.filter(project => project.status === 'active');
  const totalTasks = projects.reduce((sum, project) => sum + project.tasks.length, 0);
  const completedTasks = projects.reduce(
    (sum, project) => sum + project.tasks.filter(task => task.status === 'done').length, 
    0
  );
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Welcome back, {currentUser.name}!</h1>
          <p className="text-neutral-500 mt-1">Here's what's happening with your projects today.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <FilePlus size={18} className="mr-2" />
            New Project
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Active Projects" 
          value={activeProjects.length.toString()} 
          icon={<BarChart2 size={20} className="text-primary-500" />}
          trend={{ value: "+2", direction: "up" }}
        />
        <StatsCard 
          title="Team Members" 
          value="12" 
          icon={<Users size={20} className="text-secondary-500" />}
          trend={{ value: "+1", direction: "up" }}
        />
        <StatsCard 
          title="Tasks Completed" 
          value={`${completedTasks}/${totalTasks}`} 
          icon={<CheckCircle size={20} className="text-success-500" />}
          trend={{ value: "75%", direction: "up" }}
        />
        <StatsCard 
          title="Tracked Hours" 
          value="86" 
          icon={<Clock size={20} className="text-accent-500" />}
          trend={{ value: "+12", direction: "up" }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-neutral-900">Task Status</h2>
              <div className="text-sm font-medium text-neutral-500">
                Last 30 days
              </div>
            </div>
            <TaskChart />
          </div>
        </div>
        
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5 h-full">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-semibold text-neutral-900">Activity Feed</h2>
            </div>
            <ActivityFeed />
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-neutral-900">Active Projects</h2>
          <a href="/projects" className="text-sm font-medium text-primary-600 hover:text-primary-700">
            View all projects
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeProjects.slice(0, 3).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;