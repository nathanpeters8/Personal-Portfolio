import ProjectTemplate from "./ProjectTemplate";

const ProjectsRowTemplate = (props) => {
  return(
    <div className='pt-2 pb-1 mb-4'>
      <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>
        {props.title}
      </h4>
      <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5 flex-row-reverse'>
        {(() => {
          return Object.keys(props.projects).map((proj, i) => {
            return (
              <ProjectTemplate
                title={props.projects[i].title}
                softwares={props.projects[i].softwares}
                image={props.projects[i].image}
                description={props.projects[i].description}
              />
            );
          });
        })()}
      </div>
    </div>
  );
}

export default ProjectsRowTemplate;