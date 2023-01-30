import React from 'react';
import '../App.scss'
import Input from './Input'
import Messages from './Messages';
function Chat() {
  return (
    <div className='chat'>
      <div className='chatinfo'>
        <span>Shruti Bhavsar</span>
        <div className='chatIcons'>
          <img className='img1' src='https://img.icons8.com/ios-glyphs/512/video-call.png' alt=''/>
          <img className='img2' src='https://img.icons8.com/ios-glyphs/512/add--v1.png' alt=''/>
          <img className='img3' src='https://img.icons8.com/ios-glyphs/512/more.png' alt=''/>
        </div>
      </div>
      <Messages/>
      <Input/>

    </div>
  )
}

export default Chat