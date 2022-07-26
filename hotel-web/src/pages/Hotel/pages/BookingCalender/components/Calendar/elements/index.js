import styled from "styled-components"

const CalendarContainer = styled.div`
  height: 43.75rem;

  .rbc-toolbar {
    margin: 0;
    padding: 1rem 1.25rem 1.125rem 1.25rem;
  }

  .rbc-btn-group {
    align-items: center;
    display: flex;

    .calendar-month {
      color: #0c181f;
      font-size: 1.125rem;
      line-height: 1.75rem;
      width: 9.25rem;
    }

    &:first-child button {
      align-items: center;
      border-color: #dedede;
      border-radius: 0.125rem;
      display: flex;
      height: 1.75rem;
      justify-content: center;
      margin-right: 0.5rem;
      padding: 0;
      width: 1.75rem;

      &:first-of-type {
        display: none;
      }

      &:last-child img {
        transform: rotate(180deg);
      }

      :hover {
        background-color: transparent;
      }

      :focus {
        background-color: transparent;
      }

      :active {
        background-color: transparent;
        box-shadow: none;
      }

      .calendar-icon {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
  }

  .rbc-btn-group:last-child {
    background-color: #efefef;
    border-radius: 0.125rem;
    overflow: hidden;
    padding: 0.25rem;

    button {
      border: none;
      border-radius: 0.125rem;
      color: #aaa;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 0.875rem;
      padding: 0.375rem 0.75rem;
      transition: all 0.2s;

      &.rbc-active {
        background-color: white;
        box-shadow: none;
        color: ${({ theme }) => theme.colors.text};

        :hover {
          background-color: white;
        }

        :focus {
          background-color: white;
        }

        :active {
          box-shadow: none;
          color: ${({ theme }) => theme.colors.text};
        }
      }

      :hover {
        background-color: transparent;
      }

      :focus {
        background-color: transparent;
      }

      :active {
        box-shadow: none;
        color: #aaa;
      }
    }
  }

  .rbc-date-cell {
    padding: 0.625rem;
    text-align: left;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
    }

    &:first-of-type a,
    &:last-of-type a {
      color: #ff677a;
    }

    &.rbc-off-range a {
      color: #aaa;
    }

    &.rbc-now {
      padding: 0.5rem;

      a {
        align-items: center;
        background: linear-gradient(155deg, #419fff 9%, #0779ff 100%);
        border-radius: 50%;
        color: white;
        display: flex;
        font-size: 0.875rem;
        font-weight: 600;
        height: 2rem;
        justify-content: center;
        line-height: 1.375rem;
        width: 2rem;
      }
    }
  }

  .rbc-show-more {
    color: #6d7579;
    font-size: 0.75rem;
    font-weight: normal;
    line-height: 0.875rem;
    padding: 0 0.625rem;
  }

  .rbc-header {
    background-color: #f5f5f5;
    border-color: #e5e5e5;
    padding: 0.4375rem 0.6875rem;
    text-align: left;

    span {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.5rem;
    }

    &:first-of-type span,
    &:last-of-type span {
      color: #ff677a;
    }
  }

  .rbc-day-bg {
    background-color: white;
    border-color: #e5e5e5;
  }

  .rbc-month-view,
  .rbc-month-row {
    border-bottom: none;
    border-color: #e5e5e5;
    border-left: none;
    border-right: none;
  }

  .rbc-month-row {
    overflow: visible;
  }
`

export { CalendarContainer }
