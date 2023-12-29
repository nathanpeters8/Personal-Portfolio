import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import NavBar from './pages/NavBar';
import Heading from './pages/Heading';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

library.add(faLinkedin, faGithub, faHackerrank, faLaptopCode, faLocationDot, faEnvelope);

function App() {
  return (
    <BrowserRouter>
      <div className="background-image rounded-3">
        <div className="container-xxl text-bg-dark bg-opacity-75">
          <div className="sm-background-image rounded-3">
            <div className="sm-background-color">
              <NavBar />
              <Heading />
            </div>
          </div>
          <Resume />
        </div>
      </div>
      <Projects />
    </BrowserRouter>
  );
}

export default App;
