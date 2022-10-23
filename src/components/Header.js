import React from 'react'
import Typed from 'react-typed'

import prot_pic from '../port_pic2.jpg'
import Footer from './Footer'
import Aboutme from './Aboutme'

// import img1 from '../portfolio/01.jpg'
// import img2 from '../portfolio/02.jpg'
// import img3 from '../portfolio/03.jpg'


function Header() {
  return (
    <div>
    <div className='header-wrapper'>
        <div className='main-info'>
          <div>
            <div className='container'>
              <br/>
              <br/>
              <br/>
              <div className="banner-section">
                <div class="row">
                  <div class="col-8 col-sm-6">
                    <div class='row'>
                      <div class='col'>
                    <Typed className='typed-name'
                      strings={["Hello I'm Beem!"]}
                      typeSpeed={120}/>
                    <div className='HeaderTask'> 
                      <div>
                        <a className="anchor" id="about"></a>
                        <div className="followWrap">
                          <br/>
                          <br/>
                          <br/>
                          <div className="followMeBar ">
                            <h5>Hello, My name is Beem, I'm 17 years old.I am a person who has a calm personality and does not like chaos.
                            I love programming Likes to solve problems using logical and rational thinking.I started to have an interest in programming in grade 4.
                            and have tried writing different languages ​​such as python java HTML CSS javascript </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  <div class="col-lg-6">
                    <img src={prot_pic} width="400" height="400" data-was-processed="true" ></img>
                      <br/>
                      <br/>
                      <br/>
                      <div className='followMeBar'>
                      <h3>Siravit Thawornsap</h3>
                        <h5>Email:beem25301@gmail.com</h5>
                        <h5>GitHub : <a href="https://github.com/beem10101" target="_blank">Beem10101</a></h5>  
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide pic */}
            {/* <div id='slides' class='carousel slide mb-5' data-ride='carousel'>
              <ul class='carousel-indicators'>
                <li data-target='#slides' data-slide-to='0' class='active'></li>
                <li data-target='#slides' data-slide-to='1' ></li>
                <li data-target='#slides' data-slide-to='2' ></li>
              </ul>
              <div class='carousel-inner'>
                <div class='carousel-item active'>
                  <img src={img1} width='900' height='600'></img>                                  
                </div>
                <div class='carousel-item'>
                  <img src={img2} width='900' height='600'></img>                                  
                </div>
                <div class='carousel-item'>
                  <img src={img3} width='900' height='600'></img>                                  
                </div>
                <a class='carousel-control-prev' 
                    href='#slides'
                    role='button'
                    data-slide='prev'>
                  <span class='carousel-control-prev-icon'
                        aria-hidden='true'>
                  </span>
                  <span class='sr-only'>Previous</span>
                </a>
                <a class='carousel-control-next' 
                    href='#slides'
                    role='button'
                    data-slide='next'>
                  <span class='carousel-control-next-icon'
                        aria-hidden='true'>
                  </span>
                  <span class='sr-only'>Next</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <Aboutme />
      </div>
    </div>

  )
}
export default Header