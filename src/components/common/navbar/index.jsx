import { NavLink } from 'react-router-dom';
import "./styles.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



function BasicExample() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <NavLink to="/">THE BARREL </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/contactenos">Contactenos</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/otros">Otros productos</NavLink></Nav.Link>
            <NavDropdown title="Licores" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Destilados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vinos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cervezas</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>0</a>
      </Container>
      
            
     
    </Navbar>
    
  );
}

export {BasicExample}; 