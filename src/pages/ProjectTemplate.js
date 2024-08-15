import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProjectTemplate = (props) => {
  return (
    <>
      <div className='col-10 col-sm-8 col-md-7 col-lg-5 project-content'>
        <div className='text-light text-decoration-none'>
          <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>{props.title}</h6>
          <div className='project-container position-relative'>
            <div className='aspectRatioBox mb-3 px-0' style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className='project-buttons d-flex justify-content-center col-12 position-absolute top-0 btn-group gap-1'>
              {props.urls.hasOwnProperty('page') && (
                <a
                  href={props.urls.page}
                  className='btn btn-dark flex-fill btn-lg border-0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon='fa-solid fa-globe'></FontAwesomeIcon>
                </a>
              )}
              {props.urls.hasOwnProperty('game') && (
                <a
                  href={props.urls.game}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-dark flex-fill btn-lg border-0'
                >
                  <FontAwesomeIcon icon='fa-solid fa-play fa-xl'></FontAwesomeIcon>
                </a>
              )}
              {props.urls.hasOwnProperty('github') && (
                <a
                  href={props.urls.github}
                  className='btn btn-dark flex-fill btn-lg border-0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FontAwesomeIcon icon='fab fa-github'></FontAwesomeIcon>
                </a>
              )}
            </div>
          </div>
        </div>
        <div id='softwares'>
          <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
            {props.softwares.map((soft, i) => {
              return (
                <li key={soft}>
                  <h6 className='mx-1 list-group-item rounded-2 p-1'>{soft}</h6>
                </li>
              );
            })}
          </ul>
        </div>
        <p className='lh-sm text-center'>{props.description}</p>
      </div>
    </>
  );
};

export default ProjectTemplate;
