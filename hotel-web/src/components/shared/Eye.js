import styled from "styled-components"
import PropTypes from "prop-types"
import EyeOn from "../../assets/icons/openEye.svg"
import EyeOff from "../../assets/icons/eye-off.svg"

const StyledEye = styled.img`
  cursor: pointer;
  position: absolute;
  vertical-align: unset;
  right: 24px;
  bottom: 20px;
`

const Eye = ({ open, onClick }) => {
  if (open) {
    return <StyledEye onClick={onClick} src={EyeOn} alt="eye on" />
  }

  return <StyledEye onClick={onClick} src={EyeOff} alt="eye off" />
}

Eye.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

Eye.defaultProps = {
  onClick: () => {},
}

export default Eye
