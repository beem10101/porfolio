import React from 'react'
import '../footer.css'
import {FaGithub,FaFacebook} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div class="contrainner">
        <div class="row">
          <section class='col-9'>
            <p className='footer-subscription-heading'>
                ContactMe
            </p>
            <p>Email : beem25301@gmail.com</p>
            <p>tel : 097-208-1942</p>
          </section>
          <div class='col-3'>
            <div class='row'>
              <div className='icon'>
                <a target='balnk' href='https://github.com/beem10101'><FaGithub /></a>
              </div>
              <div className='icon ml-3'>
                <a  target='blank' href='https://www.facebook.com/beem.za.7330/'><FaFacebook/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer