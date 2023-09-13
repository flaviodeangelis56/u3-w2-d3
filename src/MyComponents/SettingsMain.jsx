import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class SettingMain extends Component {
  render() {
    return (
      <div className="bg-black text-white">
        <Container className="pt-3">
          <h2>Account</h2>
          <hr />
          <Row>
            <div className="col-4">
              <h3 className="text-secondary">MEMBERSHIP & BILLING</h3>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-secondary">student@strive.school</p>
                  <p className="text-secondary">Password : ********</p>
                  <p className="text-secondary">Phone: 321 044 9140</p>
                </div>
                <div>
                  <p className="text-secondary selectedString">Change account email</p>
                  <p className="text-secondary selectedString">Change password</p>
                  <p className="text-secondary selectedString">Change phone number</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-secondary">admin@strive.school</p>
                </div>
                <div>
                  <p className="text-secondary selectedString">Update payment info</p>
                  <p className="text-secondary selectedString">Billing details</p>
                </div>
              </div>
            </div>
          </Row>
          <hr />
          <Row>
            <div className="col-4">
              <h3 className="text-secondary">PLAN DETAILS</h3>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-secondary">Premium</p>
                </div>
                <div>
                  <p className="text-secondary selectedString">Change plan</p>
                </div>
              </div>
            </div>
          </Row>
          <hr />
          <Row>
            <div className="col-4">
              <h3 className="text-secondary">SETTINGS</h3>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="text-secondary selectedString">Prental controls</p>
                  <p className="text-secondary selectedString">Test participation</p>
                  <p className="text-secondary selectedString">Manage download devices</p>
                  <p className="text-secondary selectedString">Activate a device</p>
                  <p className="text-secondary selectedString">Recent device streaming activity</p>
                  <p className="text-secondary selectedString">Sing out of all devices</p>
                </div>
              </div>
            </div>
          </Row>
          <hr />
          <Row>
            <div className="col-4">
              <h3 className="text-secondary">MY PROFILE</h3>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                    alt="profile icon"
                    style={{ width: "50px" }}
                    className="mx-3"
                  />
                  <p className="d-inline text-white">Strive Students</p>
                  <p className="ps-3 pt-4 text-secondary selectedString">Language</p>
                  <p className="ps-3 text-secondary selectedString ">Playback settings</p>
                  <p className="ps-3 text-secondary selectedString ">Subtitle appearance</p>
                </div>
                <div>
                  <p className="pt-5 text-secondary selectedString">Viewing activity</p>
                  <p className="text-secondary selectedString">Ratings</p>
                </div>
                <div>
                  <p className="text-secondary selectedString">Manage profiles</p>
                  <p className="text-secondary selectedString">Add profile email</p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
export default SettingMain;
