import React from "react"
import Nav from "./UI/Nav/Nav"

const Header = ({ cv, pageName }) => (
  <header>
    <Nav cv={cv} pageName={pageName} />
  </header>
)

export default Header
