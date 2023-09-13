import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class Halloween extends Component {
  state = {
    isLoading: true,
    HalloweenArr: [],
    error: false,
  };
  getHarry = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?s=halloween&apikey=852a0260", { method: "GET" });
      if (resp.ok) {
        const HalloweenArr = await resp.json();
        console.log(HalloweenArr);
        this.setState({ HalloweenArr: HalloweenArr.Search });
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount = async () => {
    this.getHarry();
  };
  render() {
    return (
      <div className="row mx-3">
        {this.state.error && <Alert variant="danger">Si è verificato un errore durante fetch</Alert>}
        {this.state.isLoading && <Spinner animation="grow" variant="danger" className="mx-auto" />}
        {!this.state.isLoading &&
          !this.state.error &&
          this.state.HalloweenArr.slice(0, 6).map((movie, i) => (
            <Link to={"/movie-details/" + movie.imdbID} className="col-12 col-md-6 col-xl-2 mb-2">
              <img src={movie.Poster} alt="" className="w-100 posterSelected" key={`movie${i}`} />
            </Link>
          ))}
      </div>
    );
  }
}
export default Halloween;
