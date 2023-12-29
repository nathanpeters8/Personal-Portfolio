import ReactProjects from './ReactProjects';
import WebDevProjects from './WebDevProjects';
import JSProjects from './JSProjects';
import GameProjects from './GameProjects';
import DataSciProjects from './DataSciProjects';

const Projects = () => {
  return (
    <>
      <h2 className='text-light fs-2 fw-bold d-flex justify-content-md-center'>Projects</h2>
      <p className='small fst-italic text-center'>(click on image to go to URL or GitHub repo)</p>
      <hr className='mb-5 pb-4' />
      <ReactProjects />
      <WebDevProjects />
      <JSProjects />
      <GameProjects />
      <DataSciProjects />
    </>
  );
}

export default Projects;