import styled from "styled-components"

import { Color } from "../../../constants"

const CustomCheckboxContainer = styled.label`
  align-items: center;
  display: flex;

  .custom-checkbox-input {
    display: none;
  }

  .custom-checkbox {
    align-items: center;
    background-color: #fff;
    border: 1px solid #b8bac7;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    height: 16px;
    justify-content: center;
    transition: background-color 0.1s, border-color 0.1s;
    width: 16px;

    .custom-checkbox-check-icon {
      height: 8px !important;
      margin: 0 !important;
      padding: 0 !important;
      opacity: 0;
      transition: opacity 0.1s;
      width: 8px !important;
    }

    &.is-checked {
      background-color: ${Color.PRIMARY};
      border-color: ${Color.PRIMARY};

      .custom-checkbox-check-icon {
        opacity: 1;
      }
    }
  }

  .custom-checkbox-label {
    color: ${Color.PRIMARY_TEXT};
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 8px;
  }
`

export default CustomCheckboxContainer
