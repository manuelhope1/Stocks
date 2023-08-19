import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hotpicks = (props) => {
  return (
    <Container>
      <Row>
        <Col className="slider">
          <h6 className="hot">Trending Stocks 🔥 </h6>
          <marquee>
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
          </marquee>
        </Col>
      </Row>
    </Container>
  );
};

export default Hotpicks;
