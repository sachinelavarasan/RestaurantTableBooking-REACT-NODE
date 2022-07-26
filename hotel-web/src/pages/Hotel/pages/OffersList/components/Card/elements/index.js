import styled from "styled-components"

export const CardContainer = styled.div`
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  .text {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    span {
      font-size: 0.875rem;
      color: #fff;
    }
  }

  .no_img {
    height: 12rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    .no_img_text {
      margin-bottom: 0;
      font-size: 2rem;
      color: #fff;
    }
  }

  .card__image {
    height: 12rem;
    width: 100%;
    object-fit: cover;
  }

  .card__title {
    padding: 1rem 1rem 0 1rem;
    color: #ee6c4d;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .card__description {
    padding: 1rem 1rem 0 1rem;
    font-size: 0.875rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 0;
  }
  button {
    background-color: transparent;
    border: none;
    color: #00abff;
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1.71;

    :focus,
    :active {
      outline: none;
    }
  }

  .card__container {
    margin: 1rem;
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
  .card_btn_end {
    padding: 0.25rem 0.35rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 0.875rem;
    border: 2px solid #fca311;
    background: #fca311;
    color: #000;
    border-radius: 0.35rem;
  }
`
