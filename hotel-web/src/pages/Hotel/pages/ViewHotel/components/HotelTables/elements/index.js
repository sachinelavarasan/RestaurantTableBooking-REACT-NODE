import styled from "styled-components"

import { AdminListingPageContainer } from "../../../../../../Admin/elements-new"

export const HotelTablesContainer = styled(AdminListingPageContainer)`
  background-color: #3aafa9;
  .add-table {
    button {
      background-color: #e63946;
      border-color: #e63946;
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
    width: 25%;
  }

  .seat-count {
    width: 15%;
  }

  .booked-count {
    width: 15%;
  }

  .table-creation {
    width: 25%;
  }
  .table {
    width: 13%;
  }
  .total-hours {
    width: 13%;
  }

  .view {
    width: 11%;
  }
  .more-option {
    width: 10%;
  }
  .counts-present {
    padding: 0.25rem 0.75rem;
    border-radius: 0.1875rem;
    background: #edfaf1;
    color: #4ec977;
    font-weight: 700;
    margin-left: 1rem;
  }
  .booked-counts {
    padding: 0.25rem 0.75rem;
    border-radius: 0.1875rem;
    background: #f4b41a;
    color: black;
    font-weight: 700;
    margin-left: 1rem;
  }
  .view-class {
    border: none;
    background: transparent;
    outline: none;
    border-radius: 0.312rem;
    padding: 0.75rem 1rem;
    color: #40a1ff;
    font-weight: 500;
    font-size: 0.875rem;
    :hover {
      background-color: #f5faff;
    }
    a {
      text-decoration: none;
      color: #40a1ff;
    }
    .viewclass-arrow {
      margin-left: 0.75rem;
      vertical-align: middle;
    }
  }
  .total-count {
    padding-left: 2rem;
  }
  table {
    tr {
      :hover {
        background-color: unset;
      }
    }
  }
`
