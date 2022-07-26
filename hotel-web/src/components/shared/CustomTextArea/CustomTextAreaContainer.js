import styled from "styled-components"

import { Color } from "../../../constants"

const CustomTextAreaContainer = styled.div`
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
    resize: none;
    border: 1px solid #dedede;
    border-radius: 5px;
    color: ${Color.PRIMARY_TEXT};
    font-size: 0.875rem;
    font-weight: 400;
    padding: 11px 0 12px 16px;
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
      border-color: ${Color.PRIMARY};
      box-shadow: 0 0 0 2px ${Color.LIGHT_BLUE};
      outline: none;
    }
  }

  .custom-text-input-error {
    color: ${Color.DANGER};
    font-size: 0.75rem;
    font-weight: 400;
    opacity: 0;
    position: absolute;
    top: calc(100% + 4px);
    transition: opacity 0.1s;

    &.with-error {
      opacity: 1;
    }
  }
`

export default CustomTextAreaContainer
