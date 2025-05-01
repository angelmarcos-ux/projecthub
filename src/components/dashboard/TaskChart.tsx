import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TaskChart: React.FC = () => {
  const data = [
    { name: 'Week 1', todo: 4, inProgress: 2, review: 1, done: 3 },
    { name: 'Week 2', todo: 3, inProgress: 3, review: 2, done: 5 },
    { name: 'Week 3', todo: 5, inProgress: 4, review: 3, done: 6 },
    { name: 'Week 4', todo: 2, inProgress: 3, review: 4, done: 8 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            border: 'none'
          }}
        />
        <Bar dataKey="todo" name="To Do" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={20} />
        <Bar dataKey="inProgress" name="In Progress" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
        <Bar dataKey="review" name="In Review" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
        <Bar dataKey="done" name="Completed" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TaskChart;