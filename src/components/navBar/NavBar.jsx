import React from "react"
import "./nav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../cartWidget/CartWidget";
import { useState } from 'react';  
import { NavLink, Link } from "react-router-dom";

const NavBar =() =>{
    const [contador, setContador]=useState(0)


    function sumaConEstado(){
    setContador(contador+1)
    }
    return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="titulo">
          Atelier de ideas
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to={`/category/mesas`} className={({isActive})=> isActive ? "ActiveOption":"Option"}>Mesas</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="link">
                <NavLink to={`/category/dormitorio`} className={({isActive})=> isActive ? "ActiveOption":"Option"}>Dormitorio</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/category/sillas`} className={({isActive})=> isActive ? "ActiveOption":"Option"}>Sillas</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/category/almacenamiento`} className={({isActive})=> isActive ? "ActiveOption":"Option"}>Almacenamiento</NavLink>
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