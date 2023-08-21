import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hotpicks = (props) => {
  return (
    <Container>
      <Row>
        <div className="hidee">
          {" "}
          <h6 className="hot">Trending Stocks 🔥 </h6>
        </div>
        <Col className="slider">
          <div className="hotcon">
            {props.info.slice(0, 20).map((info, index) => {
              return (
                <div className="hotbox" key={index}>
                  <div class="vl"></div>
                  <span className="hotinfo">{info.name}</span>
                  <img src={info.image} className="hotimg" alt="coin" />
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hotpicks;
