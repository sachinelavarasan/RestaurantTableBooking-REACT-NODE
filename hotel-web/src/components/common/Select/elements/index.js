import styled, { css } from "styled-components"

export const SelectContainer = styled.div`
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
    font-weight: 500;
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
`
