import React from "react";
import { Container, Row } from "react-bootstrap";
import Stockcard from "./Stockcard";

const AllStocks = (props) => {
  return (
    <Container>
      <h4 className="all">All Stocks</h4>
      <Row>
        {props.info.map((info, index) => {
          return <Stockcard info={info} key={index} />;
        })}
      </Row>
    </Container>
  );
};

export default AllStocks;
