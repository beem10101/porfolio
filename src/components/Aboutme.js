// import React from 'react'
import profile1 from '../steve1.png'
import Footer from './Footer';
import Barchart from './chart/Barchart';

import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const dataBar = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 1000,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const dataRadar = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const data = [
    { name: 'Group A', value: 100, detail: "Python" },
    { name: 'Group B', value: 300, detail: "Java" },
    { name: 'Group C', value: 300, detail: "Javascript" },
    { name: 'Group D', value: 200, detail: "asd" },
  ];

  const COLORS = ["#000000", "#00C49F", "#FFBB2B", "#FF8042"]
  // const DETAIL
  
  const renderLabel = function (entry) {
    return entry.detail;
  }
  
  const Aboutme = () => {
  // return 
  //   <div>
  //     <div className='header-wrapper'>
  //       <div className='main-info'>
  //         <br/>
  //         <br/>
  //         <br/>
  //         <div>
  //         {/* grid about me */}
  //         <div class="row">
  //           <div class="col-sm">
  //             {/* Abuot me */}
  //             <div className='banner-about'>
  //             <div className='container'>
  //               <br />
  //               <br />
  //               <br />
  //               <img src={profile1} width="400" height="400" data-was-processed="true" ></img>
  //               <br />
  //               <br />
  //             </div>
  //             <div className='HeaderTask'>
  //               <div>
  //                 <a className="anchor" id="about"></a>
  //                 <div className="followWrap">
  //                 </div>
  //                 <h3>Email:beem25301@gmail.com</h3>
  //                 <h3>GitHub : <a href="https://github.com/beem10101" target="_blank">Beem10101</a></h3>
  //                 {/* <p>LinkedIn : <a href="https://www.linkedin.com/in/kriskanin/" target="_blank">Kriskanin Hengniran</a></p> */}
  //               </div>
  //             </div>
  //             </div>
  //           </div>
  //           <div class="col-sm">
  //             {/* Education */}
  //             <div className='banner-about'>
  //             <div className="followMeBar fixed">
  //               <h1><b>Education</b></h1>
  //               <div>
  //                 <ul >
  //                   <p >2017 - present :
  //                     <strong className='textFont'> thammasat klongluang withayakhom</strong> (pathumthani, Thailand)
  //                     <p>----</p>
  //                     <p>----</p>
  //                     <p>----</p>
  //                     <p>----</p>
  //                     <p>----</p>
  //                     <p>----</p>
  //                     <p>----</p>
  //                   </p>
  //                 </ul>
  //               </div>
  //             </div>
  //             </div>
  //           </div>
  //         </div>
  //           {/* My skill */}
  //           <div className='banner-about'>
  //             <div className="followMeBar fixed">
  //               <h1><b>My skill</b></h1>
  //               <div>
  //                 <ul>
  //                   <h3>programing language</h3>
  //                   <div style={{ width: '100%', height: 300 }}>
  //                     <ResponsiveContainer>
  //                       <PieChart>
  //                         <Pie dataKey="value" data={data} fill="#8884d8" label={renderLabel} >
  //                           {data.map((entry, index) => (

                              
  //                             <Cell
  //                             key={`cell-${index}`}
  //                               fill={COLORS[index % COLORS.length]}
  //                               />
                                
  //                               ))}
  //                         </Pie>
  //                       </PieChart>
  //                     </ResponsiveContainer>
  //                   </div>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //           <br />
  //           <br />
  //           <br />
  //           {/* radar */}
  //           <div className='banner-about'>
  //             <ResponsiveContainer width={700} height={500}>
  //               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
  //                 <PolarGrid />
  //                 <PolarAngleAxis dataKey="subject" />
  //                 <PolarRadiusAxis />
  //                 <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  //               </RadarChart>
  //             </ResponsiveContainer>
  //           </div>
  //           <br/>
  //           <br/>
  //           <br/>
  //           {/* bar */}
  //           <div className='banner-about'>
  //             <ResponsiveContainer width={700} height={500}>
  //               <BarChart
  //                 width={500}
  //                 height={300}
  //                 data={dataBar}
  //                 margin={{
  //                   top: 5,
  //                   right: 30,
  //                   left: 20,
  //                   bottom: 5,
  //                 }}
  //                 >
  //                 <CartesianGrid strokeDasharray="3 3" />
  //                 <XAxis dataKey="name" />
  //                 <YAxis />
  //                 <Tooltip />
  //                 <Legend />
  //                 <Bar dataKey="pv" name='data1' fill="#000000" />
  //                 <Bar dataKey="pv" fill="#011235" />
  //                 <Bar dataKey="pv" fill="#035487" />
  //                 <Bar dataKey="pv" fill="#078452" />
  //                 {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
  //               </BarChart>
  //             </ResponsiveContainer>
  //           </div>
  //         </div>
  //         <div class='contrainer'>
  //                 <div class='row'>
  //                   <div class='col-3 bg-white'></div>
  //                   <div class='col-3 bg-white'></div>
  //                   <div class='col-3 bg-white'></div>
  //                 </div>
  //         </div>
  //       </div>
  //       <Footer/>
  //       <div/>
  //     <div/>
  //       
  
  return(
    <div>     
      <div className='header-wrapper'>
        <div className='main-info'>
          <br/>
          <br/>
          <br/>
          <div>
            {/* grid about me */}
            <div class="row">
              <div class="col-sm">
                {/* Abuot me */}
                <div className='banner-about'>
                <div className='container'>
                  <br />
                  <br />
                  <br />
                  <img src={profile1} width="400" height="400" data-was-processed="true" ></img>
                  <br />
                  <br />
                </div>
                <div className='HeaderTask'>
                  <div>
                    <a className="anchor" id="about"></a>
                    <div className="followWrap">
                    </div>
                    <h3>Email:beem25301@gmail.com</h3>
                    <h3>GitHub : <a href="https://github.com/beem10101" target="_blank">Beem10101</a></h3>
                    {/* <p>LinkedIn : <a href="https://www.linkedin.com/in/kriskanin/" target="_blank">Kriskanin Hengniran</a></p> */}
                  </div>
                </div>
                </div>
              </div>
              <div class="col-sm">
                {/* Education */}
                <div className='banner-about'>
                  <div className="followMeBar fixed">
                    <h1><b>Education</b></h1>
                    <div>
                      <ul >
                        <p >2017 - present :
                          <strong className='textFont'> thammasat klongluang withayakhom</strong> (pathumthani, Thailand)
                          <p>----</p>
                          <p>----</p>
                          <p>----</p>
                          <p>----</p>
                          <p>----</p>
                          <p>----</p>
                          <p>----</p>
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='header-wrapper'>
        {/* circle */}
        <div className='banner-about'>
          <div className="followMeBar fixed">
              <h1><b>My skill</b></h1>
              <div>
                <ul>
                  <h3>programing language</h3>
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
                </ul>
              </div>
          </div>
        </div>
        <br/> 
        <br/> 
        <br/> 
        {/* radar */}
        <div className='banner-about'>
            <ResponsiveContainer width={700} height={500}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='banner-about'>
          <Barchart />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <div class="contrainer ">
        <div>
          <div className="header-wrapper">
          {/* <div className="main-info"> */}
            {/* Education */}
            <div className="banner-about">
              <div className="followMeBar fixed">
                <h1>
                  <b>Education</b>
                </h1>
              </div>
            </div>
          {/* </div> */}
          </div>
          <div class="row">
            <div class="col-6 bg-white">
              <Barchart />
              <h2>col-3</h2>
            </div>
            <div class="col-3 bg-white">
              <h2>col-3</h2>
            </div>
            <div class="col-3 bg-white">
              <h2>col-3</h2>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  )
}
export default Aboutme