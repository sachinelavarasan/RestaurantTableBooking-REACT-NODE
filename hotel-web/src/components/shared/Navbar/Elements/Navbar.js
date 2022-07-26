import styled from "styled-components"
/* eslint-disable import/prefer-default-export */

import { Color } from "../../../../constants"

export const Nav = styled.nav`
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0px 15px 10px -9px rgba(0, 0, 0, 0.1);
  height: 80px;
  background-color: #17252a;
  padding: 0 3.33% !important;
  transition: top 0.24s;

  @media (max-width: 50rem) {
    &.isStream {
      height: 157px;
      .dropdown-profile {
        top: 35% !important;
      }
      .btn {
        padding: unset;
      }
    }
  }
  .notification-button {
    width: 2.5rem;
    height: 2.5rem;
    display: flex !important;
    justify-content: center;
    align-items: center;

    &.active {
      background-color: #ecf6ff !important;
      border-radius: 8px;
    }
  }
  span {
    /* color: #afafaf; */
    color: #3aafa9;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
  }

  .ml-77 {
    margin-left: 77px;
  }
  .rightSideNavbar {
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
  }
  .text {
    color: #fff;
  }
  .logoAndClass {
    @media (max-width: 50rem) {
      & {
        display: flex !important;
        flex-direction: column;
      }
      .class-details-container {
        margin-top: 20px;
        margin-left: -20px;
        .class-deatils {
          width: 180px;
        }
      }
    }
    .class-details-container {
      .class-deatils {
        @media (max-width: 320px) {
          width: 85%;
        }
      }
    }
  }
  .wrapperForlogout {
    display: flex;
    flex-direction: row;
  }
  .rightSideNavbar {
    @media (max-width: 50rem) {
      & {
        display: flex !important;
        /* flex-direction: column-reverse; */
        align-items: flex-end;
        justify-content: flex-end;
      }
      .wrapperForlogout {
        display: flex;
        flex-direction: row;
      }
      .add-works-dropdown-container {
        margin-top: 20px;
      }
    }
    .add-works-dropdown-container {
      .add-work-btn {
        @media (max-width: 320px) {
          padding: 10px 10px;
        }
      }
    }
  }

  .class-details-container {
    position: relative;
  }
  .logo-class {
    margin-left: 5rem;
    @media (max-width: 600px) {
      & {
        margin-left: unset;
      }
    }
  }
  .logo-jc {
    display: flex;
    align-items: center;
    .product {
      display: none;
    }
    .orglogo {
      display: flex;
      align-items: center;
    }
    .productorg {
      max-width: 150px;
      max-height: 30px;
      object-fit: contain;
    }
    .productorg1 {
      width: 30px;
      height: 30px;
    }
    .logo-seperator {
      height: 35px;
      width: 1px;
      background-color: #e0e0e0;
      margin: 0px 20px;
    }
    .product1 {
      vertical-align: unset;
    }
    @media (max-width: 600px) {
      .product {
        display: block;
      }
      .orglogo {
        display: none;
      }
      .product1 {
        vertical-align: unset;
        display: none;
      }
    }
  }
  .btn1 {
    background-color: transparent;
    border: unset;
    outline: none;
    padding-left: 8px;
  }
  .btn2 {
    background-color: transparent;
    border: unset;
    outline: none;
  }
  .btn {
    padding-right: 0.5rem;
  }
  .admin-text {
    display: inline-block;
    border: 0.25px solid #40a1ff;
    background-color: #cfe7ff;
    letter-spacing: 0.01em;
    border-radius: 2px;
    padding: 2px 4px;
  }
  .admin-text p {
    margin: 0;
    text-align: center;
    color: #40a1ff;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
  }
  .class-deatils {
    border: 1px solid #dedede;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px !important;
    padding: 10px 14px 10px 10px;
    transition: border-color 0.1s, box-shadow 0.1s;

    &.is-open {
      border-color: ${Color.PRIMARY};
      box-shadow: 0 0 0 2px ${Color.LIGHT_BLUE};
    }

    .class-icon {
      height: 24px;
      width: 24px;
    }

    .class-dropdown-text .unit-name {
      color: ${Color.PRIMARY_TEXT};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.21;
      margin-bottom: 0 !important;
    }

    .unfold-icon {
      height: 5px;
      margin: 0 0 0 12px;
      width: 8px;
    }

    h6 {
      width: 94px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h6,
    p {
      text-align: left;
    }

    .acc-year {
      font-weight: 500;
      font-size: 12px;
      color: #9e9d9d;
    }
  }

  .classes-dropdown {
    background-color: #fff;
    border: 1px solid #dedede;
    border-radius: 5px;
    left: 20px;
    overflow: hidden;
    padding: 4px;
    position: absolute;
    top: calc(100% + 10px);
    width: 223px;

    .classes-dropdown-item {
      align-items: center;
      background-color: transparent;
      border: none;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      line-height: 1.21;
      padding: 12px;
      text-align: left;
      width: 100%;

      span {
        color: ${Color.PRIMARY_TEXT} !important;
        font-size: 0.875rem;
        font-weight: 400 !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: calc(100% - 24px);

        &.active-dropdown-item {
          font-weight: 500 !important;
        }
      }

      img {
        height: 16px;
        width: 16px;
      }
    }
  }

  img {
    cursor: pointer;
  }

  .cursor-pointer {
    height: 40px;
  }
  .admin-navitem a {
    margin: 0 32px -2px 32px !important;
  }

  .nav-item {
    display: flex;
    a {
      border-bottom: 2px solid transparent;
      margin: 0 20px -2px 20px;
      padding: 0 !important;

      span {
        margin-top: -2px;
      }
    }
    .activebtn {
      outline: none;
      background: unset;
      border: none;
      border-bottom: 2px solid transparent;
    }
  }
  .dropdown {
    position: absolute;
    top: 100%;
    right: 0.5rem;
    min-width: 10rem;
    z-index: 2;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      padding: 8px 12px;
    }

    li:hover {
      background-color: rgba(0, 0, 0, 0.14);
      cursor: pointer;
    }
  }
  button {
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  .activeLink {
    /* border-bottom-color: ${Color.PRIMARY} !important; */
    border-bottom-color: white !important;
    border-radius: 0;

    span {
      /* color: ${Color.PRIMARY}; */
      color: white;
      line-height: 26px;
      font-weight: 800;
    }
  }
  .assessment-heading {
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    color: #3d4457;
    margin-left: 22px;
  }

  .save-container {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;

    .saving-assessment {
      -webkit-animation: rotating 1s linear infinite;
      -moz-animation: rotating 1s linear infinite;
      -ms-animation: rotating 1s linear infinite;
      -o-animation: rotating 1s linear infinite;
      animation: rotating 1s linear infinite;
      height: 20px;
      width: 20px;

      &.is-hidden {
        opacity: 0;
        visibility: hidden;
      }
    }

    .saved-assessment {
      height: 20px;
      left: 0;
      position: absolute;
      top: 0;
      width: 20px;

      &.is-hidden {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  .save-seperator {
    background-color: #dedede;
    height: 18px;
    margin: 0 15px 0 16px;
    width: 1px;
  }

  .assessment-footer-text {
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #aaaaaa;
    padding-left: 10px;
  }
  .assessment-publish-btn {
    background: #40a1ff;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    padding: 8px 24px !important;
    color: #ffffff;

    &.assessment-publish-button-disabled {
      background-color: #80d5ff;
      cursor: not-allowed;
    }
  }

  .add-works-dropdown-container {
    position: relative;

    .add-works-button-text {
      color: #fff;
      margin-right: 4px;
    }

    .add-works-button-icon {
      height: 24px;
      width: 24px;
    }

    .add-works-dropdown {
      background-color: #fff;
      border: 1px solid #dedede;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      opacity: 0;
      padding: 8px;
      position: absolute;
      right: 0;
      top: calc(100% + 12px);
      transition: opacity 0.1s;
      visibility: hidden;

      &.is-open {
        opacity: 1;
        visibility: visible;
      }

      .add-works-dropdown-item {
        align-items: center;
        background-color: #fff;
        border: none;
        border-radius: 4px;
        display: flex;
        flex-shrink: 0;
        padding: 8px 27px 8px 8px;
        transition: background-color 0.1s;

        :not(:last-child) {
          margin-bottom: 8px;
        }

        :hover {
          background-color: rgba(64, 161, 255, 0.1);
        }

        :focus,
        :active {
          outline: none;
        }

        img {
          height: 24px;
          margin-right: 8px;
          width: 24px;
        }

        span {
          color: ${Color.PRIMARY_TEXT};
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.21;
        }
      }
    }
  }
  .nav-link {
    position: relative;
  }
  .orgdropdown {
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 3px;
    display: inline-block;
  }
  .dropdown-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    background-color: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    z-index: 2;
    width: 166px;
  }
  .dropdown-content li {
    color: #3d4457;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    text-decoration: none;
    display: block;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    .courses-dropdown-item {
      padding: 10px 10px;
      align-items: center;
      border: none;
      width: 100%;
      height: 100%;
      background-color: transparent;
      display: flex;
      .dropdown-text {
        color: #3d4457;
        line-height: 17px;
      }
    }
    .organisation-dropdown-item {
      padding: 10px 16px;
      align-items: center;
      border: none;
      width: 100%;
      height: 100%;
      background-color: transparent;
      display: flex;
      .dropdown-text {
        color: #3d4457;
        line-height: 17px;
      }
    }
    :hover {
      background-color: #f7f7f7;
    }
  }

  /* .profile-shift {
    border: 1px solid #40a1ff;
    border-radius: 8px;
    margin-right: 24px;
    @media (max-width: 500px) {
      border: none;
    }
    img {
      margin-right: 8px;
      vertical-align: middle;
    }
    .add-button-text {
      color: #40a1ff;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }
  } */
  .dropdown-profile {
    position: absolute;
    top: 100%;
    right: 0.5rem;
    min-width: 10rem;
    z-index: 2;
    margin-top: 10px;
    background: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
    border: 1px solid #e0e0e0;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        height: 100%;
      }
    }
    .list-1 {
      padding: 16px;
      background-color: #f3f3f3;
    }
    .list-2 {
      width: 100%;
      height: 100%;
      padding: 20px 16px 20px 20px;
      .go-to-teacher {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        /* .profile-teacher {
          padding: 20px;
        } */
        .go-to-button {
          margin-left: 8px;
          color: #3d4457;
          font-weight: 500;
          font-size: 14px;
        }
      }
      .arrow-teacher {
        margin-left: 36px;
      }
    }
    .list-3 {
      /* padding: 24px 0px 0px 0px; */
      .seperator {
        height: 1px;
        background-color: #e0e0e0;
      }
    }
    .list-4 {
      width: 100%;
      height: 100%;
      .logout-dropdown-item {
        display: flex;
        /* justify-content: space-between; */
        padding: 17px 24px 18px 18px;
        align-items: center;
        border: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        .logout-icon {
          margin-right: 11px;
        }
        .text-logout {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #3d4457;
        }
      }
    }
  }
  .list-profile {
    padding: 24px 24px;
  }
  .profile-btn {
    border-radius: 50%;
  }
  .cursor-pointer {
    border: 1px solid #a5a5a5;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  .profile-details {
    display: flex;
    flex-direction: row;
    .profile-img {
      margin: 0 8px 0 0;
      object-fit: contain;
    }
    .profile-1 {
      margin: unset;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #3d4457;
    }
    .profile-2 {
      margin: unset;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      color: #8a8c94;
      margin-top: 4px;
    }
  }
  @media (max-width: 500px) {
    .profile-shift {
      margin-right: 8px;
      img {
        margin-right: unset;
      }
      .add-button-text {
        display: none;
      }
    }
  }
  .add-notification {
    display: flex;
    align-items: center;
  }
  .notification-dropdown {
    margin-right: 1.5rem;
    margin-left: 1rem;
    &.isstream {
      margin-right: unset;
    }

    /* margin-right: 0.5rem; */
  }
  @media (max-width: 50rem) {
    .class-list {
      align-self: unset !important;
      margin-left: 5rem !important;
      margin-top: 0.8rem;
    }
    .add-notification {
      display: flex;
      align-items: center;
    }
    .notification-dropdown {
      margin-right: unset !important;
      button {
        margin-top: -0.1rem;
      }
    }
    .add-assessment-responsive {
      display: block !important;
      margin-top: 0.7rem;
    }
    .add-assessment-web {
      display: none;
    }
    .rightSideNavbar-resp {
      flex-direction: column;
    }
  }
  @media (max-width: 37.5rem) {
    .class-list {
      align-self: unset !important;
      margin-left: unset !important;
    }
  }
  @media (max-width: 31.25rem) {
    .rightSideNavbar-resp {
      align-items: flex-end !important;
    }
  }
  .add-assessment-responsive {
    display: none;
  }
  .home-icon {
    margin-right: 1.5rem;
    margin-left: 1rem;
    display: none;
    img {
      vertical-align: middle;
    }
  }
  .rightSideNavbar-resp {
    display: flex;
    align-items: center;
  }
`
