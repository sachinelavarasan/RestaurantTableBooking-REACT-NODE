/* eslint-disable react/jsx-curly-brace-presence */
import styled from "styled-components"
import MessageIcon from "../../../assets/icons/message-blue-success.svg"
import bg from "../../../assets/images/login/background.png"

const StyledDiv = styled.div`
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
    width: 426px;
    padding: 56px 0;
    background: #ffffff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    .check-email {
      padding: 0 38px;
      font-family: Inter;
      margin-top: 32px;
      line-height: 29px;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      text-align: center;
      color: #3d4457;
    }
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
      .email {
        text-align: justify;
      }
    }

    .check-subtitle {
      padding: 0 91px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #8a8c94;
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
`

const SuccessMessage = () => (
  <StyledDiv className="d-flex flex-column h-100 justify-content-center align-items-center">
    <div className="text-center sucessess_info">
      <img src={MessageIcon} alt="icon" />
      <h2 className="check-email mb-2">
        Check your email to finish the registration
      </h2>
      <div className="check-subtitle">
        <span className="info">
          A verification email has been sent to you, Please click on the link in
          email to activate your account.
        </span>
      </div>
    </div>
  </StyledDiv>
)

export default SuccessMessage
