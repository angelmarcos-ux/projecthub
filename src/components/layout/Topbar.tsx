import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import NotificationDropdown from '../common/NotificationDropdown';

interface TopbarProps {
  children?: React.ReactNode;
}

const Topbar: React.FC<TopbarProps> = ({ children }) => {
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);
  
  return (
    <header className="h-16 bg-white border-b border-neutral-200 flex items-center px-4 justify-between z-10">
      <div className="flex items-center">
        {children}
        
        <div className="ml-4 relative hidden md:block">
          <div className="flex items-center bg-neutral-100 rounded-lg px-3 py-2">
            <Search size={16} className="text-neutral-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none text-sm ml-2 w-64"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <button 
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <Bell size={18} className="text-neutral-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
          </button>
          
          {notificationsOpen && (
            <NotificationDropdown onClose={() => setNotificationsOpen(false)} />
          )}
        </div>
        
        <div className="flex items-center space-x-2 border-l pl-3 border-neutral-200">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-neutral-500">Product Manager</span>
          </div>
          <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-700">
            <User size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;