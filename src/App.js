import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence } from 'framer-motion';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faLocationDot, faEnvelope, faGlobe, faPlay } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import RoutesWithAnimation from './RoutesWithAnimation';

library.add(faLinkedin, faGithub, faHackerrank, faLaptopCode, faLocationDot, faEnvelope, faGlobe, faPlay);

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <RoutesWithAnimation />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
