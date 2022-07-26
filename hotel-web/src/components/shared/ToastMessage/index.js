/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types"
import React from "react"

import ToastContainer from "./ToastContainer"
import toastClose from "../../../assets/icons/toast-close.svg"
import toastdelete from "../../../assets/icons/toast-delete.svg"

const Toast = ({ isDanger, isSuccess, onClose, text, icon, ...properties }) => (
  <ToastContainer isDanger={isDanger} isSuccess={isSuccess} {...properties}>
    <div className="text-div">
      {isDanger ? (
        icon ? (
          <img src={icon} alt="icon" className="customIconButton" />
        ) : (
          <img src={toastdelete} alt="icon" className="customIconButton" />
        )
      ) : (
        <img src={icon} alt="icon" className="customIconButton" />
      )}
      {text}
    </div>
    <button type="button" className="closeButton" onClick={() => onClose()}>
      <img src={toastClose} alt="toast" />
      <span>Close</span>
    </button>
  </ToastContainer>
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
  onClose: PropTypes.func.isRequired,
}

export default Toast
