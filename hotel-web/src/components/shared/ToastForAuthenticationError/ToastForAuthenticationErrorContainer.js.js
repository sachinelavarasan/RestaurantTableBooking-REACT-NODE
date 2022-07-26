import styled from "styled-components"

// import {Color} from '../../../constants';

const ToastForAuthenticationErrorContainer = styled.div`
  background-color: #eb5757;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  padding: 8px 16px 8px 8px;
  position: absolute;
  height: 48px;
  top: 0;
  width: 100%;
  border-radius: 0px;
  @media (max-width: 414px) {
    position: fixed;
    & {
      max-width: 414px;
      width: 100%;
      height: auto;
    }
    .text-div {
      display: flex;
      flex-direction: row;
      padding: 8px;
      font-family: Inter;
    }
    .closeButton {
      display: flex;
      flex-direction: row;
    }
  }

  .text-div {
    margin: 0px 20px 0px 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }
  .customIconButton {
    margin-right: 8px;
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

export default ToastForAuthenticationErrorContainer
