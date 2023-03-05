import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Navbar />

      <Link to='/gradienthover'>gradienthover</Link>
      <Link to='/gridhover'>gridhover</Link>
      <Link to='/scrambletext'>scrambletext</Link>
    </div>
  )
}

export default Home