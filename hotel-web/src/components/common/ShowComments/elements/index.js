import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const ShowCommentsCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: calc(100% - 1.875rem);
  position: absolute;
  left: 0.9375rem;
  top: 0;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 7px #e1e5ee;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.is-user {
    background-color: #3aafa9;
  }
  background-color: #17252a;
  cursor: pointer;
  transition: transform 200ms ease-in;

  :hover {
    transform: scale(1.02);
  }

  :not(:last-child) {
    padding-right: 0.5rem;
  }
  .comments-content-top {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    padding: 0.75rem 0.75rem 0.75rem 0.75rem;
    height: 100%;
  }
  .comments-detail-top {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    height: 100%;
    .profile-name {
      max-width: 100%;
      font-weight: 500;
      font-size: 1rem;
      /* white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis; */
      color: #1d1d1d;
    }
    .comments-div {
      width: 100%;
      height: 90%;
    }
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
        width: 100% !important;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        height: 100%;
        align-items: center;
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
          align-items: center;
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
    width: 100%;
    height: 90%;
  }
  .comments {
    height: 100%;
    overflow-y: hidden;
    padding-top: 0.5rem;
    width: 100%;
    p {
      color: #17252a;
      font-size: 0.8rem;
      font-weight: 500;
      line-height: 1.71;
      margin: -0.125rem 0 0 0;
      overflow-wrap: anywhere !important;
      max-height: 90%;
      overflow-y: auto;

      button {
        background-color: transparent;
        border: none;
        color: #2b7a78;
        font-size: 0.85rem;
        font-weight: 700;
        line-height: 1.71;

        :focus,
        :active {
          outline: none;
        }
      }
    }
  }
  .time {
    font-weight: 400;
    font-size: 0.75rem;
    color: #9ea3a5;
  }
  .circle {
    border: 0.125rem solid white;
    border-radius: 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    height: 2.5rem;
    width: 2.5rem;
    text-transform: uppercase;
    color: #3aafa9;
    background: #17252a;
  }
  .card-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    .delete-comment {
      padding-left: 1rem;
      button {
        outline: none;
        border: unset;
        background: transparent;
        img {
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }
  }
`

export const FileContainer = styled.button`
  outline: none;

  border: unset;
  margin-right: 0.5rem;
  position: relative;
  background: white;
  box-sizing: border-box;
  border-radius: 0.4375rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : "8.75rem"};
`
