import PropTypes from "prop-types"
import React from "react"

import CustomModalContainer from "./CustomModalContainer"

const CustomModal = ({ isVisible, ...properties }) =>
  isVisible ? <CustomModalContainer {...properties} /> : null

CustomModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}

export default CustomModal
