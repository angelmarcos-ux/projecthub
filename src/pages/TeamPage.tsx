import React from 'react';
import { useUsers } from '../context/UserContext';
import { Search, Plus, Mail, Phone, Briefcase, Users as UsersIcon } from 'lucide-react';

const TeamPage: React.FC = () => {
  const { users, teams } = useUsers();

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Team</h1>
          <p className="text-neutral-500 mt-1">Manage your team members and their access</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <Plus size={18} className="mr-2" />
            Add Team Member
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
            placeholder="Search team members..."
            className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <select className="block px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">All Teams</option>
          {teams.map(team => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
        <select className="block px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option value="">All Roles</option>
          <option value="Product Manager">Product Manager</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="QA Engineer">QA Engineer</option>
        </select>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Teams
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-neutral-200 flex items-center justify-center">
                        {user.avatar ? (
                          <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                        ) : (
                          <span className="text-sm font-medium text-neutral-600">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Briefcase size={16} className="text-neutral-400 mr-2" />
                      <span className="text-sm text-neutral-600">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Mail size={16} className="text-neutral-400 mr-2" />
                      <span className="text-sm text-neutral-600">{user.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <UsersIcon size={16} className="text-neutral-400 mr-2" />
                      <span className="text-sm text-neutral-600">
                        {user.teams.length > 0 
                          ? teams
                              .filter(team => user.teams.includes(team.id))
                              .map(team => team.name)
                              .join(', ')
                          : 'No teams'
                        }
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-800 mr-3">Edit</button>
                    <button className="text-neutral-600 hover:text-neutral-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Teams</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teams.map((team) => (
            <div key={team.id} className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5">
              <h3 className="font-semibold text-neutral-900">{team.name}</h3>
              <p className="text-sm text-neutral-600 mt-1">{team.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-neutral-700">Members ({team.members.length})</h4>
                <div className="mt-2 flex -space-x-2 overflow-hidden">
                  {team.members.slice(0, 5).map((memberId, index) => {
                    const member = users.find(user => user.id === memberId);
                    return (
                      <div key={memberId} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-neutral-200 flex items-center justify-center">
                        {member?.avatar ? (
                          <img className="h-8 w-8 rounded-full" src={member.avatar} alt="" />
                        ) : (
                          <span className="text-xs font-medium text-neutral-600">
                            {member?.name.split(' ').map(n => n[0]).join('') || ''}
                          </span>
                        )}
                      </div>
                    );
                  })}
                  
                  {team.members.length > 5 && (
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-neutral-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-neutral-600">
                        +{team.members.length - 5}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-neutral-100 flex justify-end">
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Manage Team
                </button>
              </div>
            </div>
          ))}
          
          <div className="bg-white rounded-lg shadow-sm border border-dashed border-neutral-300 p-5 flex flex-col items-center justify-center text-center h-48">
            <UsersIcon size={24} className="text-neutral-400 mb-3" />
            <h3 className="font-semibold text-neutral-700">Create New Team</h3>
            <p className="text-sm text-neutral-500 mt-1">Organize members and manage access</p>
            <button className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
              + Create Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;