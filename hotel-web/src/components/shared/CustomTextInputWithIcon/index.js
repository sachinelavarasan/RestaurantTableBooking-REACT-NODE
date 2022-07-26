/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import React, { useState } from "react"

import { CustomTextInputIconContainer } from "./CustomTextInputIconContainer"

const CustomTextInputWithIcon = ({
  className,
  onChange,
  placeholder,
  value,
  width,
  height,
  style,
  icon,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <CustomTextInputIconContainer
      className={(isFocused ? "is-focused" : "") + (` ${className}` || "")}
      style={style}
      width={width}
      height={height}
    >
      <input
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        value={value}
      />
      <img alt="type" src={icon} className="input-icon" />
    </CustomTextInputIconContainer>
  )
}

CustomTextInputWithIcon.defaultProps = {
  icon: PropTypes.string,
}

CustomTextInputWithIcon.propTypes = {
  icon: PropTypes.string,
}
export default CustomTextInputWithIcon
