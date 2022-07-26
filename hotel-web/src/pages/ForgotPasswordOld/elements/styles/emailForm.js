import styled from "styled-components"

const StyledEmailForm = styled.div`
  @media (max-width: 991px) {
    .col-lg-6 {
      padding: unset !important;
      overflow-x: hidden;
    }
  }
  @media (max-width: 991px) {
    .col-lg-6 {
      padding: unset !important;
      overflow-x: hidden;
    }
    .imgcontainer {
      display: none;
    }
  }
  .logodiv {
    display: none;
  }

  .password-card {
    color: #3d4457;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center !important;
    min-height: 100vh;
    width: 100%;
    @media (max-width: 472px) {
      & {
        display: flex;
        flex-direction: row;
        justify-content: unset !important;
        margin-top: 30px;
      }
    }

    .backbutton {
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      background-color: transparent;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #8a8c94;
    }
    .parent {
      width: 432px;
      @media (max-width: 472px) {
        & {
          width: 100%;
        }
        .logodiv {
          display: block;
          margin-bottom: 200px !important;
        }
      }
      @media (max-width: 991px) {
        .logodiv {
          display: block;
          margin-bottom: 100px;
        }
      }
    }
    .subtitle {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      margin-top: 8px;
      color: #8a8c94;
    }

    .header-text {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 38px;
      color: #3d4457;
      margin-top: 24px;
    }
    .button-spinner {
      width: 24px;
      height: 24px;
      animation: rotating 1s linear infinite;
    }
    .invalid-feedback {
      color: #ff6d7d;
      font-size: 14px;
      display: block;
    }
    .invite_text {
      font-size: 1rem;
      color: #757575;
      a {
        text-decoration: underline;
      }
    }
  }

  &::placeholder {
    color: #757575 !important;
  }

  @media all and (max-width: 768px) {
    .password-card {
      width: 100%;
      padding: 0px 25px;
    }
  }
`

export default StyledEmailForm
