import styled from "styled-components"
/* eslint-disable import/prefer-default-export */

// import {Color} from '../../../../constants';

export const SideDrawerContainer = styled.nav`
  .sidepanel {
    width: 100vw;
    position: fixed;
    z-index: 1;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    transition: all 0.4s;
    transform: translateX(-100%);
  }
  .openDrawer {
    transform: translateX(0);
  }
  .drawerClose {
    padding: 32px 0 64px 28px;
  }
  .organisation-dropdown-item {
    align-items: center;
    border: none;
    background-color: transparent;
    display: flex;
    font-size: 20px;
  }
  .sidepanel li {
    padding: 0px 8px 0px 32px;
    margin-bottom: 37px;
    text-decoration: none;
    font-size: 24px;
    color: #a5a5a5;
    display: block;
    transition: 0.3s;
  }

  .sidepanel li:hover {
    color: #f1f1f1;
  }

  .sidepanel .closebtn {
    position: absolute;
    top: 0;
    left: 0px;
    font-size: 36px;
  }
  a {
    text-decoration: none;
  }
  .nav-link {
    position: relative;
  }
  .activeLink {
    border-bottom-width: 0 !important;
    border-radius: 0;
  }

  .dropdown-container {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding-left: 16px;
    padding-top: 0px;
    a {
      text-decoration: none;
    }
    li {
      margin: unset;
      padding: 24px 0 0px 0px;
    }
  }

  .activebtn {
    position: relative;
    outline: none;
    background: unset;
    border: none;
    border-bottom: 2px solid transparent;
  }
  .dropdown-content {
    display: none;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  /* Links inside the dropdown */
`
