import classNames from "classnames"
import PropTypes from "prop-types"

import LargeButtonSpinnerIcon from "../../../assets/icons/refactor/large-button-spinner.svg"
import ButtonSpinnerIcon from "../../../assets/icons/refactor/button-spinner.svg"
import { ButtonContainer } from "./elements"

export const Button = ({
  className,
  icon,
  isFullWidth,
  isLarge,
  isLoading,
  label,
  onClick,
  type,
  id,
  isCancel,
  isDisabled,
  iconPostion,
}) => (
  <ButtonContainer
    className={classNames(
      "align-items-center",
      "d-flex",
      "justify-content-center",
      className,
      {
        "py-3": isLarge,
        "w-100": isFullWidth,
        "is-cancel": isCancel,
      }
    )}
    onClick={onClick}
    type={type}
    isDisabled={isDisabled}
    id={id}
  >
    {icon && iconPostion === "left" ? (
      <img alt="Icon" className="icon mr-2" src={icon} />
    ) : null}
    {isLoading ? (
      <img
        alt="Loading"
        className={classNames("spinner", {
          "is-large": isLarge,
          "mr-2": !isLarge,
        })}
        src={isLarge ? LargeButtonSpinnerIcon : ButtonSpinnerIcon}
      />
    ) : null}
    {isLarge && isLoading ? null : (
      <span
        className={classNames("label", {
          "is-large": isLarge,
          "is-cancel": isCancel,
        })}
      >
        {label}
      </span>
    )}
    {icon && iconPostion === "right" ? (
      <img alt="Icon" className="icon ml-2" src={icon} />
    ) : null}
  </ButtonContainer>
)

Button.defaultProps = {
  className: "",
  id: "",
  icon: null,
  isFullWidth: true,
  isLarge: false,
  isLoading: false,
  onClick: () => {},
  type: "button",
  isCancel: false,
  isDisabled: false,
  iconPostion: "left",
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isLarge: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isCancel: PropTypes.bool,
  isDisabled: PropTypes.bool,
  iconPostion: PropTypes.string,
}
