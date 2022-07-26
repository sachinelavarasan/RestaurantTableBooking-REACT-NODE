/* eslint-disable react/forbid-prop-types */

import PropTypes from "prop-types"
import React from "react"

import ButtonSpinner from "../../../assets/icons/button-spinner.svg"
import CustomButtonContainer from "./CustomButtonContainer"

const CustomButton = ({
  isDanger,
  isDisabled,
  isLoading,
  isSmall,
  onClick,
  text,
  ...properties
}) => (
  <CustomButtonContainer
    isDanger={isDanger}
    isDisabled={isDisabled}
    isSmall={isSmall}
    onClick={isDisabled ? () => {} : onClick}
    {...properties}
  >
    {isLoading ? (
      <img alt="Loading" className="button-spinner" src={ButtonSpinner} />
    ) : null}
    {text}
  </CustomButtonContainer>
)

CustomButton.defaultProps = {
  isDanger: false,
  isDisabled: false,
  isLoading: false,
  isSmall: false,
  onClick: () => {},
}

CustomButton.propTypes = {
  isDanger: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.any,
  isSmall: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.any.isRequired,
}

export default CustomButton
