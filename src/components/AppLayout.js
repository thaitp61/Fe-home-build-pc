import React from 'react'
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default AppLayout