import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import PropTypes from "prop-types"
import { forwardRef } from "react"
import ReactSelect, { components } from "react-select"
import ReactTooltip from "react-tooltip"

import BlueTickIcon from "../../../assets/icons/blue-tick.svg"
import DropdownIndicatorIcon from "../../../assets/icons/refactor/dropdown-indicator.svg"
import { theme } from "../../../elements"
import { DropdownContainer } from "./elements"

const STYLES = {
  control: (provided) => ({
    ...provided,
    "&:hover": {
      borderColor: "none",
    },
    border: "none",
    borderRadius: "none",
    boxShadow: "none",
    transition: "none",
    backgroundColor: "unset",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: (provided) => ({
    ...provided,
    color: theme.colors.text,
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    margin: 0,
    padding: 0,
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: "10000",
    border: `0.0625rem solid ${theme.colors.darkBorder}`,
    borderRadius: "0.5rem",
    boxShadow: "none",
    width: state.selectProps.width,
    overflowY: "auto",
    marginTop: "0.75rem",
  }),
  menuList: (provided, state) => ({
    ...provided,
    overflowX: "hidden",
    padding: "0.5rem 0.5rem 0 0.5rem",
    maxHeight: state.selectProps.height,
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    borderRadius: "0.25rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "1rem",
    marginBottom: "0.5rem",
    overflowWrap: "anywhere",
    padding: "0.75rem",
    transition: "background-color 0.1s",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: theme.colors.placeholder,
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme.colors.text,
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    margin: 0,
    padding: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
}

export const Dropdown = forwardRef(
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
      ...rest
    },
    ref
  ) => (
    <DropdownContainer
      className={classNames("d-flex", "flex-column", "w-100", className)}
      maxWidth={maxWidth}
      width={width}
    >
      {label ? (
        <label className="label mb-8" htmlFor={label}>
          {label}
        </label>
      ) : null}
      <ReactSelect
        {...rest}
        // menuIsOpen
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

          // eslint-disable-next-line react/prop-types
          Option: ({ children, isSelected, ...properties }) => (
            <components.Option {...properties}>
              <div
                className="align-items-center d-flex justify-content-between"
                id={children}
                {...(isTooltipShown && {
                  title: children,
                })}
              >
                <span
                  className={classNames("option-content", {
                    "is-truncated": isOptionsSingleLine,
                  })}
                >
                  {children}
                  {isSelected}
                </span>
                {isSelected ? (
                  <img
                    alt="Selected"
                    className={classNames("blue-tick-icon", {
                      "ml-2": isOptionsSingleLine,
                    })}
                    src={BlueTickIcon}
                  />
                ) : null}
              </div>
            </components.Option>
          ),
          // eslint-disable-next-line react/prop-types
          SingleValue: ({ children, ...properties }) => (
            <components.SingleValue {...properties}>
              <div
                className="align-items-center d-flex"
                data-for="single-value"
                data-tip
              >
                {icon ? (
                  <img alt="Class" className="mr-2 select-icon" src={icon} />
                ) : null}
                <span className="is-truncated selected-value">{children}</span>
              </div>
              {isTooltipShown ? (
                <ReactTooltip place="bottom" effect="solid" id="single-value">
                  {children}
                </ReactTooltip>
              ) : null}
            </components.SingleValue>
          ),
        }}
        height={height}
        menuPlacement="auto"
        maxMenuHeight={100}
        hasError={hasError}
        isLarge={isLarge}
        ref={ref}
        id={id}
        styles={STYLES}
        theme={(currentTheme) => ({
          ...currentTheme,
        })}
        width={menuWidth}
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
    </DropdownContainer>
  )
)

Dropdown.defaultProps = {
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
}

Dropdown.propTypes = {
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
}
