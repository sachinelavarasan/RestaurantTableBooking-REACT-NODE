import PropTypes from "prop-types"

import { Link } from "../../../../components/common"
import { AuthSwitchLinkContainer } from "./elements"

export const AuthSwitchLink = ({ linkHref, linkText, onLinkClick, text }) => (
  <AuthSwitchLinkContainer className="align-items-center d-flex w-100">
    <span className="mr-1 text">{text}</span>
    <Link className="link-text" onClick={onLinkClick} to={linkHref}>
      {linkText}
    </Link>
  </AuthSwitchLinkContainer>
)

AuthSwitchLink.defaultProps = {
  onLinkClick: () => {},
}

AuthSwitchLink.propTypes = {
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}
