import React, { createContext, useContext, useState } from 'react';
import { User, Team } from '../types';
import { mockUsers, mockTeams } from '../data/mockData';

interface UserContextType {
  currentUser: User;
  users: User[];
  teams: Team[];
  assignTask: (userId: string, taskId: string) => void;
  createTeam: (team: Team) => void;
  addUserToTeam: (teamId: string, userId: string) => void;
  removeUserFromTeam: (teamId: string, userId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser] = useState<User>(mockUsers[0]);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [teams, setTeams] = useState<Team[]>(mockTeams);

  const assignTask = (userId: string, taskId: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, assignedTasks: [...user.assignedTasks, taskId] } 
        : user
    ));
  };

  const createTeam = (team: Team) => {
    setTeams([...teams, team]);
  };

  const addUserToTeam = (teamId: string, userId: string) => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? { ...team, members: [...team.members, userId] } 
        : team
    ));
  };

  const removeUserFromTeam = (teamId: string, userId: string) => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? { ...team, members: team.members.filter(id => id !== userId) } 
        : team
    ));
  };

  return (
    <UserContext.Provider 
      value={{ 
        currentUser, 
        users, 
        teams, 
        assignTask, 
        createTeam, 
        addUserToTeam, 
        removeUserFromTeam 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};