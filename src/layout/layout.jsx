import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Link} from "react-router-dom";
import{Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import "../css/cssLayout.css"

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
                <Link className="linksLayout" to="/">home</Link>
              </Nav.Link>
              <Nav.Link><Link className="linksLayout" to="/Catalogo">Catalogo</Link></Nav.Link>
              <Nav.Link><Link className="linksLayout" to="/Importadora">Importadora</Link></Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item> <Link  to="/Contacs" className="linkDrop">Contactos</Link></NavDropdown.Item>
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