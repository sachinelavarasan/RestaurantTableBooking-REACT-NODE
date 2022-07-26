/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import React, { useState } from "react"

import { CustomTextInputButtonContainer } from "./CustomTextInputButtonContainer"

const CustomTextInputWithIcon = ({
  className,
  onChange,
  iconClick,
  placeholder,
  value,
  width,
  height,
  style,
  icon,
  isDisabled,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <CustomTextInputButtonContainer
      className={(isFocused ? "is-focused" : "") + (` ${className}` || "")}
      style={style}
      width={width}
      height={height}
      isDisabled={isDisabled}
    >
      <input
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
      />
      <button className="btn" type="button" onClick={iconClick}>
        <img alt="type" src={icon} className="input-icon" />
      </button>
    </CustomTextInputButtonContainer>
  )
}

CustomTextInputWithIcon.defaultProps = {
  icon: PropTypes.string,
  isDisabled: false,
}

CustomTextInputWithIcon.propTypes = {
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
}
export default CustomTextInputWithIcon
