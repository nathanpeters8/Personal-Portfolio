import {  Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path='/' element={<About />}></Route>
      <Route path='/projects/*' element={<Projects />}></Route>
      <Route path='/certificates' element={<Certificates />}></Route>
    </Routes>
  );
};

export default RoutesWithAnimation;
