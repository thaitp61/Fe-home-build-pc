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

const ProductCategoryID = () => {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const [sortOption, setSortOption] = useState("none");


  useEffect(() => {
    // Gọi API lấy danh sách sản phẩm theo categoryID
    axios.get(`https://server-buildingpc.herokuapp.com/component/componentListByCategoryID?categoryID=${categoryID}`)
      .then(response => setProducts(response.data));
  }, [categoryID]);
  function handleSortChange(event) {
    const option = event.target.value;
    setSortOption(option);

    let sortedProducts = [...products];
    if (option === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  }

  return (
    <MDBContainer fluid className="my-5 text-center">
      <h1 className="mt-4 mb-5">
        <strong></strong>
      </h1>
      <form className="form-sort">
        <select className="input-sort" value={sortOption} onChange={handleSortChange}>
          <option value="none">Mặc định</option>
          <option value="low-to-high">Thứ tự theo giá: thấp đến cao</option>
          <option value="high-to-low">Thứ tự theo giá: cao đến thấp</option>
        </select>
      </form>
      &nbsp;
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

export default ProductCategoryID