import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './style.css'

function GradientHover() {
  document.title = 'Gradient Hover | YSC';
  
  useEffect(() => {
    const subtitle = document.getElementsByClassName('card-subtitle')[0];

    const createWord = (text, index) => {
      const word = document.createElement('span');

      word.innerHTML = `${text}`;

      word.classList.add('card-subtitle-word');

      word.style.transitionDelay = `${index * 40}ms`;
      word.style.background = 'transparent';
      return word;
    };

    const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

    const createSubtitle = text => text.split(' ').map(addWord);
    if (document.getElementsByClassName('card-subtitle-word').length == 0) {
      createSubtitle('In the midst of winter, I found there was, within me, an invincible summer.');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <p className='text-center'>hover card</p>
      <div className='h-[50px]'></div>
      <div className='container'>
        <div className='card'>
          <div className='card-content'>
            <p className='bg-transparent text-4xl font-medium p-10 pb-0'>Albert Camus</p>
            <p className='card-subtitle bg-transparent font-medium p-10'></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientHover