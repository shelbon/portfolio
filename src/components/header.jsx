import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./UI/Nav/Nav"
import BottomNav from "./UI/Nav/BottomNavigation"
const Header = ({isMobile}) => (
  <header>
      {isMobile ? <BottomNav/>: <Nav/>}
  </header>
)


export default Header
