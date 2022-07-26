/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types"
import React from "react"

import ToastForAuthenticationErrorContainer from "./ToastForAuthenticationErrorContainer.js"
// import toastClose from '../../../assets/icons/toast-close.svg';
import errorAuth from "../../../assets/icons/errorAuth.svg"

const Toast = ({ text, icon, ...properties }) => (
  <ToastForAuthenticationErrorContainer {...properties}>
    <div className="text-div">
      <img src={errorAuth} alt="icon" className="customIconButton" />
      {text}
    </div>
  </ToastForAuthenticationErrorContainer>
)

Toast.defaultProps = {
  isDanger: false,
  isSuccess: false,
  icon: null,
}

Toast.propTypes = {
  isDanger: PropTypes.bool,
  isSuccess: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.any.isRequired,
  icon: PropTypes.string,
  // onClose: PropTypes.func.isRequired,
}

export default Toast
