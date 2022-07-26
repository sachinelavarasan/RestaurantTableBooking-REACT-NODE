import styled from "styled-components"

export const AdminListingPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100%;
  margin: 0 -0.9375rem;
  padding: 7.0625rem 4rem 4.0625rem 4rem;
  @media (max-width: 55.5rem) {
    & {
      padding: 7.0625rem 4rem 4.0625rem 4rem;
    }
  }
  @media (max-width: 37.5rem) {
    & {
      padding: 7.0625rem 1.5rem 4.0625rem 1.5rem;
    }
  }
  .table-container {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);
    padding: 1.5rem;

    table {
      margin: 1rem 0 1.5rem 0;
      width: 100%;
    }
  }
`

export const EmptyCellValue = styled.div`
  background-color: ${({ theme }) => theme.colors.placeholder};
  height: 0.09375rem;
  width: 0.6875rem;
`

export const UnitType = styled.div`
  background-color: ${({ children }) =>
    children === "core" ? "#ecf6ff" : "#defae8"};
  border-radius: 0.3125rem;
  color: ${({ children }) => (children === "core" ? "#54abff" : "#4ec977")};
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0125rem;
  line-height: 1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`
