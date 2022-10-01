import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts';

const data = [
    { name: 'Group A', value: 500, detail: "Python" },
    { name: 'Group B', value: 200, detail: "Java" },
    { name: 'Group C', value: 400, detail: "Javascript" },
    { name: 'Group D', value: 100, detail: "other" },
  ];

  const COLORS = ["#FFBB2B","#FF8042","#2e99c7", "#00C49F"]
// const DETAIL

const renderLabel = function (entry) {
  return entry.detail;
}

const CirclechartProgramming = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie dataKey="value" data={data} fill="#8884d8" label={renderLabel} >
          {data.map((entry, index) => (


            <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            />

            ))}
       </Pie>
     </PieChart>
    </ResponsiveContainer>
    </div>
    
  )
}

export default CirclechartProgramming