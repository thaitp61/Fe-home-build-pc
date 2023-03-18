import React, { Component } from 'react';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?s=${searchQuery}`);
  };
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          {/* <img src="logo.png" alt="Logo" /> */}
          <Navbar.Brand href="/">Fgear</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Laptop" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/product-category/laptop/lapgaming/">Laptop gamming</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/laptop/laptopdh">Laptop đồ họa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/laptop/laptop/">Laptop văn phòng</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/laptop/">Xem tất cả</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Linh Kiện" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/product-category/linhkien/bomachchu/">Bo mạch chủ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/case/">Case - vỏ máy tính</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/cpu/">CPU - Bộ vi xử lý</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/luutru/">Lưu trữ SSD - HHD</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/psu/">PSU - Nguồn máy tính</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/ram/">RAM - Bộ nhớ trong"</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/tannhiet/">Tản nhiệt - Fan RGB</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/vga/">VGA - Card màn hình</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/linhkien/">Xem tất cả</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Màn hình" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/product-category/manhinh/scgaming/">Màn hình gamming</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/manhinh/screengp/">Màn hình đồ họa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/manhinh/screen/">Màn hình văn phòng</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/manhinh/">Xem tất cả</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Phụ kiện" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Đế tản nhiệt</NavDropdown.Item>
                <NavDropdown.Item href="#">Phụ kiện PC</NavDropdown.Item>
                <NavDropdown.Item href="#">Thiết bị mạng</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/product-category/phukien/">Xem tất cả</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="custom-pc/">Tự Chọn cấu hình PC</Nav.Link>
            </Nav>

          </Navbar.Collapse>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Link to={`/search/${searchQuery}`}>
              <Button variant="outline-success" type="submit">Search</Button>
            </Link>
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