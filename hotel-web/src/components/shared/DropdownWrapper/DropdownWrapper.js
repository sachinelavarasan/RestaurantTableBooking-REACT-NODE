import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const DropdownWrapper = ({ children, toggleMenu }) => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    /**
     * close modal if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggleMenu(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [toggleMenu, wrapperRef])
  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>
      {children}
    </div>
  )
}

DropdownWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default DropdownWrapper
