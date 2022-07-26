import styled from "styled-components"

export const EmptyStateContainer = styled.div`
  padding: 5.6875rem 0 3.5rem 0;

  .image {
    height: 20.3125rem;
    object-fit: contain;
    width: 27.0625rem;
  }

  .title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.8125rem;
  }

  .description {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
  .button-container {
    margin-top: 1rem;
  }
`
