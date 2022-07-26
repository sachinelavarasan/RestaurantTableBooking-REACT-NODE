import styled from "styled-components"

import { Color } from "../../../constants"

const CustomNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  position: relative;

  .custom-text-input-label {
    color: ${Color.LIGHT_TEXT};
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
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    position: relative;
    transition: border-color 0.1s, box-shadow 0.1s;

    &.is-focused {
      border-color: ${Color.PRIMARY};
      box-shadow: 0 0 0 2px ${Color.LIGHT_BLUE};
    }

    &.with-error {
      border-color: ${({ theme }) => theme.colors.danger} !important;
      &.is-focused {
        box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightDanger};
      }
    }

    input {
      border: none;
      color: ${Color.PRIMARY_TEXT};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.21;
      padding: 11px 0 12px 16px;
      width: 100%;

      :focus,
      :active {
        outline: none;
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
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }

    .right-column {
      align-items: center;
      display: flex;
      position: absolute;
      height: 100%;
      right: 4px;

      span {
        color: ${Color.LIGHT_TEXT};
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.21;
        margin: -1px 12px 0 0;
      }

      .controls {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding: 4px 0;

        button {
          background-color: #fff;
          border: 0;
          display: flex;
          height: 14px;
          padding: 0;
          width: 14px;

          :focus,
          :active {
            outline: none;
          }

          img {
            height: 100%;
            vertical-align: unset;
            width: 100%;
          }

          :last-child img {
            transform: rotate(180deg);
          }
        }
      }
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

export default CustomNumberInputContainer
