import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { age: '16-20', value: 25 },
  { age: '21-25', value: 30 },
  { age: '26-30', value: 20 },
  { age: '31-36', value: 60 },
  { age: '36-42', value: 35 },
  { age: '42+', value: 25 }
];

const SalesByAge = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Sales by age</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" barSize={20}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" domain={[0, 60]} />
            <YAxis dataKey="age" type="category" axisLine={false} tickLine={false} />
            <Bar dataKey="value" fill="#344767" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesByAge;