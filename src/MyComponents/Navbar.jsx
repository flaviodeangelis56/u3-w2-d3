import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-black bg-black text-secondary selectedString">
      <img
        src="data:image/png;base64,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"
        alt="logo netflix"
        className="logo"
      />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">
            <NavLink to={"/"} className="text-secondary text-decoration-none selectedString">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link href="#">
            <NavLink to={"/tv-shows"} className="text-secondary text-decoration-none selectedString">
              TV Shows
            </NavLink>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary selectedString">
            <NavLink to={"/settings"} className="text-secondary text-decoration-none selectedString">
              Settings
            </NavLink>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary selectedString">
            <NavLink to={"/profile"} className="text-secondary text-decoration-none selectedString">
              Profile
            </NavLink>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary selectedString">
            <NavLink to={"/select-a-profile"} className="text-secondary text-decoration-none selectedString">
              Select a profile
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <form className="d-flex align-items-center" role="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search mx-3 text-secondary selectedString"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <p className="mx-3 mt-3 text-secondary selectedString">KIDS</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-bell-fill mx-3 text-secondary selectedString"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
        <img
          src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
          alt="profile icon"
          style={{ width: "50px" }}
          className="mx-3"
        />
      </form>
    </Navbar>
  );
}

export default MyNavbar;
