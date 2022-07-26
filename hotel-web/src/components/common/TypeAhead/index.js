import { forwardRef } from "react"
import classNames from "classnames"
import { Typeahead } from "react-bootstrap-typeahead"

import { AnimatePresence, motion } from "framer-motion"
import PropTypes from "prop-types"

import { TypeAheadContainer } from "./elements"

export const TypeAhead = forwardRef(
  (
    {
      className,
      hasError,
      errorMessage,
      icon,
      isLarge,
      isOptionsSingleLine,
      isTooltipShown,
      label,
      id,
      maxWidth,
      menuWidth,
      width,
      height,
      value,
      selected,
      options,
      onChange,
      labelKey,
      onInputChange,
      placeholder,
      allowNew,
      onBlur,
      dropUp,
      ...rest
    },
    ref
  ) => (
    <TypeAheadContainer
      className={classNames("d-flex", "flex-column", "w-100", className)}
      maxWidth={maxWidth}
      width={width}
    >
      {label ? (
        <label className="label mb-8" htmlFor={label}>
          {label}
        </label>
      ) : null}
      <Typeahead
        allowNew={allowNew}
        {...rest}
        id={id}
        labelKey={labelKey}
        onInputChange={onInputChange}
        ref={ref}
        placeholder={placeholder}
        selected={selected}
        value={value}
        options={options}
        onChange={onChange}
        className={classNames(className, {
          "has-error": hasError,
        })}
        hasError={hasError}
        onBlur={onBlur}
        dropup={dropUp}
      />
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
    </TypeAheadContainer>
  )
)

TypeAhead.defaultProps = {
  className: "",
  hasError: false,
  errorMessage: null,
  icon: null,
  isLarge: true,
  isOptionsSingleLine: false,
  isTooltipShown: false,
  label: "",
  id: "",
  maxWidth: "",
  menuWidth: "100%",
  width: "",
  height: "18.75rem",
  value: "",
  selected: "",
  onChange: () => {},
  onBlur: () => {},
  onInputChange: () => {},
  labelKey: "",
  placeholder: "",
  allowNew: "",
  dropUp: false,
}

TypeAhead.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  icon: PropTypes.string,
  isLarge: PropTypes.bool,
  isOptionsSingleLine: PropTypes.bool,
  isTooltipShown: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  maxWidth: PropTypes.string,
  menuWidth: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onInputChange: PropTypes.func,
  labelKey: PropTypes.string,
  placeholder: PropTypes.string,
  allowNew: PropTypes.string,
  dropUp: PropTypes.bool,
}
