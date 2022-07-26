import styled from "styled-components"

export const CardContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: flex;
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
    color: #3d4457;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: unset;
  }

  .card_btn_edit {
    padding: 0.25rem 0.35rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 0.875rem;
    border: 2px solid #2b7a78;
    background: transparent;
    color: #014f86;
    border-radius: 0.35rem;
    transition: background 200ms ease-in, color 200ms ease-in;
  }
  .badge {
    background: #def2f1;
    text-align: center;
    height: 1.375rem;
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    span {
      font-size: 0.75rem;
      color: #2b7a78;
      text-transform: capitalize;
      font-weight: 500;
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

  :hover {
    transform: scale(1.02);
  }

  .card_btn_delete {
    :hover {
      background: #d50000;
      color: white;
    }
  }
  .card_btn_edit {
    :hover {
      background: #2b7a78;
      color: white;
    }
  }
`
