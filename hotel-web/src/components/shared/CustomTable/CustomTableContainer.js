import styled from "styled-components"
import { Color } from "../../../constants"

const CustomTableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;

  tbody tr {
    transition: background-color 0.1s;

    :hover {
      background-color: rgba(222, 222, 222, 0.15);
    }
  }

  tr {
    :first-child {
      border-bottom: 1px solid #dedede;
      border-top: 1px solid #dedede;
    }

    :not(:last-child) {
      border-bottom: 1px solid #dedede;
    }

    :last-child {
      border-bottom: none;

      td {
        padding-bottom: 12px;
      }
    }

    th {
      color: ${Color.LIGHT_TEXT};
      font-size: 0.875rem;
      font-weight: 500;
      padding: 16px 0;
      text-transform: uppercase;
    }

    td {
      color: ${Color.PRIMARY_TEXT};
      font-size: 0.875rem;
      font-weight: 400;
      padding: 12px 0;
    }
  }
  @media (max-width: ${({ maxWidth }) => maxWidth}) {
    border: 0;
    thead {
      border: none;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      clip: rect(0 0 0 0);
      position: absolute;
      width: 1px;
    }

    tbody tr {
      display: block;

      :hover {
        background-color: transparent;
      }
    }
    td {
      color: ${Color.PRIMARY_TEXT};
      font-size: 0.875rem;
      font-weight: 400;
      border-bottom: 1px solid #efefef;
      display: block;
      text-align: right;
      padding: 16px 0;
    }
    td:before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      color: ${Color.LIGHT_TEXT};
      font-size: 0.875rem;
      font-weight: 500;
    }

    td:first-child::before {
      clear: both;
      margin-right: 4px;
    }

    td:last-child {
      border-bottom: 0;
    }
    td:first-child {
      background-color: #f4f5f8;
      border-bottom: 1px solid #c9c9c9;
      display: flex;
      justify-content: center;
    }
  }
`

export default CustomTableContainer
