import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Task } from '../types';
import { mockProjects } from '../data/mockData';

interface ProjectContextType {
  projects: Project[];
  currentProject: Project | null;
  setCurrentProject: (project: Project) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, projectData: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addTask: (projectId: string, task: Task) => void;
  updateTask: (projectId: string, taskId: string, taskData: Partial<Task>) => void;
  deleteTask: (projectId: string, taskId: string) => void;
  moveTask: (projectId: string, taskId: string, newStatus: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [currentProject, setCurrentProject] = useState<Project | null>(mockProjects[0] || null);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const updateProject = (id: string, projectData: Partial<Project>) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, ...projectData } : project
    ));
    
    // Update currentProject if it's the one being updated
    if (currentProject?.id === id) {
      setCurrentProject({ ...currentProject, ...projectData });
    }
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
    
    // Reset currentProject if it's the one being deleted
    if (currentProject?.id === id) {
      setCurrentProject(projects.find(project => project.id !== id) || null);
    }
  };

  const addTask = (projectId: string, task: Task) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, tasks: [...project.tasks, task] } 
        : project
    ));
  };

  const updateTask = (projectId: string, taskId: string, taskData: Partial<Task>) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { 
            ...project, 
            tasks: project.tasks.map(task => 
              task.id === taskId ? { ...task, ...taskData } : task
            ) 
          } 
        : project
    ));
  };

  const deleteTask = (projectId: string, taskId: string) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { ...project, tasks: project.tasks.filter(task => task.id !== taskId) } 
        : project
    ));
  };

  const moveTask = (projectId: string, taskId: string, newStatus: string) => {
    setProjects(projects.map(project => 
      project.id === projectId 
        ? { 
            ...project, 
            tasks: project.tasks.map(task => 
              task.id === taskId ? { ...task, status: newStatus } : task
            ) 
          } 
        : project
    ));
  };

  return (
    <ProjectContext.Provider 
      value={{ 
        projects, 
        currentProject, 
        setCurrentProject, 
        addProject, 
        updateProject, 
        deleteProject,
        addTask,
        updateTask,
        deleteTask,
        moveTask
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};