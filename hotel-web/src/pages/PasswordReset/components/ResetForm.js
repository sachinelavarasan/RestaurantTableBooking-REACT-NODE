/* eslint-disable no-prototype-builtins */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import CustomButton from "../../../components/shared/Buttons/CustomButton"
import StyledResetForm from "../elements/styles/resetForm"

import {
  // setShowValidationBox,
  resetPasswordSelector,
  resetPassword,
  // setShowPassword,
} from "../passwordResetSlice"
import { findUserById } from "../../../api/auth"
import buttonLoader from "../../../assets/icons/button-spinner.svg"

import CustomTextInput from "../../../components/shared/CustomTextInput"

const ResetForm = () => {
  const dispatch = useDispatch()

  const pwResetState = useSelector(resetPasswordSelector)
  const { id } = useParams()
  const [userDetails, setUserDetails] = useState("")

  useEffect(() => {
    findUserById(id).then((response) => {
      setUserDetails(response.data.user)
    })
  }, [id])

  const [data, setData] = useState({
    password: {
      error: "",
      value: "",
    },
    confirmpassword: {
      error: "",
      value: "",
    },
  })
  const handleChange = (event) =>
    setData((state) => ({
      ...state,
      [event.target.name]: {
        error: "",
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
    const info = {
      c_password: data.confirmpassword.value,
      password: data.password.value,
      id,
    }
    dispatch(resetPassword(info, handleError))
  }

  // const onPasswordFocus = () => {
  //   dispatch(setShowValidationBox(true));
  // };

  // const onPasswordBlur = () => {
  //   dispatch(setShowValidationBox(false));
  // };

  // const toggleShowPassword = () => {
  //   dispatch(setShowPassword(!pwResetState.showPassword));
  // };

  return (
    <StyledResetForm className="d-flex flex-column justify-content-center align-items-center">
      <div className="sucessess_info">
        <div className="password-card">
          <div>
            <h2 className="header-text">Reset password</h2>
            <div className="subtitle-div">
              <span className="subtitle">Enter a new password for</span>
              <br />
              <span className="mail">{userDetails?.email}</span>
            </div>
            <form
              className="mb-4"
              onSubmit={handleSubmission}
              autoComplete="off"
            >
              <div className="fields">
                <CustomTextInput
                  label="Password"
                  autoFocus
                  autoComplete="off"
                  borderRadius="8px"
                  padding="19px 24px 19px 24px"
                  name="password"
                  ErrorRight
                  error={data.password.error}
                  onChange={handleChange}
                  value={data.password.value}
                  type="password"
                  data-testid="password"
                  placeholder="Enter password"
                  maxLength="15"
                />
              </div>

              <div className="fields mt-3">
                <CustomTextInput
                  label="Confirm Password"
                  autoComplete="off"
                  borderRadius="8px"
                  ErrorRight
                  padding="19px 24px 19px 24px"
                  name="confirmpassword"
                  error={data.confirmpassword.error}
                  onChange={handleChange}
                  value={data.confirmpassword.value}
                  type="password"
                  data-testid="password"
                  placeholder="Enter confirm password"
                  maxLength="15"
                />
              </div>

              <div className="button-container">
                <CustomButton
                  width="100%"
                  type="submit"
                  bgColor="#40A1FF"
                  borderRadius="8px"
                  padding="16px 24px"
                >
                  <>
                    {pwResetState.isLoading ? (
                      <img
                        alt="Processing"
                        className="button-spinner"
                        src={buttonLoader}
                      />
                    ) : (
                      "Update password"
                    )}
                  </>
                </CustomButton>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </StyledResetForm>
  )
}

export default ResetForm
