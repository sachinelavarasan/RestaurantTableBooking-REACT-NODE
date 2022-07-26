import PropTypes from "prop-types"
import React from "react"

import CustomBoxContainer from "./CustomBoxContainer"

const CustomBox = ({
  children,
  className,
  margin,
  padding,
  reference,
  width,
  ...rest
}) => (
  <CustomBoxContainer
    className={className}
    margin={margin}
    padding={padding}
    ref={reference}
    width={width}
    {...rest}
  >
    {children}
  </CustomBoxContainer>
)

CustomBox.defaultProps = {
  className: "",
  margin: "0",
  padding: "0",
  width: "",
  reference: null,
}

CustomBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  reference: PropTypes.func,
}

export default CustomBox
