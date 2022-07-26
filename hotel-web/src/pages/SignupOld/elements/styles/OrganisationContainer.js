import styled from "styled-components"
import { Color } from "../../../../constants"

const StyledForm = styled.div`
  .container-form {
    width: 100%;
    display: flex;
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
    align-items: center !important;
    justify-content: center !important;
    @media (max-width: 472px) {
      & {
        display: flex;
        align-items: center !important;
        justify-content: unset !important;
      }
    }
    @media (max-width: 991px) {
      min-height: 100vh;
      .col-lg-6 {
        padding: unset !important;
        overflow-x: hidden;
      }
      .imgcontainer {
        display: none;
      }
      .logodiv {
        display: block;
        padding-bottom: 130px;
        margin-top: 20px;
      }
    }
  }
  .logodiv {
    display: none;
  }
  .form {
    width: 432px;
    @media (max-width: 472px) {
      & {
        width: 100%;
        padding: 0 20px;
      }
      .logodiv {
        display: block;
        padding-bottom: 130px;
      }
      .request-for-login-text {
        width: 100%;
        margin-top: 48px !important;
        display: flex;
        align-items: center !important;
        justify-content: center !important;
        margin-bottom: 10px;
      }
    }
  }
  .typeahead-label {
    color: #3d4457;
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 9px;
  }

  .tick-font {
    font-size: 1rem;
  }
  .col-lg-6 {
    padding-left: -15px;
    padding-right: -15px;
  }
  .dont-have {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #3d4457;
  }
  .request-for-login-text {
    color: #757575;
    margin-top: 48px;
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
  .checkbox {
    width: 21px;
    height: 21px;
    outline: unset;
    padding: 0;
    background-color: unset;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    img {
      vertical-align: unset;
    }
  }
  .remember-me {
    display: flex;
    align-items: center;
    margin-top: 24px;
  }
  .text-button {
    margin-left: 8px;
    outline: unset;
    border: unset;
    background-color: unset;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
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

  .material-input {
    font-size: 14px;
    font-family: IBM Plex Sans;
    margin-top: 20px;
  }
  .rbt input {
    height: 55px;
    border-radius: 8px;
    border: 1px solid #dedede;
    padding: 19px 24px !important;

    :active,
    :focus {
      border-color: ${Color.PRIMARY};
      box-shadow: 0 0 0 2px ${Color.LIGHT_BLUE};
      outline: none;
      transition: border-color 0.1s, box-shadow 0.1s;
    }
    ::placeholder {
      font-size: 14px;
      line-height: 18px;

      color: #c0c0c0;
    }
  }
  .dropdown-item {
    padding: 12px 24px;
  }

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
  .sign-in {
    color: #444444 !important;
    font-family: IBM Plex Sans;
    :hover {
      text-decoration: underline;
    }
  }
  .request-for-login-text {
    width: 432px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #3d4457;
  }
  .sign-in {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #40a1ff !important;
  }
  .loader {
    width: 68px;
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
  } */
  /* @media all and (max-width: 768px) {
    .rqst-code-card {
      width: 100%;
    }
  } */
`

export default StyledForm
