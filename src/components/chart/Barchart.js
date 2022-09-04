import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip ,ReferenceLine} from 'recharts';

const dataBar = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 1,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 3,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 2,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 2,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 1,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 2,
      amt: 2100,
    },
  ];


const Barchart = () => {
  return (
    <div>
      <ResponsiveContainer width={700} height={500}>
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
          <Bar dataKey="pv" fill="#011235" />
          <ReferenceLine y={4.0} label="Max" stroke="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    )
}

export default Barchart