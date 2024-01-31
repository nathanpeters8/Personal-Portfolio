import {  Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path='/' element={<About />}></Route>
      <Route path='/projects/*' element={<Projects />}></Route>
    </Routes>
  );
};

export default RoutesWithAnimation;
