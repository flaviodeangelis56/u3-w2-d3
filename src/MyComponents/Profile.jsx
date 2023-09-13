import { Component } from "react";
import { Button, NavDropdown } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <div className="bg-black text-white pb-5">
        {/* <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt=""
          style={{ width: "120px" }}
          className="m-3"
        /> */}
        <div className="container" style={{ width: "900px" }}>
          <h1 className="editProfile">Edit Profile</h1>
          <hr />
          <div className="d-flex justify-content-between">
            <img
              src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
              alt=""
              style={{ width: "200px" }}
              className="align-self-start"
            />
            <div className="d-inline-block" style={{ width: "600px" }}>
              <div className="striveDiv" style={{ width: "500px" }}>
                <p className="p-2 fs-4">Strive students</p>
              </div>
              <p className="lingue">Lenguage:</p>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Languages"
                menuVariant="dark"
                className="text-white p-1"
              >
                <NavDropdown.Item href="#action/3.1">Italian</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Spanish</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Japanese</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Russian</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">French</NavDropdown.Item>
              </NavDropdown>
              <hr />
              <p className="fs-3">Maturity Setting:</p>
              <Button className="btn btn-secondary bg-dark">ALL MATURITY RATINGS</Button>
              <p className="fs-4 mt-1">Show titles of all maturity ratings for this profile</p>
              <Button className="btn btn-outline-secondary p-2 buttonProfile bg-dark">EDIT</Button>
              <hr />
              <p className="fs-3">Autoplay controls</p>
              <div className="d-flex">
                <div className="border border-white align-self-start me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </div>
                <p>Autoplay next episode in a series on all devices.</p>
              </div>
              <div className="d-flex pb-1">
                <div className="border border-white align-self-start me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                </div>
                <p>Autoplay previews while browsing on all devices.</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center pb-3">
            <Button className="btn btn-outline-secondary p-2 buttonProfile1 bg-dark mb-5">SAVE</Button>
            <Button className="btn btn-outline-secondary p-2 buttonProfile1 bg-dark mb-5">CANCEL</Button>
            <Button className="btn btn-outline-secondary p-2 buttonProfile1 bg-dark mb-5">DELETE PROFILE</Button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default Profile;
