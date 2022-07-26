/* eslint-disable import/prefer-default-export */
import styled from "styled-components"

export const Dropdown = styled.div`
  position: absolute;
  right: ${(props) => props.right};
  top: ${(props) => (props.top ? props.top : "auto")};
  min-width: ${(props) => (props.width ? props.width : "10rem")};
  z-index: 2;
  background: #fff;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 8px;

  .dropdown-item-seperator {
    background-color: #dedede;
    height: 1px;
    width: 100%;
  }

  .btn {
    border-radius: 4px;
    font-size: 0.875rem;

    :active,
    :hover {
      background-color: #f7f7f7;
    }

    &.button-is-danger {
      color: #eb5757;
      &.without-seperator {
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 8px 12px;
    .btn {
      font-size: 14px;
    }
  }

  li:hover {
    background-color: rgba(64, 161, 255, 0.1);
    cursor: pointer;
  }
  .form-control,
  .form-control:focus {
    height: 40px;
    border: 1px solid #e6e6e6;
  }
`
