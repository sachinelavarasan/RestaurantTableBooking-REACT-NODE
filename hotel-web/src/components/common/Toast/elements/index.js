import styled from "styled-components"

import { Color } from "../../../../constants"

const ToastContainer = styled.div`
  background-color: ${({ isDanger }) =>
    isDanger ? Color.DANGER : Color.SUCCESS};

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-family: "Inter";
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem 0.5rem 0.5rem;

  .text-div {
    margin: 0 1.25rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin-bottom: unset;
    }
  }
  .customIconButton {
    margin-right: 0.875rem;
  }
  .closeButton {
    background: unset;
    display: flex;
    border: none;
    border-left: 0.03rem solid rgba(255, 255, 255, 0.4);
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    position: static;
    color: #ffffff;
    padding: 0 0 0 1.25rem;
    span {
      margin-left: 0.5rem;
    }
  }
`

export default ToastContainer
