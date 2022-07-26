// import debounce from 'lodash.debounce';
import PropTypes from "prop-types"
import React, { useState, forwardRef, useEffect } from "react"

import numberInputArrow from "../../../assets/icons/number-input-arrow.svg"
import CustomNumberInputContainer from "./CustomNumberInputContainer"

const CustomNumberInput = forwardRef(
  ({
    containerClassName,
    containerStyle,
    error,
    id,
    label,
    marginBottom,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    type,
    inputClassName,
    min,
    max,
    value,
    onControl,
    // hasError,
    ...properties
  }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState(0)
    useEffect(() => {
      if (value) setInputValue(value)
    }, [value])
    const errorClass = error ? "with-error" : ""
    const focusClass = isFocused ? "is-focused" : ""
    const inputId =
      id || `${label.toLowerCase()}-${Math.floor(Math.random() * 1000)}`

    const setNumValue = (val) => {
      setInputValue(value)
      const re = /^[0-9\b]+$/
      if (val === "" || re.test(val)) {
        setInputValue(val)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const debounceNumber = useCallback(debounce(onBlur, 1000), [onBlur]);

    const incrementOrDecrement = (mode) => {
      if (mode === "inc" && max && max <= +inputValue) return
      if (mode === "dec" && min.toString() && min >= +inputValue) return
      const val = mode === "inc" ? 1 : -1
      onControl((num) => +num + val)
      setNumValue(+inputValue + val)
      // debounceNumber(null, +inputValue + val);
    }

    return (
      <CustomNumberInputContainer
        className={containerClassName}
        marginBottom={marginBottom}
        style={containerStyle}
      >
        {label ? (
          <label className="custom-text-input-label" htmlFor={inputId}>
            {label}
          </label>
        ) : null}
        <div className={`custom-text-input-field ${errorClass} ${focusClass}`}>
          <input
            id={inputId}
            className={inputClassName}
            onBlur={(event) => {
              onBlur?.(event, inputValue)
              setIsFocused(false)
            }}
            onChange={(event) => {
              setNumValue(event?.target?.value)
              onChange?.(event)
            }}
            value={inputValue}
            onFocus={(event) => {
              setIsFocused(true)
              onFocus?.(event)
            }}
            placeholder={!errorClass ? placeholder : ""}
            type={type}
            {...properties}
          />
          <div className="right-column">
            {value >= 0 ? <span>{placeholder}</span> : null}
            <div className="controls">
              <button
                onClick={() => {
                  incrementOrDecrement("inc")
                }}
                type="button"
                tabIndex="-1"
              >
                <img alt="Increment" src={numberInputArrow} />
              </button>
              <button
                onClick={() => {
                  incrementOrDecrement("dec")
                }}
                type="button"
                tabIndex="-1"
              >
                <img alt="Decrement" src={numberInputArrow} />
              </button>
            </div>
          </div>
        </div>
        <span className={`custom-text-input-error ${errorClass}`}>{error}</span>
      </CustomNumberInputContainer>
    )
  }
)

CustomNumberInput.defaultProps = {
  containerClassName: "",
  inputClassName: "",
  containerStyle: {},
  error: "",
  id: "",
  label: "",
  marginBottom: "0",
  onBlur: undefined,
  onFocus: undefined,
  onChange: undefined,
  placeholder: "",
  type: "number",
  min: undefined,
  max: undefined,
}

CustomNumberInput.propTypes = {
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  containerStyle: PropTypes.object,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  marginBottom: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onControl: PropTypes.func.isRequired,
}

export default CustomNumberInput
