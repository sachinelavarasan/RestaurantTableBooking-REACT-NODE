/* eslint-disable import/prefer-default-export */

import styled from "styled-components"
import rem from "../../../../utils/rem"

export const Styles = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  .text {
    color: #8a8c94;
    font-size: ${rem(14)};
    line-height: 1.5;
  }

  .select {
    background-color: transparent;
    border: ${rem(1)} solid #c9c9c9;
    border-radius: ${rem(8)};
    margin-right: ${rem(10)};

    h5 {
      color: #3d4457;
      font-size: ${rem(14)};
      font-weight: 500;
      line-height: 1;
      margin-right: ${rem(8)};
    }

    img {
      height: ${rem(20)};
      width: ${rem(20)};
    }

    .dropdown-items {
      max-height: ${rem(240)};
      overflow: auto;
    }
  }

  .previous-button,
  .next-button {
    align-items: center;
    background-color: transparent;
    border: ${rem(1)} solid #c9c9c9;
    display: flex;
    padding: ${rem(13)} ${rem(24)};

    &.is-disabled {
      opacity: 0.7;

      :active,
      :focus {
        border-color: #c9c9c9;
        box-shadow: none;
      }
    }

    :active,
    :focus {
      border-color: #40a1ff;
      box-shadow: 0 0 0 ${rem(2)} #cfe7ff;
      outline: none;
      z-index: 10;
    }

    img {
      vertical-align: unset;
    }

    span {
      color: #3d4457;
      font-size: ${rem(14)};
      font-weight: 500;
      line-height: 1;
    }
  }

  .previous-button {
    border-radius: ${rem(8)} 0 0 ${rem(8)};
    margin-right: ${rem(-1)};

    img {
      margin-right: ${rem(12)};
    }
  }

  .next-button {
    border-radius: 0 ${rem(8)} ${rem(8)} 0;

    img {
      margin-left: ${rem(12)};
      transform: rotate(180deg);
    }
  }

  .pagination {
    padding: 0.5rem;
  }
  @media (max-width: ${rem(750)}) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .pagination-button {
      margin-top: 15px;
      .previous-button,
      .select,
      .next-button {
        padding: ${rem(12)} ${rem(15)};
      }
    }
  }
`
