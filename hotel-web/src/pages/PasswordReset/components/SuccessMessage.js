import { useHistory } from "react-router-dom"
import styled from "styled-components"
// import Button from '../../../components/shared/Buttons/GreenButton';
import CustomButton from "../../../components/shared/Buttons/CustomButton"
import MsgIcon from "../../../assets/icons/message-blue-tick.svg"
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
    width: 432px;
    background: #ffffff;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    @media (max-width: 462px) {
      & {
        width: 100%;
      }
      .subtitle {
        padding: 0 65px !important;
      }
    }
    .success-icon {
      margin-top: 56px;
      margin-bottom: 32px;
    }
    h2 {
      font-family: Inter;
      padding: 0 65px;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #3d4457;
    }
    .button-container {
      margin-top: 24px;
      margin-bottom: 32px;
      padding: 0 32px;
    }
    .subtitle {
      padding: 0 91px;
    }
    .info {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;

      text-align: center;
      color: #8a8c94;
    }
  }
`

const SuccessMessage = () => {
  const history = useHistory()

  return (
    <StyledDiv className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center sucessess_info">
        <img src={MsgIcon} alt="password-success" className="success-icon" />
        <h2 className="text center mb-2">Password updated Successfully</h2>
        <div className="subtitle">
          <span className="info">
            Your Password has been updated successfully, Please login to
            continue
          </span>
        </div>

        <div className="button-container">
          <CustomButton
            width="100%"
            type="submit"
            bgColor="#40A1FF"
            borderRadius="8px"
            padding="16px 24px"
            onClick={() => {
              history.push("/login")
            }}
          >
            Login to Website
          </CustomButton>
        </div>
      </div>
    </StyledDiv>
  )
}

export default SuccessMessage
