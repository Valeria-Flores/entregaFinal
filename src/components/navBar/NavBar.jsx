import React from "react"
import "./nav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../cart/CartWidget";
import { useState } from 'react';  

const NavBar =() =>{
    const [contador, setContador]=useState(0)


    function sumaConEstado(){
    setContador(contador+1)
    }
    return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="titulo">Atelier de ideas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Catalogo</Nav.Link>
            <NavDropdown title="Sobre nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuestra historia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contactanos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cotización
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button onClick={sumaConEstado}><CartWidget></CartWidget></button>
      <div style={{marginRight:'50px'}}><strong>{contador}</strong></div>
    </Navbar>
    )
}
export default NavBar;