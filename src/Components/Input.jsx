import React from 'react'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Message...'/>
      <div className='send'>
        <img src='https://img.icons8.com/material-two-tone/512/attach.png' alt=''/>
        <input type= 'file' style={{display:'none'}} id='file'/>
        <label htmlFor='file'>
          <img src='https://img.icons8.com/ios-glyphs/512/add-image.png' alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input