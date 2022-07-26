/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react"

import closeIcon from "../../../assets/icons/white-close.svg"
import StyledModal from "./Elements/Modal"

// eslint-disable-next-line react/prop-types
const ModalContainer = ({ children, displayModal, setModalShow }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (displayModal) {
      setShow(true)
      setModalShow(false)
    }
  }, [displayModal, setModalShow])

  return (
    <StyledModal show={show} onHide={() => setShow(false)}>
      <img
        src={closeIcon}
        alt="close-btn"
        className="close-btn"
        onClick={() => setShow(false)}
      />
      {children}
    </StyledModal>
  )
}

export default ModalContainer
