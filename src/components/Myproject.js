import React from 'react'
import Typed from 'react-typed'
import '../App.css'

import logo from '../logo.png'
import contract1 from '../contract_1.PNG'
import etherscan1 from '../etherscan_1.PNG'
import wire1 from '../wire1.PNG'
import pyExcel from '../pyExcel.PNG'

const Myproject = () => {
  return (
    <div>
      <div className='header-wrapper'>
        <div className='HeaderTask'>
          <div class="card">
    <h2>SmartContract</h2>
    <img class="card-img-top" src={contract1} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Smart Contract miniProject</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="https://beem10101.github.io/contract_html/hello.html" target="_blank" class="btn btn-primary">Go somewhere</a>
    </div>
    <img class="card-img-top" src={etherscan1} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">deploying on rinkeby</h5>
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

          <div><br></br></div>

          <div class='card'>
      <img class="card-img-top" src={pyExcel} alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Myproject;