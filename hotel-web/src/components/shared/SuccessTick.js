import styled from "styled-components"
import PropTypes from "prop-types"
import CheckedTick from "../../assets/icons/checked_tick.svg"
import UnCheckedTick from "../../assets/icons/unchecked_tick.svg"

const StyledTickImg = styled.img`
  cursor: pointer;
  position: relative;
  right: 0;
`

const StyledTickContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`

const StyledTickText = styled.span`
  margin-left: 0.5rem;
  font-size: 12px;
  color: #757575;
`

const SuccessTick = ({ checked, tickName }) => {
  if (checked) {
    return (
      <StyledTickContainer>
        <StyledTickImg src={CheckedTick} alt="checked" />
        <StyledTickText className="font-weight-bold">{tickName}</StyledTickText>
      </StyledTickContainer>
    )
  }

  return (
    <StyledTickContainer>
      <StyledTickImg src={UnCheckedTick} alt="un checked" />
      <StyledTickText className="status-text font-weight-light">
        {tickName}
      </StyledTickText>
    </StyledTickContainer>
  )
}

SuccessTick.propTypes = {
  checked: PropTypes.bool,
  tickName: PropTypes.string.isRequired,
}

SuccessTick.defaultProps = {
  checked: false,
}

export default SuccessTick
