import { motion, AnimatePresence } from 'framer-motion';
import ProjectTemplate from "./ProjectTemplate";


const ProjectsRowTemplate = (props) => {
  const projectRowVariants = {
    enter: (direction) => {
      console.log('enter dir ' + direction);
      return { 
        x: (direction > 0 ? 1200 : -1200),
        opacity: 0,
        transition: {
          duration: 0.75,
        } 
      };
    },
    animate: { 
      x: 0, 
      opacity: 1, 
      zIndex: 1
    },
    exit: (direction) => {
      console.log('exit dir ' + direction);
      return {
        zIndex: 0,
        x: (direction < 0 ? 1200 : -1200),
        opacity: 0,
        transition: {
          duration: 0.75,
        },
      };
    },
  };
  return (
    <AnimatePresence initial={false} custom={props.direction}>
      <h4 className='my-4 pb-2 pb-md-3 text-decoration-underline d-flex justify-content-md-center'>{props.title}</h4>
      <motion.div
        key={props.title}
        className='pt-2 pb-1 mb-4'
        variants={projectRowVariants}
        initial='enter'
        animate='animate'
        exit='exit'
        custom={props.direction}
        transition={{
          x: { type: 'spring', stiffness: 300},
        }}
      >
        <div className='row overflow-scroll overflow-y-hidden flex-nowrap mt-4 mb-5 flex-row-reverse'>
          {(() => {
            return Object.keys(props.projects).map((proj, i) => {
              return (
                <ProjectTemplate
                  title={props.projects[i].title}
                  softwares={props.projects[i].softwares}
                  image={props.projects[i].image}
                  urls={props.projects[i].urls}
                  description={props.projects[i].description}
                  key={props.projects[i].title}
                />
              );
            });
          })()}
        </div>
      </motion.div>

    </AnimatePresence>
  );
}

export default ProjectsRowTemplate;