const Resume = () => {
  return (
    <>
      <div className='about container-xxl'>
        <div className='row'>
          <div className='col-12 mt-5'>
            <div className='about-heading'>
              <h2 className='fw-bold fs-2 d-flex justify-content-center'>About Me</h2>
              <hr />
              <p className='text-center'>
                As an enthusiastic and aspiring Full Stack Web Developer with a solid foundation in Information Science,
                I am passionate about creating high quality and innovative digital solutions. With my academic history,
                and hands-on experience in creating several different web pages, I am equipped with a diverse skill set
                to tackle challenges in the world of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='resume container-xxl mb-5 rounded-3'>
        <div className='row'>
          <div className='col-12 '>
            <div className='py-5' id='skills'>
              <h2 className='fw-bold fs-2 d-flex justify-content-center'>Skills</h2>
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
                    <li>
                      Ruby <small>({'<'} 1 year)</small>
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
                      ReactJS <small>(1 year)</small>
                    </li>
                    <li>
                      Bootstrap <small>(1 year)</small>
                    </li>
                    <li>
                      jQuery <small>({'<'} 1 year)</small>
                    </li>
                    <li>
                      Ruby On Rails <small>({'<'} 1 year)</small>
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
              <h2 className='fw-bold fs-2 d-flex justify-content-center'>Education</h2>
              <hr className='mb-4' />
              <div className='mb-5 pt-3'>
                <h4 className='text-decoration-underline'>Full Stack Web Developer Certification</h4>
                <h5 className='fst-italic pt-2'>
                  <a target='_blank' href='https://www.altcademy.com/' className='text-white text-decoration-none' rel='noreferrer'>
                    Altcademy
                  </a>
                </h5>
                <p className='lh-sm pt-2'>
                  Currently enrolled in Altcademy's full stack web development certificate program. So far I have
                  learned about building responsive websites using HTML, CSS, & Bootstrap, building dynamic websites
                  with JavaScript & jQuery, connecting to an API using Ajax, building web applications using React.js
                  learning back-end web development with Ruby on Rails, and finally learning full-stack web development by combining both React and Ruby on Rails. Next I will create a capstone project and then learn about Typescript.
                </p>
              </div>
              <div className='mb-5 pt-3'>
                <h4 className='text-decoration-underline'>B.S. Information Science and Technology</h4>
                <h5 className='fst-italic pt-2'>
                  <a target='_blank' href='https://www.arizona.edu/' className='text-white text-decoration-none' rel='noreferrer'>
                    University of Arizona
                  </a>
                </h5>
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
              <h2 className='fw-bold fs-2 d-flex justify-content-center'>Experience</h2>
              <hr className='mb-4' />
              <div className='mb-5 pt-3'>
                <h4 className='text-decoration-underline'>Programming Instructor</h4>
                <h5 className='fst-italic pt-2'>
                  <a target='_blank' href='https://my.codakid.com/' className='text-white text-decoration-none' rel='noreferrer'>
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
