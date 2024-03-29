import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import "../css/Product.css"

function Product({ id, componentName, price, image }) {
  return (
    // <MDBCol md="12" lg="2" className="mb-8 ">
    <Link to={`/product/${id}`} className="text-reset">
      <MDBCard className="hover-overlay hover-shadow" >
        <MDBRipple rippleTag='div' className='bg-image' >
          <img src={image} className='w-100 card-image' alt={componentName} />
          <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
        </MDBRipple>
        <MDBCardBody>
          <div className="card-body-image">
            <a className="text-reset">
              <h5 className="card-title mb-3">{componentName}</h5>
            </a>
            <h3 className="mb-3 text-danger">{price.toLocaleString('vi-VN')}  VNĐ</h3>
          </div>
        </MDBCardBody>
      </MDBCard>
    </Link>
    // </MDBCol>
  );
}

export default Product;
