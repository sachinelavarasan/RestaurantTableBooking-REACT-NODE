import styled from "styled-components"

export const HeaderContainer = styled.div`
  .header-container {
    width: 100%;
    background-color: #3aafa9;
    box-shadow: 0px 19px 12px -10px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem 1rem 2rem;

    @media (max-width: 41.25rem) {
      & {
        width: 100%;
        padding: 1rem;
      }
    }
  }

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .title {
      font-weight: 600;
      font-size: 1.5rem;
      color: black;
    }

    .owner {
      font-weight: 500;
      font-size: 1rem;
      color: #def2f1;
      margin-bottom: unset;
    }
  }
  .header-left {
    display: flex;
    align-items: center;
  }
  .view-comments-button {
    background-color: #1f7a8c;
    color: white;
    outline: none;
    border: none;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 0.875rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
  }
  .view-offers-button {
    background-color: #def2f1;
    color: #17252a;
    outline: none;
    border: none;
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
    font-size: 0.875rem;
  }
  .btn {
    display: flex;
  }
`
