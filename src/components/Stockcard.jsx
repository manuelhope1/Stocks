import React, { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import StockModal from "./StockModal";

const Stockcard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StockModal show={show} handleClose={handleClose} info={props.info} />

      <Col xl="2" lg="3" md="4" sm="6" xs="6" className="cool">
        {" "}
        <Card className="crycard">
          <div>
            {" "}
            <Card.Img
              variant="top"
              src={props.info.image}
              className="cryimg"
              alt="coin"
            />
          </div>
          <Card.Body>
            <h6 className="cryname">{props.info.name}</h6>
            <Card.Text className="cryprice">
              {" "}
              $ {props.info.current_price}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              View
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Stockcard;
