import { Button, Col, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const SideBar = () => {
  return (
    <>
      <Col md={2} as="aside">
        <Navbar expand="md" id="sidebar" className="flex-column justify-content-between fixed-left">
          <Container className="flex-column align-items-start">
            <Navbar.Brand href="index.html" className="navbar-brand">
              <img src="../src/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className=".navbar-collapse flex-column " id="navbarScroll">
              <Nav className="flex-column">
                <Nav.Link className=".navbar-nav" href="#">
                  <HouseDoorFill /> Home
                </Nav.Link>
                <Nav.Link href="#">
                  <BookFill /> Your Library
                </Nav.Link>
              </Nav>
              <Form className="mt-3 d-flex w-100">
                <Form.Control type="search" placeholder="Search" aria-label="Search" className="me-2" />
                <Button variant="outline-secondary" size="sm">
                  GO
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
          <div className="nav-btn d-flex flex-column align-items-start ps-3">
            <Button className="signup-btn mb-2" variant="primary">
              Sign Up
            </Button>
            <Button className="login-btn mb-2" variant="secondary">
              Login
            </Button>
            <div>
              <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
            </div>
          </div>
        </Navbar>
      </Col>
    </>
  );
};

export default SideBar;
