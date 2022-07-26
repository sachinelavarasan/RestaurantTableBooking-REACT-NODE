import PropTypes from "prop-types"
import React from "react"

import CustomIconButtonContainer from "./CustomIconButtonContainer"

const CustomIconButton = ({
  isDanger,
  isDisabled,
  isSmall,
  text,
  icon,
  ...properties
}) => (
  <CustomIconButtonContainer
    isDanger={isDanger}
    isDisabled={isDisabled}
    isSmall={isSmall}
    {...properties}
  >
    <img src={icon} alt="icon" className="customIconButton" />
    <span className="text">{text}</span>
  </CustomIconButtonContainer>
)

CustomIconButton.defaultProps = {
  isDanger: false,
  isDisabled: false,
  isSmall: false,
  icon: PropTypes.string,
}

CustomIconButton.propTypes = {
  isDanger: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSmall: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.any.isRequired,
  icon: PropTypes.string,
}

export default CustomIconButton
