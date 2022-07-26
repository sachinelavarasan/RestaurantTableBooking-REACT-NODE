/* eslint-disable react/forbid-prop-types */
import classNames from "classnames"
import PropTypes from "prop-types"
import { AnimatePresence, motion } from "framer-motion"
import { useState, forwardRef } from "react"
import DatePicker from "react-datepicker"
import {
  DatePickerContainer,
  InputElementContainer,
  DateInputContainer,
} from "./elements"
import CalenderImg from "../../../assets/icons/calendar-1.svg"

export const DateInput = forwardRef(
  (
    {
      autoFocus,
      className,
      hasError,
      errorMessage,
      isLarge,
      dateFormat,
      label,
      maxWidth,
      minWidth,
      placeholder,
      width,
      value,
      minDate,
      ...rest
    },
    ref
  ) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const openDatePicker = () => {
      setIsDatePickerOpen((state) => !state)
    }

    return (
      <DateInputContainer
        className={classNames("d-flex", "flex-column", "w-100", className)}
        maxWidth={maxWidth}
        minWidth={minWidth}
        width={width}
      >
        {label ? (
          <label className="label mb-2" htmlFor={label}>
            {label}
          </label>
        ) : null}
        <InputElementContainer
          className={classNames("d-flex", "w-100", {
            "has-error": hasError,
            "is-focused": isFocused,
          })}
        >
          <DatePickerContainer className="d-flex flex-row w-100">
            <DatePicker
              {...rest}
              ref={ref}
              autoComplete="off"
              placeholderText={placeholder}
              open={isDatePickerOpen}
              onClickOutside={() => setIsDatePickerOpen(false)}
              dateFormat={dateFormat}
              selected={value ? new Date(value) : null}
              className="form-control border-0 w-100  date-picker"
              popperPlacement="bottom"
              popperProps={{
                positionFixed: true,
              }}
              minDate={new Date(minDate)}
              onFocus={() => {
                openDatePicker()
                setIsFocused(true)
              }}
              onSelect={() => {
                rest.onBlur()
                openDatePicker()
                setIsFocused(false)
              }}
              onBlur={(e) => {
                rest.onBlur(e)
                setIsFocused(false)
              }}
            />
          </DatePickerContainer>
          <button
            className="open-datepicker"
            type="button"
            onClick={() => {
              openDatePicker()
            }}
          >
            <img src={CalenderImg} className="mr-2" alt="date" />
          </button>
        </InputElementContainer>
        <AnimatePresence>
          {errorMessage ? (
            <motion.span
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              className="error-message position-relative"
              exit={{
                opacity: 0,
                translateY: "-0.25rem",
              }}
              initial={{
                opacity: 0,
                translateY: "-0.25rem",
              }}
              transition={{
                duration: 0.2,
                type: "keyframes",
              }}
            >
              {errorMessage}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </DateInputContainer>
    )
  }
)

DateInput.defaultProps = {
  autoFocus: false,
  className: "",
  errorMessage: null,
  isLarge: false,
  label: "",
  maxWidth: "",
  minWidth: "",
  placeholder: "",
  dateFormat: "d-MM-yyyy",
  width: "",
  minDate: "",
}

DateInput.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isLarge: PropTypes.bool,
  label: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  dateFormat: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.string.isRequired,
  minDate: PropTypes.any,
}
