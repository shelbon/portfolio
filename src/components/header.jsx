import React from "react"
import BottomNav from "./UI/Nav/bottomNav"
import TopNav from "./UI/Nav/TopNav"

const Header = ({ isMobile, pageName }) => {
  if (isMobile === undefined) {
    return null
  }
  return (
    <header>{isMobile ? <BottomNav /> : <TopNav pageName={pageName} />}</header>
  )
}

export default Header
