import styled from "styled-components"

export const BackLinkContainer = styled.button`
  background-color: transparent;
  border: none;

  :active,
  :focus {
    outline: none;
  }

  .icon {
    height: 1rem;
    width: 1rem;
  }

  .text {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
`
