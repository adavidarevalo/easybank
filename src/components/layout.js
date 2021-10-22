import * as React from "react"
import Header from "./header"
import Footer from './Footer'
import "./layout.scss"
import '../styles/Layout.scss' 

const Layout = ({ children }) => {

  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
