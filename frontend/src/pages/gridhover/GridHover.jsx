import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './style.css'

function GridHover() {
  useEffect(() => {
    document.getElementById('cards').onmousemove = e => {
      for (const card of document.querySelectorAll('.card')) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    }
  });

  return (
    <div>
      <Navbar />
      <div className='container gridhover'>
        <div id='cards'>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content'>
            </div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content'></div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content'></div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content'></div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content'></div>
          </div>
          <div className='card'>
            <div className='card-border'></div>
            <div className='card-content'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridHover