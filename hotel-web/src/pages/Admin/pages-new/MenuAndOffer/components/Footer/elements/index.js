import styled from "styled-components"

export const FooterContainer = styled.div`
  .footer-container {
    width: 100%;
    background-color: #ffffff;
    padding: 1rem 2rem 1rem 2rem;
    box-shadow: 0px -14px 12px -10px rgba(0, 0, 0, 0.1);

    @media (max-width: 41.25rem) {
      & {
        width: 100%;
        padding: 1rem;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;

    .button-container {
      display: flex;
      flex-direction: row;
    }
    .button {
      padding: 0.875rem 1.25rem;

      &.cancel-button {
        background-color: white;
        border: 0.0625rem solid ${({ theme }) => theme.colors.darkBorder};

        :active,
        :focus {
          border-color: ${({ theme }) => theme.colors.primary};
        }

        .label {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }

  @media (max-width: 41.25rem) {
    .footer {
      display: flex;
      flex-direction: column;
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
    }
  }
`
