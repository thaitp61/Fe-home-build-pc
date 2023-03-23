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
import ProductPC from "./ProductPC";
const ProductByCategory = () => {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("none");

    useEffect(() => {
        axios.get('https://server-buildingpc.herokuapp.com/product/getAllProducts')
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    },[]
    );

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
            <div>
                <div className="row" >
                    {products.map(product => (
                        <MDBCol md="12" lg="3" className="mb-4">
                            <Link key={product.productID} to={`/product/${product.productID}`} >
                                <ProductPC id={product.productID} productName={product.productID} total={product.total} image="https://media.wired.com/photos/624df21cb340f55b37084fdc/2:3/w_1200,h_1800,c_limit/How-to-Build-a-PC-Gear.jpg" />
                            </Link>
                        </MDBCol>
                    ))}
                </div>
            </div>
        </MDBContainer>


    );
}

export default ProductByCategory