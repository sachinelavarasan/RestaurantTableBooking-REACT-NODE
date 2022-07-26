import styled from "styled-components"
import bg from "../../../../assets/images/login/background.png"

const StyledSuccessMessage = styled.div`
  margin: 0 -15px;
  background-image: url(${bg});
  min-height: 100vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    padding: 56px 0;
    background: #ffffff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    @media (max-width: 462px) {
      & {
        width: 100%;
      }
      .check-subtitle {
        padding: 0 65px !important;
      }
      .check-email {
        padding: 0 30px !important;
      }
    }
    .check-subtitle {
      padding: 0 91px;
    }
    .check-email {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      padding: 0 51px;
      text-align: center;
      margin-top: 32px;
      line-height: 29px;
      color: #3d4457;
    }
    .info {
      word-wrap: break-word;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      margin-top: 8px;
      color: #8a8c94;
    }
  }
  /* @media all and (max-width: 765px) {
    .sucessess_info {
      width: 307px;
    }
  } */
`

export default StyledSuccessMessage
