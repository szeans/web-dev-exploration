import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
  useEffect(() => {
    document.title = "YSC";
  }, [])
  return (
    <div>
      <Navbar />
      <div className='container'>
        <ul className='text-center'>
          <li className='miniproject'>
            <a href='https://portal.szeanchoi.com'>
              <span className='letter'>p</span>
              <span className='letter'>o</span>
              <span className='letter'>r</span>
              <span className='letter'>t</span>
              <span className='letter'>a</span>
              <span className='letter'>l</span>
            </a>
          </li>
          <li className='miniproject'>
            <a href='https://sea.szeanchoi.com'>
              <span className='letter'>r</span>
              <span className='letter'>a</span>
              <span className='letter'>g</span>
              <span className='letter'>i</span>
              <span className='letter'>n</span>
              <span className='letter'>g</span>
              <span className='letter'>s</span>
              <span className='letter'>e</span>
              <span className='letter'>a</span>
            </a>
          </li>
          <li className='miniproject'>
            <a href='https://galaxy.szeanchoi.com'>
              <span className='letter'>g</span>
              <span className='letter'>a</span>
              <span className='letter'>l</span>
              <span className='letter'>a</span>
              <span className='letter'>x</span>
              <span className='letter'>y</span>
            </a>
          </li>
          <li className='miniproject'>
            <Link to='/scrambletext'>
              <span className='letter'>s</span>
              <span className='letter'>c</span>
              <span className='letter'>r</span>
              <span className='letter'>a</span>
              <span className='letter'>m</span>
              <span className='letter'>b</span>
              <span className='letter'>l</span>
              <span className='letter'>e</span>
              <span className='letter'>t</span>
              <span className='letter'>e</span>
              <span className='letter'>x</span>
              <span className='letter'>t</span>
            </Link>
          </li>
          <li className='miniproject'>
            <a href='https://www.szeanchoi.com'>
              <span className='letter'>p</span>
              <span className='letter'>h</span>
              <span className='letter'>o</span>
              <span className='letter'>t</span>
              <span className='letter'>o</span>
              <span className='letter'>g</span>
              <span className='letter'>r</span>
              <span className='letter'>a</span>
              <span className='letter'>p</span>
              <span className='letter'>h</span>
              <span className='letter'>y</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home