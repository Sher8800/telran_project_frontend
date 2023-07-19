import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../shared/header/Header'
import GoogleMap from '../../shared/footer/GoogleMap'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <GoogleMap />
    </>
  )
}

export { Layout }
