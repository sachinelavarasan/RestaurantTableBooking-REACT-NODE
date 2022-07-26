/* eslint-disable no-nested-ternary */
import PropTypes from "prop-types"
import React from "react"

import ToastContainer from "../elements"
import ToastCloseIcon from "../../../../assets/icons/toast-close.svg"
import ToastDeleteIcon from "../../../../assets/icons/toast-delete.svg"

const Toast = ({ isDanger, onClose, text, icon, ...properties }) => (
  <ToastContainer isDanger={isDanger} {...properties}>
    <div className="text-div">
      <img
        src={isDanger ? icon || ToastDeleteIcon : icon}
        alt="icon"
        className="customIconButton"
      />
      <p>{text}</p>
    </div>
    <button type="button" className="closeButton" onClick={onClose}>
      <img src={ToastCloseIcon} alt="toast" />
      <span>Close</span>
    </button>
  </ToastContainer>
)

Toast.defaultProps = {
  isDanger: false,
  icon: null,
}

Toast.propTypes = {
  isDanger: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.any.isRequired,
  icon: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default Toast
