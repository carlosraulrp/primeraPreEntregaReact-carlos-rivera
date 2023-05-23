import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';










function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">THE BARREL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Todos nuestro prodructos</Nav.Link>
            <Nav.Link href="#link">Marcas</Nav.Link>
            <NavDropdown title="Nuestras bebidas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Destilados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vinos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cervezas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Aguas y bebidas no alcoholicas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    
  );
}

export {BasicExample};