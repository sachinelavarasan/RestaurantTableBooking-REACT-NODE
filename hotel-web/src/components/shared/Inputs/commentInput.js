import styled from "styled-components"

const CommentInput = styled.input`
  border: none;
  background: #f5f5f5;
  border-radius: 5px;
  padding: 10px 16px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  resize: none;
  font-family: Inter;
  font-size: 14px;
  color: #383838;
  &:focus {
    outline: none;
    box-shadow: none;
    background: #f6f8f9 !important;
    border-radius: 5px !important;
  }
  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #aaaaaa;
  }
`

export default CommentInput
