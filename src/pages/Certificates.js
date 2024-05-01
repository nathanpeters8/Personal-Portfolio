import React from 'react';
import NavBar from './NavBar';
import Heading from './Heading';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certImages = [
    require('../images/Certifications/HTML_CSS.png'),
    require('../images/Certifications/JavaScript.png'),
    require('../images/Certifications/Dynamic_Website.png'),
    require('../images/Certifications/React.png'),
    require('../images/Certifications/Ruby.png'),
    require('../images/Certifications/Ruby_On_Rails.png')
  ];

  return (
    <>
      <motion.div
        className='container-xxl projects-background text-bg-dark bg-opacity-75'
        initial={{ opacity: 0, transition: { duration: 0.75 } }}
        animate={{ opacity: 1, transition: { duration: 0.75 } }}
        exit={{ opacity: 0, transition: { duration: 0.75 } }}
      >
        <div className='sm-background-image rounded-3'>
          <div className='sm-background-color'>
            <NavBar />
            <Heading />
          </div>
        </div>
        <h2 className='text-light fs-2 fw-bold d-flex justify-content-md-center mt-5'>Certificates</h2>
        <hr className='mb-5 pb-4' />
        <div>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-bg-dark bg-opacity-25 mb-3'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[0]})` }}></div>
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title text-center'>HTML/CSS Development</h5>
                  <p className='card-text text-center'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-bg-dark bg-opacity-25 mb-3'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[1]})` }}></div>
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title text-center'>JavaScript Programming</h5>
                  <p className='card-text text-center'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-bg-dark bg-opacity-25 mb-3'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[2]})` }}></div>
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title text-center'>Dynamic Website Development</h5>
                  <p className='card-text text-center'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-bg-dark bg-opacity-25 mb-3'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[3]})` }}></div>
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title text-center'>React Development</h5>
                  <p className='card-text text-center'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-bg-dark bg-opacity-25 mb-3'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[4]})` }}></div>
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title text-center'>Ruby Programming</h5>
                  <p className='card-text text-center'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-bg-dark bg-opacity-25 mb-3'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[5]})` }}></div>
                <div className='card-body d-flex flex-column align-items-center'>
                  <h5 className='card-title text-center'>Ruby on Rails Back-End</h5>
                  <p className='card-text text-center'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Certificates;
