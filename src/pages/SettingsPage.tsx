import React from 'react';
import { User, Lock, Bell, Globe, Clock, Monitor, Users } from 'lucide-react';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Settings</h1>
        <p className="text-neutral-500 mt-1">Manage your account and application preferences</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            <nav className="space-y-1 p-2">
              <a href="#profile" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-50 text-primary-700">
                <User size={18} className="mr-3" />
                Profile
              </a>
              <a href="#account" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-50">
                <Lock size={18} className="mr-3" />
                Account & Security
              </a>
              <a href="#notifications" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-50">
                <Bell size={18} className="mr-3" />
                Notifications
              </a>
              <a href="#teams" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-50">
                <Users size={18} className="mr-3" />
                Teams & Permissions
              </a>
              <a href="#appearance" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-50">
                <Monitor size={18} className="mr-3" />
                Appearance
              </a>
              <a href="#language" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-50">
                <Globe size={18} className="mr-3" />
                Language & Region
              </a>
              <a href="#integrations" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-50">
                <Clock size={18} className="mr-3" />
                Integrations
              </a>
            </nav>
          </div>
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          <div id="profile" className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">Profile</h2>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 mb-6">
                <div className="relative mb-4 sm:mb-0">
                  <div className="h-24 w-24 rounded-full bg-neutral-200 flex items-center justify-center text-2xl font-medium text-neutral-600">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-1.5 rounded-full hover:bg-primary-700">
                    <User size={14} />
                  </button>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">John Doe</h3>
                  <p className="text-neutral-500">Product Manager</p>
                  <p className="text-sm text-neutral-600 mt-2">
                    Update your photo and personal details.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue="John"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-700 mb-1">
                    Role
                  </label>
                  <select
                    id="role"
                    defaultValue="Product Manager"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>Product Manager</option>
                    <option>UI/UX Designer</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>QA Engineer</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-neutral-700 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={3}
                    defaultValue="Product Manager with 5+ years of experience in software development."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 border border-neutral-300 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-50 mr-3"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          
          <div id="account" className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">Account & Security</h2>
            </div>
            
            <div className="p-6">
              <h3 className="text-md font-medium text-neutral-900 mb-4">Change Password</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
                >
                  Update Password
                </button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h3 className="text-md font-medium text-neutral-900 mb-4">Two-Factor Authentication</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600">
                      Add an extra layer of security to your account
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      We'll send you a code via email or authenticator app
                    </p>
                  </div>
                  
                  <button
                    type="button"
                    className="px-4 py-2 bg-neutral-100 border border-neutral-300 text-neutral-700 rounded-md text-sm font-medium hover:bg-neutral-200"
                  >
                    Setup 2FA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;