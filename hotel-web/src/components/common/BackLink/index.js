import classNames from "classnames"
import PropTypes from "prop-types"

import ArrowLeftIcon from "../../../assets/icons/refactor/arrow-left.svg"
import { BackLinkContainer } from "./elements"

export const BackLink = ({ className, onClick }) => (
  <BackLinkContainer
    className={classNames("align-items-center", "d-flex", className)}
    onClick={onClick}
  >
    <img alt="Go Back" className="icon mr-2" src={ArrowLeftIcon} />
    <span className="text">Back</span>
  </BackLinkContainer>
)

BackLink.defaultProps = {
  className: "",
}

BackLink.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
