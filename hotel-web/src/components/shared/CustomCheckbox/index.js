import PropTypes from "prop-types"
import React from "react"

import checkIcon from "../../../assets/icons/check.svg"
import CustomCheckboxContainer from "./CustomCheckboxContainer"

const CustomCheckbox = ({ className, isChecked, label, margin, onChange }) => {
  const id = `${Math.floor(Math.random() * 1000)}-${label}`

  return (
    <CustomCheckboxContainer
      className={className}
      htmlFor={id}
      style={{
        margin,
      }}
    >
      <input
        checked={isChecked}
        className="custom-checkbox-input"
        id={id}
        onChange={onChange}
        type="checkbox"
      />
      <div className={`custom-checkbox ${isChecked ? "is-checked" : ""}`}>
        <img
          alt="Checked"
          className="custom-checkbox-check-icon"
          src={checkIcon}
        />
      </div>
      {label ? <span className="custom-checkbox-label">{label}</span> : null}
    </CustomCheckboxContainer>
  )
}

CustomCheckbox.defaultProps = {
  className: "",
  label: "",
  margin: "0",
}

CustomCheckbox.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  margin: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default CustomCheckbox
