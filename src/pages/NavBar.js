import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-light semi-transparent px-0 pb-0 justify-content-center mb-3 mb-sm-0'>
          <ul className='navbar-nav text-center gap-0 gap-sm-5'>
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
