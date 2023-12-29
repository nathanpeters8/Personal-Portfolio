import ReactProjects from './ReactProjects';
import WebDevProjects from './WebDevProjects';
import JSProjects from './JSProjects';
import GameProjects from './GameProjects';
import DataSciProjects from './DataSciProjects';

import { Link, Routes, Route } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <h2 className='text-light fs-2 fw-bold d-flex justify-content-md-center'>Projects</h2>
      <p className='small fst-italic text-center'>(click on image to go to URL or GitHub repo)</p>
      <hr className='mb-5 pb-4' />
      <div className='btn-group d-flex justify-content-center gap-2 mb-5'>
        <Link to='/' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded active'>
          React
        </Link>
        <Link to='/webdev' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          Web Dev
        </Link>
        <Link to='/javascript' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          JavaScript
        </Link>
        <Link to='/gamedev' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          Game Dev
        </Link>
        <Link to='/datascience' className='btn btn-sm text-nowrap overflow-hidden btn-light rounded'>
          Data Science
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<ReactProjects />} />
        <Route path='/webdev' element={<WebDevProjects />} />
        <Route path='/javascript' element={<JSProjects />} />
        <Route path='/gamedev' element={<GameProjects />} />
        <Route path='/datascience' element={<DataSciProjects />} />
      </Routes>
      
      {/* <WebDevProjects />
      <JSProjects />
      <GameProjects />
      <DataSciProjects /> */}
    </>
  );
}

export default Projects;