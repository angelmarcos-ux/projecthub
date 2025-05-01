export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  assignedTasks: string[];
  teams: string[];
}

export interface Team {
  id: string;
  name: string;
  description: string;
  members: string[];
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string; // 'todo', 'in-progress', 'review', 'done'
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  dueDate?: string;
  comments: Comment[];
  attachments: Attachment[];
  timeTracked: number; // in minutes
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  fileType: string;
  size: number; // in bytes
  uploadedBy: string;
  uploadedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold' | 'cancelled';
  startDate: string;
  endDate?: string;
  team: string[];
  tasks: Task[];
  progress: number;
  budget?: number;
  client?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TimeEntry {
  id: string;
  userId: string;
  taskId: string;
  projectId: string;
  description: string;
  startTime: string;
  endTime?: string;
  duration?: number; // in minutes
  createdAt: string;
}

export interface Document {
  id: string;
  name: string;
  description?: string;
  projectId: string;
  url: string;
  fileType: string;
  size: number; // in bytes
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface Notification {
  id: string;
  type: 'message' | 'task' | 'alert' | 'system';
  content: string;
  timestamp: string;
  read: boolean;
  targetUrl?: string;
}