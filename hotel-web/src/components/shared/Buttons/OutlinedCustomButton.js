import styled from "styled-components"

const OutlinedCustomButton = styled.button`
  border-radius: 3px;
  background: transparent;
  border: ${(props) => `1px solid ${props.borderColor}`};
  padding: ${(props) => (props.padding ? props.padding : "7px 23px")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  display: block;
  font-weight: 500;
  opacity: ${(props) => props.opacity};
  transistion: all 0.2s;
  &:focus,
  &:hover {
    // color: white;
    outline: none;
    // border: 0;
    box-shadow: none;
    opacity: 1;
  }
`

export default OutlinedCustomButton
