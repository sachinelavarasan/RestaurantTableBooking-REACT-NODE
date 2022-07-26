import styled from "styled-components"
import bg from "../../../../assets/images/login/background.png"

const StyledResetForm = styled.div`
  margin: 0 -15px;
  background-image: url(${bg});
  min-height: 100vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  @media (max-width: 500px) {
    & {
      padding: 0 15px;
    }
  }
  .logo {
    margin-bottom: 32px;
  }
  .sucessess_info {
    width: 432px;
    background: #ffffff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    @media (max-width: 462px) {
      & {
        width: 100%;
      }
    }
  }
  .password-card {
    .header-text {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #3d4457;
      margin-top: 24px;
    }
    .subtitle-div {
      padding: 0 91px;
      text-align: center;
      margin-bottom: 32px;
    }
    .fields {
      padding: 0 32px;
    }
    .button-container {
      margin-top: 30px;
      padding: 0 32px;
    }
    .subtitle {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #8a8c94;
    }
    .mail {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #8a8c94;
    }
    .button-spinner {
      width: 24px;
      height: 24px;
      animation: rotating 1s linear infinite;
    }
    /* .input-box {
      border-bottom: 2px solid #cccccc;
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      position: relative;
    }
    .input-box:focus {
      border-bottom-color: #3f3f3f;
    }
    .input-field {
      position: relative;
      line-height: 44px;
      margin-top: 1.4rem;
      height: 52px;
    }
    label {
      color: #505050;
      line-height: 21px;
      transition: 0.2s all;
      font-size: 16px;
      cursor: text;
    }
    .input-box:focus ~ label,
    .input-box:valid ~ label {
      top: -12px;
      color: #ababab;
      font-size: 13px;
      line-height: 13px;
    } */
    .status-text {
      margin-left: 0.5rem;
      font-size: 12px;
      font-weight: 600;
      color: #757575;
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

  button:disabled {
    cursor: not-allowed !important;
  }

  /* @media all and (max-width: 765px) {
    .sucessess_info {
      width: 307px;
    }
  } */

  @media all and (max-width: 768px) {
    .password-card {
      width: 100%;
      padding: 0px 24px;
      .fields {
        padding: unset;
      }
      .button-container {
        padding: 0 0;
      }
      .subtitle-div {
        padding: 0 0;
      }
    }
  }
`

export default StyledResetForm
