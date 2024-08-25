import logo from "../assets/Images/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="110" height="45" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 me-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Condos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Homes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Map
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Top 100
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active bor" href="#">
                  More
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-circle-user icon"></i>
                </a>
              </li>
            </ul>
            <form className="d-flex nav-form" role="search">
              <input className="form-control rounded-start-5 rounded-end-0 border-0" type="search" placeholder="Search Properties" aria-label="Search" />
              <button style={{backgroundColor: "#fff"}} className="btn border-0 rounded-start-0 rounded-end-0" type="submit"><i style={{color: "#E4A231"}} className="bi bi-search"></i></button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
