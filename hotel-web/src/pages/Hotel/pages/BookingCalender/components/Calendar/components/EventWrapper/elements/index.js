import styled, { css } from "styled-components"

const EventWrapperContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;

  ${({ isPopup }) =>
    isPopup
      ? css`
          margin-top: 0.5rem;
          padding: 0.5rem;
          transition: background-color 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.lighterPrimary};
            border-radius: 0.375rem;
          }
        `
      : css`
          margin-bottom: 0.4375rem;
          padding: 0 0.625rem;
          width: 70%;
        `}

  ${({ isSearchResult }) =>
    isSearchResult
      ? css`
          &::after {
            content: "";
            border: 0.0625rem solid #9ea3a5;
            border-radius: 0.25rem;
            position: absolute;

            ${({ isPopup }) =>
              isPopup
                ? css`
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                  `
                : css`
                    left: 0.25rem;
                    top: -0.125rem;
                    width: calc(140% - 0.5rem);
                    height: calc(100% + 0.25rem);
                  `}
          }
        `
      : ""}

  .event-bullet {
    background-color: ${({ color, theme }) => color || theme.colors.primaryAlt};
    border-radius: 50%;
    flex-shrink: 0;

    ${({ isPopup }) =>
      isPopup
        ? css`
            height: 0.625rem;
            margin-right: 0.5rem;
            width: 0.625rem;
          `
        : css`
            height: 0.375rem;
            margin-right: 0.3125rem;
            width: 0.375rem;
          `}
  }

  .event-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${({ isPopup }) =>
      isPopup
        ? css`
            color: ${({ theme }) => theme.colors.text};
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.375rem;
          `
        : css`
            color: ${({ color, theme }) => color || theme.colors.primaryAlt};
            font-size: 0.75rem;
            line-height: 0.875rem;
          `}
  }

  .event-tooltip {
    background-color: white;
    border: 0.0625rem solid #e6e7e8;
    border-radius: 0.25rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.12);
    cursor: default;
    display: flex;
    flex-direction: column;
    opacity: 0;
    padding: 1rem 1rem 0.75rem 1rem;
    position: absolute;
    transition: all 0.2s;
    visibility: hidden;
    width: 20.8125rem;
    z-index: 100;

    &::after {
      background-color: white;
      border: 0.0625rem solid #e6e7e8;
      box-sizing: border-box;
      content: "";
      display: block;
      height: 0.375rem;
      position: absolute;
      top: 50%;
      transform: rotate(45deg) translate(0, -50%);
      width: 0.375rem;
    }

    ${({ isTooltipLeft }) =>
      isTooltipLeft
        ? css`
            right: ${({ isPopup }) =>
              isPopup ? "calc(100% + 0.875rem)" : "100%"};

            &::after {
              border-bottom: none;
              border-left: none;
              right: -0.09375rem;
            }
          `
        : css`
            left: ${({ isPopup }) =>
              isPopup ? "calc(100% + 0.875rem)" : "100%"};

            &::after {
              border-right: none;
              border-top: none;
              left: -0.375rem;
            }
          `}

    & > * {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tooltip-time {
      align-items: center;
      display: flex;
      margin-bottom: 0.5rem;

      div {
        background-color: ${({ color, theme }) =>
          color || theme.colors.primaryAlt};
        border-radius: 50%;
        height: 0.625rem;
        margin-right: 0.375rem;
        width: 0.625rem;
      }

      span {
        color: #6d7579;
        font-size: 0.75rem;
        line-height: 0.875rem;
        font-weight: bold;
      }
    }

    .tooltip-title {
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1rem;
      margin-bottom: 0.375rem;
    }
    .finished {
      padding: 0.5rem 0.5rem;
      border-radius: 0.1875rem;
      background: #ffe1e1;
      color: #ff6969;
      font-weight: 500;
      margin-left: 0.5rem;
      border-radius: 0.2rem;
    }
    .not-finished {
      padding: 0.5rem 0.5rem;
      border-radius: 0.1875rem;
      background: #edfaf1;
      color: #4ec977;
      font-weight: 500;
      margin-left: 0.5rem;
      border-radius: 0.2rem;
    }

    .tooltip-teacher {
      color: #6d7579;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.125rem;
      margin-bottom: 0.125rem;
    }

    .tooltip-class {
      color: #6d7579;
      font-size: 0.75rem;
      line-height: 1.125rem;
    }

    .tooltip-button {
      align-items: center;
      border: 0.0625rem solid #95c6ff;
      border-radius: 0.125rem;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
      display: flex;
      height: 1.75rem;
      justify-content: center;
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 1.75rem;

      img {
        height: 1.25rem;
        object-fit: contain;
        width: 1.25rem;
      }
    }
  }

  .tooltip-link {
    display: flex;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    text-decoration: none;

    img {
      width: 1rem;
      height: 1rem;
      object-fit: contain;
      margin-right: 0.375rem;
    }

    span {
      color: #1973da;
      font-size: 0.75rem;
      line-height: 0.875rem;
    }
  }

  &:hover .event-tooltip {
    opacity: 1;
    visibility: visible;
  }

  .attendance-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 1.25rem;
      height: 1.25rem;
      object-fit: contain;
    }
  }
`

export { EventWrapperContainer }
