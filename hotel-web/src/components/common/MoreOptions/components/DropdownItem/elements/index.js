import styled from "styled-components"

export const DropdownItemContainer = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.3125rem;
  padding: 0.5rem;
  text-align: left;
  transition: background-color 0.1s;
  white-space: nowrap;
  display: flex;
  align-items: center;

  :hover {
    background-color: ${({ theme }) => theme.colors.lighterPrimary};
  }

  :active,
  :focus {
    outline: none;
  }

  &.is-danger {
    color: ${({ theme }) => theme.colors.darkDanger};

    :hover {
      background-color: ${({ theme }) => theme.colors.lighterDanger};
    }
  }
  &.is-disabled {
    opacity: 0.8 !important;
    cursor: not-allowed !important;
    justify-content: space-between;
  }
  .invited {
    display: flex;
    align-items: center;
  }
`
