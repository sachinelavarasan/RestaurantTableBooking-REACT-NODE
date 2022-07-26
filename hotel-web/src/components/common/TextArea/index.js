import classNames from "classnames"
import PropTypes from "prop-types"
import { useState, forwardRef, useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"

import FailIcon from "../../../assets/icons/refactor/text-input-fail.svg"
import SpinnerIcon from "../../../assets/icons/refactor/text-input-spinner.svg"
import SuccessIcon from "../../../assets/icons/refactor/text-input-success.svg"
import { InputElementContainer, TextAreaContainer } from "./elements"

export const TextArea = forwardRef(
  (
    {
      autoFocus,
      className,
      hasError,
      hasFailed,
      hasSucceeded,
      isLarge,
      isLoading,
      label,
      maxWidth,
      minWidth,
      placeholder,
      type,
      width,
      rows,
      errorMessage,
      containerClassName,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const StatusIcon = useMemo(() => {
      if (isLoading) {
        return (
          <img
            alt="Loading"
            className="position-absolute spinner-icon status-icon"
            src={SpinnerIcon}
          />
        )
      }

      if (hasSucceeded) {
        return (
          <img
            alt="Succeeded"
            className="position-absolute status-icon"
            src={SuccessIcon}
          />
        )
      }

      if (hasFailed) {
        return (
          <img
            alt="Failed"
            className="position-absolute status-icon"
            src={FailIcon}
          />
        )
      }

      return null
    }, [hasFailed, hasSucceeded, isLoading])

    return (
      <TextAreaContainer
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
          className={classNames(
            "d-flex",
            "align-items-center",
            "position-relative",
            {
              "has-error": hasError,
              "is-focused": isFocused,
            },
            containerClassName
          )}
        >
          <textarea
            {...rest}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            className={classNames("text-input", "w-100", {
              "is-large": isLarge,
            })}
            rows={rows}
            id={label}
            onFocus={() => {
              setIsFocused(true)
            }}
            placeholder={placeholder}
            ref={ref}
            onBlur={(e) => {
              rest?.onBlur(e)
              setIsFocused(false)
            }}
          />
          {StatusIcon}
        </InputElementContainer>
        <AnimatePresence>
          {errorMessage ? (
            <motion.span
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              className="error-message"
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
      </TextAreaContainer>
    )
  }
)

TextArea.defaultProps = {
  autoFocus: false,
  className: "",
  containerClassName: "",
  hasError: false,
  hasFailed: false,
  hasSucceeded: false,
  isLarge: false,
  isLoading: false,
  label: "",
  maxWidth: "",
  minWidth: "",
  placeholder: "",
  type: "text",
  width: "",
  rows: "",
  errorMessage: null,
}

TextArea.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  hasError: PropTypes.bool,
  hasFailed: PropTypes.bool,
  hasSucceeded: PropTypes.bool,
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  rows: PropTypes.string,
  errorMessage: PropTypes.string,
}
