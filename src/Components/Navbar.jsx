import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>ChatApp</span>
      <div className='user'>
        <img className='imguser' src='https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg' alt=''/>
        <span>Shruti Bhavsar</span>
        <button className='logoutbutton'>Log out</button>
      </div>
    </div>
  )
}

export default Navbar