import PropTypes from "prop-types"
import React from "react"

import CustomButtonWithoutTextContainer from "./CustomButtonWithoutTextContainer"

const CustomIconButton = ({
  isDanger,
  isDisabled,
  isSmall,
  icon,
  ...properties
}) => (
  <CustomButtonWithoutTextContainer
    isDanger={isDanger}
    isDisabled={isDisabled}
    isSmall={isSmall}
    {...properties}
  >
    <img src={icon} alt="icon" className="customIconButton" />
  </CustomButtonWithoutTextContainer>
)

CustomIconButton.defaultProps = {
  isDanger: false,
  isDisabled: false,
  isSmall: false,
}

CustomIconButton.propTypes = {
  isDanger: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSmall: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any.isRequired,
}

export default CustomIconButton
