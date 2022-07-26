import styled from "styled-components"

import { Color } from "../../../constants"

const CustomSelectInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  position: relative;

  .custom-text-input-label {
    color: #3d4457;
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 9px;
    transition: color 0.1s;

    &.with-error {
      color: ${Color.DANGER};
    }
  }

  .custom-text-input-field {
    background-color: #fff;
    border: 1px solid #dedede;
    border-radius: ${({ borderRadius }) => borderRadius || "5px"};
    color: ${Color.PRIMARY_TEXT};
    font-size: 0.875rem;
    font-weight: 400;
    transition: border-color 0.1s, box-shadow 0.1s;
    &.with-error {
      border-color: ${Color.DANGER};
    }

    :-moz-placeholder {
      color: ${Color.LIGHT_TEXT};
    }

    :-ms-input-placeholder {
      color: ${Color.LIGHT_TEXT};
    }

    ::-moz-placeholder {
      color: ${Color.LIGHT_TEXT};
    }

    ::-webkit-input-placeholder {
      color: ${Color.LIGHT_TEXT};
    }

    :active,
    :focus {
      border-color: ${({ error }) => (error ? Color.DANGER : Color.PRIMARY)};
      box-shadow: ${({ error }) =>
        error ? "none" : `0 0 0 2px ${Color.LIGHT_BLUE}`};
      outline: none;
    }
  }
  .errorState {
    cursor: pointer;
    position: absolute;
    right: 24px;
    bottom: 20px;
  }
  .inputSucess {
    cursor: pointer;
    position: absolute;
    right: 24px;
    bottom: 20px;
  }
  .inputVerify {
    cursor: pointer;
    position: absolute;
    right: 24px;
    bottom: 20px;
    animation: rotating 1s linear infinite;
  }
  .custom-text-input-error {
    color: ${Color.DANGER};
    font-size: 0.75rem;
    font-weight: 400;
    opacity: 0;
    position: absolute;
    top: calc(100% + 4px);
    right: ${({ ErrorRight }) => (ErrorRight ? "0px" : "unset")};
    transition: opacity 0.1s;

    &.with-error {
      opacity: 1;
    }
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
`

export default CustomSelectInputContainer
