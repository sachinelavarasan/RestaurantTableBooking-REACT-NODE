import styled from "styled-components"

export const SideNavBarContainer = styled.div`
  .sidebar {
    background-color: #1973da;
    height: 100vh;
    top: 0;
    left: 0;
    width: 5.44rem;
    z-index: 2000;
    position: absolute;
    transition: width 0.4s;
    box-shadow: 0.0625rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);
    border-right: 1px solid #e6e7e8;
    @media (max-width: 600px) {
      & {
        display: none;
      }
    }

    .menu {
      width: 100%;
      height: 100%;
      .brand-container {
        width: 100%;
        display: flex;
        align-items: center;
        height: 5rem;
        padding-left: 2rem;

        .admin-badge {
          display: inline-block;
          border: 0.025rem solid #40a1ff;
          background-color: #ecf6ff;
          -webkit-letter-spacing: 0.01em;
          -moz-letter-spacing: 0.01em;
          -ms-letter-spacing: 0.01em;
          letter-spacing: 0.01em;
          border-radius: 0.225rem;
          padding: 0.125rem 0.25rem;
          margin: 0.3rem 0 0 0.625rem;
          p {
            margin: 0;
            text-align: center;
            color: #40a1ff;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 0.5rem;
          }
        }
      }
      .options-bar {
        max-height: calc(100vh - 6.25rem);
        overflow-y: auto;
        ::-webkit-scrollbar {
          display: none;
        }

        .menu-links {
          margin-top: 1rem;

          li {
            list-style: none;
            display: flex;
            align-items: center;
            width: 100%;

            a {
              width: 100%;
              list-style: none;
              margin: 0 1rem;
              padding: 1rem 1rem;
              height: 100%;
              box-sizing: border-box;
              background-color: transparent;
              display: flex;
              align-items: center;
              height: 100%;
              width: 100%;
              text-decoration: none;
              &.activeLink {
                background-color: #f4f9ff;
                border-radius: 0.25rem;

                span {
                  color: #5ba1f2;
                }
              }
              &.activeIcon {
                padding: unset;
                border-radius: 0.25rem;
              }
              .icon-image {
                margin-right: 2.1rem;
              }
              .icon-image-close {
                padding: 1.125rem 1rem;
                margin-right: 1.1rem;
                background-color: #ebf4ff;
                border-radius: 0.25rem;
              }

              .text {
                font-weight: 600;
                font-size: 1rem;
                color: #ffffff;
                white-space: nowrap;
              }
            }

            .active-dropdown {
              width: 100%;
              margin: 0 1rem;
              padding: 1.125rem 1rem;
              position: relative;
              outline: none;
              background: unset;
              border: unset;

              .text {
                font-weight: 600;
                font-size: 1rem;
                color: #ffffff;
                white-space: nowrap;
              }
              .button-arrow {
                vertical-align: middle;
              }
              .icon-image {
                margin-right: 2.1rem;
              }
              .icon-image-close {
                margin-right: 1.1rem;
                padding: 1.125rem 1rem;
                background-color: #ebf4ff;
                border-radius: 0.25rem;
              }
              &.activeLink {
                border-radius: 0.25rem;
                background-color: #f4f9ff;
                border-bottom-right-radius: unset;
                border-bottom-left-radius: unset;
                span {
                  color: #5ba1f2;
                }
              }
              &.activeIcon {
                padding: unset;
                border-radius: 0.25rem;
              }
            }
          }
          .expanded-menu {
            margin: 0 1rem;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            overflow: hidden;
            &.active {
              background: #f4f9ff;
            }

            .expanded-menu-item {
              width: 100%;
              display: flex;
              padding: 1.18rem 1rem;
              border: transparent;
              background: transparent;
              outline: unset;
              cursor: pointer;
              border-left: 0.1875rem solid transparent;
              overflow: hidden;

              &.active {
                background: #ebf4ff;
                height: 100%;
                border-left: 0.1875rem solid #5ba1f2;
                border-bottom-right-radius: 0.25rem;
              }
              .dropdown-text {
                font-weight: 500;
                font-size: 0.875rem;
                color: #9ea3a5;
                padding-left: 3.312rem;

                &.active-text {
                  color: #5ba1f2;
                }
              }
            }
          }
        }
      }
    }
    .menu-bar {
      max-height: calc(100vh + 6.25rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
  }
  .open-class {
    width: 16.5rem;
    transition: width 0.4s;
    .toggle {
      transform: translateY(-50%) rotate(0deg);
    }
  }
`
