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

const ProductPCDetail = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [cpuComponents, setCpuComponents] = useState([]);
  const [ramComponents, setRamComponents] = useState([]);
  const [bomachchuComponents, setBomachchuComponents] = useState([]);
  const [vgaComponents, setVgaComponents] = useState([]);
  const [luutruComponents, setLuutruComponents] = useState([]);
  const [psuComponents, setPsuComponents] = useState([]);
  const [caseComponents, setCaseComponents] = useState([]);
  const [tannhietComponents, setTannhietComponents] = useState([]);





  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  useEffect(() => {
    const fetchComponent = async () => {
      const { data } = await axios.get(`https://server-buildingpc.herokuapp.com/product/getProductDetail?productID=${id}`);
      setProducts(data);
      const cpuComponents = data.components.filter(component => component.categoryID === "cpu");
      setCpuComponents(cpuComponents);
      const ramComponents = data.components.filter(component => component.categoryID === "ram");
      setRamComponents(ramComponents);
      const bomachchuComponents = data.components.filter(component => component.categoryID === "bomachchu");
      setBomachchuComponents(bomachchuComponents);
      const vgaComponents = data.components.filter(component => component.categoryID === "vga");
      setVgaComponents(vgaComponents);
      const luutruComponents = data.components.filter(component => component.categoryID === "luutru");
      setLuutruComponents(luutruComponents);
      const psuComponents = data.components.filter(component => component.categoryID === "psu");
      setPsuComponents(psuComponents);
      const caseComponents = data.components.filter(component => component.categoryID === "case");
      setCaseComponents(caseComponents);
      const tannhietComponents = data.components.filter(component => component.categoryID === "tannhiet");
      setTannhietComponents(tannhietComponents);
    };
    fetchComponent();
  }, [id]);

  // const cpuComponents = products?.components?.filter(component => component.categoryID === "cpu");
  // console.log(cpuComponents)


  const { productID, total, amount } = products;
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
    <MDBContainer fluid className="my-5 ">
      <Container>
        <Row>
          <Col md={4}>
            <div className="product-image">
              <img src="https://media.wired.com/photos/624df21cb340f55b37084fdc/2:3/w_1200,h_1800,c_limit/How-to-Build-a-PC-Gear.jpg" alt={productID} />
            </div>
          </Col>
          <Col md={8}>
            <div className="product-details">
              <h1 className="product-name">{productID}</h1>
              <p className="product-description"></p>
              &nbsp;
              <div className="product-price">
                <span className="price-label">Price: </span>
                <span className="price-value text-danger">{total} VND</span>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="product-details">
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


            </div>
          </Col>

          <div>
            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>CPU:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {cpuComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>RAM:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {ramComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Nguồn:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {psuComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>VGA:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {vgaComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>


            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Lưu trữ:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {luutruComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Main:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {bomachchuComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Tản nhiệt:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {tannhietComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Case:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {caseComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" className="add-to-cart-btn" onClick={() => addToCart({ userID: 'PhuongThai', productID: id, amount: quantity, })}>
              <FaCartPlus className="cart-icon" />
              Add to cart
            </Button>
            &ensp;
            <Link to="/checkout/">
              <Button variant="primary" className="add-to-cart-btn" onClick={() => addToCart({ userID: 'PhuongThai', productID: id, amount: quantity, })}>
                <FaShoppingCart className="cart-icon" />
                Buy Now
              </Button>
            </Link>

          </div>

        </Row>
      </Container>
    </MDBContainer >
  );
};

export default ProductPCDetail;