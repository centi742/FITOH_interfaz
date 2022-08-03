import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Link} from "react-router-dom";
import{Navbar,Container,Nav,NavDropdown} from "react-bootstrap";


const Layout=({children})=>{

    return (
    <>
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" >FITOH Autoparts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link >
                <Link className="text-white" to="/">home</Link>
              </Nav.Link>
              <Nav.Link><Link className="text-white" to="/Catalogo">Catalogo</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      </>
      );
}

export default Layout;