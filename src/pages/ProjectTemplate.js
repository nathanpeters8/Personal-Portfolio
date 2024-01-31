import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const ProjectTemplate = (props) => {
  return (
    <>
      <div className='col-8 col-sm-7 col-lg-5'>
        <div className='project-content'>
          <div className='text-light text-decoration-none'>
            <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>{props.title}</h6>
            <div className='project-container position-relative'>
              <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${props.image})` }}></div>
              {/* LEAVING OFF HERE */}
              <div className='project-buttons d-flex justify-content-center col-12 position-absolute top-0 bg-dark gb-gradient btn-group'>
                {(() => {
                  if (!props.urls.hasOwnProperty('page')) {
                    return null;
                  }
                  return (
                    <a
                      href={props.urls.page}
                      className='btn btn-outline-light flex-fill btn-lg border-0'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon='fa-solid fa-globe'></FontAwesomeIcon>
                    </a>
                  );
                })()}
                {(() => {
                  if (!props.urls.hasOwnProperty('game')) {
                    return null;
                  }
                  return (
                    <a
                      href={props.urls.game}
                      target='_blank'
                      rel='noreferrer'
                      className='btn btn-outline-light flex-fill btn-lg border-0'
                    >
                      <FontAwesomeIcon icon='fa-solid fa-play fa-xl'></FontAwesomeIcon>
                    </a>
                  );
                })()}
                {(() => {
                  if (!props.urls.hasOwnProperty('github')) {
                    return null;
                  }
                  return (
                    <a
                      href={props.urls.github}
                      className='btn btn-outline-light flex-fill btn-lg border-0'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FontAwesomeIcon icon='fab fa-github'></FontAwesomeIcon>
                    </a>
                  );
                })()}
              </div>
            </div>
          </div>
          <div id='softwares'>
            <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
              {(() => {
                return props.softwares.map((soft, i) => {
                  return (
                    <li key={soft}>
                      <h6 className='mx-1 list-group-item rounded-2 p-1'>{soft}</h6>
                    </li>
                  );
                });
              })()}
            </ul>
          </div>
          <p className='lh-sm text-center'>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectTemplate;
