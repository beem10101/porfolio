import React from 'react'
import Typed from 'react-typed'

import logo from '../logo.png'

function Header() {
  return (
    // <div className='header-wrapper'>
    //     <div className='main-info'>
    //     <h1>port1</h1>
    //     <Typed className='typed-text'
    //         strings={['Welcome','to','myportfolio!']}
    //         typeSpeed={120}
    //         backSpeed={60}
    //         loop
    //     />
    //     </div>
    // </div>

    <div>
    <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <img class="img-circle loaded" src={logo} width="180" height="180" data-was-processed="true" ></img>
        <br></br>
        <br></br>
    </div>
  <div className='HeaderTask'> 
    <a className="anchor" id="about"></a>
    <div className="followWrap">
        <div className="followMeBar fixed">
            <h2>About me</h2>
        </div>
    </div>
    <p >Email: kriskanin.h@gmail.com</p>
    <p>GitHub : <a href="https://github.com/KritzHeng" target="_blank">KritzHeng</a></p>   
    LinkedIn : <a href="https://www.linkedin.com/in/kriskanin/" target="_blank">Kriskanin Hengniran</a>
      <div className="followMeBar fixed">

      <h2>Education</h2>
  <div>
      <ul >
          <p>2019 - present</p>
          <strong>B.S. Computer Science</strong>
          <strong>Kasetsart University</strong> (Bangkok, Thailand)
      </ul>
      <ul >
          <p>2016 - 2018</p>
          <strong>Triamudom Suksa Pattanakarn Ratchada School</strong> (Bangkok, Thailand)
      </ul>
    </div>
  </div>
  </div>
  </div>
  )
}
export default Header