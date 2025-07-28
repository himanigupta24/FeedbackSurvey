"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

interface PieChartProps {
  data: { name: string; value: number }[];
  title: string;
}

export function PieChartComponent({ data, title }: PieChartProps) {
  // Debug log
  console.log('PieChartComponent - Data:', data);
  console.log('PieChartComponent - Title:', title);

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-center">
        <h3 className="text-lg font-medium mb-4 text-center">{title}</h3>
        <p className="text-muted-foreground">No data available to display the chart.</p>
        <p className="text-sm text-muted-foreground mt-2">Data received: {JSON.stringify(data)}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-96 flex flex-col">
      <h3 className="text-lg font-medium mb-4 text-center">{title}</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => 
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [value, 'Responses']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PieChartComponent;
