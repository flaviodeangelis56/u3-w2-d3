import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./MyComponents/Profile";
import Settings from "./MyComponents/Settings";
import HomePage from "./MyComponents/HomePage";
import SelectProfilePage from "./MyComponents/SelectProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./MyComponents/TvShows";
import MyNavbar from "./MyComponents/Navbar";
import MovieDetails from "./MyComponents/MovieDetails";

function App() {
  return (
    <div className="App">
      {/* <Settings /> */}

      {/* <Profile /> */}
      {/* <SelectProfilePage /> */}
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/select-a-profile" element={<SelectProfilePage />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
