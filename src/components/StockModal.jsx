import React from "react";
import { Modal } from "react-bootstrap";
import StockTable from "./StockTable";

const StockModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <div style={{ backgroundColor: "" }}>
        <Modal.Header closeButton>
          <span style={{ textTransform: "uppercase", fontWeight: "700" }}>
            {" "}
            {props.info.symbol}{" "}
          </span>{" "}
          <button
            style={{
              border: "none",
              backgroundColor: "#0c1b33",
              marginLeft: "10px",
              color: "white",
              borderRadius: "5px",
            }}>
            Compare
          </button>
        </Modal.Header>
        <Modal.Body className="modalb">
          <img src={props.info.image} className="modalimg" alt="crypto" />
          <div
            style={{
              width: "100%",
              height: "270px",
              overflowX: "scroll",
              marginTop: "20px",
            }}>
            <StockTable info={props.info} />
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default StockModal;
