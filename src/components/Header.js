import React from 'react'
import Typed from 'react-typed'

import logo from '../logo.png'
import contract1 from '../contract_1.PNG'
import etherscan1 from '../etherscan_1.PNG'
import wire1 from '../wire1.PNG'

function Header() {
  return (
    <div>
    <div className='header-wrapper'>
        <div className='main-info'>
        <h1>port1</h1>
        <Typed className='typed-text'
            strings={['Welcome','to','myportfolio!']}
            typeSpeed={120}
            backSpeed={60}
            loop
        />
        <div>
    <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <img className="rounded-circle" src={logo} width="180" height="180" data-was-processed="true" ></img>
        <br></br>
        <br></br>
    </div>
  <div className='HeaderTask'> 
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
  <div className='HeaderTask'>
  <div class="card">
  <img class="card-img-top" src={contract1} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://beem10101.github.io/contract_html/hello.html" target="_blank" class="btn btn-primary">Go somewhere</a>
  </div>
  <img class="card-img-top" src={etherscan1} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Smart Contract</h5>
    <p class="card-text">---</p>
    <a href="https://rinkeby.etherscan.io/address/0x2862788b5ce0b980a8d14a41df86ebe09450a5dd" target= "_blank" class="btn btn-primary">Etherscan</a>
  </div>
  <img class="card-img-top" src={wire1} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>
  </div>
  )
}
export default Header