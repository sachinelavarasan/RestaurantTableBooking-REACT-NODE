import styled from "styled-components"

export const CalenderContainer = styled.div`
  background-color: #3aafa9;
  min-height: 100vh;
  padding: 7.0625rem 4rem 7rem 4rem;

  .add-Btn {
    background-color: #f77f00;
    border: unset;
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    outline: unset;
    width: 25%;
    border-radius: 0.5rem;
  }
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    header {
      font-size: 1.5rem;
      font-weight: 600;
      color: #3d443d;
      margin-bottom: 1rem;
      @media (max-width: 45rem) {
        & {
          display: flex;
          flex-direction: column;
        }
      }

      header {
        font-size: 1.5rem;
        font-weight: 600;
        color: #3d443d;
      }
    }
  }
  .table-container {
    background-color: white;
    border: 0.0625rem solid #e5e5e5;
    border-radius: 0.5rem;
    overflow: hidden;
  }
`
