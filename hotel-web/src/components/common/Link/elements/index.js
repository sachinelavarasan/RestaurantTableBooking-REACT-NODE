import { Link } from "react-router-dom"
import styled from "styled-components"

export const LinkContainer = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  line-height: 1.3125rem;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }
`
