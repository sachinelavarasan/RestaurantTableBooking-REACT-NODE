/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import React, { useState } from "react"
import SideImg from "./SideImg"
// import MaterialInput from '../../../components/shared/Inputs/MaterialInput';
import StyledForm from "../elements/styles/inviteCode"
import check from "../../../assets/icons/checked.svg"
import CustomButton from "../../../components/shared/Buttons/CustomButton"
import CustomTextInput from "../../../components/shared/CustomTextInput"
import ToastContainer from "../../../components/shared/ToastForAuthenticationError"
// import SuccessTick from '../../../components/shared/SuccessTick';
// import arrowLeft from '../../../assets/icons/arrow_left.svg';
// import Eye from '../../../components/shared/Eye';
// import hasError from '../../../utils/hasError';
import buttonLoader from "../../../assets/icons/button-spinner.svg"
import backArrow from "../../../assets/icons/backarrow.svg"
import jcLogo from "../../../assets/icons/blueLogo.svg"

import {
  signupSelector,
  registerUser,
  decrementStep,
  setErrorMessage,
  setShowValidationBox,
  setShowPassword,
} from "../signupSlice"

const RequestCodeForm = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  // const {register, errors, getValues, formState, handleSubmit} = useForm({
  //   mode: 'all',
  //   reValidateMode: 'onChange',
  //   criteriaMode: 'all',
  // });
  const orgName = localStorage.getItem("orgName")
  const orgLoca = localStorage.getItem("orgLoca")
  const tgovOrgId = localStorage.getItem("tgovOrgId")
  const tgovOrgCode = localStorage.getItem("tgovOrgCode")

  const [detail, setDetails] = useState({
    full_name: {
      error: "",
      value: "",
    },
    email: {
      error: "",
      value: "",
    },
    password: {
      error: "",
      value: "",
    },
    c_password: {
      error: "",
      value: "",
    },
  })

  const dispatch = useDispatch()
  const signupState = useSelector(signupSelector)

  // const onSubmit = data => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     dispatch(registerUser(data));
  //     setLoading(false);
  //   }, 3000);
  // };
  const handleChange = (event) => {
    dispatch(setErrorMessage(""))
    setDetails((state) => ({
      ...state,
      [event.target.name]: {
        value: event.target.value,
        error: "",
      },
    }))
  }
  const handleError = (response) => {
    if (response?.data) {
      setDetails((state) => {
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
    const data = {
      full_name: detail.full_name.value,
      email: detail.email.value,
      password: detail.password.value,
      c_password: detail.c_password.value,
      org_name: orgName,
      orgLoca,
      privacy,
    }
    if (tgovOrgCode && tgovOrgId) {
      data.tgovOrgCode = tgovOrgCode
      data.tgovOrgId = tgovOrgId
    }
    if (data) {
      dispatch(registerUser(data, handleError))
    }
  }

  // const onPasswordFocus = () => {
  //   dispatch(setShowValidationBox(true));
  // };

  // const onPasswordBlur = () => {
  //   dispatch(setShowValidationBox(false));
  // };

  // // eye
  // const toggleShowPassword = () => {
  //   dispatch(setShowPassword(!signupState.showPassword));
  // };

  return (
    <StyledForm>
      <div className="row h-100">
        <div className="col-lg-6 p-lg-0">
          <SideImg />
        </div>
        <div className="rqst-code-card col-lg-6 p-lg-0 d-flex flex-column">
          {signupState.errorMessage ? (
            <ToastContainer text={signupState.errorMessage} />
          ) : null}
          <div className="container-form">
            <div className="form">
              <div className="logodiv">
                <img src={jcLogo} alt="logo" className="logo" />
              </div>
              <div className="back-button">
                <button
                  className="backbutton"
                  onClick={() => {
                    dispatch(decrementStep())
                    localStorage.removeItem("orgName")
                    localStorage.removeItem("orgLoca")
                    localStorage.removeItem("tgovOrgId")
                    localStorage.removeItem("tgovOrgCode")
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
              <h2 className="header-text">
                {!orgName ? "Create your account" : orgName}
              </h2>
              <span className="header-desc">
                Enter your basic details to create an account
              </span>
              <form className="mb-3" onSubmit={handleSubmission}>
                <div className="mt-4">
                  <CustomTextInput
                    label="Your Full name"
                    errorShow
                    autoComplete="off"
                    error={detail.full_name.error}
                    type="text"
                    name="full_name"
                    onChange={handleChange}
                    value={detail.full_name.value}
                    borderRadius="8px"
                    padding="19px 24px 19px 24px"
                    data-testid="full_name"
                    placeholder="Your Full Name"
                  />
                </div>
                {/* <MaterialInput
                  className="material-input"
                  textContent="Name of your Organization"
                >
                  <input
                    ref={register({required: true})}
                    type="text"
                    name="org_name"
                    data-testid="org_name"
                  />
                </MaterialInput>
                {errors.org_name && (
                  <div className="invalid-feedback">
                    <span className=" "> Enter your org name</span>
                  </div>
                )} */}

                {/* <MaterialInput
                  className="material-input"
                  textContent="Your Full Name."
                >
                  <input
                    ref={register({required: true})}
                    type="text"
                    name="full_name"
                    data-testid="full_name"
                  />
                </MaterialInput>
                {errors.full_name && (
                  <div className="invalid-feedback">
                    <span className=" "> Enter your full name</span>
                  </div>
                )} */}
                <div className="mt-3">
                  <CustomTextInput
                    label="Email"
                    errorShow
                    autoComplete="off"
                    error={detail.email.error}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={detail.email.value}
                    borderRadius="8px"
                    padding="19px 24px 19px 24px"
                    placeholder="Enter Your Email"
                  />
                </div>
                {/* <MaterialInput
                  className="material-input"
                  textContent="Your Email Address."
                >
                  <input
                    ref={register({
                      pattern: /\S+@\S+\.\S+/,
                      required: true,
                    })}
                    type="text"
                    name="email"
                    data-testid="email"
                  />
                </MaterialInput>
                {errors.email && (
                  <div className="invalid-feedback">
                    <span className=" "> Enter a valid email address</span>
                  </div>
                )} */}
                <div className="mt-3">
                  <CustomTextInput
                    label="Password"
                    autoComplete="off"
                    borderRadius="8px"
                    padding="19px 24px 19px 24px"
                    name="password"
                    ErrorRight
                    error={detail.password.error}
                    onChange={handleChange}
                    value={detail.password.value}
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                {/* <div className="input-field">
                  <div className="d-flex align-items-center position-relative">
                    <MaterialInput
                      className="material-input"
                      textContent="Password"
                    >
                      <input
                        type={signupState.showPassword ? 'text' : 'password'}
                        name="password"
                        onFocus={onPasswordFocus}
                        onBlur={onPasswordBlur}
                        data-testid="password"
                        ref={register({
                          required: true,
                          validate: {
                            atleastEightChar: value => value.length >= 8,
                            atleastAnUpperCaseLetter: value =>
                              !!/[A-Z]+/.test(value),
                            atleastANumber: value => !!/[0-9]+/.test(value),
                            atleastASpecialChar: value =>
                              !!/[*@!#%&$()^~{}]+/.test(value),
                          },
                        })}
                      />
                    </MaterialInput>
                    <Eye
                      open={signupState.showPassword}
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div> */}
                {/* {signupState?.showValidationBox && (
                  <div>
                    <div className="row">
                      <div className="col-lg-12 d-flex mt-3">
                        <SuccessTick
                          checked={
                            getValues('password').length > 1 &&
                            hasError(errors, 'atleastEightChar')
                          }
                          tickName="Atleast 8 character"
                        />
                        <SuccessTick
                          checked={
                            getValues('password').length > 1 &&
                            hasError(errors, 'atleastAnUpperCaseLetter')
                          }
                          tickName="An uppercase letter"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 d-flex mt-1">
                        <SuccessTick
                          checked={
                            getValues('password').length > 1 &&
                            hasError(errors, 'atleastASpecialChar')
                          }
                          tickName="A Special character"
                        />
                        <SuccessTick
                          checked={
                            getValues('password').length > 1 &&
                            hasError(errors, 'atleastANumber')
                          }
                          tickName="A number"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {errors.password && (
                  <div className="invalid-feedback">
                    <span className=""> Enter password</span>
                  </div>
                )}

                <div className="input-field">
                  <MaterialInput
                    className="material-input"
                    textContent="Confirm Password"
                  >
                    <input
                      type="password"
                      name="c_password"
                      data-testid="c-password"
                      ref={register({required: true})}
                    />
                  </MaterialInput>
                </div>
                {errors.c_password && (
                  <div className="invalid-feedback">
                    <span className=""> Enter confirm password.</span>
                  </div>
                )}

                {signupState.errorMessage && (
                  <div className="invalid-feedback text-centered mt-3">
                    <span className=" ">{signupState.errorMessage}</span>
                  </div>
                )} */}
                <div className="mt-3">
                  <CustomTextInput
                    label="Confirm Password"
                    autoComplete="off"
                    borderRadius="8px"
                    ErrorRight
                    padding="19px 24px 19px 24px"
                    name="c_password"
                    error={detail.c_password.error}
                    onChange={handleChange}
                    value={detail.c_password.value}
                    type="password"
                    placeholder="Enter confirm password"
                  />
                </div>
                <div className="remember-me">
                  <div>
                    <button
                      type="button"
                      className="checkbox"
                      onClick={() => {
                        setPrivacy((state) => !state)
                      }}
                    >
                      {privacy ? (
                        <img
                          src={check}
                          alt="checked"
                          width="19px"
                          height="19px"
                        />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                  <div className="text-button">
                    I accept the <p className="statement">Privacy Policy</p>
                    &nbsp;and&nbsp;
                    <p className="statement"> Terms of Service </p> of JungleCat
                  </div>
                </div>
                <CustomButton
                  className="mt-4"
                  width="100%"
                  type="submit"
                  bgColor="#40A1FF"
                  borderRadius="8px"
                  padding="16px 24px"
                  isDisabled={
                    !detail.full_name.value ||
                    !detail.email.value ||
                    !detail.password.value ||
                    !detail.c_password.value
                  }
                >
                  <>
                    {signupState.isLoading ? (
                      <img
                        alt="Processing"
                        className="button-spinner"
                        src={buttonLoader}
                      />
                    ) : (
                      "Signup"
                    )}
                  </>
                </CustomButton>
              </form>
              <div className="request-for-login-text">
                <span className="dont-have">
                  Already have an account ?
                  <Link to="/login" className="ml-1 link-login">
                    Sign In
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledForm>
  )
}

export default RequestCodeForm
