import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const NavbarTop = (props) => {
  const searchHandler = (e) => {
    let search = e.target.value;
    props.searchHandler(search);
  };

  return (
    <Navbar bg="bg-transparent" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          #ManuelHope's Crypto Prices
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="#action1"></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              value={props.word}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={searchHandler}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
