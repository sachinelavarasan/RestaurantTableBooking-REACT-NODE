/* eslint-disable react/jsx-curly-brace-presence */
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Button from "../../../components/shared/Buttons/GreenButton"
import MsgIcon from "../../../assets/icons/message-green-success.svg"

const StyledDiv = styled.div`
  .sucessess_info {
    width: 426px;
    h2 {
      font-size: 1.75rem;
      font-weight: bold;
      color: #444444;
      line-height: 36px;
      margin-top: 40px;
    }
    .info {
      font-size: 18px;
      line-height: 29px;
      text-align: center;
      color: #7b7b7b;
    }
  }
`

const SuccessMessage = () => {
  const history = useHistory()

  return (
    <StyledDiv className="d-flex flex-column h-100 justify-content-center align-items-center">
      <div className="text-center sucessess_info">
        <img src={MsgIcon} alt="password-success" />
        <h2 className="text center mb-2">
          {"You're"} account is successully verified.
        </h2>
        <div style={{ padding: "0rem 2rem" }}>
          <span className="info">Please login to continue</span>
        </div>
        <Button
          className="btn mt-4 ml-auto mr-auto"
          type="submit"
          onClick={() => {
            history.push("/login")
          }}
        >
          Login to JungleCat
        </Button>
      </div>
    </StyledDiv>
  )
}

export default SuccessMessage
