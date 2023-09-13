import { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";

class SelectProfilePage extends Component {
  render() {
    return (
      <div className="vh-100 bg-black">
        <h1 className="text-white text-center selectProfile">Select a Profile:</h1>
        <Container className="text-center">
          <Row>
            <div className="col-3">
              {" "}
              <img
                src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                alt="profile icon"
                className="mx-5 profileImg"
                style={{ width: "70%" }}
              />
              <h3 className="text-white text-center pt-2">Flavio</h3>
            </div>
            <div className="col-3">
              {" "}
              <img
                src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
                alt="profile icon"
                className="mx-5 profileImg"
                style={{ width: "70%" }}
              />
              <h3 className="text-center text-white pt-2">Juri</h3>
            </div>
            <div className="col-3">
              {" "}
              <img
                src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg"
                alt="profile icon"
                className="mx-5 profileImg"
                style={{ width: "70%" }}
              />
              <h3 className="text-center text-white pt-2">Manu</h3>
            </div>
            <div className="col-3">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqHCSZxVq2JzIW-V6KGNAPuoWrNie1-wZ7oiQqrsL1lHdkybNEXRpJ-1YfxWqOIA5j6g&usqp=CAU"
                alt="profile icon"
                className="mx-5 profileImg"
                style={{ width: "70%" }}
              />
              <h3 className="text-center text-white pt-2">Marina</h3>
            </div>
          </Row>
          <Button className="btn btn-outline-secondary p-2 manageProfiles mt-5">MANAGE PROFILES</Button>
        </Container>
      </div>
    );
  }
}
export default SelectProfilePage;
