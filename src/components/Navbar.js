import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Typed from 'react-typed'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-color">
            <div className="container">
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#ffff"}} />
            </button>
            <Typed className='typed-text'
            strings={['Welcome','to','myportfolio!!!']}
            typeSpeed={120}
            backSpeed={60}
            loop
            />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Myproject">My project</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar