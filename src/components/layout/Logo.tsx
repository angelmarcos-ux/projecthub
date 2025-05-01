import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white">
        <Layers size={18} />
      </div>
      <span className="ml-2 text-lg font-bold text-neutral-900">ProjectHub</span>
    </Link>
  );
};

export default Logo;