import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  MDBRow,
  MDBCol,
  MDBRipple,
} from "mdb-react-ui-kit";
import Product from "./Product";
import ProductPC from "./ProductPC";
import Button from 'react-bootstrap/Button';

function AppHome() {
  const [component, setComponent] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [linhkiens, setLinhkiens] = useState([]);
  const [pcs, setPcs] = useState([]);
  const [manhinhs, setManhinhs] = useState([]);
  const [phukiens, setPhukiens] = useState([]);


  // useEffect(() => {
  //   axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=linhkien')
  //     .then(response => {
  //       setLinhkiens(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=phukien')
  //     .then(response => {
  //       // Xử lý dữ liệu trả về ở đây
  //       setPhukiens(response.data);
  //     })
  //     .catch(error => {
  //       // Xử lý lỗi ở đây
  //       console.log(error);
  //     });
  //   axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=laptop')
  //     .then(response => {
  //       // Xử lý dữ liệu trả về ở đây
  //       setLaptops(response.data);
  //     })
  //     .catch(error => {
  //       // Xử lý lỗi ở đây
  //       console.log(error);
  //     });
  //   axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=manhinh')
  //     .then(response => {
  //       // Xử lý dữ liệu trả về ở đây
  //       setManhinhs(response.data);
  //     })
  //     .catch(error => {
  //       // Xử lý lỗi ở đây
  //       console.log(error);
  //     });
  //   axios.get('https://server-buildingpc.herokuapp.com/product/getAllProducts')
  //     .then(response => {
  //       // Xử lý dữ liệu trả về ở đây
  //       setPcs(response.data);
  //     })
  //     .catch(error => {
  //       // Xử lý lỗi ở đây
  //       console.log(error);
  //     });

  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [linhkiensResponse, phukiensResponse, laptopsResponse, manhinhsResponse, pcsResponse] = await Promise.all([
          axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=linhkien'),
          axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=phukien'),
          axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=laptop'),
          axios.get('https://server-buildingpc.herokuapp.com/component/componentListByCategoryTypeID?categoryTypeID=manhinh'),
          axios.get('https://server-buildingpc.herokuapp.com/product/getAllProducts')
        ]);

        setLinhkiens(linhkiensResponse.data);
        setPhukiens(phukiensResponse.data);
        setLaptops(laptopsResponse.data);
        setManhinhs(manhinhsResponse.data);
        setPcs(pcsResponse.data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 class="alert alert-info clearfix" >PC</h1>
        <MDBRow>
          {pcs?.slice(0, 8).map(product => (
            <MDBCol md="12" lg="3" className="mb-4">
              <Link key={product.productID} to={`/product/${product.productID}`} >
                <ProductPC id={product.productID} productName={product.productID} total={product.total} image={product.imageProduct} />
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
        <Link to="/product-category-pc/fgear-pc/"> 
        <MDBRipple   rippleTag='div' className="hover-overlay hover-shadow" >
          <Button variant="outline-primary">Xem tất cả</Button>{' '}
        </MDBRipple>
        </Link>
      </div>
      &ensp;
      <div>
        <h1 class="alert alert-info clearfix" >MÀN HÌNH</h1>
        <MDBRow>
          {manhinhs?.slice(0, 8)?.map((component) => (
            <MDBCol md="12" lg="3" className="mb-4">
              <Link key={component.componentID} to={`/product/${component.componentID}`} >
                <Product id={component.componentID} componentName={component.componentName} price={component.price} image={component.image} />
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
        <Link to="/product-category/manhinh/"> 
        <MDBRipple rippleTag='div' className="hover-overlay hover-shadow" >
          <Button variant="outline-primary">Xem tất cả</Button>{' '}
        </MDBRipple>
        </Link>
      </div>
      &ensp;

      <div>
        <h1 class="alert alert-info clearfix" >LAPTOP</h1>
        <MDBRow>
          {laptops?.slice(0, 8)?.map((component) => (
            <MDBCol md="12" lg="3" className="mb-4">
              <Link key={component.componentID} to={`/product/${component.componentID}`} >
                <Product id={component.componentID} componentName={component.componentName} price={component.price} image={component.image} />
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
        <Link to="/product-category/laptop/"> 
        <MDBRipple   rippleTag='div' className="hover-overlay hover-shadow" >
          <Button variant="outline-primary">Xem tất cả</Button>{' '}
        </MDBRipple>
        </Link>
      </div>
      &ensp;

      <div>
        <h1 class="alert alert-info clearfix" >LINH KIỆN</h1>
        <MDBRow>
          {linhkiens?.slice(0, 8)?.map((component) => (
            <MDBCol md="12" lg="3" className="mb-4">
              <Link key={component.componentID} to={`/product/${component.componentID}`} >
                <Product id={component.componentID} componentName={component.componentName} price={component.price} image={component.image} />
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
        <Link to="/product-category/linhkien/"> 
        <MDBRipple   rippleTag='div' className="hover-overlay hover-shadow" >
          <Button variant="outline-primary">Xem tất cả</Button>{' '}
        </MDBRipple>
        </Link>
      </div>
      &ensp;

      <div>
        <h1 class="alert alert-info clearfix" >PHỤ KIỆN</h1>
        <MDBRow>
          {phukiens?.slice(0, 8)?.map((component) => (
            <MDBCol md="12" lg="3" className="mb-4">
              <Link key={component.componentID} to={`/product/${component.componentID}`} >
                <Product id={component.componentID} componentName={component.componentName} price={component.price} image={component.image} />
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
        <Link to="/product-category/phukien/"> 
        <MDBRipple   rippleTag='div' className="hover-overlay hover-shadow" >
          <Button variant="outline-primary">Xem tất cả</Button>{' '}
        </MDBRipple>
        </Link>
      </div>
    </div>
  );
}
export default AppHome;
