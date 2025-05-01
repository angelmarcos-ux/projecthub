import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  CheckSquare, 
  Clock, 
  Calendar, 
  Users, 
  FileText, 
  BarChart2, 
  Settings,
  X
} from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => (
  <NavLink 
    to={to}
    className={({ isActive }) => 
      `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
      ${isActive 
        ? 'bg-primary-50 text-primary-700' 
        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'}`
    }
  >
    <span className="mr-3">{icon}</span>
    <span>{label}</span>
  </NavLink>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-neutral-200 transition-transform duration-300 ease-in-out transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:relative lg:translate-x-0
      `}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-neutral-200">
        <Logo />
        <button className="p-1 rounded-md lg:hidden text-neutral-500 hover:bg-neutral-100">
          <X size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <nav className="space-y-1">
          <NavItem to="/" icon={<Home size={18} />} label="Dashboard" />
          <NavItem to="/tasks" icon={<CheckSquare size={18} />} label="Tasks" />
          <NavItem to="/time" icon={<Clock size={18} />} label="Time Tracking" />
          <NavItem to="/calendar" icon={<Calendar size={18} />} label="Calendar" />
          <NavItem to="/team" icon={<Users size={18} />} label="Team" />
          <NavItem to="/documents" icon={<FileText size={18} />} label="Documents" />
          <NavItem to="/reports" icon={<BarChart2 size={18} />} label="Reports" />
        </nav>
        
        <div className="mt-8 pt-4 border-t border-neutral-200">
          <NavItem to="/settings" icon={<Settings size={18} />} label="Settings" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;