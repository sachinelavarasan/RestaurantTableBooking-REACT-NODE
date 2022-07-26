import styled from "styled-components"

const CustomButton = styled.button`
  width: ${(props) => props.width};
  background: ${(props) => props.bgColor};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "3px"};
  padding: ${(props) => (props.padding ? props.padding : "8px 24px")};
  border: 0;
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: 500;
  display: block;
  opacity: ${(props) => (props.isDisabled ? 0.6 : 1)} !important;
  cursor: ${(props) =>
    props.isDisabled ? "not-allowed" : "pointer"} !important;
  transition: all 0.2s;
  &:focus,
  &:hover {
    opacity: 1;
    outline: none;
    box-shadow: none;
  }
`

export default CustomButton
