import React, { useEffect, useRef } from 'react';
import { X, MessageSquare, CheckSquare, AlertCircle } from 'lucide-react';

interface NotificationDropdownProps {
  onClose: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  const notifications = [
    {
      id: 1,
      type: 'message',
      content: 'Sarah sent you a message about the website redesign project',
      time: '5 minutes ago',
      read: false,
    },
    {
      id: 2,
      type: 'task',
      content: 'Task "Create wireframes" was completed by Mike',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'alert',
      content: 'Your project "E-commerce Platform" is due tomorrow',
      time: '5 hours ago',
      read: true,
    },
    {
      id: 4,
      type: 'message',
      content: 'Alex commented on your task "Implement login functionality"',
      time: '1 day ago',
      read: true,
    },
  ];
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageSquare size={16} className="text-primary-500" />;
      case 'task':
        return <CheckSquare size={16} className="text-secondary-500" />;
      case 'alert':
        return <AlertCircle size={16} className="text-error-500" />;
      default:
        return null;
    }
  };
  
  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-full mt-1 w-80 bg-white rounded-lg shadow-lg border border-neutral-200 z-50 overflow-hidden scale-in"
    >
      <div className="flex items-center justify-between p-3 border-b border-neutral-200">
        <h3 className="font-medium">Notifications</h3>
        <button 
          onClick={onClose}
          className="p-1 rounded-md text-neutral-500 hover:bg-neutral-100"
        >
          <X size={16} />
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className={`p-3 border-b border-neutral-100 hover:bg-neutral-50 cursor-pointer
              ${!notification.read ? 'bg-primary-50' : ''}`}
          >
            <div className="flex">
              <div className="mr-3 mt-1">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <p className={`text-sm ${!notification.read ? 'font-medium' : ''}`}>
                  {notification.content}
                </p>
                <span className="text-xs text-neutral-500">{notification.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-2 border-t border-neutral-200 bg-neutral-50">
        <button className="w-full text-center text-sm text-primary-600 hover:text-primary-700 py-1">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;