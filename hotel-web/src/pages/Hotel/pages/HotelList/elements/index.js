import styled from "styled-components"

export const HotelListContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.background}; */
  background-color: #3aafa9;
  min-height: 100vh;
  margin: 0 -0.9375rem;
  padding: 7.0625rem 4rem 4.0625rem 4rem;
  width: 100%;
  position: absolute;

  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */

  .add-Btn {
    background-color: #e63946;
    border: unset;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    outline: unset;
    padding: 0.5rem 0.5rem;
    width: 30%;
    border-radius: 0.75rem;
  }
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    @media (max-width: 45rem) {
      & {
        display: flex;
        flex-direction: column;
      }
    }
    .category {
      width: 200px;
    }
    header {
      font-size: 1.5rem;
      font-weight: 600;
      color: #3d443d;
    }
  }
  .delete-food-modal {
    background-color: #def2f1 !important;
    border-radius: 0.5rem !important;
  }
`
