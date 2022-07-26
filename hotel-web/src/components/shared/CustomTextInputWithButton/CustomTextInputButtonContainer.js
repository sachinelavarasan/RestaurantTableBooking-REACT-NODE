import styled from "styled-components"

import { Color } from "../../../constants"

// eslint-disable-next-line import/prefer-default-export
export const CustomTextInputButtonContainer = styled.div`
  align-items: center;
  margin: 0px;
  background-color: ${({ isDisabled }) => {
    if (isDisabled) {
      return "#F3F3F3"
    }
    return "#fff"
  }} !important;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: flex;
  height: ${({ height }) => height || "43px"};
  overflow: hidden;
  padding: 0 0 0 11px;
  transition: border-color 0.1s, box-shadow 0.1s;
  width: ${({ width }) => width || "100%"};

  &.is-focused {
    border-color: ${({ isDisabled }) => {
      if (isDisabled) {
        return "#F3F3F3"
      }
      return Color.PRIMARY
    }} !important;
    box-shadow: ${({ isDisabled }) => {
      if (isDisabled) {
        return "none"
      }
      return `0 0 0 2px ${Color.LIGHT_BLUE}`
    }} !important;
    outline: none;
  }

  img {
    height: 16px;
    margin-right: 19px;
  }
  .btn {
    outline: none;
    background-color: unset;
    border: transparent;
    :focus {
      box-shadow: unset;
    }
  }
  input {
    border: none;
    color: ${Color.PRIMARY_TEXT};
    flex-grow: 1;
    font-size: 0.875rem;
    font-weight: 400;
    height: 100%;
    background-color: ${({ isDisabled }) => {
      if (isDisabled) {
        return "#F3F3F3"
      }
      return "#fff"
    }} !important;
    :active,
    :focus {
      outline: none;
    }

    ::-webkit-input-placeholder {
      color: ${({ isDisabled }) => {
        if (isDisabled) {
          return "#C0C0C0"
        }
        return `${Color.LIGHT_TEXT}`
      }} !important;
    }
    ::-moz-placeholder {
      color: ${({ isDisabled }) => {
        if (isDisabled) {
          return "#C0C0C0"
        }
        return `${Color.LIGHT_TEXT}`
      }} !important;
    }
    :-ms-input-placeholder {
      color: ${({ isDisabled }) => {
        if (isDisabled) {
          return "#C0C0C0"
        }
        return `${Color.LIGHT_TEXT}`
      }} !important;
    }
    :-moz-placeholder {
      color: ${({ isDisabled }) => {
        if (isDisabled) {
          return "#C0C0C0"
        }
        return `${Color.LIGHT_TEXT}`
      }} !important;
    }
  }
  .input-icon {
    height: 25px;
    margin: 8px;
  }
`
