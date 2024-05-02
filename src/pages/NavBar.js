import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand navbar-light semi-transparent px-0 pb-0 justify-content-start justify-content-md-center'>
          <ul className='navbar-nav gap-5 text-center'>
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
      </nav>
    </>
  );
};

export default NavBar;
