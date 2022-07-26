import styled from "styled-components"

export const ListingPageHeaderContainer = styled.header`
  .title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.8125rem;
  }

  .title-suffix {
    color: ${({ theme }) => theme.colors.lightText};
  }

  @media (max-width: 31.2rem) {
    .add-button {
      .label {
        display: none;
      }
      .icon {
        margin-right: unset !important;
      }
    }
  }
`
