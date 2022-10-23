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
          <div>
            {/* grid about me */}
            <div class="row">
            </div>
          </div>
        </div>
      <div class="contrainer ">
        <div>
          <div class="row mt-5">
            <div class="col">
            <div className='banner-about' data-aos='fade-right'>
              <div className="followMeBar fixed" >
                <h1><b>Education</b></h1>
                <div>
                  <ul>
                    <p>
                      <strong className='textFont'> {" "}
                        <h6 class='font-weight-bold'>
                          Elementary School
                        </h6>
                        <h6 class='font-weight-bold text-primary ml-4'>
                          pathomsuksa thammasat School
                        </h6>
                      </strong>{" "}
                      (pathumthani, Thailand)2011-1016
                    </p>
                    <p>
                      <strong className='textFont'> {" "}
                        <h6 class='font-weight-bold'>
                        Junior High School
                        </h6>
                        <h6 class='font-weight-bold text-primary ml-4'>
                        thammasat klongluang withayakhom
                        </h6>
                      </strong>{" "}
                      (pathumthani, Thailand)2017-1019
                    </p>
                    <p>
                      <strong className='textFont'> {" "}
                        <h6 class='font-weight-bold'>
                        High School
                        </h6>
                        <h6 class='font-weight-bold text-primary ml-4'>
                        thammasat klongluang withayakhom
                        </h6>
                      </strong>{" "}
                      (pathumthani, Thailand)22020 - present
                    </p>                    
                  </ul>
                </div>
              </div>
            </div>
            </div>


            <div class="col">
              <div className='banner-about' data-aos='fade-up'>
                <h3><b>Programming languages</b></h3>
                <CirclechartProgramming/>
              </div>
            </div>
            <div class="col">
              <div className='banner-about' data-aos='fade-right'>
                <h3><b>subject</b></h3>
                <CirclechartSubject/>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 col-sm-6 col-md-8">
              <div className='banner-about' data-aos='fade-left'  data-aos-offset="200">
                  <h3>
                    <b class='test-weight-bold'>GPX 5 term</b>
                  </h3>
                <Barchart/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>
            <div class='col-6 col-md-4'>
              <div data-aos='fade-right'>
                <div className='banner-about'>
                  <Gpx/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='row mt-5'>
          <div class='col-12' data-aos='fade-right'>
            <div className='banner-about'>
              <PersonalData/>
            </div>
          </div>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
      <Footer/>
    </div>
  )
}
export default Aboutme