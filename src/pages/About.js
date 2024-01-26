import {motion} from 'framer-motion';

import NavBar from "./NavBar";
import Heading from "./Heading";
import Resume from "./Resume";

const About = () => {
  return (
    <motion.div
      className='background-image rounded-3'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='container-xxl text-bg-dark bg-opacity-75'>
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