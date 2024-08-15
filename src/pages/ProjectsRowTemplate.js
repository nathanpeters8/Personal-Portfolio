import { motion, AnimatePresence } from 'framer-motion';
import ProjectTemplate from './ProjectTemplate';

const ProjectsRowTemplate = (props) => {
  const projectRowVariants = {
    enter: (direction) => {
      return {
        zIndex: 0,
        x: direction > 0 ? 1200 : -1200,
        opacity: 0,
        transition: {
          duration: 0.75,
        },
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1200 : -1200,
        opacity: 0,
        transition: {
          duration: 0.75,
        },
      };
    },
  };
  return (
    <AnimatePresence initial={false} custom={props.direction}>
      <h3 className='my-4 mb-2 mb-md-3 text-decoration-underline d-flex justify-content-center text-center'>
        {props.title}
      </h3>
      <motion.div
        key={props.title}
        className='pt-2 pb-1 mb-4'
        variants={projectRowVariants}
        initial='enter'
        animate='animate'
        exit='exit'
        custom={props.direction}
        transition={{
          x: { type: 'spring', stiffness: 300 },
        }}
      >
        <div
          className={
            'row ' +
            (Object.keys(props.projects).length < 3 ? 'justify-content-lg-around ' : '') +
            'overflow-scroll overflow-hidden flex-nowrap mt-4 mb-5 flex-row'
          }
        >
          {Object.keys(props.projects).map((proj, i) => {
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
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectsRowTemplate;
