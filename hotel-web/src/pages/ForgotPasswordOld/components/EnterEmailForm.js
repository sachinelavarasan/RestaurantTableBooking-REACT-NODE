/* eslint-disable jsx-a11y/autocomplete-valid */
import React, { useState } from "react"
// import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import SideImg from "./SideImg"
// import Button from '../../../components/shared/Buttons/GreenButton';
import buttonLoader from "../../../assets/icons/button-spinner.svg"
import CustomButton from "../../../components/shared/Buttons/CustomButton"
import CustomTextInput from "../../../components/shared/CustomTextInput"
// import MaterialInput from '../../../components/shared/Inputs/MaterialInput';
import ToastContainer from "../../../components/shared/ToastForAuthenticationError"
import StyledEmailForm from "../elements/styles/emailForm"
import backArrow from "../../../assets/icons/backarrow.svg"
import jcLogo from "../../../assets/icons/blueLogo.svg"
import {
  sendRecoveryEmail,
  forgotPasswordSelector,
} from "../forgotPasswordSlice"

const EnterEmailForm = () => {
  const history = useHistory()
  // const {register, errors, handleSubmit} = useForm();
  const dispatch = useDispatch()
  const passwordState = useSelector(forgotPasswordSelector)
  const [data, setData] = useState({
    email: {
      error: "",
      value: "",
    },
  })
  const handleChange = (event) =>
    setData((state) => ({
      ...state,
      [event.target.name]: {
        ...state[event.target.name],
        value: event.target.value,
      },
    }))
  const handleError = (response) => {
    if (response?.data) {
      setData((state) => {
        const cleanState = { ...state }

        Object.keys(cleanState).forEach((key) => {
          cleanState[key].error = ""
        })

        return {
          ...cleanState,
          [response.data.field]: {
            error: response.data.error,
          },
        }
      })
    }
  }

  const handleSubmission = (event) => {
    event.preventDefault()

    dispatch(sendRecoveryEmail({ us_email: data.email.value }, handleError))
  }
  return (
    <StyledEmailForm>
      <div className="row h-100">
        <div className="col-lg-6 p-lg-0 imgcontainer">
          <SideImg />
        </div>
        <div className="col-lg-6 col-12 p-lg-0">
          {passwordState.errorMessage ? (
            <ToastContainer text={passwordState.errorMessage} />
          ) : null}
          <div className="password-card d-flex flex-column h-100 justify-content-between">
            <div className="parent">
              <div className="logodiv">
                <img src={jcLogo} alt="logo" className="logo" />
              </div>
              <div>
                <button
                  className="backbutton"
                  onClick={() => history.goBack()}
                  style={{
                    marginRight: "8px",
                  }}
                  type="button"
                >
                  <img
                    src={backArrow}
                    alt="arrow"
                    style={{ marginRight: "8px" }}
                  />
                  Back
                </button>
              </div>

              <div>
                <h2 className="header-text">Forgot your password ?</h2>
                <span className="subtitle">
                  We will send instructions to your email to reset your
                  password.
                </span>
                <form
                  className="mb-3 mt-4"
                  onSubmit={handleSubmission}
                  autoComplete="off"
                >
                  <div className="input-field">
                    {/* <MaterialInput textContent="Enter registered email">
                      <input
                        type="text"
                        name="email"
                        ref={register({required: true})}
                        data-testid="email"
                      />
                    </MaterialInput>
                    {errors.email && (
                      <div className="invalid-feedback mt-0">
                        <span>Enter a valid email</span>
                      </div>
                    )}
                    {passwordState.errorMessage && (
                      <div className="invalid-feedback mt-0">
                        <span>{passwordState.errorMessage}</span>
                      </div>
                    )} */}
                    <CustomTextInput
                      label="Your Email Address"
                      errorShow
                      autoComplete="off"
                      error={data.email.error}
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={data.email.value}
                      borderRadius="8px"
                      padding="19px 24px 19px 24px"
                      data-testid="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <CustomButton
                    className="mt-4"
                    width="100%"
                    type="submit"
                    bgColor="#40A1FF"
                    borderRadius="8px"
                    padding="16px 24px"
                  >
                    <>
                      {passwordState.isLoading ? (
                        <img
                          alt="Processing"
                          className="button-spinner"
                          src={buttonLoader}
                        />
                      ) : (
                        "Reset Password"
                      )}
                    </>
                  </CustomButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledEmailForm>
  )
}

export default EnterEmailForm
