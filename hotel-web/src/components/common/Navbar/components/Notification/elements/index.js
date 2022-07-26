import { motion } from "framer-motion"
import styled from "styled-components"

export const NotificationContainer = styled(motion.div)`
  /* overflow: hidden; */
  right: 0;
  top: calc(100% + 1.5rem);
  .arrow-up {
    right: 14%;
    top: -0.699rem;
    width: 1.5rem;
    height: 1.5rem;
    background: #ffffff;
    transform: rotate(45deg);
    border: 0.0625rem solid ${({ theme }) => theme.colors.border};
    border-bottom-color: white;
    border-right-color: white;
    position: absolute;
  }
  @media (max-width: 35.6875rem) {
    .arrow-up {
      right: 16% !important;
    }
  }
  @media (max-width: 25rem) {
    .arrow-up {
      right: 20% !important;
    }
  }
`

export const NotificationListContainer = styled.div`
  background-color: #ffffff;
  /* min-width: 23.1875rem; */
  min-width: 28.875rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);

  /* @media (max-width: 25rem) {
    & {
      min-width: 18rem;
    }
  }
  @media (max-width: 20rem) {
    & {
      min-width: 16rem;
    }
  } */
  @media (max-width: 35.6875rem) {
    & {
      min-width: 25rem;
    }
  }
  @media (max-width: 25rem) {
    & {
      min-width: 18rem;
    }
  }

  @media (max-width: 27.75rem) {
    & {
      min-width: 25rem;
    }
  }
  @media (max-width: 26.25rem) {
    & {
      min-width: 23rem;
    }
  }
  @media (max-width: 25rem) {
    & {
      min-width: 20rem;
    }
  }
  .circle {
    border: 0.125rem solid white;
    border-radius: 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    height: 2.5rem;
    width: 2.5rem;
    text-transform: uppercase;
  }

  .profile-creator {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  .notification-container {
    .notification-header {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      .header-title {
        font-weight: 600;
        font-size: 1.125rem;
        color: #0c181f;
      }
      .count {
        font-weight: 500;
        border-radius: 50%;
        font-size: 0.75rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        background: #5ba1f2;
        padding: 0.25rem 0.5rem;
        color: #ffffff;
        margin-left: 0.125rem;
      }
      .mark-read-button {
        display: flex;
        align-items: center;
        outline: none;
        background: transparent;
        border: none;
        padding: 0 0.5rem;
        border-radius: 0.4rem;
        .mark-image {
          width: 1.25rem;
          height: 0.8rem;
          margin-right: 0.4rem;
        }

        .mark-read-text {
          font-weight: 500;
          font-size: 1rem;
          color: #5ba1f2;
        }
        :hover {
          background: #f4f9ff;
          color: #5ba1f2;
        }
      }
    }
    .unseen {
      &.unseen-dot {
        background: #40a1ff;
        background: #40a1ff;
        margin-right: 2rem;
        width: 0.375rem;
        height: 0.375em;
        position: absolute;
        border-radius: 50%;
      }
    }
    .divider {
      border-top: 0.0625rem solid ${({ theme }) => theme.colors.border};
    }
    .notification-content {
      width: 100%;
      padding: 0 1rem;
      .notication-messages {
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
        .profile-icon {
          width: 3rem;
          height: 3rem;
        }
        .message-details {
          width: 100%;
          margin-left: 0.75rem;
          text-align: left;
          .message {
            width: 100%;
            font-weight: 400;
            font-size: 0.875rem;
            /* color: #0c181f; */
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            .message-title {
              font-weight: 600;
              font-size: 0.875rem;
              color: #0c181f;
            }
          }
          .received-details {
            display: flex;
            font-weight: 400;
            font-size: 0.75rem;
            color: #9ea3a5;
            margin-top: 0.25rem;
            .time {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
    .view-all {
      border-top: 0.0625rem solid #e5e5e5;
      display: flex;
      justify-content: center;
      padding: 0.875rem;

      .view-all-notification {
        background-color: transparent;
        border: none;
        font-size: 0.875rem;
        font-weight: 500;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};

        :focus,
        :active {
          outline: none;
        }
      }
    }
  }
`

export const NotificationEmptyContainer = styled.div`
  background-color: #ffffff;
  min-width: 28.875rem;
  min-height: 29.5625rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);
  @media (max-width: 35.6875rem) {
    & {
      min-width: 25rem;
    }
  }
  @media (max-width: 25rem) {
    & {
      min-width: 18rem;
    }
  }

  @media (max-width: 27.75rem) {
    & {
      min-width: 25rem;
    }
  }
  @media (max-width: 26.25rem) {
    & {
      min-width: 23rem;
    }
  }
  @media (max-width: 25rem) {
    & {
      min-width: 20rem;
    }
  }

  .notification-empty-container {
    padding: 1rem;
    .notification-header {
      padding-bottom: 1rem;
      .header-title {
        font-weight: 600;
        font-size: 1.25rem;
        color: #0c181f;
      }
    }
  }
  .divider {
    border-top: 0.0625rem solid #e6e7e8;
    padding-bottom: 1rem;
  }
  .empty-title {
    font-weight: 500;
    font-size: 1.25rem;
    color: #0c181f;
  }
  .empty-description {
    font-weight: 400;
    font-size: 1rem;
    color: #6d7579;
    width: 70%;
    text-align: center;
  }
  .empty-notification {
    padding: 8.875rem 0 10.75rem 0;
  }
`
