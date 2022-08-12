import React from 'react'
import profile1 from '../steve1.png'

const Aboutme = () => {
  return (
  <div>
    <div className='header-wrapper'>
      <div className='main-info'>
        <div>
        {/* Abuot me */}
        <h1><b>About me</b></h1>
        <div className='banner-about'>
          <div className='container'> 
          <br/>
          <br/>
          <br/>
              <img src={profile1} width="400" height="400" data-was-processed="true" ></img>
            <br/>
            <br/>
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
        <br/>
        <br/>
        <br/>
        {/* Education */}
        <div className='banner-about'>
          <div className="followMeBar fixed">
            <h1><b>Education</b></h1>
            <div>
              <ul >
                <p >2017 - present :
                <strong className='textFont'> thammasat klongluang wittayakom</strong> (pathumthani, Thailand)
                </p>
              </ul>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        {/* My skill */}
        <div className='banner-about'>
          <div className="followMeBar fixed">
            <h1><b>My skill</b></h1>
              <div>
                <ul>           
                  <h3>programing language</h3>
                  <p>Python</p>
                  <p>Java</p>
                  <p>JavaScript</p>
                  <p>Html,Css</p>
                </ul>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Aboutme;