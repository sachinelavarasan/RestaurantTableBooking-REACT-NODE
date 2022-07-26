import styled from "styled-components"

export const CommentModalContainer = styled.div`
  ${({ width }) => (width ? `width: ${width};` : "")}

  @media (max-width:${({ width }) => width || ""}) {
    width: 100%;
  }
  padding: 1.5rem 1.5rem 0 1.5rem;
  .header {
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
    .show-more-header {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    .show-more-header-right {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
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
      padding: 0rem 1.25rem 0.5rem 1.25rem;

      &.cancel-button {
        background-color: white;
        border: unset;
        width: 3.125rem;
        .label {
          color: red;
          text-decoration: underline;
        }
      }
    }
  }

  .feed-back {
    margin: 1.5rem 1.5rem 0 1.5rem;
  }

  .creator-profile {
    display: flex;
    justify-content: space-between;
    width: 12%;
  }
  .circle {
    border: 0.125rem solid white;
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 600;
    height: 3rem;
    width: 3rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  .comments {
    overflow-wrap: anywhere;
    overflow-y: auto;
    max-height: 10rem;
    padding: 0.5rem;
    margin-top: 0.75rem;
    font-size: 1rem;
  }
  .time {
    font-weight: 400;
    font-size: 0.875rem;
    color: #9ea3a5;
  }
`
