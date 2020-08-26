import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import BottomNav from "./BottomNavigation"
const Header = ({isMobile}) => (
  <header>
      {isMobile ? <BottomNav/>: <Nav/>}
  </header>
)


export default Header
