import styled from "styled-components"
/* eslint-disable import/prefer-default-export */

export const MainTextarea = styled.textarea`
  border: 1px solid #dedede;
  border-radius: 8px;
  padding: 11px 16px;
  font-size: 14px;
  height: ${({ height }) => `${height}!important` || "auto"};
  resize: none;
  &:focus {
    box-shadow: none;
    border-color: #e5e5e5;
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
