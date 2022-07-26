import styled from "styled-components"

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: linear-gradient(94.1deg, #76db64 -27.87%, #1cb5d2 130.03%);
  border-radius: 3px;
  padding: 15px;
  border: 0;
  color: white;
  display: block;
  &:focus,
  &:hover {
    color: white;
    outline: none;
    border: 0;
    box-shadow: none;
  }
`

export default StyledButton
