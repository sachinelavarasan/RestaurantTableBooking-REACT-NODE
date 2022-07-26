/* eslint-disable react/prop-types */

import PropTypes from "prop-types"
import React from "react"
import Select from "react-select"
import CustomSelectInputContainer from "./CustomSelectInputContainer"

const CustomSelectInput = ({
  label,
  id,
  error,
  labelClassName,
  options,
  onChange,
  onClick,
  value,
  ...properties
}) => {
  const inputId =
    id || `${label.toLowerCase()}-${Math.floor(Math.random() * 1000)}`
  const errorClass = error ? "with-error" : ""

  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: "#3D4457",
      padding: 10,
      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: "rgba(222, 222, 222, 0.15)",
      },
    }),
    control: (base) => ({
      ...base,
      borderSize: "1px",
      boxShadow: "none",
    }),
  }

  return (
    <CustomSelectInputContainer>
      {label ? (
        <label
          className={`custom-text-input-label ${
            labelClassName && labelClassName
          }`}
          htmlFor={inputId}
        >
          {label}
        </label>
      ) : null}
      <Select
        options={options}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: "5px",
          backgroundColor: "#FFFFFF",
          colors: {
            ...theme.colors,
            primary: "#aaaaaa",
          },
        })}
        onChange={onChange}
        value={value}
        {...properties}
      />
      <span className={`custom-text-input-error ${errorClass}`}>{error}</span>
    </CustomSelectInputContainer>
  )
}

CustomSelectInput.defaultProps = {
  error: "",
  id: "",
  label: "",
  onClick: PropTypes.func,
  disabled: false,
  labelClassName: "",
}

CustomSelectInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  labelClassName: PropTypes.string,
}
export default CustomSelectInput
