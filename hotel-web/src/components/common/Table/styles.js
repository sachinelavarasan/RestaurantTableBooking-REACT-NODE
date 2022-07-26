import styled from "styled-components"
import { Color } from "../../../constants"
import rem from "../../../utils/rem"

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  @media (max-width: ${({ maxWidth }) => maxWidth || "720px"}) {
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
      display: flex;
      justify-content: center;
    }
    td:first-child {
      background-color: #f4f5f8;
      border-bottom: 1px solid #c9c9c9;
      display: flex;
      justify-content: center;
    }
  }
`

export const TableBody = styled.tbody`
  tr {
    transition: background-color 0.1s;

    :hover {
      background-color: rgba(222, 222, 222, 0.2);
    }

    td {
      border-bottom: ${rem(1)} solid #e0e0e0;
      color: #3d4457;
      font-size: ${rem(14)};
      line-height: 1.5;
      overflow-wrap: anywhere;
      padding: ${rem(16)} 0;

      .td-options-button {
        background-color: transparent;
        border: none;
        height: ${rem(24)};
        width: ${rem(24)};

        .td-options-icon {
          height: 100%;
          vertical-align: unset;
          width: 100%;
        }
      }
    }
  }
`

export const TableCellButton = styled.button`
  color: #3d4457;
  background-color: transparent;
  border: none;
  font-size: ${rem(14)};
  font-weight: 500;
  line-height: 1;
  padding: ${rem(14)} ${rem(20)};
  :active,
  :focus {
    outline: none;
  }

  img {
    margin-right: ${rem(8)};
  }
`

export const TableCellLink = styled.button`
  background-color: transparent;
  border: none;
  color: #40a1ff;
  font-size: ${rem(14)};
  font-weight: 500;
  line-height: 1;
  padding: ${rem(14)} ${rem(20)};

  :active,
  :focus {
    outline: none;
  }

  img {
    height: 1.25rem;
    width: 1.25rem;
  }
`

export const TableHead = styled.thead`
  border-bottom: ${rem(1)} solid #c9c9c9;
  border-top: ${rem(1)} solid #c9c9c9;

  th {
    color: #aaa;
    font-size: ${rem(14)};
    font-weight: 500;
    line-height: ${rem(16)};
    padding: ${rem(16)} 0;
    text-transform: uppercase;
  }

  .sort-icon {
    height: 1rem;
    margin-left: 0.125rem;
    object-fit: contain;
    vertical-align: unset;
    width: 1rem;
  }
`
export const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .item-container {
    width: 30%;
    display: flex;
    flex-direction: row;

    .filter-tab {
      margin-right: 2.5rem;
    }
  }
  .filters {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 70%;
    .filter-container {
      display: flex;
      flex-direction: row;
      .filter {
        margin-right: ${rem(10)};
      }
    }
  }
  .button-container {
    margin-left: 1rem;
  }
  .item-count {
    color: #3d4457;
    font-size: ${rem(16)};
    font-weight: 500;
    line-height: 1.5;
  }
  @media (max-width: ${rem(1200)}) {
    .filters {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
      .filter-container {
        display: flex;
        flex-direction: column;
        .filter {
          margin-bottom: ${rem(10)};
        }
      }
    }
  }
  @media (max-width: ${({ maxWidth }) => maxWidth || "800px"}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .item-container {
      width: 100%;
      margin-bottom: 1rem;
    }
    .filters {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      .filter-container {
        display: flex;
        flex-direction: column;
      }
    }
    .button-container {
      margin-top: 1rem;
    }
    .item-count {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: ${rem(15)};
    }
  }
  @media (max-width: ${rem(700)}) {
    .item-container {
      width: 100%;
    }
    .filters {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      .filter-container {
        .filter {
          margin-right: unset;
        }
      }
    }
  }
`
