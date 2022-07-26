import styled from "styled-components"
// import bg from '../../../../assets/images/login/background.svg';

const StyledForm = styled.div`
  min-height: 100vh;
  .rqst-code-card {
    width: 100%;
    .container-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center !important;
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

    .form {
      width: 432px;
      @media (max-width: 472px) {
        & {
          width: 100%;
          padding: 0 20px;
        }

        .request-for-login-text {
          display: flex;
          width: 100%;
          flex-direction: row;
          align-items: center !important;
          justify-content: center !important;
          padding-top: 40px;
          margin-bottom: 10px;
        }
      }
    }
    .tick-font {
      font-size: 1rem;
    }
    .header-text {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      color: #3d4457;
    }
    .header-desc {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #8a8c94;
    }
    .btn-submit {
      background: linear-gradient(121.61deg, #76db64 -27.87%, #1cb5d2 130.03%);
      border-radius: 3px;
      color: #ffffff;
      padding: 13px 45px;
    }
    .is-invalid {
      border-color: #ff6d7d;
      background-image: none;
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
  /* .material-input {
    font-size: 14px;
    font-family: IBM Plex Sans;
    margin-top: 20px;
  } */

  /* input {
    border-bottom: solid 2px #cccccc;
  }
  input:hover {
    border-bottom-color: #cccccc;
  }
  input + span {
    font-size: 12px;
  }
  .success-info {
    width: 25%;
    span {
      font-size: 18px;
      line-height: 162.6%;
    }
  }
  .bottom-light-text {
    font-size: 1rem;
    color: #757575 !important;
  } */
  a {
    color: #444444 !important;
    font-family: IBM Plex Sans;
    :hover {
      text-decoration: underline;
    }
  }
  .request-for-login-text {
    width: 432px;
    padding-bottom: 40px;
    margin-top: 30px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #3d4457;
  }
  .link-login {
    color: #40a1ff !important;
  }
  .back-button {
    width: 432px;
    padding-top: 65px;
    margin-bottom: 24px;
  }
  .checkbox {
    width: 21px;
    height: 21px;
    outline: unset;
    padding: 0;
    background-color: unset;
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    img {
      vertical-align: unset;
    }
  }
  .text-button {
    width: 100%;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    p {
      margin: unset;
    }
  }
  .statement {
    display: inline-block;
    color: #40a1ff;
  }
  .remember-me {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 18px;
    margin-bottom: 26px;
  }
  .loader {
    width: 68px;
  }
  .logodiv {
    display: none;
  }
  @media (max-width: 991px) {
    .col-lg-6 {
      padding: unset !important;
      overflow-x: hidden;
    }
    .imgcontainer {
      display: none;
    }
    .logodiv {
      display: block;
      padding-bottom: 20px;
      margin-top: 20px;
      display: flex;
      align-self: flex-start;
    }
    .back-button {
      padding-top: 30px;
      margin-bottom: 24px;
    }
  }

  .button-spinner {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    animation: rotating 1s linear infinite;
  }
  /* @media all and (max-width: 765px) {
    .rqst-code-card {
      padding: 60px 40px;
    }
    .success-info {
      width: 75%;
    }
  }
  @media all and (max-width: 768px) {
    .rqst-code-card {
      width: 100%;
    }
  } */
`

export default StyledForm
