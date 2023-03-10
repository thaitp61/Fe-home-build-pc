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
import React, { useState, useEffect } from 'react';
import "../css/cart.css"
import { Link } from 'react-router-dom';
import axios from "axios";

const AppCart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.post(
          "https://server-buildingpc.herokuapp.com/cart/getcart",
          { userID: "PhuongThai" }
        );
        setCartItems(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems(cartItems);
  }, []);

  const [quantity, setQuantity] = useState(0);

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị của input
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value); // Chuyển giá trị từ chuỗi sang số nguyên
    setQuantity(newQuantity); // Lưu giá trị mới vào state `quantity`
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <Link to="/" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </Link>
                    </MDBTypography>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <MDBCard className="rounded-3 mb-4">
                      {cartItems?.Product?.map((item, i) => (
                        <MDBCardBody className="p-4" key={i}>
                          <MDBRow className="justify-content-between align-items-center">

                            <MDBCol md="2" lg="2" xl="2">

                              <MDBCardImage
                                src={item?.image}
                                fluid className="rounded-3" style={{ width: "100px" }}
                                alt="image item" />

                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <p className="lead fw-normal mb-2">{item.name}</p>
                              <p>
                                <span className="text-muted">price:{item.price} </span>
                              </p>
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="2"
                              className="d-flex align-items-center justify-content-around">
                              <MDBInput min={0} value={item.amount} type="number" size="sm" onChange={handleQuantityChange} />
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                              <MDBTypography tag="h5" className="mb-0 text-danger" >
                                totally: {item.price * item.amount} VNĐ
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <a href="#!" className="text-danger">
                                <MDBIcon fas icon="trash text-danger" size="lg" />
                              </a>
                            </MDBCol>
                          </MDBRow>

                        </MDBCardBody>


                      ))}
                    </MDBCard>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                      <button style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px" }}>
                        Apply change
                      </button>
                    </div>

                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">{cartItems.TotalPrice} VNĐ</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">{cartItems.TotalPrice} VNĐ</p>
                        </div>
                        <Link to="/checkout/">
                          <MDBBtn color="info" block size="lg">
                            <div className="d-flex justify-content-between">
                              <span>{cartItems.TotalPrice} VNĐ</span>
                              <span>
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </section>
  )
}

export default AppCart