import styled from "styled-components"

export const BoxContainer = styled.div`
  width: 660px;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  @media (max-width: 45.75rem) {
    & {
      width: 95%;
    }
  }
`
