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

const AppCart = ({ }) => {
  const [cartItems, setCartItems] = useState([]);
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `https://server-buildingpc.herokuapp.com/cart/getcart?userID=PhuongThai`
      );
      setCartItems(response?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, [cartItems]);

  const removeComponent = async (componentID, userID) => {
    try {
      const response = await fetch('https://server-buildingpc.herokuapp.com/cart/removecomponent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          componentID: componentID,
          userID: userID
        })
      });
      if (response.ok) {
        console.log('Đã xóa sản phẩm khỏi giỏ hàng');
        // gọi hàm getCart để cập nhật danh sách giỏ hàng
        fetchCartItems();
      } else {
        console.log('Lỗi xóa sản phẩm khỏi giỏ hàng');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = (userID) => {
    setIsLoading(true);
    fetch("https://server-buildingpc.herokuapp.com/bill/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: "PhuongThai"
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // xử lý dữ liệu trả về từ server, nếu có
        setIsLoading(false);
      })
      .catch((error) => {
        // xử lý lỗi khi gọi API
        setIsLoading(false);
      });
  };




  const [quantity, setQuantity] = useState(0);

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị của input
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value); // Chuyển giá trị từ chuỗi sang số nguyên
    setQuantity(newQuantity); // Lưu giá trị mới vào state `quantity`
  };
  // const updateCartItems = async (event) => {
  //   const arr = [{id: 1, quantity: 1}, {id: 2, quantity:2}, {id: 3, quantity:2}]
  //   const promise = arr.map((item) => {

  //     return axios.post('.........', item)})
  //     await Promise.all(promises)
  // }

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
                        <b className="mb-0">You have {cartItems?.TotalQuantity} items in your cart</b>
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
                      {cartItems?.ProductDetail?.map((item, i) => (
                        <MDBCardBody className="p-4" key={i}>
                          <MDBRow className="justify-content-between align-items-center">

                            <MDBCol md="2" lg="2" xl="2">

                              <MDBCardImage
                                src={item?.image}
                                fluid className="rounded-3" style={{ width: "100px" }}
                                alt="image item" />

                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <p className="lead fw-normal mb-2">{item.componentName}</p>
                              <p>
                                <span className="text-muted">price:{item.price} </span>
                              </p>
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="2"
                              className="d-flex align-items-center justify-content-around">
                              <MDBInput min={0} defaultValue={item.amount} type="number" size="sm" onChange={handleQuantityChange} />
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                              <MDBTypography tag="h5" className="mb-0 text-danger" >
                                totally: {item.price * item.amount} VNĐ
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end" onClick={() => removeComponent(item?.componentID, "PhuongThai")} >
                              <a className="text-danger">
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
                          <MDBBtn color="info" block size="lg" >
                            <div className="d-flex justify-content-between">
                              <span>{cartItems.TotalPrice} VNĐ</span>
                              <button onClick={handleCheckout} disabled={isLoading}>
                                {isLoading ? "Đang xử lý..." : "Checkout"}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </button>
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