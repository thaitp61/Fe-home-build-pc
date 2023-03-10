import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const AppHeader = () => {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          {/* <img src="logo.png" alt="Logo" /> */}
          <Navbar.Brand href="/">Fgear</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Laptop</Nav.Link>
              <Nav.Link as={Link} to="/about">Linh kiện</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Phụ kiện</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Màn hình</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Tự chọn cấu hình</Nav.Link>
              <NavDropdown title="Laptop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Laptop MSI</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laptop Acer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Laptop Asus</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Laptop HP</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Laptop Lenovo</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/cart/">
              <FaShoppingCart className="cart-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppHeader