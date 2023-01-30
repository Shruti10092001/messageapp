import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type= 'text' placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://media.istockphoto.com/id/819843288/photo/studio-shot-of-young-handsome-indian-businessman-against-gray-background.jpg?s=612x612&w=is&k=20&c=gH0_lmC2frWBsJHL4zRJSnBuGESDFXQNLDFtd1zH-A4=' alt=''/>
        <div className='userchatinfo'>
          <span>Aditya Bhavsar</span>
        </div>
      </div>
    </div>
  )
}

export default Search