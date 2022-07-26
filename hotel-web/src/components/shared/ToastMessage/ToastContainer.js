import styled from "styled-components"

import { Color } from "../../../constants"

const ToastContainer = styled.div`
  background-color: ${({ isDanger, isSuccess }) => {
    if (isDanger) {
      return Color.DANGER
    }

    if (isSuccess) {
      return Color.SUCCESS
    }

    return Color.SUCCESS
  }} !important;

  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  padding: 8px 16px 8px 8px;
  position: fixed;
  height: 48px;
  left: 48px;
  bottom: 48px;
  border-radius: 5px;
  @media (max-width: 414px) {
    margin: 0px -35px -30px -33px;
    position: fixed;
    & {
      max-width: 414px;
      width: 93%;
      height: auto;
    }
    .text-div {
      display: flex;
      flex-direction: row;
      padding: 8px;
      /* line-height: 20px; */
    }
    .closeButton {
      display: flex;
      flex-direction: row;
    }
  }

  .text-div {
    margin: 0px 20px 0px 0px;
  }
  .customIconButton {
    margin-right: 14px;
  }
  .closeButton {
    background: unset;
    border: none;
    border-left: 0.5px solid rgba(255, 255, 255, 0.4);
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    position: static;
    color: #ffffff;
    padding: 0px 0px 0px 20px;
    span {
      margin-left: 8px;
    }
  }
`

export default ToastContainer
