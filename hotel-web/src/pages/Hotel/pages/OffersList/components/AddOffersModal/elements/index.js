import styled from "styled-components"

import { Modal } from "../../../../../../../components/common"

export const EditSessionContainer = styled(Modal)`
  .classheading {
    display: flex;
    flex-direction: column;

    .main-text {
      color: #3d4457;
      font-weight: 500;
      font-size: 1.5rem;
    }

    .sub-text {
      font-size: 0.875rem;
      color: #8a8c94;
    }
  }
  .save-changes {
    border: 0.0625rem solid #40a1ff;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      vertical-align: middle;
      margin-right: 0.5rem;
    }
    .add-button-text {
      color: #40a1ff;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      margin-top: 0.1rem;
    }
  }
  .added-items-container {
    padding: 0.25rem 1.5rem;
    max-height: 5rem;
    overflow-y: scroll;
    background-color: #faedcd;
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px grey;
      border-radius: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #000000a1;
    }
  }
  .text {
    padding: 0 1rem;
    margin-bottom: 0.5rem;
    color: #3d4457;
    font-size: 1rem;
  }
  .closeIconBtn {
    display: block;
    border: none;
    background: transparent;
    outline: none;
  }

  .form-container {
    margin: 0 1.5rem 0.5rem 1.5rem;
  }

  .row-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    .field-left,
    .field-right {
      width: 100%;
    }
    .field-left {
      margin-right: 1.5rem;
    }
    @media (max-width: 37.5rem) {
      width: 100%;
      display: flex;
      flex-direction: column;
      .field-right {
        margin-top: 1.5rem;
      }
    }
  }
`
