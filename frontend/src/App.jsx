import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './pages/home/Home';
import GradientHover from './pages/gradienthover/GradientHover';
import GridHover from './pages/gridhover/GridHover';
import ScrambleText from './pages/scrambletext/ScrambleText';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gradienthover",
    element: <GradientHover />,
  },
  {
    path: "/gridhover",
    element: <GridHover />,
  },
  {
    path: "/scrambletext",
    element: <ScrambleText />,
  },
]);

function App() {
  useEffect(() => {
    if ("ontouchstart" in document.documentElement) {
      // content for touch-screen (mobile) devices
    }
    else {
      const cursorDot = document.querySelector('[data-cursor-dot]');
      const cursorOutline = document.querySelector('[data-cursor-outline]');
      window.addEventListener('mousemove', function (e) {
        const posX = e.clientX - 12;
        const posY = e.clientY - 12;

        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 400, fill: "forwards" });
        document.getElementById('cursor-outline').style.backgroundColor = 'white';
      });

      window.addEventListener('mousedown', function (e) {

      });
    }
  }, []);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <div id='cursor-outline' data-cursor-outline></div>
    </div>
  );
}

export default App
