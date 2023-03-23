import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SuccessPopup from './SuccessPopup';
import { BrowserRouter, Switch, Route, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const AppCheckout = () => {
    const [formData, setFormData] = useState({

    });

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        bills?.ProductID?.forEach((bill) => {
          totalPrice += bill.total * bill.amount;
        });
        bills?.Component?.forEach((bill) => {
          totalPrice += bill.price * bill.amount;
        });
        return totalPrice.toLocaleString('vi-VN');
      };
    const [redirect, setRedirect] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClosePopup = () => {
        setIsSuccess(false);
        setRedirect(true);
    };

    const handleOrder = () => {
        // Xử lý khi đặt hàng thành công
        setIsSuccess(true);


    };
    const [bills, setBills] = useState([]);
    const userID = 'PhuongThai'
    useEffect(() => {
        fetch(`https://server-buildingpc.herokuapp.com/bill/getBill?userID=${userID}`)
            .then((response) => response.json())
            .then((data) => {
                setBills(data);
            })
            .catch((error) => {
                // Xử lý lỗi khi gọi API
                console.log(error);
            });
    }, []);
 

    return (
        <div className="maincontainer">

            <div class="container">
                <div class="py-5 text-center">
                    <h2>Checkout form</h2>
                    <p class="lead"></p>
                </div>
                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <span class="badge badge-secondary badge-pill">{bills?.Amount}</span>
                        </h4>

                        <ul className="list-group mb-3">
                            {bills?.Component?.map((bill) => (
                                
                                <div key={bill.componentID}>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">{bill.componentName}</h6>
                                            <small className="text-muted">Số lượng: {bill.amount}</small>
                                        </div>
                                        <span className="text-muted">{bill.price.toLocaleString('vi-VN')}</span>
                                    </li>

                                </div>

                            ))}
                            {bills?.ProductID?.map((bill) => (
                                <div key={bill.productID}>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">{bill.productID}</h6>
                                            <small className="text-muted">Số lượng: {bill.amount}</small>
                                        </div>
                                        <span className="text-muted">{bill.total.toLocaleString('vi-VN')}</span>
                                    </li>

                                </div>

                            ))}
                            <div>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>TotalPrice:</span>
                                    <strong>{calculateTotalPrice()} VNĐ</strong>
                                </li>
                            </div>
                        </ul>

                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Promo code" />
                                <div class="input-group-append">
                                    <button type="button" class="btn btn-secondary">Redeem</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-8 order-md-1">
                        <h4 class="mb-3">Billing address</h4>
                        <form class="needs-validation" novalidate>
                            <div class="mb-3">
                                <label for="name">Tên</label>
                                <input type="text" class="form-control" id="name" defaultValue="Trần Phương Thái" required />
                            </div>

                            <div class="mb-3">
                                <label for="email">Email <span class="text-muted">(Optional)</span></label>
                                <input type="email" class="form-control" id="email" defaultValue="nguoicuatheki20@gmail.com" />
                            </div>
                            <div class="mb-3">
                                <label for="address">Địa chỉ</label>
                                <input type="text" class="form-control" id="address" defaultValue="521/2 tổ 5 khu phố 1 phường Long Bình, Biên Hòa, Đồng Nai" required />
                            </div>

                            <div class="mb-3">
                                <label for="phone">Số điện thoại</label>
                                <input type="tel" class="form-control" id="phone" defaultValue="0375207610" required />
                            </div>
                            {/* <div class="row">
                                <div class="col-md-5 mb-3">
                                    <label for="country">Country</label>
                                    <select class="custom-select d-block w-100" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="state">State</label>
                                    <select class="custom-select d-block w-100" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="zip">Zip</label>
                                    <input type="text" class="form-control" id="zip" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div> */}
                            {/* <hr class="mb-4" /> */}
                            {/* <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="same-address" />
                                <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="save-info" />
                                <label class="custom-control-label" for="save-info">Save this information for next time</label>
                            </div> */}
                            <hr class="mb-4" />
                            <h4 class="mb-3">Payment</h4>
                            <div class="d-block my-3">
                                <div class="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                                    <label class="custom-control-label" for="credit">Thanh toán COD</label>
                                </div>
                                {/* <div class="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                                    <label class="custom-control-label" for="debit">Debit card</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                                    <label class="custom-control-label" for="paypal">Paypal</label>
                                </div> */}
                            </div>
                            {/* <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="cc-name">Name on card</label>
                                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                    <small class="text-muted">Full name as displayed on card</small>
                                    <div class="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="cc-number">Credit card number</label>
                                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label for="cc-expiration">Expiration</label>
                                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="cc-expiration">CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div> */}
                            <hr class="mb-4" />
                            <button class="btn btn-primary btn-lg btn-block" type="button" onClick={handleOrder}>Đặt hàng</button>
                            {isSuccess && <SuccessPopup onClose={handleClosePopup} />}
                            {redirect && <Navigate to="/" />}
                        </form>
                    </div>
                </div>
                <footer class="my-5 pt-5 text-muted text-center text-small">

                </footer>
            </div>

        </div>
    );
}

export default AppCheckout;

{/* <Form.Group controlId="formOrder">
          <Form.Label>Đơn hàng của bạn</Form.Label> */}