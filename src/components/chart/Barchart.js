import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip ,ReferenceLine} from 'recharts';

const dataBar = [
    {
      name: 'M4',
      term1: 3.71,
      term2: 4.00,
    },
    {
      name: 'M5',
      term1: 4.00,
      term2: 4.00,
    },
    {
      name: 'M6',
      term1: 3.76,
    },
  ];


const Barchart = () => {
  return (
    <div>
      <ResponsiveContainer width={800} height={500}>
        <BarChart
          width={500}
          height={300}
          data={dataBar}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0,4]}/>
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" name='data1' fill="#000000" /> */}
          <Bar dataKey="term1" fill="#c77a2e" />
          <Bar dataKey="term2" fill="#2ec74c" />
          {/* <ReferenceLine y={3.0}  stroke="red" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
    )
}

export default Barchart