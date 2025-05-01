import React from 'react';
import { Task } from '../../types';
import { Calendar, MessageSquare, Paperclip, AlertTriangle, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-error-50 text-error-600';
      case 'medium':
        return 'bg-warning-50 text-warning-600';
      case 'low':
        return 'bg-success-50 text-success-600';
      default:
        return 'bg-neutral-50 text-neutral-600';
    }
  };
  
  return (
    <div className="bg-white rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-neutral-800">{task.title}</h4>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
        </div>
        
        <p className="text-sm text-neutral-600 mt-2 line-clamp-2">{task.description}</p>
        
        <div className="mt-3 space-y-2">
          {task.dueDate && (
            <div className="flex items-center text-xs text-neutral-500">
              <Calendar size={14} className="mr-1.5" />
              <span>Due {format(new Date(task.dueDate), 'MMM d, yyyy')}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            {task.assignedTo && (
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-medium">
                  JD
                </div>
                <span className="ml-1.5 text-xs text-neutral-500">John Doe</span>
              </div>
            )}
            
            <div className="flex space-x-2">
              {task.timeTracked > 0 && (
                <div className="flex items-center text-xs text-neutral-500">
                  <Clock size={14} className="mr-0.5" />
                  <span>{Math.floor(task.timeTracked / 60)}h {task.timeTracked % 60}m</span>
                </div>
              )}
              
              {task.comments.length > 0 && (
                <div className="flex items-center text-xs text-neutral-500">
                  <MessageSquare size={14} className="mr-0.5" />
                  <span>{task.comments.length}</span>
                </div>
              )}
              
              {task.attachments.length > 0 && (
                <div className="flex items-center text-xs text-neutral-500">
                  <Paperclip size={14} className="mr-0.5" />
                  <span>{task.attachments.length}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;