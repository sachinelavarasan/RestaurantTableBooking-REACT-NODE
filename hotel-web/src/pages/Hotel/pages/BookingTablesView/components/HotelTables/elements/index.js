import styled from "styled-components"

import { AdminListingPageContainer } from "../../../../../../Admin/elements-new"

export const BookingContainer = styled(AdminListingPageContainer)`
  background-color: #3aafa9;
  @media (max-width: 75rem) {
    .icon {
      transform: rotate(90deg);
    }
    .dropdowncontainer {
      right: -4rem;
    }
  }
  .serial {
    width: 5%;
  }

  .event-name {
    width: 20%;
  }
  .table-name {
    width: 13%;
  }

  .seat-count {
    width: 17%;
  }
  .user {
    width: 18%;
  }

  .table-creation {
    width: 12%;
  }
  .booking-status {
    width: 10%;
  }

  .more-option {
    width: 5%;
  }
  .counts-present {
    padding: 0.25rem 0.65rem;
    border-radius: 0.1875rem;
    background: #fca311;
    color: white;
    font-weight: 500;
    font-size: 0.875rem;
  }
  .finished {
    padding: 0.25rem 0.5rem;
    border-radius: 0.1875rem;
    background: #ffe1e1;
    color: #ff6969;
    font-weight: 500;
  }
  .not-finished {
    padding: 0.25rem 0.5rem;
    border-radius: 0.1875rem;
    background: #edfaf1;
    color: #4ec977;
    font-weight: 500;
  }

  table {
    tr {
      :hover {
        background-color: unset;
      }
    }
  }
`
