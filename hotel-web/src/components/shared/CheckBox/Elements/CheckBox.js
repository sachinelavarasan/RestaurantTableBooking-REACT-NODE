/* eslint-disable import/prefer-default-export */
import styled from "styled-components"

const CheckBox = styled.div`
  .round {
    position: relative;
  }

  .round label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    left: 0;
    position: absolute;
    top: 0;
    width: 20px;
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 4px;
    opacity: 0;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 11px;
  }

  .round input[type="checkbox"] {
    visibility: hidden;
  }

  .round input[type="checkbox"]:checked + label {
    background-color: #00abff;
    border-color: #00abff;
  }

  .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`

export default CheckBox
