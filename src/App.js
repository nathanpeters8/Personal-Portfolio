import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faLocationDot, faEnvelope, faGlobe, faPlay } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import About from './pages/About';
import Projects from './pages/Projects';

library.add(faLinkedin, faGithub, faHackerrank, faLaptopCode, faLocationDot, faEnvelope, faGlobe, faPlay);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='projects/*' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
