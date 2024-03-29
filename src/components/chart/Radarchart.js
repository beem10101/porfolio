import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis ,ResponsiveContainer} from 'recharts';
const dataRadar = [
    {
      subject: 'MIND',
      A: 75,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'ENERGY',
      A: 70,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'NATURE',
      A: 60,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'TACTICS',
      A: 64,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'IDENTITY',
      A: 57,
      B: 90,
      fullMark: 150,
    },
  ];
const Radarchart = () => {
  return (
    <div>
            <ResponsiveContainer width={700} height={500}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                <PolarGrid stroke='#84878a'/>
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis stroke='#84878a'/>
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#58a3e0" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
        </div>
  )
}

export default Radarchart