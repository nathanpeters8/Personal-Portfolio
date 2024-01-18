import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Heading = () => {
  return (
    <>
      <div className='container-xxl mt-3'>
        <div className='row pb-2'>
          <div className='col-12 d-flex flex-column align-items-md-center flex-wrap'>
            <div className='heading pb-2'>
              <h1 className='display-4'>Nathan Peters</h1>
              <p className='small fst-italic'>
                ** currently working on converting portfolio into a React.js application... **
              </p>
            </div>
          </div>
          <div className='col-12 ps-0 mt-2 d-flex flex-column flex-sm-row flex-nowrap justify-content-start justify-content-md-center'>
            <div className='site-links h3'>
              <a
                title='LinkedIn'
                target='_blank'
                href='https://www.linkedin.com/in/nathan-peters8/'
                className='text-light px-3 py-1'
              >
                <FontAwesomeIcon icon='fab fa-linkedin fa-xl'></FontAwesomeIcon>
              </a>
              <a
                title='GitHub'
                target='_blank'
                href='https://github.com/nathanpeters8'
                className='text-light px-3 py-1'
              >
                <FontAwesomeIcon icon='fab fa-github fa-xl'></FontAwesomeIcon>
              </a>
              <a
                title='Replit'
                target='_blank'
                href='https://replit.com/@nathanpeters8'
                className='text-light px-3 py-1'
              >
                <FontAwesomeIcon icon='fa-solid fa-laptop-code fa-xl'></FontAwesomeIcon>
              </a>
              <a
                title='HackerRank'
                target='_blank'
                href='https://www.hackerrank.com/peters_nate8'
                className='text-light px-3 py-1'
              >
                <FontAwesomeIcon icon='fab fa-hackerrank fa-xl'></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <hr className='my-3' />
          <div className='col-12 info d-flex flex-column align-items-md-center'>
            <h5 className='d-flex align-items-center'>
              <FontAwesomeIcon icon='fa-solid fa-location-dot' className='me-3'></FontAwesomeIcon>Denver, Colorado
            </h5>
            <h5 className='d-flex align-items-center'>
              <FontAwesomeIcon icon='fa-solid fa-envelope' className='me-3'></FontAwesomeIcon>peters.nate8@gmail.com
            </h5>
          </div>
        </div>
      </div>
      <div className="about container-xxl mt-5">
        <div className="row">
          <div className="col-12">
            <div className="about-heading">
              <h2 className="fw-bold fs-2 d-flex justify-content-md-center">About Me</h2>
              <hr/>
              <p>I'm an aspiring Full Stack Web Developer, with previous skills in Data Science & Game Development. I currently have a Bachelor's degree in Information Science, and am currently enrolled in a certificate program for Full Stack Web Development. I also work remotely as a Programming Instructor.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
