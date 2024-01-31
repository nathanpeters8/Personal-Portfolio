import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand navbar-light semi-transparent px-0 pb-0 justify-content-start justify-content-md-center'>
          <ul className='navbar-nav gap-5 text-center'>
            <li className='nav-item pt-1 btn btn-lg'>
              <Link to='/' className='nav-link text-light'>
                About
              </Link>
            </li>
            <li className='nav-item pt-1 btn btn-lg'>
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
