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
    require('../images/Certifications/Ruby_On_Rails.png'),
    require('../images/Certifications/Full_Stack.png'),
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
        <div className='row justify-content-center'>
          <div className='col-8 col-md-6 col-lg-4'>
            <div className='card cert-container text-bg-dark bg-opacity-25 mb-3'>
              <a target='_blank' href='https://www.altcademy.com/@nathanpeters8/certificate/fullstack' rel='noreferrer'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[6]})` }}></div>
              </a>
              <div className='card-body d-flex flex-column align-items-center'>
                <h5 className='card-title text-center'>Full Stack Web Development</h5>
                <p className='card-text text-center'>
                  Learned how to create full-stack web applications with Ruby on Rails as the back-end and React.js as
                  the front-end. Also learned about using webhooks, webpacker, and redis servers.
                </p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-6 col-lg-4'>
            <div className='card cert-container text-bg-dark bg-opacity-25 mb-3'>
              <a target='_blank' href='https://www.altcademy.com/@nathanpeters8/certificate/railsium' rel='noreferrer'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[5]})` }}></div>
              </a>
              <div className='card-body d-flex flex-column align-items-center'>
                <h5 className='card-title text-center'>Ruby on Rails Back-End</h5>
                <p className='card-text text-center'>
                  Learned how to create back-end web server application with Ruby on Rails, including the MVC structure,
                  database management with ActiveRecord, photo upload with AWS S3.
                </p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-6 col-lg-4'>
            <div className='card cert-container text-bg-dark bg-opacity-25 mb-3'>
              <a target='_blank' href='https://www.altcademy.com/@nathanpeters8/certificate/rubyium' rel='noreferrer'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[4]})` }}></div>
              </a>
              <div className='card-body d-flex flex-column align-items-center'>
                <h5 className='card-title text-center'>Ruby Programming</h5>
                <p className='card-text text-center'>
                  Learned basic and advanced concepts of object-oriented programming using Ruby.
                </p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-6 col-lg-4'>
            <div className='card cert-container text-bg-dark bg-opacity-25 mb-3'>
              <a target='_blank' href='https://www.altcademy.com/@nathanpeters8/certificate/reactjs' rel='noreferrer'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[3]})` }}></div>
              </a>
              <div className='card-body d-flex flex-column align-items-center'>
                <h5 className='card-title text-center'>React.js Development</h5>
                <p className='card-text text-center'>
                  Learned how to create web applications with React.js, including state management, routing, and API
                  requests with Fetch.
                </p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-6 col-lg-4'>
            <div className='card cert-container text-bg-dark bg-opacity-25 mb-3'>
              <a
                target='_blank'
                href='https://www.altcademy.com/@nathanpeters8/certificate/javascriptium'
                rel='noreferrer'
              >
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[1]})` }}></div>
              </a>
              <div className='card-body d-flex flex-column align-items-center'>
                <h5 className='card-title text-center'>JavaScript Programming</h5>
                <p className='card-text text-center'>
                  Learned basic and advanced OOP concepts with JavaScript ES5 and ES6.
                </p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-6 col-lg-4'>
            <div className='card cert-container text-bg-dark bg-opacity-25 mb-3'>
              <a target='_blank' href='https://www.altcademy.com/@nathanpeters8/certificate/jqueryium' rel='noreferrer'>
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[2]})` }}></div>
              </a>
              <div className='card-body d-flex flex-column align-items-center'>
                <h5 className='card-title text-center'>Dynamic Website Development</h5>
                <p className='card-text text-center'>
                  Learned how to use JavaScript and jQuery to manipulate the DOM and create dynamic web pages. Also
                  learned how to use AJAX to make API requests.
                </p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-6 col-lg-4'>
            <div className='card cert-container text-bg-dark bg-opacity-25 mb-3'>
              <a
                target='_blank'
                href='https://www.altcademy.com/@nathanpeters8/certificate/webdesignium'
                rel='noreferrer'
              >
                <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${certImages[0]})` }}></div>
              </a>
              <div className='card-body d-flex flex-column align-items-center'>
                <h5 className='card-title text-center'>HTML/CSS Development</h5>
                <p className='card-text text-center'>
                  Learned basic and advanced concepts of HTML, CSS and Bootstrap to create responsive web pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Certificates;
