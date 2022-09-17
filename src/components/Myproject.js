import React from 'react'
import '../App.css'
import Footer from './Footer'

// Activity pic
import contract1 from '../activity_pic/contract_1.PNG'
import etherscan1 from '../activity_pic/etherscan_1.PNG'
import wire1 from '../activity_pic/wire1.PNG'
import pyExcel from '../activity_pic/pyExcel.PNG'

import sol from '../sol.png'
import html from '../htmlLogo.png'
import css from '../cssLogo.png'

// certificcate pic
import img1 from '../portfolio/01.jpg'
import img2 from '../portfolio/02.jpg'
import img3 from '../portfolio/03.jpg'
import img4 from '../portfolio/04.png'
import img5 from '../portfolio/05.jpg'
import img6 from '../portfolio/06.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Myproject = () => {
  return (
    <div>
        <div className='header-wrapper'>
          <div className='HeaderTask'>
            <h1>project</h1>
          </div>
            <svg
            x='0'
            y='0'
            viewBox='0 0 2560 100'>
              <polygon points='2560 0 2560 100 0 100'>
                <svg>

                </svg>
              </polygon>
            </svg>
           <div className='HeaderTask bg-white'>
            {/* Smart contract */}
            <div class="row">
              <div class='col-10'>
                <div class='card' data-aos='zoom-in-up' >
                  <h2>Smart contract</h2>
                  <img class="card-img-top" src={contract1} alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title">Smart Contract miniProject</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://beem10101.github.io/contract_html/hello.html" target="_blank" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col bg-dark">
                <h5>Made with:</h5>
                <div class='row mt-5'>
                  <div class='col'>
                    <img src={sol}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={html}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={css}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            {/* EtherScan */}
            <div class='row'>
              <div class='col-10'>
                <div class='card' data-aos='zoom-in-up'>
                  <h2>EtherScan</h2>
                  <img class="card-img-top" src={etherscan1} alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title">deploying on rinkeby</h5>
                    <p class="card-text">---</p>
                    <a href="https://rinkeby.etherscan.io/address/0x2862788b5ce0b980a8d14a41df86ebe09450a5dd" target= "_blank" class="btn btn-primary">Etherscan</a>
                  </div>
                </div>
              </div>
              <div class="col bg-dark">
                <h5>Made with:</h5>
                <div class='row mt-5'>
                  <div class='col'>
                    <img src={sol}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={html}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={css}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            {/* WireShark */}
            <div class='row'>
              <div class='col-10'>
                <div class='card' data-aos='zoom-in-up'>
                  <h2>WireShark</h2>
                  <img class="card-img-top" src={wire1} alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col bg-dark">
                <h5>Made with:</h5>
                <div class='row mt-5'>
                  <div class='col'>
                    <img src={sol}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={html}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={css}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            {/* PyExcel */}
            <div class='row'>
              <div class='col-10'>
                <div class='card' data-aos='zoom-in-up'>
                  <h2>PyExcel</h2>
                  <img class="card-img-top" src={pyExcel} alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">create gui to input info with Python Tkinter and write in Excel</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col bg-dark">
                <h5>Made with:</h5>
                <div class='row mt-5'>
                  <div class='col'>
                    <img src={sol}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={html}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={css}
                         width={30}
                         height={40}>
                    </img>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            {/* Certificcate */}
            <h1>certificcate</h1>
            <div class="container">
              <div class="row align-items-start">
                <div class="col" data-aos='zoom-in-up'>
                  <img src={img1} width="350" height="300"></img>
                </div>
                <div class="col" data-aos='zoom-in-up'>
                  <img src={img2} width="350" height="300"></img>
                </div>
                <div class="col" data-aos='zoom-in-up'>
                  <img src={img3} width="350" height="300"></img>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
              <div class="row align-items-center">
                <div class="col" data-aos='zoom-in-up'>
                  <img src={img4} width="350" height="300"></img>
                </div>
                <div class="col" data-aos='zoom-in-up'>
                  <img src={img5} width="350" height="300"></img>
                </div>
                <div class="col" data-aos='zoom-in-up'>
                  <img src={img6} width="350" height="300"></img>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
        </div>
    </div>
  )
}
export default Myproject;