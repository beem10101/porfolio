// import React from 'react'
import profile1 from '../steve1.png'
import Footer from './Footer';
import Barchart from './chart/Barchart';
import Gpx from './aboutme1/Gpx';
import PersonalData from './aboutme1/PersonalData';
import React, { PureComponent } from 'react';
import CirclechartProgramming from './chart/CirclechartProgramming';
import CirclechartSubject from './chart/CirclechartSubject';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

  const Aboutme = () => {
  return(
    <div class='contrainner'>
      <div className='body-content'>
        <div className='main-info'>
          <br/>
          <br/>
          <br/>
          <div>
            {/* grid about me */}
            <div class="row">
              <div class="col-sm">
                {/* Abuot me */}
                <div className='banner-about' data-aos='zoom-in-up'>
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
                <div className='banner-about' data-aos='fade-right'>
                  <div className="followMeBar fixed">
                    <h1><b>Education</b></h1>
                    <div>
                      <ul >
                        <br/>
                        <br/>
                        <p >200x-2010:
                          <strong className='textFont'> kindergarten of thammasat university201 </strong> (pathumthani, Thailand)
                        </p>
                        <br/>
                        <br/>
                        <p >2011-1016 :
                          <strong className='textFont'> pathomsuksa thammasat School </strong> (pathumthani, Thailand)
                        </p>
                        <br/>
                        <br/>
                        <p >2017 - present :
                          <strong className='textFont'> thammasat klongluang withayakhom</strong> (pathumthani, Thailand)
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      <div class="contrainer ">
        <div>
          <div class="row mt-5">
            <div class="col-6">
              <div className='banner-about' data-aos='fade-left'>
                <h3><b>dash</b></h3>
                <div class='mt-5 ml-5 text-white'>
                  <p>aaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaa</p>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div className='banner-about' data-aos='fade-up'>
                <h3><b>Programming languages</b></h3>
                <CirclechartProgramming/>
              </div>
            </div>
            <div class="col-3">
              <div className='banner-about' data-aos='fade-right'>
                <h3><b>subject</b></h3>
                <CirclechartSubject/>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 col-sm-6 col-md-8">
              <div className='banner-about' data-aos='fade-left'  data-aos-offset="200">
                <div class='card'>
                  <div class='card-body'>
                    <h3>
                      <b>Education</b>
                    </h3>
                  </div>
                  <Barchart/>
                </div>
              </div>
            </div>
            <div class='col-6 col-md-4'>
              <div className='banner-about' data-aos='fade-right'>
                <Gpx/>
              </div>
            </div>
          </div>
        </div>
        <div class='row mt-5'>
          <div class='col-12'>
            <div className='banner-about' data-aos='fade-right'>
              <div class='card-body'>
                <h3>
                  <b>Education</b>
                </h3>
              </div>
              <PersonalData/>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Aboutme