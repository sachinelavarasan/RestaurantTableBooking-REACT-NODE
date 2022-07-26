import styled from "styled-components"
import { Color } from "../../../constants"

const CustomTableWithoutHeaderContainer = styled.table`
  width: 100%;

  tbody tr {
    transition: background-color 0.1s;

    :hover {
      background-color: #f7f7f7;
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
    }

    td {
      color: ${Color.PRIMARY_TEXT};
      font-size: 0.875rem;
      font-weight: 400;
      padding: 16px 0;
      :first-child {
        padding: 16px 24px;
      }
    }
  }
`

export default CustomTableWithoutHeaderContainer
