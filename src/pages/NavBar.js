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
          <div className="collapse navbar-collapse justify-content-sm-end" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item pt-1 p-sm-2"><a href="#" className="nav-link text-light">Home</a></li>
              <li className="nav-item pt-1 p-sm-2"><a href="#about" className="nav-link text-light">About</a></li>
              <li className="nav-item pt-1 p-sm-2"><a href="#skills" className="nav-link text-light">Skills</a></li>
              <li className="nav-item pt-1 p-sm-2"><a href="#projects" className="nav-link text-light">Projects</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;