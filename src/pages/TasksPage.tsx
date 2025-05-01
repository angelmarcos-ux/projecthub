import React, { useState } from 'react';
import { useProjects } from '../context/ProjectContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Task } from '../types';
import { Plus, Filter, Search } from 'lucide-react';
import TaskCard from '../components/tasks/TaskCard';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  status: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, status }) => {
  return (
    <div className="h-full flex flex-col bg-neutral-50 rounded-lg p-3 min-w-[280px]">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-neutral-700">{title} <span className="ml-2 text-sm text-neutral-500">{tasks.length}</span></h3>
        <button className="p-1 rounded-md hover:bg-neutral-200 text-neutral-500">
          <Plus size={16} />
        </button>
      </div>
      
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex-1 space-y-3 overflow-y-auto"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

const TasksPage: React.FC = () => {
  const { projects, currentProject, moveTask } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Use the first project if no current project is selected
  const project = currentProject || (projects.length > 0 ? projects[0] : null);
  
  if (!project) {
    return <div>No projects available.</div>;
  }
  
  const todoTasks = project.tasks.filter(task => task.status === 'todo');
  const inProgressTasks = project.tasks.filter(task => task.status === 'in-progress');
  const reviewTasks = project.tasks.filter(task => task.status === 'review');
  const doneTasks = project.tasks.filter(task => task.status === 'done');
  
  const handleDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;
    
    // Dropped outside a droppable area
    if (!destination) return;
    
    // Dropped in the same place
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;
    
    // Move task between columns
    moveTask(project.id, draggableId, destination.droppableId);
  };
  
  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Tasks</h1>
          <p className="text-neutral-500 mt-1">Manage tasks for project: {project.name}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <Plus size={18} className="mr-2" />
            Add Task
          </button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Search tasks..."
            className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50">
          <Filter size={18} className="mr-2" />
          Filter
        </button>
      </div>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            <TaskColumn title="To Do" tasks={todoTasks} status="todo" />
            <TaskColumn title="In Progress" tasks={inProgressTasks} status="in-progress" />
            <TaskColumn title="In Review" tasks={reviewTasks} status="review" />
            <TaskColumn title="Completed" tasks={doneTasks} status="done" />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TasksPage;