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
    width: 100%;
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
    background-color: red;
    color: white;
    outline: none;
    border: none;
    padding: 0.5rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
  }
  .btn {
    display: flex;
  }
`
