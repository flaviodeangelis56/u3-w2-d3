import { Component } from "react";
import { NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <header className="pt-3 d-flex align-items-center justify-content-between bgMain pb-5">
        <div>
          <h1 className="text-white d-inline-block mx-3">Movie Sagas</h1>
          <div className="bg-black d-inline-block border border-white">
            <NavDropdown id="nav-dropdown-dark-example" title="Genres" menuVariant="dark" className="text-white p-1">
              <NavDropdown.Item href="#action/3.1">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Documentary</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romantic comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Cartoon/animation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Musical</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Action</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className="me-5">
          <div className="border border-white d-inline-block divIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-text-left text-white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div className="border border-white d-inline-block divIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-grid-fill text-white"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
