import React from "react";
import { Container } from "react-bootstrap";

const Pagnation = (props) => {
  return (
    <Container className="pagee">
      <button className="prev" onClick={props.prevPage}>
        Prev
      </button>
      <button className="next" onClick={props.nextPage}>
        Next
      </button>
    </Container>
  );
};

export default Pagnation;
