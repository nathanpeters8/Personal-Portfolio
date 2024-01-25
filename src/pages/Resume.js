import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Resume = () => {
  return (
    <>
      <div className='about container-xxl'>
        <div className='row'>
          <div className='col-12 mt-5'>
            <div className='about-heading'>
              <h2 className='fw-bold fs-2 d-flex justify-content-md-center'>About Me</h2>
              <hr />
              <p>
                I'm an aspiring Full Stack Web Developer, with previous skills in Data Science & Game Development. I
                currently have a Bachelor's degree in Information Science, and am currently enrolled in a certificate
                program for Full Stack Web Development. I also work remotely as a Programming Instructor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='resume container-xxl mb-5 rounded-3'>
        <div className='row'>
          <div className='col-12 '>
            <div className='py-5' id='skills'>
              <h2 className='fw-bold fs-2 d-flex justify-content-md-center'>Skills</h2>
              <hr />
              <div className='row'>
                <div className='col-6 col-md-3 d-flex flex-column'>
                  <ul className='list-unstyled'>
                    <li className='fw-semibold text-decoration-underline mb-2'>Languages</li>
                    <li>
                      Python <small>(5 years)</small>
                    </li>
                    <li>
                      C# <small>(4 years)</small>
                    </li>
                    <li>
                      JavaScript <small>(3 years)</small>
                    </li>
                    <li>
                      Java <small>(2 years)</small>
                    </li>
                    <li>
                      Lua <small>(2 years)</small>
                    </li>
                  </ul>
                </div>
                <div className='col-6 col-md-3 d-flex flex-column'>
                  <ul className='list-unstyled'>
                    <li className='fw-semibold text-decoration-underline mb-2'>Web Development</li>
                    <li>
                      HTML <small>(2 years)</small>
                    </li>
                    <li>
                      CSS <small>(2 years)</small>
                    </li>
                    <li>
                      Bootstrap <small>({'<'} 1 year)</small>
                    </li>
                    <li>
                      jQuery <small>({'<'} 1 year)</small>
                    </li>
                    <li>
                      ReactJS <small>({'<'} 1 year)</small>
                    </li>
                    <li>
                      JSX <small>({'<'} 1 year)</small>
                    </li>
                  </ul>
                </div>
                <div className='col-6 col-md-3 d-flex flex-column'>
                  <ul className='list-unstyled'>
                    <li className='fw-semibold text-decoration-underline mb-2'>Game Engines</li>
                    <li>
                      Unity <small>(4 years)</small>
                    </li>
                    <li>
                      Pygame <small>(3 years)</small>
                    </li>
                    <li>
                      Roblox <small>(2 years)</small>
                    </li>
                    <li>
                      Minecraft <small>(2 years)</small>
                    </li>
                    <li>
                      Unreal <small>(1 year)</small>
                    </li>
                  </ul>
                </div>
                <div className='col-6 col-md-3 d-flex flex-column'>
                  <ul className='list-unstyled'>
                    <li className='fw-semibold text-decoration-underline mb-2'>Data Science</li>
                    <li>
                      Pandas <small>(2 years)</small>
                    </li>
                    <li>
                      NumPy <small>(2 years)</small>
                    </li>
                    <li>
                      Matplotlib <small>(2 years)</small>
                    </li>
                    <li>
                      SciPy <small>(2 years)</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 mt-4 mt-sm-3'>
            <div className='education'>
              <h2 className='fw-bold fs-2 d-flex justify-content-md-center'>Education</h2>
              <hr className='mb-4' />
              <div className='mb-5 pt-3'>
                <h4 className='text-decoration-underline'>Full Stack Web Developer Certificate</h4>
                <h5 className='fst-italic pt-2'>
                  <a target='_blank' href='https://www.altcademy.com/' className='text-white text-decoration-none'>
                    Altcademy
                  </a>
                </h5>
                <h6>
                  <small className='fw-light fst-italic'>(Apr 2023 - Present)</small>
                </h6>
                <p className='lh-sm pt-2'>
                  Currently enrolled in Altcademy's full stack web development certificate program. So far I have
                  learned about building responsive websites using HTML, CSS, & Bootstrap, building dynamic websites
                  with JavaScript & jQuery, connecting to an API using Ajax, and building web applications using
                  React.js. Soon I will focus on learning back-end web development with Ruby on Rails, and deploying a
                  full-stack application with Heroku, and learning Typescript.
                </p>
              </div>
              <div className='mb-5 pt-3'>
                <h4 className='text-decoration-underline'>B.S. Information Science and Technology</h4>
                <h5 className='fst-italic pt-2'>
                  <a target='_blank' href='https://www.arizona.edu/' className='text-white text-decoration-none'>
                    University of Arizona
                  </a>
                </h5>
                <h6>
                  <small className='fw-light fst-italic'>(Aug 2016 - Aug 2020)</small>
                </h6>
                <p className='lh-sm pt-2'>
                  Completed a Bachelor of Science degree in Information Science, with a minor in Geographic Information
                  Science. My main areas of focus were learning data science with Python, game development with Unity,
                  and GIS development with ArcGIS Pro.
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 mt-4 mt-sm-3'>
            <div className='experience'>
              <h2 className='fw-bold fs-2 d-flex justify-content-md-center'>Experience</h2>
              <hr className='mb-4' />
              <div className='mb-5 pt-3'>
                <h4 className='text-decoration-underline'>Programming Instructor</h4>
                <h5 className='fst-italic pt-2'>
                  <a target='_blank' href='https://my.codakid.com/' className='text-white text-decoration-none'>
                    CodaKid
                  </a>
                </h5>
                <h6>
                  <small className='fw-light fst-italic'>(Feb 2021 - Present)</small>
                </h6>
                <p className='lh-sm pt-2'>
                  I teach students aged from 6 to 12 the best practices in object-oriented programming primarily through
                  the game development. Languages I teach include Python using the pygame package, Java using Minecraft
                  mod creation, Lua using Roblox Studio, JavaScript using Phaser, and C# using Unity. I also teach a
                  course where students learn the basics of creating a static web page using HTML and CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
