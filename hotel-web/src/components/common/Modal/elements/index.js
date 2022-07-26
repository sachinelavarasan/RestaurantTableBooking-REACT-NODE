import styled from "styled-components"

export const ModalContainer = styled.div`
  ${({ width }) => (width ? `width: ${width};` : "")}

  @media (max-width:${({ width }) => width || ""}) {
    width: 100%;
  }

  .header {
    .details {
      .trash-icon {
        height: 3.6875rem;
        width: 3.6875rem;
      }

      .title {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        color: ${({ theme }) => theme.colors.text};
        display: -webkit-box !important;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.8125rem;
        overflow: hidden;
        overflow-wrap: anywhere;
        text-overflow: ellipsis;
        white-space: normal;
      }

      .description {
        color: ${({ theme }) => theme.colors.lightText};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
      }
    }

    .close-modal-button {
      background-color: transparent;
      border: none;
      height: 1.5rem;
      width: 1.5rem;

      :active,
      :focus {
        outline: none;
      }

      .close-modal-icon {
        height: 100%;
        width: 100%;
      }
    }
  }

  .footer {
    border-top: 0.0625rem solid ${({ theme }) => theme.colors.border};

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

      &.is-delete {
        background-color: ${({ theme }) => theme.colors.darkDanger};
        border-color: ${({ theme }) => theme.colors.darkDanger};

        :hover {
          background-color: ${({ theme }) => theme.colors.dangerButtonHover};
          border-color: ${({ theme }) => theme.colors.dangerButtonHover};
        }

        :active {
          background-color: ${({ theme }) => theme.colors.dangerButtonActive};
          border-color: ${({ theme }) => theme.colors.dangerButtonActive};
        }

        :active,
        :focus {
          box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightDanger};
        }
      }
    }
  }
`
