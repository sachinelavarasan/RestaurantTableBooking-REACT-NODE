import styled from "styled-components"
/* eslint-disable import/prefer-default-export */

export const MainInput = styled.input`
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 11px 16px;
  font-size: 14px;
  height: 40px;
  &:focus {
    box-shadow: none;
    border: 1px solid #aaaaaa;
    outline: none;
  }
  ::placeholder {
    color: #aaaaaa;
  }
`

export const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #515151;
`
