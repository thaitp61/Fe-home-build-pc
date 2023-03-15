import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import Product from "./Product";
const ProductByCategory = () => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    // Gọi API lấy danh sách sản phẩm theo categoryID
    axios.get(`https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=${categoryID}`)
      .then(response => setProducts(response.data));
  }, [categoryID]);

  return (
    <MDBContainer fluid className="my-5 text-center">
      <h1 className="mt-4 mb-5">
        <strong>Laptop</strong>
      </h1>
      <div>
        <div className="row">
          {products.map(component => (
            <MDBCol md="12" lg="3" className="mb-4">
              <Link key={component.componentID} to={`/product/${component.componentID}`} >
                <Product id={component.componentID} componentName={component.componentName} price={component.price} image={component.image} />
              </Link>
            </MDBCol>
          ))}
        </div>
      </div>

    </MDBContainer>


  );
}

export default ProductByCategory