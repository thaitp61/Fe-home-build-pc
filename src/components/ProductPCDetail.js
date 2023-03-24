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

  const [allCpuComponents, setAllCpuComponents] = useState([]);
  const [allRamComponents, setAllRamComponents] = useState([]);
  const [allPsuComponents, setAllPsuComponents] = useState([]);
  const [allTannhietComponents, setAllTannhietComponents] = useState([]);
  const [allVgaComponents, setAllVgaComponents] = useState([]);
  const [allBomachchuComponents, setAllBomachchuComponents] = useState([]);
  const [allLuutruComponents, setAllLuutruComponents] = useState([]);
  const [allCaseComponents, setAllCaseComponents] = useState([]);


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

      const allCpuList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=cpu');
      const uniqueCpuComponents = [];
      const seenComponentIDs = new Set();
      for (const component of [...cpuComponents, ...allCpuList.data]) {
        if (component.categoryID !== "cpu" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniqueCpuComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllCpuComponents(uniqueCpuComponents);

      const allRamList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=ram');
      const uniqueRamComponents = [];
      for (const component of [...ramComponents, ...allRamList.data]) {
        if (component.categoryID !== "ram" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniqueRamComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllRamComponents(uniqueRamComponents);


      const allBomachchuList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=bomachchu');
      const uniqueBomachchuComponents = [];
      for (const component of [...bomachchuComponents, ...allBomachchuList.data]) {
        if (component.categoryID !== "bomachchu" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniqueBomachchuComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllBomachchuComponents(uniqueBomachchuComponents);

      const allVgaList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=vga');
      const uniqueVgaComponents = [];
      for (const component of [...vgaComponents, ...allVgaList.data]) {
        if (component.categoryID !== "vga" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniqueVgaComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllVgaComponents(uniqueVgaComponents);

      const allPsuList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=psu');
      const uniquePsuComponents = [];
      for (const component of [...psuComponents, ...allPsuList.data]) {
        if (component.categoryID !== "psu" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniquePsuComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllPsuComponents(uniquePsuComponents);

      const allLuutruList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=luutru');
      const uniqueLuutruComponents = [];
      for (const component of [...luutruComponents, ...allLuutruList.data]) {
        if (component.categoryID !== "luutru" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniqueLuutruComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllLuutruComponents(uniqueLuutruComponents);

      const allCaseList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=case');
      const uniqueCaseComponents = [];
      for (const component of [...caseComponents, ...allCaseList.data]) {
        if (component.categoryID !== "case" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniqueCaseComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllCaseComponents(uniqueCaseComponents);

      const allTannhietList = await axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=tannhiet');
      const uniqueTanhietComponents = [];
      for (const component of [...tannhietComponents, ...allTannhietList.data]) {
        if (component.categoryID !== "tannhiet" || seenComponentIDs.has(component.componentID)) {
          continue;
        }
        uniqueTanhietComponents.push(component);
        seenComponentIDs.add(component.componentID);
      }

      setAllTannhietComponents(uniqueTanhietComponents);
    };
    fetchComponent();
  }, [id]);



  const { productID, total, amount, imageProduct } = products;
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
              <img src={imageProduct} alt={productID} />
            </div>
          </Col>
          <Col md={8}>
            <div className="product-details">
              <h1 className="product-name">{productID}</h1>
              <p className="product-description"></p>
              &nbsp;
              <div className="product-price">
                <span className="price-label">Price: </span>
                <span className="price-value text-primary">{total?.toLocaleString('vi-VN')} VND</span>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="product-details">

              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  max={amount}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </Form.Group>


            </div>
          </Col>

          <div>
            {/* <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>CPU:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {cpuComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group> */}

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>CPU:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allCpuComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>RAM:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allRamComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Nguồn:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allPsuComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>VGA:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allVgaComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>


            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Lưu trữ:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allLuutruComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Main:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allBomachchuComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Tản nhiệt:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allTannhietComponents.map(component => (
                  <option key={component.componentID} value={component.componentID}>{component.componentName}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label class="text-danger" inline style={{ marginRight: '1rem', minWidth: '6rem' }}>Case:</Form.Label>
              <Form.Select aria-label="CPU component select" defaultValue={cpuComponents[0]?.componentID}>
                {allCaseComponents.map(component => (
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