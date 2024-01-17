
const ProjectTemplate = (props) => {
  return (
    <div className='col-8 col-sm-7 col-lg-5'>
      <div className='project-content'>
        <div className='text-light text-decoration-none'>
          <h6 className='py-2 fst-italic text-nowrap overflow-hidden ms-1'>{props.title}</h6>
          <div className='aspectRatioBox mb-3' style={{ backgroundImage: `url(${props.image})`}}></div>
        </div>
        <div id='softwares'>
          <ul className='list-group list-unstyled list-group-horizontal justify-content-center flex-wrap'>
            {(() => {
              return props.softwares.map((soft, i) => {
                return (
                  <li>
                    <h6 className='mx-1 list-group-item rounded-2 p-1'>{soft}</h6>
                  </li>
                );
              })
            })()}
          </ul>
        </div>
        <p className='lh-sm text-center'>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectTemplate;
