import { useSelector } from "react-redux"
import SuccessMessage from "./components/SuccessMessage"
import ResetForm from "./components/ResetForm"
import { resetPasswordSelector } from "./passwordResetSlice"

const PasswordReset = () => {
  const pwResetState = useSelector(resetPasswordSelector)

  if (!pwResetState.pwResetted) {
    return <ResetForm />
  }
  return <SuccessMessage />
}

export default PasswordReset
