import React from 'react'
import '../App.css'
import Footer from './Footer'

// Activity pic
import firebase1 from '../firebase_web1.png'
import firebase2 from '../firebase_web2.png'
import wire1 from '../activity_pic/wire1.PNG'
import pyExcel from '../activity_pic/pyExcel.PNG'
import contract1 from '../activity_pic/contract_1.PNG'
import etherscan1 from '../activity_pic/etherscan_1.PNG'
//icon
import sol        from '../sol.png'
import css        from '../cssLogo.png'
import remix      from '../remix.png'
import html       from '../htmlLogo.png'
import python     from '../python.webp'
import tkinter    from '../tkinter.png'
import binance    from '../binance-logo.png'
import Excel      from '../Microsoft_Excel.png'
import react_icon from '../react_logo.png'
import firebase   from '../firebase_icon.png'
import wireshark  from '../wireshark_logo.png'
import java       from '../java.png'
import JavaScript from '../JavaScript.png'
import Nodejs     from '../nodejs2.png'
import Bootstrap  from '../Bootstrap.png'
import vscode     from '../vscode.png'
import Git2        from '../Git2.png'
import github     from '../github.png'
// certificcate pic
import img1 from '../portfolio/01.jpg'
import img2 from '../portfolio/02.jpg'
import img3 from '../portfolio/03.jpg'
import img4 from '../portfolio/04.png'
import img5 from '../portfolio/05.jpg'
import img6 from '../portfolio/06.jpg'
import img7 from '../portfolio/lifelonglearning.png'
import img8 from '../portfolio/skooldio.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Myproject = () => {
  return (
    <div>
      <div className='header-wrapper'>
        <div className='HeaderTask'>
          <h1 class='font-weight-bold'>project</h1>
        </div>
        <div class='headerproject'>
          <svg
            x='0'
            y='0'
            viewBox='0 0 2560 100'>
            <polygon points='2560 0 2560 100 0 100'>
              <svg>
              </svg>
            </polygon>
          </svg>
        </div>
        <div className='HeaderTask bg-white'>
          <div>
          {/* Smart contract */}
          <div class="row">
            <div class='col-10'>
              <div class='card' data-aos='zoom-in-up' >
                <h2 class='m-3'><b>Smart contract</b></h2>
                {/* <img class="card-img-top" src={contract1} alt="Card image cap"></img> */}
                <div class="card-body">
                <div id='slides' class='carousel slide' data-ride='carousel'>
                    <ul class='carousel-indicators'>
                      <li data-target='#slides' data-slide-to='0' class='active'></li>
                      <li data-target='#slides' data-slide-to='1' ></li>
                    </ul>
                    <div class='carousel-inner'>
                      <div className='card-inner'>

                      <div class='carousel-item active'>
                        <img src={contract1} width='1000' height='600'></img>

                      </div>
                      <div class='carousel-item'>
                        <img src={etherscan1} width='1000' height='600'></img>
                      </div>
                      <a class='carousel-control-prev'
                        // href='#slides'
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
                    </div>
                  </div>
                  <h5 class="card-title">Smart Contract miniProject and deploying on rinkeby</h5>
                  {/* <h5 class="card-title">deploying on rinkeby</h5> */}
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <button type="button" class="btn btn-outline-success">website</button> */}
                  <a class='text-dark' target="_blank" href='https://beem10101.github.io/contract_html/hello.html'><button type="button" class="btn btn-outline-secondary ml-3">website</button></a>
                  <a class='text-dark' target="_blank" href='https://github.com/beem10101/Smart-contract'><button type="button" class="btn btn-outline-secondary ml-3">source code</button></a>
                </div>
              </div>
            </div>
            <div class="col bg-dark">
              <h5 class='text-white mt-2'>Made with:</h5>
              <div class='row mt-5'>
                <div class='col'>
                  <img src={sol}
                    width={30}
                    height={40}>
                  </img>
                </div>
                <div class='col'>
                  <img src={html}
                    width={40}
                    height={40}>
                  </img>
                </div>
                <div class='col'>
                  <img src={css}
                    width={30}
                    height={40}>
                  </img>
                </div>
                <div class='row'>
                  <div class='col ml-2 mt-4'>
                    <img src={remix}
                      width={60}
                      height={60}>
                    </img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          {/* WireShark */}
          <div class='row'>
            <div class='col-10'>
              <div class='card' data-aos='zoom-in-up'>
                <h2 class='m-3'><b>Web socket</b></h2>
                <img class="card-img-top" src={wire1} alt="Card image cap"></img>
                <div class="card-body">
                  {/* <h5 class="card-title">Card title</h5>/ */}
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a class='text-dark' target="_blank" href='https://github.com/beem10101/banance'><button type="button" class="btn btn-outline-secondary ml-3">source code</button></a>
                </div>
              </div>
            </div>
            <div class="col bg-dark">
              <h5 class='text-white mt-2'>Made with:</h5>
              <div class='row mt-5'>
                <div class='col'>
                  <img src={wireshark}
                    width={40}
                    height={40}>
                  </img>
                </div>
                <div class='col'>
                  <img src={python}
                    width={40}
                    height={40}>
                  </img>
                </div>
                <div class='col'>
                  <img src={binance}
                    width={40}
                    height={40}>
                  </img>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* PyExcel */}
          <div class='row'>
            <div class='col-10'>
              <div class='card' data-aos='zoom-in-up'>
                <h2 class='m-3'><b>PyExcel</b></h2>
                <img class="card-img-top" src={pyExcel} alt="Card image cap"></img>
                <div class="card-body">
                  {/* <h5 class="card-title">Card title</h5> */}
                  <p class="card-text">create gui to input info with Python Tkinter and write in Excel</p>
                  {/* <button type="button" target="_blank" class="btn btn-outline-secondary ml-3 text-dark" href="https://github.com/beem10101/pyexcel" >source code</button> */}
                  <a class='text-dark' target="_blank" href='https://github.com/beem10101/pyexcel'><button type="button" class="btn btn-outline-secondary ml-3">source code</button></a>
                </div>
              </div>
            </div>
            <div class="col bg-dark">
              <h5 class='text-white mt-2'>Made with:</h5>
              <div class='row mt-5'>
                <div class='col'>
                  <img src={python}
                    width={40}
                    height={40}>
                  </img>
                </div>
                <div class='col'>
                  <img src={tkinter}
                    width={40}
                    height={40}>
                  </img>
                </div>
                <div class='col'>
                  <img src={Excel}
                    width={40}
                    height={40}>
                  </img>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* firebase */}
          <div class='row'>
            <div class='col-10'>
              <div class='card' data-aos='zoom-in-up'>
                <h2 class='m-3'><b>Firebase</b></h2>
                <div class="card-body">
                  <div>
                    <div id='slides2' class='carousel slide' data-ride='carousel'>
                      <ul class='carousel-indicators'>
                        <li data-target='#slides2' data-slide-to='0' class='active'></li>
                        <li data-target='#slides2' data-slide-to='1' ></li>
                      </ul>
                      <div class='carousel-inner'>
                        <div className='card-inner'>

                        <div class='carousel-item active'>
                          <img src={firebase1} width='1000' height='600'></img>

                        </div>
                        <div class='carousel-item'>
                          <img src={firebase2} width='1000' height='600'></img>
                        </div>
                        <a class='carousel-control-prev'
                          role='button'
                          data-slide='prev'>
                          <span class='carousel-control-prev-icon'
                            aria-hidden='true'>
                          </span>
                          <span class='sr-only'>Previous</span>
                        </a>
                        <a class='carousel-control-next'
                          href='#slides2'
                          role='button'
                          data-slide='next'>
                          <span class='carousel-control-next-icon'
                            aria-hidden='true'>
                          </span>
                          <span class='sr-only'>Next</span>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* <h5 class="card-title">Card title</h5> */}
            <p class="card-text">Create a website to get the information,store it in Firebase and display it on the website.</p>
            <a class='text-dark' target="_blank" href='https://github.com/beem10101/React_FireBase'><button type="button" class="btn btn-outline-secondary ml-3">source code</button></a>
            </div>
            <div class="col bg-dark " >
              <h5 class='text-white mt-2'>Made with:</h5>
              <div class='row mt-5 '>
                <div class='col'>
                  <img src={firebase}
                    width={45}
                    height={45}>
                  </img>
                </div>
                <div class='col'>
                  <img src={html}
                    width={40}
                    height={40}>
                  </img>
                </div>
                <div class='col'>
                  <img src={css}
                    width={30}
                    height={40}>
                  </img>
                </div>
                <div class='row ml-1 mt-2'>
                  <div class='col'>
                    <img src={react_icon}
                      width={40}
                      height={40}>
                    </img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <br/>
          <br/>
        </div>
      </div>

      <div className='headerproject'>
            <div class='bg-white'>
              <div className='seperator-skew-top'>
                <svg
                x='0'
                y='0'
                viewBox='0 0 2560 100'>
                  <polygon points='2560 0 2560 100 0 100'>
                    <svg></svg>
                  </polygon>
                </svg>
              </div>
            </div>
              <div className='bg-myskill'>
                <div className='HeaderTask'>
                  <div className='container'></div>
                  <h2 class='text-white'>Myskill</h2>
                  <div class='row m-4'>
                  <div class='col'>
                    <img src={java}
                      width={65}
                      height={60}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={JavaScript}
                      width={50}
                      height={50}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={Git2}
                      width={60}
                      height={60}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={github}
                      width={60}
                      height={60}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={Nodejs}
                      width={60}
                      height={70}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={Bootstrap}
                      width={50}
                      height={50}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={vscode}
                      width={50}
                      height={50}>
                    </img>
                  </div>
                </div>
                <div class='row m-4'>
                  <div class='col'>
                    <img src={python}
                      width={60}
                      height={60}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={html}
                      width={60}
                      height={60}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={css}
                      width={43}
                      height={58}>
                    </img>
                  </div>
                    <div class='col'>
                      <img src={react_icon}
                        width={60}
                        height={60}>
                      </img>
                    </div>
                    <div class='col'>
                      <img src={firebase}
                        width={60}
                        height={60}>
                      </img>
                    </div>
                  <div class='col'>
                    <img src={wireshark}
                      width={45}
                      height={45}>
                    </img>
                  </div>
                  <div class='col'>
                    <img src={remix}
                      width={50}
                      height={50}>
                    </img>
                  </div>
                  </div>
                <div class='row m-4'>
                <div class='col'>
                  <img src={sol}
                    width={45}
                    height={45}>
                  </img>
                </div>
                <div class='col'>
                  <img src={tkinter}
                    width={45}
                    height={45}>
                  </img>
                </div>
                <div class='col'>
                  <img src={Excel}
                    width={45}
                    height={45}>
                  </img>
                </div>
                </div>
                </div>
                
              </div>
            
            <div className="seperator-skew-bottom">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          

            </div>
          </div>


      <div className='HeaderTask bg-white'>
                  {/* Certificcate */}
                  <h1 class='font-weight-bold text-dark'>certificcate</h1>
          <div class="container">
            <div class="row align-items-start">
              <div class="col" data-aos='zoom-in-up'>
                <img src={img8} class='border' width="350" height="300"></img>
                <p>intro to programming with python</p>
                <p>date:23/10/2021</p>
              </div>
              <div class="col" data-aos='zoom-in-up'>
                <img src={img5} class='border' width="350" height="300"></img>
                <p>สำรวจหลักสูตรและก้าวแรกcoding</p>
                <p>date:27/02/2022</p>
              </div>
              <div class="col" data-aos='zoom-in-up'>
                <img src={img7} class='border' width="350" height="300"></img>
                <p>กิจกรรมlifelong learning</p>
                <p>date:24/08/2022</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="row align-items-center">
              <div class="col" data-aos='zoom-in-up'>
                <img src={img3} class='border' width="350" height="300"></img>
                <p>การเขียนโปรแกรมเบื้องต้นด้วยPython</p>
                <p>date:06/03/2022</p>
              </div>
              <div class="col" data-aos='zoom-in-up'>
                <img src={img2} class='border' width="350" height="300"></img>
                <p>การเขียนโปรแกรมเบื้องต้นด้วยHtml&Css</p>
                <p>date:20/02/2022</p>
              </div>
              <div class="col mt-5" data-aos='zoom-in-up'>
                <img src={img4} class='border' width="350" height="300"></img>
                <p>การทดสอบความรู้"คอมพิวเตอร์และสารสนเทศ"</p>
                <p>รายวิชา"คอมพิวเตอร์และสารสนเทศเพื่องานอาชีพ"</p>
                <p>date:17/01/2022</p>
              </div>
            </div>
          </div>
      </div>
      <Footer />
      </div>
    </div>
  )
}
export default Myproject;