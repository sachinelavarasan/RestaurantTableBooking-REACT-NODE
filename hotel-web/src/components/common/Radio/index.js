import classNames from "classnames"
import PropTypes from "prop-types"
import { forwardRef } from "react"

import { RadioContainer } from "./elements"

export const Radio = forwardRef(
  ({ className, currentValue, hasError, onChange, label, value }, ref) => (
    <RadioContainer
      className={className}
      onClick={() => {
        onChange(value)
      }}
      type="button"
    >
      <div className="align-items-center d-flex mb-0" htmlFor={label}>
        <div
          className={classNames("radio-button-container", "mr-2", "p-1", {
            "has-error": hasError,
            "is-chosen": currentValue === value,
          })}
        >
          <div className="radio-button-active-indicator w-100" />
        </div>
        <span className="label">{label}</span>
      </div>
      <input
        className="d-none"
        id={label}
        ref={ref}
        type="radio"
        value={value}
      />
    </RadioContainer>
  )
)

Radio.defaultProps = {
  className: "",
  hasError: false,
  label: " ",
}

Radio.propTypes = {
  className: PropTypes.string,
  currentValue: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.bool.isRequired,
}
