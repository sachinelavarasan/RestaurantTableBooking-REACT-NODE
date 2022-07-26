import styled from "styled-components"

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  padding: 0.6875rem 1.25rem;
  transition: background-color 0.1s, border-color 0.1s, box-shadow 0.1s;
  opacity: ${(props) => (props.isDisabled ? 0.6 : 1)} !important;
  cursor: ${(props) =>
    props.isDisabled ? "not-allowed" : "pointer"} !important;
  &.is-cancel {
    background-color: unset;
    border: 0.0625rem solid rgb(222, 222, 222);
    span {
      color: rgb(61, 68, 87) !important;
    }
    :hover,
    :active {
      background-color: unset;
      opacity: 1;
      outline: none;
      box-shadow: none;
      border: 0.0625rem solid rgb(222, 222, 222);
    }
  }
  :hover {
    background-color: #54abff;
    border-color: #54abff;
  }

  :active {
    background-color: #3c97f0;
    border-color: #3c97f0;
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightPrimary};
    outline: none;
  }

  :focus {
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightPrimary};
    outline: none;
  }

  .icon {
    height: 1.25rem;
    width: 1.25rem;
  }

  .spinner {
    animation: spin 1s linear infinite;
    height: 0.875rem;
    width: 0.875rem;

    &.is-large {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  .label {
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 0.875rem;

    &.is-large {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5rem;
    }
  }
`
