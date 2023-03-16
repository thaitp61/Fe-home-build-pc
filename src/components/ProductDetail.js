import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../css/ProductDetail.css"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const ComponentDetail = () => {
  const [component, setComponent] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  useEffect(() => {
    const fetchComponent = async () => {
      const { data } = await axios.get(`https://server-buildingpc.herokuapp.com/component/componentDetail?componentID=${id}`);
      setComponent(data);
    };
    fetchComponent();
  }, [id]);

  const { componentName, image, price, description, amount } = component;
  const addToCart = (data1) => {
    axios.post('https://server-buildingpc.herokuapp.com/cart/add', data1)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MDBContainer fluid className="my-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="product-image">
              <img src={image} alt={componentName} />
            </div>
          </Col>
          <Col md={6}>
            <div className="product-details">
              <h1 className="product-name">{componentName}</h1>
              <p className="product-description">{description}</p>
              <div className="product-price">
                <span className="price-label">Price: </span>
                <span className="price-value">{price} VND</span>
              </div>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  as="select"
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  {Array.from({ length: amount }, (_, i) => i + 1).map(
                    (quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    )
                  )}
                </Form.Control>

              </Form.Group>
              <Button variant="primary" className="add-to-cart-btn" onClick={() => addToCart({ userID: 'PhuongThai', componentID: id, amount: quantity, })}>
                <FaCartPlus className="cart-icon" />
                Add to cart
              </Button>
              &ensp;
              <Link to="/checkout/">
              <Button variant="primary" className="add-to-cart-btn" onClick={() => addToCart({ userID: 'PhuongThai', componentID: id, amount: quantity, })}>
                <FaShoppingCart className="cart-icon" />
                Buy Now
              </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </MDBContainer>
  );
};

export default ComponentDetail;