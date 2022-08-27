// import React from 'react'
import profile1 from '../steve1.png'
import Footer from './Footer';
import Barchart from './chart/Barchart';
import Radarchart from './chart/Radarchart';
import Circlechart from './chart/Circlechart';

import React, { PureComponent } from 'react';

  const Aboutme = () => {
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
                    <Circlechart />
                </ul>
              </div>
          </div>
        </div>
        <br/> 
        <br/> 
        <br/> 
        {/* radar */}
        <div className='banner-about'>
          <Radarchart />
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
      <Footer />
    </div> 
  )
}
export default Aboutme