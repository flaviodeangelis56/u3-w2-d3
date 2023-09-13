import { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import MyFooter from "./MyFooter";
class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <MyFooter />
      </>
    );
  }
}
export default HomePage;
