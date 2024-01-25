import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Heading = () => {
  return (
    <>
      <div className='container-xxl mt-3'>
        <div className='row pb-2'>
          <div className='col-12 d-flex flex-column align-items-md-center flex-wrap'>
            <div className='heading pb-2'>
              <h1 className='display-4'>Nathan Peters</h1>
            </div>
          </div>
          <div className='col-12 ps-0 mt-4 d-flex flex-column flex-sm-row flex-nowrap justify-content-start justify-content-md-center'>
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
        </div>
      </div>

    </>
  );
};

export default Heading;
