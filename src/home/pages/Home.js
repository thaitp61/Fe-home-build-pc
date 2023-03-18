import React from 'react'
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
import ComponentList from "../components/ProductList"
const Home = (props) => {
  return (

    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong></strong>
      </h4>
      <ComponentList/>
      
    </MDBContainer>

  )
}

export default Home