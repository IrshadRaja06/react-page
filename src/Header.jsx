import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='nav nav-justified p-4 bg-primary text-white sticky-top'>
        <li className='nav-item fs-4'>Home</li>
        <li className='nav-item fs-4'>AboutUS</li>
        <li className='nav-item fs-4'>Products</li>
        <li className='nav-item fs-4'>Service</li>
        <li className='nav-item fs-4'>ContactUS</li>
      </nav>
    </div>
  )
}

export default Header;