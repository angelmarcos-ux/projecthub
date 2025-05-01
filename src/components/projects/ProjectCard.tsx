import React from 'react';
import { Project } from '../../types';
import { CalendarClock, Users } from 'lucide-react';
import { format } from 'date-fns';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const totalTasks = project.tasks.length;
  const completedTasks = project.tasks.filter(task => task.status === 'done').length;
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success-50 text-success-600';
      case 'completed':
        return 'bg-primary-50 text-primary-600';
      case 'on-hold':
        return 'bg-warning-50 text-warning-600';
      case 'cancelled':
        return 'bg-error-50 text-error-600';
      default:
        return 'bg-neutral-50 text-neutral-600';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden transition-all hover:shadow-md">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-neutral-900 truncate">{project.name}</h3>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
        
        <p className="text-neutral-600 text-sm mt-2 line-clamp-2">{project.description}</p>
        
        <div className="mt-4 flex items-center text-sm text-neutral-500">
          <CalendarClock size={16} className="mr-1.5" />
          <span>{format(new Date(project.startDate), 'MMM d')} - {project.endDate ? format(new Date(project.endDate), 'MMM d, yyyy') : 'Ongoing'}</span>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-neutral-700">Progress</span>
            <span className="text-sm font-medium text-neutral-700">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {project.team.slice(0, 3).map((_, index) => (
                <div 
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-xs font-medium"
                >
                  {index + 1}
                </div>
              ))}
              
              {project.team.length > 3 && (
                <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-xs font-medium">
                  +{project.team.length - 3}
                </div>
              )}
            </div>
            <span className="ml-2 text-sm text-neutral-500">{project.team.length} members</span>
          </div>
          
          <div className="flex space-x-1">
            {project.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-600"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-600">
                +{project.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="border-t border-neutral-200 px-5 py-3 bg-neutral-50">
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
          View details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;