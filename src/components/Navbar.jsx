import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuElements } from '/data/MenuElements';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo-image"
              src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
            />
            <i className="fas fa-user-graduate" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            
            <Nav>
             Mostramos los elementos de menu item
              {MenuElements.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}



  /*render() {
    return (
      <>
        <ul>
          <li>
            <a href="#ej1">Ejercicio 1</a>
          </li>
          <li>
            <a href="#ej2">Ejercicio 2</a>
          </li>
          <li>
            <a href="#ej3">Ejercicio 3</a>
          </li>
        </ul>
      </>
    );
  }
}*/

export default Navbar;
