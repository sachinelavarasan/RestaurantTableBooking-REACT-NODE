import styled from "styled-components"

export const FilterTabContainer = styled.div`
  .option {
    background-color: transparent;
    outline: unset;
    color: ${({ theme }) => theme.colors.lightText};
    border: unset;
    height: 3.875rem;
    border-bottom: 0.125rem solid transparent;
    &.active {
      color: ${({ theme }) => theme.colors.text};
      border-bottom-color: ${({ theme }) => theme.colors.text};
    }
  }
`
