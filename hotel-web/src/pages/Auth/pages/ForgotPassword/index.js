import { yupResolver } from "@hookform/resolvers/yup"
import { useCallback } from "react"
import { Helmet } from "react-helmet"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import {
  BackLink,
  Button,
  // Spacer,
  TextInput,
} from "../../../../components/common"
import {
  authSelector,
  resetPassword,
  setError,
} from "../../../../redux/authSlice"
import { useErrorMessage } from "../../../../utils/hooks"
import { forgotPasswordSchema } from "../../../../utils/validation"
import { ErrorAlert, Heading } from "../../components"
import { AuthContainer } from "../../elements"

const FIELDS_IN_ORDER = ["email"]

export const ForgotPassword = () => {
  const dispatch = useDispatch()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(forgotPasswordSchema),
  })
  const history = useHistory()
  const { error: serverError, isLoading } = useSelector(authSelector)

  const onSubmit = useCallback(
    (data) => {
      dispatch(
        resetPassword(data, () => {
          history.push(`/reset-password-confirmation?email=${data.email}`)
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
        <title>Forgot Password | Hotel</title>
      </Helmet>
      {/* <HeroSection /> */}
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <section className="align-items-center col-md-12 d-flex flex-column justify-content-center main-section position-relative px-4">
        <ErrorAlert isVisible={!!errorMessage} message={errorMessage} />
        <main className="d-flex flex-column main-content w-100">
          {/* <Spacer height="4rem" /> */}
          <div className="d-flex flex-column justify-content-center flex-grow-1">
            <BackLink
              className="align-self-start back-link mb-4"
              onClick={() => {
                history.goBack()
              }}
            />
            <Heading
              marginBottom="2.5rem"
              subtitle="Enter your registered email below."
              title="Forgot Your Password?"
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
                    className="input-fields mb-4"
                    hasError={hasServerError || !!errors.email}
                    isLarge
                    label="Email"
                    placeholder="Enter email"
                  />
                )}
              />
              <Button
                isLarge
                isLoading={isLoading}
                label="Reset Password"
                type="submit"
              />
            </form>
          </div>
          {/* <Spacer height="4rem" /> */}
        </main>
      </section>
    </AuthContainer>
  )
}
