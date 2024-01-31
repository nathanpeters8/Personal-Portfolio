import {motion} from 'framer-motion';

import NavBar from "./NavBar";
import Heading from "./Heading";
import Resume from "./Resume";

const About = () => {
  return (
    <motion.div
      className='background-image rounded-3'
      initial={{ opacity: 0, transition: {duration: 0.75} }}
      animate={{ opacity: 1, transition: {duration: 0.75} }}
      exit={{ opacity: 0, transition: {duration: 0.75} }}
    >
      <div className='container-xxl px-2 px-md-0 text-bg-dark bg-opacity-75'>
        <div className='sm-background-image rounded-3'>
          <div className='sm-background-color'>
            <NavBar />
            <Heading />
          </div>
        </div>
        <Resume />
      </div>
    </motion.div>
  );
}

export default About;