import styled from "styled-components"

export const CardContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 7px 5px #e1e5ee;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 200ms ease-in;

  :hover {
    transform: scale(1.02);
  }
  .circle {
    border: 0.125rem solid white;
    border-radius: 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    height: 2.5rem;
    width: 2.5rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  .comment-content {
    width: 100%;
    padding: 0 1rem;
    .comment-messages {
      display: flex;
      padding: 1rem 0;
      width: 100%;
      justify-content: space-between;
      outline: none;
      background: transparent;
      border: none;

      :not(:last-child) {
        border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
      }

      .comment-details {
        width: 100%;
        margin-left: 0.75rem;
        text-align: left;
        .comment-header {
          width: 100%;
          font-weight: 400;
          font-size: 0.875rem;
          /* color: #0c181f; */
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          overflow: hidden;
          .message-title {
            font-weight: 600;
            font-size: 0.875rem;
            color: #0c181f;
          }
        }
      }
    }
  }
  .received-details {
    display: flex;
    font-weight: 400;
    font-size: 0.75rem;
    color: #9ea3a5;
    margin-top: 0.25rem;
  }
  .time {
    font-weight: 400;
    font-size: 0.75rem;
    color: #9ea3a5;
  }
`
