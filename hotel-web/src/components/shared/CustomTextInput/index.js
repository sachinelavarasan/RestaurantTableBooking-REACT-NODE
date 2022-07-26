import PropTypes from "prop-types"
import React, { forwardRef } from "react"
import classNames from "classnames"

import Eye from "../Eye"
import errorState from "../../../assets/icons/errorStateLogo.svg"
import inputSuccess from "../../../assets/icons/inputVerifyLogo.svg"
import inputVerify from "../../../assets/icons/inputVerifyLoader.svg"
import CustomTextInputContainer from "./CustomTextInputContainer"

const CustomTextInput = forwardRef(
  (
    {
      containerClassName,
      containerStyle,
      error,
      id,
      label,
      marginBottom,
      borderRadius,
      padding,
      placeholder,
      disabled,
      ErrorRight,
      isPassword,
      hide,
      inputErrorLogo,
      inputSuccessLogo,
      inputVerifyLoader,
      onClick,
      errorShow,
      onChange,
      inputClassName,
      labelClassName,
      ...properties
    },
    ref
  ) => {
    const inputId =
      id || `${label.toLowerCase()}-${Math.floor(Math.random() * 1000)}`

    return (
      <CustomTextInputContainer
        className={containerClassName}
        marginBottom={marginBottom}
        style={containerStyle}
        padding={padding}
        borderRadius={borderRadius}
        ErrorRight={ErrorRight}
        error={error}
      >
        {label ? (
          <label
            className={classNames("custom-text-input-label", labelClassName)}
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}
        <input
          className={classNames(
            "custom-text-input-field",
            {
              "with-error": !!error,
            },
            inputClassName
          )}
          id={inputId}
          placeholder={!error ? placeholder : ""}
          disabled={disabled}
          onChange={onChange}
          ref={ref}
          {...properties}
        />
        {errorShow ? null : (
          <span
            className={classNames("custom-text-input-error", {
              "with-error": !!error,
            })}
          >
            {error}
          </span>
        )}
        {isPassword ? <Eye open={hide} onClick={onClick} /> : null}
        {inputErrorLogo ? (
          <img src={errorState} alt="error" className="errorState" />
        ) : null}
        {inputSuccessLogo ? (
          <img src={inputSuccess} alt="error" className="inputSucess" />
        ) : null}
        {inputVerifyLoader ? (
          <img src={inputVerify} alt="error" className="inputVerify" />
        ) : null}
      </CustomTextInputContainer>
    )
  }
)

CustomTextInput.defaultProps = {
  containerClassName: "",
  containerStyle: {},
  error: "",
  id: "",
  label: "",
  marginBottom: "0",
  padding: "11px 0 12px 16px",
  borderRadius: "5px",
  placeholder: "",
  type: "text",
  hide: false,
  ErrorRight: false,
  inputErrorLogo: false,
  inputSuccessLogo: false,
  inputVerifyLoader: false,
  errorShow: false,
  isPassword: false,
  onClick: PropTypes.func,
  disabled: false,
  inputClassName: "",
  labelClassName: "",
  onChange: undefined,
}

CustomTextInput.propTypes = {
  containerClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  containerStyle: PropTypes.object,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  marginBottom: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  hide: PropTypes.bool,
  inputErrorLogo: PropTypes.bool,
  inputSuccessLogo: PropTypes.bool,
  inputVerifyLoader: PropTypes.bool,
  ErrorRight: PropTypes.bool,
  errorShow: PropTypes.bool,
  disabled: PropTypes.bool,
  isPassword: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

export default CustomTextInput
