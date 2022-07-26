/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import MaterialInput from "../../../components/shared/Inputs/MaterialInput"
import StyledForm from "../elements/styles/inviteCode"
import Logo from "../../../assets/logos/logo_with_text.svg"
import { signupSelector, verifyInviteCode } from "../signupSlice"

const ReuestCodeForm = () => {
  const { register, errors, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const signupState = useSelector(signupSelector)

  const onSubmit = (data) => {
    dispatch(verifyInviteCode({ invitation_code: data.inv_code }))
  }

  return (
    <StyledForm className="h-100">
      <div className="d-flex flex-column h-100  justify-content-between">
        <div className="rqst-code-card d-flex flex-column h-100 justify-content-between">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <h2 className="header-text mb-2">
              Have an invite code?
              <br />
              Please enter it below
            </h2>

            <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
              <MaterialInput
                className="mt-3"
                textContent="Enter your code here."
              >
                <input
                  ref={register({ required: true })}
                  className="p-0"
                  type="text"
                  name="inv_code"
                  data-testid="inv_code"
                />
              </MaterialInput>

              {errors.inv_code && (
                <div className="invalid-feedback">
                  <span className=" "> Enter your invitation code</span>
                </div>
              )}

              {signupState.errorMessage && (
                <div className="invalid-feedback text-centered mt-3">
                  <span className=" ">{signupState.errorMessage}</span>
                </div>
              )}

              <button
                disabled={
                  signupState.isSubmitting && !signupState.errorMessage
                    ? "disabled"
                    : ""
                }
                type="submit"
                className="btn btn-submit mt-4 float-right"
              >
                Verify Code
              </button>
            </form>
          </div>

          <div>
            <span className="mr-2 bottom-light-text">
              Invite codes are required for using JungleCat now. <br />
              If you {" don't"} have an invite code, please
            </span>
            <Link to="request-code">Click here</Link>
          </div>
        </div>
      </div>
    </StyledForm>
  )
}

export default ReuestCodeForm
