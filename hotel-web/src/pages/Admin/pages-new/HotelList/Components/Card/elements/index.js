import styled from "styled-components"

export const CardContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  cursor: pointer;
  transition: transform 200ms ease-in;

  .text {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.2rem 0.2rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    span {
      font-size: 1rem;
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
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 800;
  }

  .card__btn {
    padding: 0.5rem 0.75rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid #d50000;
    background: transparent;
    color: #d50000;
    border-radius: 0.5rem;
    transition: background 200ms ease-in, color 200ms ease-in;
  }

  :hover {
    transform: scale(1.02);
  }

  :hover .card__btn {
    background: #d50000;
    color: white;
  }
`
