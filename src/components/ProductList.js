import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
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

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://server-buildingpc.herokuapp.com/component/allComponent');
            setProducts(result.data);
        };

        fetchData();
    }, []);
    console.log('1', products)

    return (
        <div>
            <h1>Component List</h1>
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