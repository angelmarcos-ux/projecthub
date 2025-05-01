import React, { createContext, useContext, useState } from 'react';
import { Notification } from '../types';

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'message',
      content: 'Sarah sent you a message about the website redesign project',
      timestamp: new Date().toISOString(),
      read: false,
    },
    {
      id: '2',
      type: 'task',
      content: 'Task "Create wireframes" was completed by Mike',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: false,
    },
    {
      id: '3',
      type: 'alert',
      content: 'Your project "E-commerce Platform" is due tomorrow',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      read: true,
    },
  ]);

  const addNotification = (notification: Notification) => {
    setNotifications([notification, ...notifications]);
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        clearAll,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};