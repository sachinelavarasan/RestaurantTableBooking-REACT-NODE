import styled from "styled-components"

const Select = styled.select`
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  height: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    outline: none;
    box-shadow: none;
    border: 1px solid #e5e5e5;
  }
`

export default Select
