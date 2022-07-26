import { yupResolver } from "@hookform/resolvers/yup"
import { useCallback } from "react"
import { Helmet } from "react-helmet"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { Button, Link, TextInput } from "../../../../components/common"
import { authSelector, logIn, setError } from "../../../../redux/authSlice"
import { useErrorMessage } from "../../../../utils/hooks"
import { loginSchema } from "../../../../utils/validation"
import {
  AuthSwitchLink,
  ErrorAlert,
  Heading,
  // HeroSection,
} from "../../components"
import { AuthContainer } from "../../elements"

const FIELDS_IN_ORDER = ["email", "password"]

export const Login = () => {
  const dispatch = useDispatch()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  })
  const history = useHistory()
  const { error: serverError, isLoading } = useSelector(authSelector)

  const onSubmit = useCallback(
    (data) => {
      dispatch(
        logIn(data, (userProfile) => {
          const isAdmin = userProfile?.user_type === 1
          history.push(isAdmin ? "/hotel" : "/user")
        })
      )
    },
    [dispatch, history]
  )

  const clearServerError = useCallback(() => {
    dispatch(setError(null))
  }, [dispatch])

  const { errorMessage, hasServerError } = useErrorMessage(
    errors,
    serverError,
    clearServerError,
    FIELDS_IN_ORDER
  )

  return (
    <AuthContainer className="no-gutters row">
      <Helmet>
        <title>Login | Restaurant Table Booking</title>
      </Helmet>
      {/* <HeroSection /> */}
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <section className="align-items-center col-lg-12 col-md-12 d-flex flex-column justify-content-center main-section position-relative px-4">
        <ErrorAlert isVisible={!!errorMessage} message={errorMessage} />
        <main className="d-flex flex-column main-content w-100">
          {/* <Spacer height="4rem" /> */}
          <div className="d-flex flex-column justify-content-center flex-grow-1">
            <Heading
              subtitle="Enter your credentials to access your account."
              title="Welcome Back"
            />
            <form
              className="align-items-center d-flex flex-column w-100"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                control={control}
                name="email"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    autoFocus
                    className="input-field mb-2"
                    hasError={hasServerError || !!errors.email}
                    label="Email"
                    placeholder="Enter your email address"
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={(fields) => (
                  <TextInput
                    {...fields}
                    className="input-field mb-2 mt-3"
                    hasError={hasServerError || !!errors.password}
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                )}
              />
              <div className="align-items-center d-flex justify-content-between mb-4 mt-2 w-100">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <Button
                isLarge
                isLoading={isLoading}
                label="Log In"
                type="submit"
              />
            </form>
            <AuthSwitchLink
              linkHref="/register"
              linkText="Register"
              onLinkClick={clearServerError}
              text="Don't have an account?"
            />
          </div>
          {/* <Spacer height="1rem" /> */}
        </main>
      </section>
    </AuthContainer>
  )
}
