import styled, { css } from "styled-components"

export const InputElementContainer = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: border-color 0.1s, box-shadow 0.1s;
  padding: 0.15rem 0.5rem;
  .open-datepicker {
    background-color: transparent;
    outline: none;
    border: none;
    img {
      vertical-align: middle;
    }
  }
  &.has-error {
    border-color: ${({ theme }) => theme.colors.danger} !important;

    &.is-focused {
      box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightDanger};
    }
  }

  &.is-focused {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightPrimary};
  }
`
export const DateInputContainer = styled.div`
  .error-message {
    bottom: -0.2rem;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 0.75rem;
    left: 0;
    line-height: 0.9075rem;
  }
  ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth};
        `
      : ""};
  ${({ minWidth }) =>
    minWidth
      ? css`
          min-width: ${minWidth};
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
    line-height: 1.05875rem;
  }
`

export const DatePickerContainer = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__triangle {
    border: none;
    ::before {
      border: none;
    }
  }

  .react-datepicker {
    margin-left: 1.62rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }
  .react-datepicker__navigation {
    border: solid black;
    border-width: 0 0.125rem 0.125rem 0;
    display: inline-block;
    padding: 0.0625rem;

    .react-datepicker__navigation--next {
      top: 0.937rem;
      right: 1.25rem;
      transform: rotate(-45deg) !important;
      -webkit-transform: rotate(-45deg);
    }
    .react-datepicker__navigation--previous {
      top: 0.937rem;
      left: 1.25rem;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 0.944rem;
    margin-bottom: 1.5rem;
  }

  .react-datepicker__month-container {
    .react-datepicker__header {
      background: unset;
      border-bottom: unset;
      .react-datepicker__day-names {
        .react-datepicker__day-name {
          color: #b8bac7;
          font-size: 0.75rem;
          font-weight: 400;
        }
      }
    }

    .react-datepicker__day--outside-month {
      color: #b8bac7 !important;
      font-size: 0.75rem !important;
    }
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 0.75rem;
      line-height: 0.937rem;
      text-align: center;
      color: #3d4457;
      display: inline-block;
      width: 2.233rem;
      line-height: 1.7rem;
      text-align: center;
      margin: 0.166rem;
      font-weight: 400;
    }
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected {
      background: unset;
    }
  }

  .react-datepicker__day--today {
    font-weight: 800 !important;
  }
  .react-datepicker__day--selected,
  .react-datepicker__year-text--in-range {
    background: #f0f0f0;
    font-weight: 900 !important;
  }

  .date-picker {
    border-radius: 0.5rem;
    color: #3d4457;
  }
  .date-picker::placeholder {
    color: #d5d5d5;
    font-size: 0.875rem;
  }
`
