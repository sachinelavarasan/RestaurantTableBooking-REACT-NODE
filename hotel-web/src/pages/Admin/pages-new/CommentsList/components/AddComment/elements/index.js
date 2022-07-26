import styled from "styled-components"

export const CommentModalContainer = styled.div`
  ${({ width }) => (width ? `width: ${width};` : "")}

  @media (max-width:${({ width }) => width || ""}) {
    width: 100%;
  }

  .header {
    padding: 1.5rem 1.5rem 0 1.5rem;
    .details {
      .trash-icon {
        height: 3.6875rem;
        width: 3.6875rem;
      }

      .title {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        color: #091018;
        display: -webkit-box !important;
        font-size: 1.25rem;
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
    .button {
      padding: 0.875rem 1.25rem;

      &.cancel-button {
        background-color: white;
        border: unset;
        width: 3.125rem;
        .label {
          color: #40a1ff;
          text-decoration: underline;
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

  .summary {
    //opcatity with hex code last two digit
    background-color: #deecfc7f;
    padding: 1rem;

    margin: 0 1.5rem;
    border-radius: 0.5rem;
    p {
      margin-bottom: unset;
      font-weight: 400;
      font-size: 1rem;
      color: #6d7579;
    }
  }

  .get-details {
    margin: 1.5rem 1.5rem 0 1.5rem;
    p {
      font-weight: 500;
      font-size: 1rem;
      color: #091018;
      margin-bottom: unset;
    }
    .field-middle {
      width: 47%;
    }
  }
  .Subtitle {
    margin: 0 1.5rem;
    border-radius: 0.5rem;
    p {
      margin-bottom: unset;
      font-weight: 400;
      font-size: 1rem;
      color: #838383;
    }
  }
  .feed-back {
    margin: 1.5rem 1.5rem 0 1.5rem;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .counts {
    color: #5ba1f2;
    font-weight: 500;
    font-size: 1rem;
  }
`
