import styled from "styled-components"
import { Color } from "../../../constants"

const CustomAdminTableContainer = styled.table`
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
        padding-bottom: 24px;
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
      padding: 20px 0;
    }
  }
`

export default CustomAdminTableContainer
