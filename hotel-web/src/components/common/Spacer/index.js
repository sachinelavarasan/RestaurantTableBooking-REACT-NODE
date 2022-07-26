import classNames from "classnames"
import PropTypes from "prop-types"

import { SpacerContainer } from "./elements"

export const Spacer = ({ className, height, ...rest }) => (
  <SpacerContainer
    className={classNames("flex-shrink-0", className)}
    height={height}
    {...rest}
  />
)

Spacer.defaultProps = {
  className: "",
}

Spacer.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string.isRequired,
}
