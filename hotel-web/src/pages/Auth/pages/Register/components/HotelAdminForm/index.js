import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import { useCallback, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useLocalStorage } from "react-use"

import {
  BackLink,
  Button,
  Spacer,
  TextInput,
} from "../../../../../../components/common"
import {
  authSelector,
  register as registerAdmin,
  setError,
  setOrganisation,
} from "../../../../../../redux/authSlice"
import { useErrorMessage } from "../../../../../../utils/hooks"
import { registerAdminSchema } from "../../../../../../utils/validation"
import { AuthSwitchLink, ErrorAlert, Heading } from "../../../../components"
import { HotelAdminFormContainer } from "./elements"
import FileInput from "../../../../../FileUploader/FileUploader"

const FIELDS_IN_ORDER = ["name", "email", "password", "confirmPassword"]

export const HotelAdminForm = ({
  onNavigateBack,
  onNavigateBackToChooseType,
  accountType,
}) => {
  const dispatch = useDispatch()
  const [imgData, setImg] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)
  const [restaurantName, removeRestaurantName] = useLocalStorage(
    "restaurantName",
    "",
    {
      raw: true,
    }
  )
  const [stateName, removeStateName] = useLocalStorage("state", "", {
    raw: true,
  })
  const [districtName, removeDistrictName] = useLocalStorage("district", "", {
    raw: true,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      restaurantName,
      password: "",
      stateName,
      districtName,
    },
    resolver: yupResolver(registerAdminSchema),
  })
  const history = useHistory()
  const { error: serverError, isLoading } = useSelector(authSelector)

  const clearLocalStorageValues = useCallback(() => {
    removeRestaurantName()
    removeDistrictName()
    removeStateName()
  }, [removeRestaurantName, removeDistrictName, removeStateName])

  const onSubmit = useCallback(
    (data) => {
      const details = {
        ...data,
        userType: accountType,
        imgLoca: imgUrl,
      }
      dispatch(
        registerAdmin(details, () => {
          dispatch(setOrganisation(null))
          clearLocalStorageValues()
          history.push(`/register-success?email=${data.email}`)
          // history.push(`/login`)
        })
      )
    },
    [accountType, clearLocalStorageValues, dispatch, history, imgUrl]
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
    <HotelAdminFormContainer className="align-items-center col-lg-12 col-md-12 d-flex flex-column justify-content-center main-section position-relative px-4">
      <ErrorAlert isVisible={!!errorMessage} message={errorMessage} />
      <main className="d-flex flex-column main-content w-100">
        <Spacer height="4rem" />
        <div className="d-flex flex-column justify-content-center flex-grow-1">
          <BackLink
            className="mb-3"
            onClick={() => {
              clearLocalStorageValues()
              dispatch(setOrganisation(null))
              onNavigateBack()
            }}
          />
          <Heading
            marginBottom="1rem"
            subtitle="Enter your details to create an account."
            title={restaurantName}
          />
          <form
            className="align-items-center d-flex flex-column w-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              control={control}
              name="name"
              render={(fields) => (
                <TextInput
                  {...fields}
                  autoFocus
                  className="input-fields mb-3"
                  hasError={hasServerError || !!errors.name}
                  label="Full Name"
                  placeholder="Enter your full name"
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={(fields) => (
                <TextInput
                  {...fields}
                  className="mb-3"
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
                  className="input-fields mb-3"
                  hasError={hasServerError || !!errors.password}
                  label="Password"
                  placeholder="Enter a password"
                  type="password"
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={(fields) => (
                <TextInput
                  {...fields}
                  className="input-fields mb-3"
                  hasError={hasServerError || !!errors.confirmPassword}
                  label="Confirm Password"
                  placeholder="Confirm the password"
                  type="password"
                />
              )}
            />
            <FileInput
              accept="image/*"
              setImgUrl={setImgUrl}
              type="image"
              setImg={setImg}
              upload={imgData}
            />
            <input {...register("restaurantName")} type="hidden" />
            <input {...register("stateName")} type="hidden" />
            <input {...register("districtName")} type="hidden" />
            <Button isLoading={isLoading} label="Register" type="submit" />
          </form>
          <AuthSwitchLink
            linkHref="/login"
            linkText="Login"
            onLinkClick={() => {
              clearServerError()
              clearLocalStorageValues()
              onNavigateBackToChooseType()
              dispatch(setOrganisation(null))
            }}
            text="Already have an account?"
          />
        </div>
        <Spacer height="4rem" />
      </main>
    </HotelAdminFormContainer>
  )
}

HotelAdminForm.propTypes = {
  onNavigateBack: PropTypes.func.isRequired,
  onNavigateBackToChooseType: PropTypes.func.isRequired,
  accountType: PropTypes.string.isRequired,
}
