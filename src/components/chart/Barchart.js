import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip ,ReferenceLine} from 'recharts';

const dataBar = [
    {
      subject: 'Computer',
      grade: 3.5,
    },
    {
      subject: 'Math',
      grade: 3.4,
    },
    {
      subject: 'Additional Math',
      grade: 3.8,
    },
    {
      subject: 'Thai',
      grade: 3.71,
    },
    {
      subject: 'English',
      grade: 3.6,
    },
    {
      subject: 'Science',
      grade: 3.2,
    },
    {
      subject: 'Social',
      grade: 3.9,
    },
    {
      subject: 'Health education',
      grade: 4.0,
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
          <XAxis dataKey="subject" />
          <YAxis domain={[0,4]}/>
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" name='data1' fill="#000000" /> */}
          <Bar dataKey="grade" fill="#3489eb" />
          {/* <ReferenceLine y={3.0}  stroke="red" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
    )
}

export default Barchart