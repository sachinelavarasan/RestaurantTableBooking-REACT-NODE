import PropTypes from "prop-types"
import styled from "styled-components"

import BackLinkIcon from "../../assets/icons/back-link-icon.svg"
import { Colors } from "../../constants"
import rem from "../../utils/rem"

const BackLinkContainer = styled.button`
  background-color: transparent;
  border: none;

  :active,
  :focus {
    outline: none;
  }

  img {
    height: ${rem(16)};
    object-fit: contain;
    vertical-align: unset;
    width: ${rem(16)};
  }

  span {
    color: ${Colors.LightText};
    font-size: ${rem(14)};
    line-height: 1.5;
  }
`

const BackLink = ({ className, onClick }) => (
  <BackLinkContainer
    className={`align-items-center d-flex ${className}`}
    onClick={onClick}
    type="button"
  >
    <img alt="Go Back" className="mr-2" src={BackLinkIcon} />
    <span>Back</span>
  </BackLinkContainer>
)

BackLink.defaultProps = {
  className: "",
}

BackLink.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default BackLink
