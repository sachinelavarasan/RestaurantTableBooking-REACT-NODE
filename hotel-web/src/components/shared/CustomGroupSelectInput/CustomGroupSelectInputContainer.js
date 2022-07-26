import styled from "styled-components"

import { Color } from "../../../constants"

const CustomGroupSelectInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  position: relative;

  .custom-group-select-input-label {
    color: #3d4457;
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
    transition: color 0.1s;

    &.with-error {
      color: ${Color.DANGER};
    }
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }

  .errorState {
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    bottom: 20px;
  }
  .inputSucess {
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    bottom: 20px;
  }
  .inputVerify {
    cursor: pointer;
    position: absolute;
    right: 24px;
    bottom: 20px;
    animation: rotating 1s linear infinite;
  }
  .custom-group-select-input-error {
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
`

export default CustomGroupSelectInputContainer
