import styled from "styled-components"

export const CardContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #ffffff;
  transition: transform 200ms ease-in;
  padding: 0.75rem;
  .card__body {
    overflow-wrap: anywhere;
    word-break: break-all;
    margin-right: 0.25rem;
  }
  .card__title {
    color: #000;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: unset;
  }
  .details {
    font-size: 0.875rem;
    font-weight: 600;
    color: black;
  }

  .card_btn_edit {
    padding: 0.25rem 0.35rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 0.875rem;
    border: 2px solid #014f86;
    background: transparent;
    color: #014f86;
    border-radius: 0.35rem;
    transition: background 200ms ease-in, color 200ms ease-in;
  }
  .badge {
    background: rgb(251, 133, 0);
    text-align: center;
    height: 1.375rem;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    span {
      font-size: 0.75rem;
      color: #ffffff;
      text-transform: capitalize;
      font-weight: normal;
    }
  }
  .time-badge {
    background: #000000;
    text-align: center;
    height: 1.375rem;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    span {
      font-size: 0.75rem;
      color: #ffffff;
      text-transform: capitalize;
      font-weight: normal;
    }
  }
  .card_btn_delete {
    padding: 0.25rem 0.35rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 0.875rem;
    border: 2px solid #d50000;
    background: transparent;
    color: #d50000;
    border-radius: 0.35rem;
    transition: background 200ms ease-in, color 200ms ease-in;
  }

  .card_btn_delete {
    :hover {
      background: #d50000;
      color: white;
    }
  }
  .card_btn_edit {
    :hover {
      background: #014f86;
      color: white;
    }
  }
`
