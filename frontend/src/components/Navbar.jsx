import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[100%] text-center pt-[25px] select-none text-xl tracking-[50px]'>
      <Link to='/' className='block -mr-[50px]'>
        YSC
      </Link>
    </div>
  )
}

export default Navbar