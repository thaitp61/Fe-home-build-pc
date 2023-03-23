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
import AppHome from "../components/AppHome"
const Home = (props) => {
  return (

    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong></strong>
      </h4>
      <AppHome/>
      
    </MDBContainer>

  )
}

export default Home