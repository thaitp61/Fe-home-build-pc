import React from 'react'
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import Home from '../pages/Home';

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <Home/>
      <AppFooter />
    </>
  );
}

export default AppLayout