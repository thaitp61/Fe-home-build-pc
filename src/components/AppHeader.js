import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart,FaSignInAlt } from "react-icons/fa";

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
              {/* <Nav.Link as={Link} to="/">Laptop</Nav.Link>
              <Nav.Link as={Link} to="/about">Linh kiện</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Phụ kiện</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Màn hình</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Tự chọn cấu hình</Nav.Link> */}
              <NavDropdown title="Laptop" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about">Laptop gamming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laptop đồ họa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Laptop văn phòng</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Xem tất cả</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Linh Kiện" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about">Bo mạch chủ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Case - vỏ máy tính</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">CPU - Bộ vi xử lý</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Lưu trữ SSD - HHD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">PSU - Nguồn máy tính</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">RAM - Bộ nhớ trong"</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Tản nhiệt - Fan RGB</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">VGA - Card màn hình</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Xem tất cả</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Màn hình" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about">Màn hình gamming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Màn hình đồ họa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Màn hình văn phòng</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Xem tất cả</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown  title="Phụ kiện" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Đế tản nhiệt</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Phụ kiện PC</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Thiết bị mạng</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Xem tất cả</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="custom-pc/">Tự Chọn cấu hình PC</Nav.Link>
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
          <Nav>
            <Nav.Link as={Link} to="/login">
              <FaSignInAlt className="cart-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppHeader