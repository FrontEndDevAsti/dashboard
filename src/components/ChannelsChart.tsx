
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Facebook", value: 15, color: "#1873E7" }, 
  { name: "Referral", value: 60, color: "#4B5563" },
  { name: "Organic", value: 10, color: "#000000" }, // Black for Organic

  { name: "Direct", value: 15, color: "#e91e63" }, // Magenta/pink for Direct
 // Dark gray for Referral
];

const ChannelsChart = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Channels</h2>
      <div className="channels-chart-container">
        <div className="chart-area">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={70}
              paddingAngle={0}
              dataKey="value"
              stroke="#fff"
              strokeWidth={1}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="channels-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        More than 1,200,000 sales are made using referral marketing, and 700,000 are from social media.
      </p>
    </div>
  );
};

export default ChannelsChart;