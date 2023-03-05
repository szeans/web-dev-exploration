import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

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
  return <RouterProvider router={router}></RouterProvider>;
}

export default App
