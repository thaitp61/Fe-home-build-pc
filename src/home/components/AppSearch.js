import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useParams } from 'react-router-dom';
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
import { Link } from 'react-router-dom';
import Product from "./Product";

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    //   const location = useLocation();
    //   const queryParams = new URLSearchParams(location.search);
    //   const searchQuery = queryParams.get("s");
    const { searchQuery } = useParams("kingston");
    const [sortOption, setSortOption] = useState("none");
    function handleSortChange(event) {
        const option = event.target.value;
        setSortOption(option);

        let sortedProducts = [...searchResult];
        if (option === "low-to-high") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option === "high-to-low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setSearchResult(sortedProducts);
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://server-buildingpc.herokuapp.com/component/componentByName?componentName=${searchQuery}`
                );
                setSearchResult(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [searchQuery]);

    return (
        <MDBContainer fluid className="my-5 text-center">
            <div>
                <h1 class="alert alert-info clearfix" >Search Results for: {searchQuery}</h1>
                <form className="form-sort">
                    <select className="input-sort" value={sortOption} onChange={handleSortChange}>
                        <option value="none">Mặc định</option>
                        <option value="low-to-high">Thứ tự theo giá: thấp đến cao</option>
                        <option value="high-to-low">Thứ tự theo giá: cao đến thấp</option>
                    </select>
                </form>
                <div className="row">
                    {searchResult.map(component => (
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
};

export default Search;
