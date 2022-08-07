import React from 'react'
// import logo from '../logo.png'
import Typed from 'react-typed'

import profile1 from '../steve1.png'
import contract1 from '../contract_1.PNG'
import etherscan1 from '../etherscan_1.PNG'
import wire1 from '../wire1.PNG'
import pyExcel from '../pyExcel.PNG'

const Aboutme = () => {
  return (
    <div>
    <div className='header-wrapper'>
        <div className='main-info'>
        <h1>port1</h1>
        <div>
    <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <img className="rounded-circle" src={profile1} width="180" height="180" data-was-processed="true" ></img>
        <br></br>
        <br></br>
    </div>
  <div className='HeaderTask'> 
    <div class="card">
    <a className="anchor" id="about"></a>
    <div className="followWrap">
        <div className="followMeBar fixed">
            <h1><b>About me</b></h1>
        </div>
    </div>
    <p >Email: beem25301@gmail.co</p>
    <p>GitHub : <a href="https://github.com/beem10101" target="_blank">beem10101</a></p>   
    {/* <p>LinkedIn : <a href="https://www.linkedin.com/in/kriskanin/" target="_blank">Kriskanin Hengniran</a></p> */}
      <div className="followMeBar fixed">

      <h1><b>Education</b></h1>
  <div>
      <ul >
        <p >2017 - present :
            {/* <strong>high school</strong> */}
            <strong className='textFont'> thammasat klongluang wittayakom</strong> (pathumthani, Thailand)
        </p>
      </ul>
    </div>
  </div>
  </div>
        </div>
        </div>
    </div>
    </div>

  {/* <div className='HeaderTask'>
    <div>
      <p>project1</p>
      <p>aaa</p>
      <img src={contract1}></img>
    </div>
    <div>
      <p>project name</p>
      <p>ทำอะไรไปบ้าง....</p>
      <img src={etherscan1}></img>
    </div>
    <div>
      <p>project3</p>
      <p>aaa</p>
    </div>
  </div> */}
  
  </div>
  )
}

export default Aboutme;