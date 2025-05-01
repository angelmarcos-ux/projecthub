import React from 'react';
import { format } from 'date-fns';
import { CheckSquare, MessageSquare, FileText, Users } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'task' | 'comment' | 'document' | 'team';
  content: string;
  user: {
    name: string;
    avatar?: string;
  };
  timestamp: string;
}

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'task',
    content: 'Completed task "Create wireframes for homepage"',
    user: {
      name: 'Jane Smith',
    },
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
  },
  {
    id: '2',
    type: 'comment',
    content: 'Commented on "Implement user authentication"',
    user: {
      name: 'Mike Johnson',
    },
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: '3',
    type: 'document',
    content: 'Uploaded document "Technical specifications.pdf"',
    user: {
      name: 'John Doe',
    },
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
  },
  {
    id: '4',
    type: 'team',
    content: 'Added Sarah Williams to the Engineering team',
    user: {
      name: 'John Doe',
    },
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
  {
    id: '5',
    type: 'task',
    content: 'Created task "Set up CI/CD pipeline"',
    user: {
      name: 'John Doe',
    },
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
];

const getTimeAgo = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)} hours ago`;
  } else {
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  }
};

const getIcon = (type: string) => {
  switch (type) {
    case 'task':
      return <CheckSquare size={16} className="text-primary-500" />;
    case 'comment':
      return <MessageSquare size={16} className="text-accent-500" />;
    case 'document':
      return <FileText size={16} className="text-secondary-500" />;
    case 'team':
      return <Users size={16} className="text-success-500" />;
    default:
      return null;
  }
};

const ActivityFeed: React.FC = () => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex pb-4 border-b border-neutral-100 last:border-0">
          <div className="mr-3 p-2 bg-neutral-100 rounded-full">
            {getIcon(activity.type)}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-neutral-800">{activity.user.name}</p>
              <span className="text-xs text-neutral-500">{getTimeAgo(activity.timestamp)}</span>
            </div>
            <p className="text-sm text-neutral-600 mt-1">{activity.content}</p>
          </div>
        </div>
      ))}
      
      <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 py-2 mt-2">
        View all activity
      </button>
    </div>
  );
};

export default ActivityFeed;