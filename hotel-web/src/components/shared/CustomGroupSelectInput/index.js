import React, { useState } from "react"
import Select from "react-select"
import classNames from "classnames"
import PropTypes from "prop-types"

import CustomGroupSelectInputContainer from "./CustomGroupSelectInputContainer"
import DropdownIndicatorIcon from "../../../assets/icons/refactor/dropdown-indicator.svg"
import { theme } from "../../../elements"

const CustomGroupSelectInput = ({
  label,
  id,
  inputClassName,
  labelClassName,
  groupedOptions,
  onChange,
  isLarge,
  hasError,
  // eslint-disable-next-line react/prop-types
  value,
  ...properties
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputId =
    id || `${label.toLowerCase()}-${Math.floor(Math.random() * 1000)}`

  const groupStyles = {
    groupHeading: (provided) => ({
      ...provided,
      padding: "12px 16px",
      color: "#FFFFFF",
      fontWeight: 600,
      fontSize: "14px",
      textTransform: "capitalize",
      backgroundColor: "#3D4457",
      wordSpacing: "3px",
    }),
    menu: (provided) => ({
      ...provided,
      padding: "0px 5px",
    }),
    menuList: (provided) => ({
      ...provided,
      marginTop: "-6px",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
      color: "#3D4457",
      borderBottom: "1px solid #DEDEDE",
      ":last-child": {
        borderBottom: "unset",
        paddingBottom: "unset",
      },
      padding: "16px",
      backgroundColor: "transparent",
      ":hover": {
        backgroundColor: "rgba(222, 222, 222, 0.15)",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#3D4457",
      fontSize: "14px",
      fontWeight: 500,
    }),
    control: (base, state) => ({
      ...base,
      height: "2.75rem",
      borderSize: "0.0625rem",
      borderRadius: "0.5rem",
      borderColor: state.isFocused ? "#40a1ff" : "#c9c9c9",
      boxShadow: state.isFocused ? "0 0 0 0.125rem #cfe7ff" : "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: theme.colors.placeholder,
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
    }),
  }

  return (
    <CustomGroupSelectInputContainer>
      {label ? (
        <label
          className={`custom-group-select-input-label ${
            labelClassName && labelClassName
          }`}
          htmlFor={inputId}
        >
          {label}
        </label>
      ) : null}
      <Select
        className={classNames({
          "is-focused": isFocused,
        })}
        value={value}
        onChange={onChange}
        onBlur={() => {
          setIsFocused(false)
        }}
        options={groupedOptions}
        styles={groupStyles}
        theme={(themes) => ({
          ...themes,
          borderRadius: "5px",
          backgroundColor: "#FFFFFF",
          colors: {
            ...themes.colors,
            primary: "#aaaaaa",
          },
        })}
        components={{
          DropdownIndicator: () => (
            <img
              alt="Show Options"
              className={classNames("dropdown-indicator-icon", {
                "mr-2": !isLarge,
                "mr-4": isLarge,
              })}
              src={DropdownIndicatorIcon}
            />
          ),
        }}
        hasError={hasError}
        isLarge={isLarge}
        {...properties}
      />
    </CustomGroupSelectInputContainer>
  )
}

export default CustomGroupSelectInput

CustomGroupSelectInput.defaultProps = {
  hasError: false,
  isLarge: true,
  label: "",
  id: "",
  inputClassName: "",
  labelClassName: "",
}

CustomGroupSelectInput.propTypes = {
  hasError: PropTypes.bool,
  isLarge: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  groupedOptions: PropTypes.string.isRequired,
}
