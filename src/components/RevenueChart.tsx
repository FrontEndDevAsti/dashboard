import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Apr', facebook: 100, google: 120 },
  { name: 'May', facebook: 150, google: 180 },
  { name: 'Jun', facebook: 200, google: 220 },
  { name: 'Jul', facebook: 250, google: 280 },
  { name: 'Aug', facebook: 300, google: 350 },
  { name: 'Sep', facebook: 350, google: 400 },
  { name: 'Oct', facebook: 400, google: 450 },
  { name: 'Nov', facebook: 450, google: 500 },
  { name: 'Dec', facebook: 500, google: 600 }
];

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Revenue</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="facebook"
              name="Facebook Ads"
              stroke="#344767"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="google"
              name="Google Ads"
              stroke="#4CAF50"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;