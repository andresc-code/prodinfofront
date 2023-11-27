import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from './Logo/ZF2.png'; 

function Menu({ onLogout }) {
  const handleLogout = () => {
    // Lógica para desloguear
    onLogout();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#">
        <img
          src={logoImg} // Utiliza la variable donde guardaste la ruta de la imagen
          alt="Logo" // Agrega un texto alternativo para accesibilidad
          height="30" // Establece la altura deseada para la imagen
          className="d-inline-block align-top" // Clases adicionales si es necesario
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Style and Concept</Nav.Link>
            <Nav.Link href="#action2">Brands</Nav.Link>
            <NavDropdown title="Days in Stores" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">1-30 Days</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                  31-60 Days
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                  61-90 Days
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                  91-120 Days
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                  All
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rotation" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Excellent > 90 %
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                  Good > 80 %
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                  low  > 50 %
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                  deficient  > 50 %
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                  All
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
                 Line
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;