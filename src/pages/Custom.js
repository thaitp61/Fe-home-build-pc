import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Custom = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [listComponents, setListComponents] = useState([])
  const [requestProduct, setRequestProduct] = useState([]);
  const handleProductSelect = (product, component) => {
    const price = parseFloat(component.price);
    const componentID = JSON.stringify(component.componentID);
    const newSelectedProducts = [...selectedProducts];
    const requestListComponent = [...listComponents];
    const existingProductIndex = newSelectedProducts.findIndex(
      (item) => item.product === product
    );
    if (existingProductIndex >= 0) {
      newSelectedProducts[existingProductIndex].price = price;
      requestListComponent[existingProductIndex].componentID = componentID;
    } else {
      newSelectedProducts.push({ product, price });
      requestListComponent.push({ product, componentID });
    }
    setSelectedProducts(newSelectedProducts);
    setListComponents(requestListComponent);

    setTotalPrice(
      newSelectedProducts.reduce((total, item) => total + item.price, 0)
    );

    const componentIDs = requestListComponent.map((item) => item.componentID);
    const componentIDsString = "[" + componentIDs.join(',') + "]";
    setRequestProduct(componentIDsString);

  };

  const [productID, setProductID] = useState("");
  const handleProductIDChange = (e) => {
    setProductID(e.target.value);
  }

  const handleAddOptions = () => {
    const requestBody = {
      productID: productID,
      listComponent: JSON.parse(`${requestProduct}`),
      amount: parseInt(value),
      total: totalPrice * parseInt(value),
      userID: "PhuongThai"
    };
    axios.post('https://server-buildingpc.herokuapp.com/product/addProduct', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle success response here
      })
      .catch((error) => {
        console.error(error);
        // Handle error response here
      });
  }

  const [rams, setRams] = useState([]);
  const [cpu, setCpu] = useState([]);
  const [psu, setPsu] = useState([]);
  const [bomachchu, setBomachchu] = useState([]);
  const [tannhiet, setTannhiet] = useState([]);
  const [vga, setVga] = useState([]);
  const [luutru, setLuutru] = useState([]);
  const [casePC, setCasePC] = useState([]);
  useEffect(() => {
    // RAM API
    const ramRequestBody = {
      attributeID: selectedOption,
      categoryID: "ram",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        ramRequestBody
      )
      .then((res) => {
        setRams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // CPU API
    const cpuRequestBody = {
      attributeID: selectedOption,
      categoryID: "cpu",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        cpuRequestBody
      )
      .then((res) => {
        setCpu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const psuRequestBody = {
      attributeID: selectedOption,
      categoryID: "psu",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        psuRequestBody
      )
      .then((res) => {
        setPsu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const tannhietRequestBody = {
      attributeID: selectedOption,
      categoryID: "tannhiet",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        tannhietRequestBody
      )
      .then((res) => {
        setTannhiet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const vgaRequestBody = {
      attributeID: selectedOption,
      categoryID: "vga",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        vgaRequestBody
      )
      .then((res) => {
        setVga(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const bomachchuRequestBody = {
      attributeID: selectedOption,
      categoryID: "bomachchu",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        bomachchuRequestBody
      )
      .then((res) => {
        setBomachchu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const luutruRequestBody = {
      attributeID: selectedOption,
      categoryID: "luutru",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        luutruRequestBody
      )
      .then((res) => {
        setLuutru(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const caseRequestBody = {
      attributeID: selectedOption,
      categoryID: "case",
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        caseRequestBody
      )
      .then((res) => {
        setCasePC(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedOption]);
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong></strong>
      </h4>
      <div>
        <h1 class="alert alert-info clearfix">TỰ LỰA CHỌN CẤU HÌNH PC</h1>
        <Form.Group className="mb-3">
          <Form.Label class="text-danger">Nền tảng</Form.Label>
          <Form.Select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="1">AMD</option>
            <option value="2">Intel</option>
          </Form.Select>
        </Form.Group>

        {selectedOption !== "" && (
          <>
            <Form.Group className="mb-3">
              <Form.Label class="text-danger">Product Name</Form.Label>
              <Form.Control type="text" value={productID} onChange={handleProductIDChange} />
            </Form.Group>
            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">RAM</Form.Label>
                <Form.Select
                  onChange={
                    (e) =>
                      handleProductSelect("RAM", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select Ram Option</option>
                  {rams.map((ram) => (
                    <option key={ram.componentID} value={JSON.stringify(ram)}>
                      {ram.componentName} ( +{" "}
                      {ram.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">CPU</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    handleProductSelect("CPU", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select CPU Option</option>
                  {cpu.map((cpu) => (
                    <option key={cpu.componentID} value={JSON.stringify(cpu)}>
                      {cpu.componentName} ( +{" "}
                      {cpu.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Nguồn</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    handleProductSelect("PSU", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select an option</option>
                  {psu.map((psu) => (
                    <option key={psu.componentID} value={JSON.stringify(psu)}>
                      {psu.componentName} ( +{" "}
                      {psu.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">VGA</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    handleProductSelect("VGA", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select VGA option</option>
                  {vga.map((vga) => (
                    <option key={vga.componentID} value={JSON.stringify(vga)}>
                      {vga.componentName} ( +{" "}
                      {vga.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Lưu trữ</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    handleProductSelect("LUUTRU", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select SSD option</option>
                  {luutru.map((luutru) => (
                    <option key={luutru.componentID} value={JSON.stringify(luutru)}>
                      {luutru.componentName} ( +{" "}
                      {luutru.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Main</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    handleProductSelect("BOMACHCHU", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select Main option</option>
                  {bomachchu.map((bomachchu) => (
                    <option key={bomachchu.componentID} value={JSON.stringify(bomachchu)}>
                      {bomachchu.componentName} ( +{" "}
                      {bomachchu.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Tản nhiệt CPU</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    handleProductSelect("TANNHIET", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select FAN option</option>
                  {tannhiet.map((tannhiet) => (
                    <option key={tannhiet.componentID} value={JSON.stringify(tannhiet)}>
                      {tannhiet.componentName} ( +{" "}
                      {tannhiet.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Case</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    handleProductSelect("CASEPC", JSON.parse(e.target.value))
                  }
                >
                  <option value="">Select CASE option</option>
                  {casePC.map((casePC) => (
                    <option key={casePC.componentID} value={JSON.stringify(casePC)}>
                      {casePC.componentName} ( +{" "}
                      {casePC.price.toLocaleString("vi-VN")} VNĐ)
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
          </>
        )}
      </div>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (VNĐ)</span>
        <strong>{(totalPrice * parseInt(value)).toLocaleString("vi-VN")} VNĐ</strong>
      </li>

      <input
        type="number"
        placeholder="Your fav number"
        value={value}
        onChange={handleChange}
        min={1}
      />
      &nbsp;

      <Button variant="primary" className="add-to-cart-btn" onClick={handleAddOptions}>
        <FaCartPlus className="cart-icon" />
        Add to cart
      </Button>
    </MDBContainer>
  );
};

export default Custom;