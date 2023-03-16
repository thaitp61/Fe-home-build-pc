import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import Product from "./Product";
import Form from 'react-bootstrap/Form';
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
import "../css/ProductList.css"

function ProductList() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("none");


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://server-buildingpc.herokuapp.com/component/allComponent');
            setProducts(result.data);
        };

        fetchData();
    }, []);
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
        <div>
            <h1 class="alert alert-info clearfix" >Danh sách sản phẩm</h1>
            <form className="form-sort">
                <select className="input-sort" value={sortOption} onChange={handleSortChange}>
                    <option value="none">Mặc định</option>
                    <option value="low-to-high">Thứ tự theo giá: thấp đến cao</option>
                    <option value="high-to-low">Thứ tự theo giá: cao đến thấp</option>
                </select>
            </form>
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
    );
}

export default ProductList;