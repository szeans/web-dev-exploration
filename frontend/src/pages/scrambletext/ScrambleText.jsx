import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';

function ScrambleText() {
  useEffect(() => {
    document.title = 'Scramble Text | YSC'

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&"

    let interval = null;

    document.querySelector('h1').onmouseover = event => {
      let iterations = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            } else {
              return letters[Math.floor(Math.random() * 32)]
            }
          })
          .join('')


        if (iterations >= event.target.dataset.value.length) clearInterval(iterations);

        iterations = iterations + 1 / 2;
      }, 70);
    }
  }, []);

  useEffect(() => {
    const letters = 'SHIFT808'

    let interval = null;

    document.querySelector('h2').onmouseover = event => {
      let iterations = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = leftShift(event.target.innerText);

        if (event.target.innerText === letters) {
          clearInterval(interval);
        }

        iterations += 1;
      }, 50);
    }
  });

  const leftShift = ((word) => {
    let shiftedWord = '';


    for (let i = 1; i < word.length; i++) {
      shiftedWord += word.charAt(i);
    }
    shiftedWord += word.charAt(0);

    return shiftedWord;
  })

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&';
    let interval = null;

    document.querySelector('h3').onmouseover = event => {
      let arr = Array(8).fill(0);

      clearInterval(interval);

      interval = setInterval(() => {
        let rand = Math.floor(Math.random() * event.target.innerText.length);
        if (arr[rand] < 3) {
          event.target.innerText = event.target.innerText
            .split('')
            .map((letter, index) => {
              if (index == rand) {
                console.log("ANYONEHERE")
                arr[rand] += 1;
                return letters[Math.floor(Math.random() * 32)];
              } else {
                return letter;
              }
            })
            .join('');
        } else {
          event.target.innerText = event.target.innerText
            .split('')
            .map((letter, index) => {
              if (index == rand) {
                arr[rand] += 1;
                return event.target.dataset.value[rand];
              } else {
                return letter;
              }
            })
            .join('');
        }

        for (let i = 0; i < arr.length; i++) {
          if (arr[i] < 4) {
            break;
          } else if (i == (arr.length - 1)) {
            clearInterval(interval);
          }
        }
      }, 20);
    }
  });

  return (
    <div>
      <Navbar />

      <div className='container'>
        <p className="tracking-wider text-center mt-[50px]">hover on text below</p>
        <h1 data-value="ORDER"
          className="text-4xl xl:text-8xl tracking-wider text-center mt-[100px] select-none">
          ORDER
        </h1>

        <h2 data-value="SHIFT808"
          className="text-4xl xl:text-8xl tracking-wider text-center mt-[100px] select-none">
          SHIFT808
        </h2>

        <h3 data-value="FLICKER"
          className="text-4xl xl:text-8xl tracking-wider text-center mt-[100px] select-none">
          FLICKER
        </h3>
      </div>
    </div>
  )
}

export default ScrambleText