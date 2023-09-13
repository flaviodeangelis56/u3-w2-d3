import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddComments from "./AddComments";

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const [comments, setComments] = useState([]);
  const params = useParams();
  const getFilms = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=852a0260&i=" + params.movieId, { method: "GET" });
      if (resp.ok) {
        const Film = await resp.json();
        setFilm(Film);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/movies/" + params.movieId + "/comments", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
      if (resp.ok) {
        const comments = await resp.json();
        setComments(comments);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFilms();
    getComments();
  }, []);

  useEffect(() => {
    console.log(film);
  }, [film]);
  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div className="bgMain text-white vh-100">
      <Container className="pt-5">
        <Row className="mb-5">
          <Col xs={4}> {film && <img src={film.Poster} alt="movie poster" />}</Col>
          <Col xs={8}>
            {film && <h2 className="">{film.Title}</h2>}
            {film && <h4 className="">Actors : {film.Actors}</h4>}
            {film && <h4 className="">Directors : {film.Director}</h4>}
            {film && <h4 className="">{film.Genre}</h4>}
            {film && <p className="">{film.Plot}</p>}
          </Col>
        </Row>
        <ListGroup>
          {comments.map((comObj, i) => (
            <ListGroup.Item className="w-75 mb-3 text-center" key={"comment-" + i}>
              {comObj.comment} rate:{comObj.rate}
            </ListGroup.Item>
          ))}
          <AddComments movieId={params.movieId} />
        </ListGroup>
      </Container>
    </div>
  );
};
export default MovieDetails;

// http://www.omdbapi.com/?apikey=852a0260&i=
