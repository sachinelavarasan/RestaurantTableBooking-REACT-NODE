import styled, { css } from "styled-components"

import { Color } from "../../../constants"

const CustomIconButtonContainer = styled.button`
  background-color: ${({ isDanger, isDisabled }) => {
    if (isDanger) {
      return Color.DANGER
    }

    if (isDisabled) {
      return Color.DISABLED_PRIMARY
    }

    return Color.PRIMARY
  }} !important;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: #fff;
  cursor: ${({ isDisabled }) =>
    isDisabled ? "not-allowed" : "pointer"} !important;
  font-size: ${({ isSmall }) => (isSmall ? "0.75rem" : "1rem")};
  font-weight: 500;
  line-height: ${({ isSmall }) => (isSmall ? "26px" : "1.5")};
  padding: ${({ isSmall }) => (isSmall ? "4px 12px" : "8px 24px")};
  transition: background-color 0.1s, box-shadow 0.1s;

  :active,
  :focus {
    outline: none;
  }
  .customIconButton {
    margin-right: 14px;
  }
  @media (max-width: 500px) {
    padding: 11px 20px;
    .text {
      display: none;
    }
    .customIconButton {
      margin-right: unset;
    }
  }
  ${({ isDisabled }) =>
    isDisabled
      ? ""
      : css`
          :hover {
            background-color: ${({ isDanger }) =>
              isDanger ? "#eb7676" : "#54abff"} !important;
          }

          :focus {
            background-color: ${({ isDanger }) =>
              isDanger ? Color.DANGER : Color.PRIMARY};
            box-shadow: 0 0 0 2px
              ${({ isDanger }) => (isDanger ? "#eec1c1" : Color.LIGHT_BLUE)} !important;
          }

          :active {
            background-color: ${({ isDanger }) =>
              isDanger ? "#e35454" : "#3c97f0"} !important;
            box-shadow: none;
          }
        `}
`

export default CustomIconButtonContainer
