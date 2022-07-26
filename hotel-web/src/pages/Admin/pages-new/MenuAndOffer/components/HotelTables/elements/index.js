import styled from "styled-components"

export const AllMenuContainer = styled.div`
  background-color: #17252a;
  min-height: 100%;
  margin: 0 -0.9375rem;
  padding: 7.0625rem 4rem 2.0625rem 4rem;
  .title {
    color: white;
  }
  @media (max-width: 55.5rem) {
    & {
      padding: 7.0625rem 4rem 2.0625rem 4rem;
    }
  }
  @media (max-width: 37.5rem) {
    & {
      padding: 7.0625rem 1.5rem 2.0625rem 1.5rem;
    }
  }
  .table-container {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);
    padding: 1.5rem;

    table {
      margin: 1rem 0 1.5rem 0;
      width: 100%;
    }
  }
  @media (max-width: 75rem) {
    .icon {
      transform: rotate(90deg);
    }
    .dropdowncontainer {
      right: -4rem;
    }
  }
  .serial {
    width: 10%;
  }

  .table-name {
    width: 50%;
  }

  .seat-count {
    width: 40%;
  }

  table {
    tr {
      :hover {
        background-color: unset;
      }
      td {
        :last-child {
          justify-content: space-between;
        }
      }
    }
  }
`
