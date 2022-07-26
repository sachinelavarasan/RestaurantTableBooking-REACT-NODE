import { useSearchParam } from "react-use"

import StyledSuccessMessage from "../elements/styles/successMessage"

import MessageIcon from "../../../assets/icons/message-blue-success.svg"

const SuccessMessage = () => {
  const email = useSearchParam("email")

  return (
    <StyledSuccessMessage className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center sucessess_info">
        <img src={MessageIcon} alt="icon" />
        <h2 className="check-email mb-2">
          Check your email to reset your password
        </h2>
        <div className="check-subtitle">
          <span className="info">
            A password recovery email has sent to your
            <span className="email font-weight-bold"> {email}</span>. Please
            check your mail for the next step
          </span>
        </div>
      </div>
    </StyledSuccessMessage>
  )
}

export default SuccessMessage
