import React from 'react'
import Typed from 'react-typed'

import logo from '../logo.png'
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
                    <Typed className='typed-name'
                      strings={["Hello I'm Beem!!!"]}
                      typeSpeed={120}/>
                    <div className='HeaderTask'> 
                      <div>
                        <a className="anchor" id="about"></a>
                        <div className="followWrap">
                          <br/>
                          <br/>
                          <br/>
                          <div className="followMeBar fixed">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, dolores sed rem magnam necessitatibus molestias unde obcaecati fuga ex optio. Assumenda, sit animi. Similique, harum dolores. Labore, laborum dolor! Possimus?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <img src={logo} width="400" height="400" data-was-processed="true" ></img>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <h3>Siravit Thawornsap</h3>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Header