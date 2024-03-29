import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip ,ReferenceLine} from 'recharts';

const dataBar = [
    {
      subject: 'Science and technology',
      grade: 3.97,
    },
    {
      subject: 'Math',
      grade: 3.66,
    },
    {
      subject: 'Thai',
      grade: 3.80,
    },
    {
      subject: 'English',
      grade: 4.0,
    },
    {
      subject: 'Additional Math',
      grade: 4.0,
    },
    {
      subject: 'Social',
      grade: 4.0,
    },
    {
      subject: 'Health and hygeine',
      grade: 4.0,
    },
  ];
const Barchart = () => {
  return (
    <div>
    <div className='rechart'>
    <div className='rechart-container'>
      <ResponsiveContainer width="100%" height="100%">
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
    </div>
    </div>
    )
}

export default Barchart