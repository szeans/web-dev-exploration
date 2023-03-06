import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[100%] text-center pt-[25px] select-none text-xl'>
      <Link to='/'>
        <span>Y</span>
        <span className='pl-[50px]'>S</span>
        <span className='pl-[50px]'>C</span>
      </Link>
    </div>
  )
}

export default Navbar