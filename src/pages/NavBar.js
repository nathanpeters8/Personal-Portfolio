import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-xxl" id="navbarContent">
          <button 
            className="navbar-toggler ps-1 "
            type="button"
          >
            <span><i className="fa-solid fa-bars fa-xl text-white"></i></span>
          </button>
          <div className="collapse navbar-collapse justify-content-sm-center" id="navbarContent">
            <ul className="navbar-nav gap-5 text-center">
              <li className="nav-item pt-1 btn btn-lg"><Link to="/" className="nav-link text-light">About</Link></li>
              <li className="nav-item pt-1 btn btn-lg"><Link to="/projects" className="nav-link text-light">Projects</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;