import NavBar from "./NavBar";
import Heading from "./Heading";
import Resume from "./Resume";

const About = () => {
  return (
    <div className='background-image rounded-3'>
      <div className='container-xxl text-bg-dark bg-opacity-75'>
        <div className='sm-background-image rounded-3'>
          <div className='sm-background-color'>
            <NavBar />
            <Heading />
          </div>
        </div>
        <Resume />
      </div>
    </div>
  );
}

export default About;