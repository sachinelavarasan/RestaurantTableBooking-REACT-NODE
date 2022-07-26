/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState, useRef, useCallback } from "react"
import debounce from "lodash.debounce"
import { useDispatch, useSelector } from "react-redux"
import { Typeahead } from "react-bootstrap-typeahead"
import { Link, useHistory } from "react-router-dom"
import ToastContainer from "../../../components/shared/ToastForAuthenticationError"

import check from "../../../assets/icons/checked.svg"
import SideImg from "./SideImg"
import jcLogo from "../../../assets/icons/blueLogo.svg"
// import MaterialInput from '../../../components/shared/Inputs/MaterialInput';
import StyledForm from "../elements/styles/OrganisationContainer"
import CustomButton from "../../../components/shared/Buttons/CustomButton"
import CustomTextInput from "../../../components/shared/CustomTextInput"

import buttonLoader from "../../../assets/icons/button-spinner.svg"
import { findOrgName } from "../../../api/authOld/signup"
import { signupSelector, registerUser, nextStepForNewOrg } from "../signupSlice"

const OrganisationLocationForm = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const dropdown = useRef()
  const filterDepartment = [
    {
      label: "Australia",
    },
    {
      label: "United States",
    },
    {
      label: "India",
    },
  ]
  const [detail, setDetails] = useState({
    country: {
      error: "",
      value: "",
    },
    orgName: {
      error: "",
      value: "",
    },
    rtoCode: {
      error: "",
      value: "",
    },
  })

  const [verifyRtoCode, setVerifyRtoCode] = useState(false)
  const [tgovOrgId, setTgovOrgId] = useState("")
  const [tgovOrgCode, setTgovOrgCode] = useState("")
  const [successRtoCode, setSuccessRtoCode] = useState(false)
  // const {register, errors, getValues, formState, handleSubmit} = useForm({
  //   mode: 'all',
  //   reValidateMode: 'onChange',
  //   criteriaMode: 'all',
  // });

  const dispatch = useDispatch()
  const signupState = useSelector(signupSelector)
  const [rto, setRto] = useState(false)

  // const onSubmit = data => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     dispatch(registerUser(data));
  //     setLoading(false);
  //   }, 3000);
  // };

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
  const handleChange = (event) => {
    setDetails((state) => ({
      ...state,
      [event.target.name]: {
        ...state[event.target.name],
        value: event.target.value,
      },
    }))
  }
  const handleSubmission = (event) => {
    event.preventDefault()
    const info = {
      country: detail.country.value,
      rtoCode: rto ? detail.rtoCode.value : null,
      org_name: detail.orgName.value,
      rto,
      tgovOrgCode,
      tgovOrgId,
    }
    if (detail.country.value && detail.orgName.value) {
      dispatch(nextStepForNewOrg(info))
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkRtoCode = useCallback(
    debounce((rtocode) => {
      findOrgName(rtocode)
        .then((response) => {
          if (rtocode === "") {
            setSuccessRtoCode(false)
          } else {
            setSuccessRtoCode(true)
          }
          setVerifyRtoCode(false)

          setDetails((state) => ({
            ...state,
            orgName: {
              ...state.orgName,
              value: response.data.organisation.legal_person_name,
            },
          }))
          setTgovOrgId(response.data.organisation.id)
          setTgovOrgCode(response.data.organisation.code)
        })
        .catch(({ response }) => {
          setVerifyRtoCode(false)
          setSuccessRtoCode(false)
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
                orgName: {
                  value: "",
                },
              }
            })
          }
        })
    }, 1000),
    []
  )

  const handleRtoCodeChange = (event) => {
    if (successRtoCode) {
      setSuccessRtoCode(false)
    }

    setVerifyRtoCode(true)
    setDetails((state) => ({
      ...state,
      rtoCode: {
        error: "",
        value: event.target.value,
      },
    }))
    checkRtoCode(event.target.value)
  }
  return (
    <StyledForm>
      <div className="row h-100">
        <div className="col-lg-6 p-lg-0 imgcontainer">
          <SideImg />
        </div>
        <div className="col-lg-6 p-lg-0 d-flex flex-column justify-content-center align-items-center">
          {signupState.errorMessage ? (
            <ToastContainer text={signupState.errorMessage} />
          ) : null}
          <div className="container-form">
            <div className="form">
              <div className="logodiv">
                <img src={jcLogo} alt="logo" className="logo" />
              </div>
              <h2 className="header-text">Create your account</h2>
              <span className="header-desc">
                Enter your basic details to create an account
              </span>
              <form
                className="mt-3"
                onSubmit={handleSubmission}
                autoComplete="off"
              >
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
                {/* <CustomTextInput
                  label="Choose your Country"
                  errorShow
                  autoComplete="off"
                  error={detail.country.error}
                  type="text"
                  name="country"
                  // onChange={handleChange}
                  value={detail.country.value}
                  borderRadius="8px"
                  padding="19px 24px 19px 24px"
                  data-testid="email"
                  placeholder="Country"
                /> */}
                <p className="typeahead-label">Select Your Country</p>
                <Typeahead
                  id="basic-example"
                  labelKey="label"
                  onChange={(value) => {
                    if (value[0]) {
                      setDetails((state) => ({
                        ...state,
                        country: {
                          ...state.country,
                          value: value[0].label,
                        },
                      }))
                    } else {
                      setDetails((state) => ({
                        ...state,
                        country: {
                          ...state.country,
                          value: "",
                        },
                      }))
                    }
                  }}
                  defaultInputValue={detail.country.value}
                  placeholder="Where is your organisation based in?"
                  ref={dropdown}
                  options={filterDepartment}
                />
                {detail.country.value === "Australia" ? (
                  <div className="remember-me">
                    <button
                      type="button"
                      className="checkbox"
                      onClick={() => {
                        setRto((state) => !state)
                        setSuccessRtoCode(false)
                        setDetails((state) => ({
                          ...state,
                          rtoCode: {
                            error: "",
                            value: "",
                          },
                        }))
                      }}
                    >
                      {rto ? (
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
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => {
                        setRto((state) => !state)
                        setSuccessRtoCode(false)
                        setDetails((state) => ({
                          ...state,
                          rtoCode: {
                            error: "",
                            value: "",
                          },
                        }))
                      }}
                    >
                      My organisation is an RTO
                    </button>
                  </div>
                ) : null}
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
                {rto && detail.country.value === "Australia" ? (
                  <div className="mt-3">
                    <CustomTextInput
                      label="Enter RTO Code"
                      errorShow
                      autoComplete="off"
                      error={detail.rtoCode.error}
                      type="text"
                      name="rtoCode"
                      onChange={handleRtoCodeChange}
                      value={detail.rtoCode.value}
                      borderRadius="8px"
                      padding="19px 24px 19px 24px"
                      placeholder="Enter RTO Code"
                      inputErrorLogo={detail.rtoCode.error}
                      inputSuccessLogo={successRtoCode}
                      inputVerifyLoader={verifyRtoCode}
                    />
                  </div>
                ) : null}
                <div className="mt-3">
                  <CustomTextInput
                    label="Organisation Name"
                    errorShow
                    autoComplete="off"
                    error={detail.orgName.error}
                    type="text"
                    name="orgName"
                    onChange={handleChange}
                    value={detail.orgName.value}
                    borderRadius="8px"
                    padding="19px 24px 19px 24px"
                    placeholder="What's the name of your organisation?"
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
              )}

              <div className="input-field">
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
              </div>
              {signupState?.showValidationBox && (
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

                <CustomButton
                  className="mt-4"
                  width="100%"
                  type="submit"
                  bgColor="#40A1FF"
                  borderRadius="8px"
                  padding="16px 24px"
                  isDisabled={
                    !detail.country.value ||
                    !detail.orgName.value ||
                    detail.country.error ||
                    detail.orgName.error
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
                      "Next"
                    )}
                  </>
                </CustomButton>
              </form>
              <div className="request-for-login-text">
                <span className="dont-have">
                  Already have an account ?
                  <Link to="/login" className="sign-in ml-1">
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

export default OrganisationLocationForm
