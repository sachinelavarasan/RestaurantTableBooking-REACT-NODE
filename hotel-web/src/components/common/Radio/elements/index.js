import styled from "styled-components"

export const RadioContainer = styled.button`
  background-color: transparent;
  border: none;

  :active,
  :focus {
    outline: none;

    .radio-button-container {
      border-color: ${({ theme }) => theme.colors.primary} !important;
      box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightPrimary} !important;
    }
  }

  .radio-button-container {
    border: 0.0625rem solid ${({ theme }) => theme.colors.border};
    border-radius: 0.625rem;
    cursor: pointer;
    height: 1.25rem;
    overflow: hidden;
    transition: border-color 0.1s, box-shadow 0.1s;
    width: 1.25rem;

    &.has-error {
      border-color: ${({ theme }) => theme.colors.danger};
    }

    &.is-chosen {
      border-color: ${({ theme }) => theme.colors.primary};

      .radio-button-active-indicator {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }

    .radio-button-active-indicator {
      background-color: transparent;
      border-radius: 50%;
      height: 100%;
      transition: background-color 0.1s;
    }
  }

  .label {
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
`
