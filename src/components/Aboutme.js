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
              {/* <div class="col-sm">
                <div className='banner-about' data-aos='zoom-in-up'>
                <div className='container'>
                  <br />
                  <br />
                  <br />
                  <img src={profile1} width="230" height="230" data-was-processed="true" ></img>
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
                  </div>
                </div>
                </div>
              </div> */}

              {/* <div class="col-sm">
                <div class="col-6">
              <div className='banner-about ' data-aos='fade-left'>
                <h3><b>About</b></h3>
                <div class='mt-5 md-3 text-dark'>
                <p class='followMeBar h3 mr-3 '>This page is about my programming abilities, educational background, and my traits.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
              </div>
            </div>
            </div> */}
            
                {/* <div className='banner-about' data-aos='fade-right'>
                  <div className="followMeBar fixed" >
                    <h1><b>Education</b></h1>
                    <div>
                      <ul >
                        <br/>
                        <p >2011-1016:
                          <strong className='textFont'> Elementary School:pathomsuksa thammasat School</strong> (pathumthani, Thailand)
                        </p>
                        <br/>
                        <br/>
                        <p >2017-1019 :
                          <strong className='textFont'> Junior High School:thammasat klongluang withayakhom </strong> (pathumthani, Thailand)
                        </p>
                        <br/>
                        <br/>
                        <p >2020 - present :
                          <strong className='textFont'> High School:thammasat klongluang withayakhom</strong> (pathumthani, Thailand)
                        </p>
                      </ul>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      <div class="contrainer ">
        <div>
          <div class="row mt-5">
            <div class="col-6">
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
              {/* <div className='banner-about ' data-aos='fade-left'>
                <h3><b>About</b></h3>
                <div class='mt-5 md-3 text-dark'>
                <p class='followMeBar h3 mr-3 '>This page is about my programming abilities, educational background, and my traits.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
              </div> */}
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