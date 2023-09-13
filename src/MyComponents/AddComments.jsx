import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const AddComments = props => {
  const [commentObj, setCommentObj] = useState({
    comment: "",
    rate: "",
    elementId: props.movieId,
  });

  const SetStateComment = (propertyName, propertyValue) => {
    setCommentObj({ ...commentObj, [propertyName]: propertyValue });
  };

  const AddComment = event => {
    event.preventDefault();
    AddAComWhitFetch();
  };

  const AddAComWhitFetch = async () => {
    try {
      await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(commentObj),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputGroup className="mb-1 justify-content-start">
      <Form onSubmit={AddComment} className="w-75">
        <Form.Group className="mb-1">
          <Form.Control
            type="text"
            placeholder="add a comment"
            onChange={event => SetStateComment("comment", event.target.value)}
            className="mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Rate Book from 1 to 5"
            onChange={event => SetStateComment("rate", event.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="danger">
          Add
        </Button>
      </Form>
    </InputGroup>
  );
};

export default AddComments;
