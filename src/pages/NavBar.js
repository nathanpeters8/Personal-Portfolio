import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm bg-secondary bg-opacity-50 px-0 pb-0 mb-3 mb-sm-0'>
        <div className='container-fluid align-items-center'>
          <button
            className='navbar-toggler p-2 pt-1'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='custom-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse d-sm-flex justify-content-sm-center' id='navbarSupportedContent'>
            <ul className='navbar-nav gap-0 gap-sm-5'>
              <li className='nav-item pt-1 btn'>
                <Link to='/' className='nav-link text-light'>
                  About Me
                </Link>
              </li>
              <li className='nav-item pt-1 btn'>
                <Link to='/certificates' className='nav-link text-light'>
                  Certificates
                </Link>
              </li>
              <li className='nav-item pt-1 btn'>
                <Link to='/projects' className='nav-link text-light'>
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
