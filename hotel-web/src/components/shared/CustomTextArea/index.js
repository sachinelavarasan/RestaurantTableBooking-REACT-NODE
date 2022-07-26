import PropTypes from "prop-types"
import React, { forwardRef } from "react"

import CustomTextAreaContainer from "./CustomTextAreaContainer"

const CustomTextArea = forwardRef(
  (
    {
      containerClassName,
      containerStyle,
      error,
      id,
      label,
      marginBottom,
      placeholder,
      type,
      inputClassName,
      labelClassName,
      ...properties
    },
    ref
  ) => {
    const errorClass = error ? "with-error" : ""
    const inputId =
      id || `${label.toLowerCase()}-${Math.floor(Math.random() * 1000)}`

    return (
      <CustomTextAreaContainer
        className={containerClassName}
        marginBottom={marginBottom}
        style={containerStyle}
      >
        {label ? (
          <label
            className={`custom-text-input-label ${errorClass} ${
              labelClassName && labelClassName
            }`}
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}
        <textarea
          className={`custom-text-input-field ${errorClass} ${
            inputClassName && inputClassName
          }`}
          id={inputId}
          placeholder={!errorClass ? placeholder : ""}
          rows={5}
          {...properties}
          ref={ref}
        />
        <span className={`custom-text-input-error ${errorClass}`}>{error}</span>
      </CustomTextAreaContainer>
    )
  }
)

CustomTextArea.defaultProps = {
  containerClassName: "",
  containerStyle: {},
  error: "",
  id: "",
  label: "",
  marginBottom: "0",
  placeholder: "",
  type: "text",
  inputClassName: "",
  labelClassName: "",
}

CustomTextArea.propTypes = {
  containerClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  containerStyle: PropTypes.object,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  marginBottom: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

export default CustomTextArea
