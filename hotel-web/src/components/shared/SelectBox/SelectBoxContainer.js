import styled, { css } from "styled-components"

import { Color } from "../../../constants"

// eslint-disable-next-line import/prefer-default-export
export const SelectBoxContainer = styled.button`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dedede;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  position: relative;
  transition: border-color 0.1s, box-shadow 0.1s;
  width: ${({ width }) => width};

  &.is-open {
    border-color: ${Color.PRIMARY} !important;
    box-shadow: 0 0 0 2px ${Color.LIGHT_BLUE};
  }

  :focus,
  :active {
    outline: none;
  }

  h5 {
    color: #3d4457;
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0 36px 0 0;
  }

  .dropdown-items {
    background-color: #fff;
    border: 1px solid #dedede;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    position: absolute;
    right: -1px;
    ${({ isOptionsOnTop }) =>
      isOptionsOnTop
        ? css`
            bottom: calc(100% + 8px);
          `
        : css`
            top: calc(100% + 8px);
          `}
    width: ${({ width }) => width};
    z-index: 1000;

    .dropdown-item {
      align-items: center;
      background-color: #fff;
      border: none;
      border-radius: 4px;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      padding: 8px;
      transition: background-color 0.1s;

      :not(:last-child) {
        margin-bottom: 8px;
      }

      :hover {
        background-color: rgba(64, 161, 255, 0.1);
      }

      :focus,
      :active {
        outline: none;
      }

      span {
        color: ${Color.PRIMARY_TEXT};
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.21;
      }

      img {
        height: 16px;
        width: 16px;
      }
    }
  }
`
