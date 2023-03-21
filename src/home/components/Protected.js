import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../api/AuthContext";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppSiderbar  from "./AppSiderbar";


const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div
        // style={{
        //   padding: "0px 0px 0px 320px",
        // }}
 >
        <AppSiderbar />

        {/* <div className="d-flex flex-column min-vh-100 bg-light" style={{padding: "30px"}}> */}
          {/* <AppHeader />  */}
          {/* <div className="body flex-grow-1 px-3">{children}</div> */}
          {/* <AppFooter /> */}
          {/* {children}  </div> */}

          {children} 
      </div>
    </>
  );
};

export default Protected;
