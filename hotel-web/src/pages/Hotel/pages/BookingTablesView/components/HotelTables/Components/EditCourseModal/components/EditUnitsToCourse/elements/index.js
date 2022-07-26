import styled from "styled-components"

export const EditUnitsToCourseContainer = styled.div`
  .container-unit {
    flex-shrink: 0;
    width: 55.5rem;
    margin: 1.5rem 0rem 0rem 0rem;
    padding: 0 1.5rem;

    @media (max-width: 55rem) {
      & {
        width: 100%;
      }
    }
  }
  .courseheading {
    display: flex;
    flex-direction: column;
    .main-text {
      color: #3d4457;
      font-weight: 500;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
  }
  .code {
    font-size: 0.875rem;
    color: #8a8c94;
    margin-top: 0.5rem;
  }
  .row-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

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

    .field-left {
      width: 50%;
      margin-right: 1rem;
    }
    .field-middle {
      width: 20%;
      margin-right: 1rem;
    }
    .field-right {
      width: 12%;
      margin-top: 1.5rem;
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

    @media (max-width: 50rem) {
      & {
        display: flex;
        flex-direction: column;
      }
      .field-left {
        width: 100%;
        margin: unset;
      }
      .field-middle {
        width: 100%;
        margin-top: 1rem;
        margin-right: unset;
      }
      .field-right {
        width: 100%;
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`

export const ManualTableStyles = styled.div`
  background-color: #fff;
  box-shadow: unset;
  padding: 0 0 0 0;
  width: 100%;
  max-height: 10rem;
  overflow-y: scroll;

  table {
    margin-top: 1rem;
    width: 100%;
    @media (max-width: 50rem) {
      tr {
        :hover {
          background-color: transparent !important;
        }
      }
    }
    tr {
      :hover {
        background-color: #ecf6ff;
      }
    }

    td:last-child {
      width: 100%;
    }

    .serial {
      width: 5%;
    }

    .unit-name {
      width: 52%;
    }

    .sessions {
      width: 19%;
    }
    .hours {
      width: 19%;
    }

    .close-row {
      width: 5%;
    }

    .closeIconBtn {
      display: block;
      border: none;
      background: transparent;
      outline: none;
    }
  }
`
