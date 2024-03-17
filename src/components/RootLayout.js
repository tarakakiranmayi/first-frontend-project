import React from 'react'
import Main from './Main';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
     <Outlet style={{minHeight:"85vh"}}></Outlet>
     
      <Footer/>

    </div>
  )
}

export default RootLayout