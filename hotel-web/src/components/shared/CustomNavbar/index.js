import PropTypes from "prop-types"
import React from "react"

import logo from "../../../assets/logos/logo_with_text.svg"
import CustomNavbarContainer from "./CustomNavbarContainer"

const CustomNavbar = ({ top }) => (
  <CustomNavbarContainer top={top}>
    <img alt="JungleCat" className="custom-navbar-logo" src={logo} />
  </CustomNavbarContainer>
)

CustomNavbar.defaultProps = {
  top: 0,
}

CustomNavbar.propTypes = {
  top: PropTypes.number,
}

export default CustomNavbar
