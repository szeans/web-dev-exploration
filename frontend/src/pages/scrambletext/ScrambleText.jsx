import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import shuffle from '../../assets/shuffle@2x.png';

function ScrambleText() {
  const [wordOne, setWordOne] = useState("ORDER")
  const [wordTwo, setWordTwo] = useState("SHIFT808")
  const [wordThree, setWordThree] = useState("FLICKER")

  const randomizeWords = () => {
    getWord().then((word) => {
      setWordOne(word.toUpperCase())
    })

    getWord().then((word) => {
      setWordTwo(word.toUpperCase())
    })

    getWord().then((word) => {
      setWordThree(word.toUpperCase())
    })
  }

  function fetchRandomWord(length) {
    var url = "https://random-word-api.herokuapp.com/word?length=" + length
    return fetch(url) // Replace with the actual API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch the random word');
        }
        return response.json();
      })
      .then((data) => data[0])
      .catch((error) => {
        console.error('Error fetching random word:', error);
        return null; // Return null or handle the error as appropriate for your use case
      });
  }
  
  async function getWord() {
    try {
      const randomWord = await fetchRandomWord(Math.floor(Math.random() * (6) + 4));
      return randomWord;
    } catch (error) {
      console.error('Error getting word:', error);
      return null; // Return null or handle the error as appropriate for your use case
    }
  }

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
      }, 100);
    }
  }, []);

  useEffect(() => {
    const letters = wordTwo;

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
      }, 100);
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
        <h1 data-value={wordOne}
          className="text-4xl xl:text-8xl tracking-wider text-center mt-[100px] select-none">
          {wordOne}
        </h1>

        <h2 data-value={wordTwo}
          className="text-4xl xl:text-8xl tracking-wider text-center mt-[100px] select-none">
          {wordTwo}
        </h2>

        <h3 data-value={wordThree}
          className="text-4xl xl:text-8xl tracking-wider text-center mt-[100px] select-none">
          {wordThree}
        </h3>

        <button className="mt-[100px] ml-[48.5%] cursor-none" onClick={randomizeWords}>
          <img className="w-[50px]" src={shuffle} alt="shuffle icon" />
        </button>
      </div>
    </div>
  )
}

export default ScrambleText