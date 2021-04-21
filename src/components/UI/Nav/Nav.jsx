import React from "react"
import BottomNav from "./BottomNav"
import TopNav from "./TopNav"

const Nav = ({ isMobile, pageName }) => {
  if (isMobile === undefined) {
    return null
  }
  return (<>{isMobile ? <BottomNav  pageName={pageName} /> : <TopNav pageName={pageName} />}</>
    
  )
}

export default Nav
