import React from 'react'
import Typed from 'react-typed'

function Header() {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
        <h1>port1</h1>
        <Typed className='typed-text'
            strings={['Welcome','to','myportfolio!']}
            typeSpeed={120}
            backSpeed={60}
            loop
        />
        </div>
    </div>
  )
}

export default Header