import { Component } from "react";
import HarryPotter from "./HarryPotter";
import FastFurious from "./FastFurious";
import Halloween from "./Halloween";

class Main extends Component {
  render() {
    return (
      <div className="bgMain">
        <div className="pb-5">
          <h2 className="text-white mx-3 margin-90 pb-2">Harry Potter</h2>
          <HarryPotter />
        </div>
        <div className="pb-5">
          <h2 className="text-white mx-3 margin-90 pb-2">Fast & Fourious</h2>
          <FastFurious />
        </div>
        <div className="pb-5">
          <h2 className="text-white mx-3 margin-90 pb-2">Halloween</h2>
          <Halloween />
        </div>
      </div>
    );
  }
}
export default Main;
