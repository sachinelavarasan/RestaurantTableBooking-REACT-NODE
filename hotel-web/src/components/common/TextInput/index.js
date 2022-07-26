import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import PropTypes from "prop-types"
import { useState, forwardRef, useMemo } from "react"

import EyeCloseIcon from "../../../assets/icons/refactor/eye-close.svg"
import EyeOpenIcon from "../../../assets/icons/refactor/eye-open.svg"
import FailIcon from "../../../assets/icons/refactor/text-input-fail.svg"
import SpinnerIcon from "../../../assets/icons/refactor/text-input-spinner.svg"
import SuccessIcon from "../../../assets/icons/refactor/text-input-success.svg"
import { InputElementContainer, TextInputContainer } from "./elements"

export const TextInput = forwardRef(
  (
    {
      autoFocus,
      className,
      errorMessage,
      hasError,
      hasFailed,
      hasSucceeded,
      isLarge,
      isLoading,
      label,
      id,
      maxWidth,
      minWidth,
      placeholder,
      type,
      width,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

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
      <TextInputContainer
        className={classNames(
          "d-flex",
          "flex-column",
          "position-relative",
          "w-100",
          className
        )}
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
            }
          )}
        >
          <input
            {...rest}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            className={classNames("text-input", "w-100", {
              "is-large": isLarge,
              "pr-5": type === "password",
            })}
            id={id}
            onFocus={() => {
              setIsFocused(true)
            }}
            placeholder={placeholder}
            ref={ref}
            type={isVisible ? "text" : type}
            onBlur={(e) => {
              rest.onBlur(e)
              setIsFocused(false)
            }}
          />
          {type === "password" ? (
            <button
              className="align-items-center d-flex justify-content-center position-absolute toggle-visibility-button"
              onClick={() => {
                setIsVisible((previousValue) => !previousValue)
              }}
              type="button"
            >
              <img
                alt="Visibility"
                className="visibility-icon"
                src={isVisible ? EyeOpenIcon : EyeCloseIcon}
              />
            </button>
          ) : null}
          {StatusIcon}
        </InputElementContainer>
        <AnimatePresence>
          {errorMessage ? (
            <motion.span
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              className="error-message position-absolute"
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
      </TextInputContainer>
    )
  }
)

TextInput.defaultProps = {
  autoFocus: false,
  className: "",
  errorMessage: null,
  hasError: false,
  hasFailed: false,
  hasSucceeded: false,
  isLarge: false,
  isLoading: false,
  label: "",
  id: "",
  maxWidth: "",
  minWidth: "",
  placeholder: "",
  type: "text",
  width: "",
}

TextInput.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  hasFailed: PropTypes.bool,
  hasSucceeded: PropTypes.bool,
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
}
