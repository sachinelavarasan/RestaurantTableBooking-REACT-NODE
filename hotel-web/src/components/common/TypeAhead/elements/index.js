import styled, { css } from "styled-components"

export const TypeAheadContainer = styled.div`
  .error-message {
    bottom: -0.2rem;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 0.75rem;
    left: 0;
    line-height: 0.9075rem;
  }
  .is-truncated {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .rbt-menu {
    z-index: 10000;
    max-height: 15.4rem !important;
  }
  ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth};
        `
      : ""};
  ${({ width }) =>
    width
      ? css`
          width: ${width} !important;
        `
      : ""};

  .label {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
    line-height: 1.05875rem;
  }

  .select-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .selected-value {
    color: ${({ theme }) => theme.colors.text};
  }

  .dropdown-indicator-icon {
    height: 1.25rem;
    width: 1.25rem;
  }

  .option-content {
    color: ${({ theme }) => theme.colors.text};
  }

  .blue-tick-icon {
    height: 1rem;
    width: 1rem;
  }
  .rbt input {
    height: 45.5px;
    border-radius: 0.5rem;
    border: 0.0625rem solid #c9c9c9;

    :active,
    :focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightPrimary};
      outline: none;
      transition: border-color 0.1s, box-shadow 0.1s;
    }

    ::placeholder {
      font-size: 14px;
      line-height: 18px;

      color: #c0c0c0;
    }
  }

  .rbt-menu {
    margin-top: 0.5rem;
    /* top: 100%; */
    background-color: hsl(0, 0%, 100%);
    border-radius: 0.5rem;

    border: 0.0625rem solid #c9c9c9;
  }
  .dropdown-item {
    padding: 0.6125rem 20px;
    width: 97%;
    display: flex;
    margin-left: 0.5rem;
    font-size: 0.875rem;

    :active,
    :focus {
      background-color: ${({ theme }) => theme.colors.lighterPrimary};
      color: ${({ theme }) => theme.colors.text};
      box-sizing: border-box;
      border-radius: 0.25rem;
      transition: background-color 0.1s;
      font-weight: 500;
    }
  }
`
