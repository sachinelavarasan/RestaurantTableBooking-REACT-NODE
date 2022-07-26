/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import { useCallback, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import {
  hotelSelector,
  addOffersToHotel,
  clearFormError,
  setError as setServerError,
} from "../../../../../../redux/HotelSlice"

import { useErrorMessage } from "../../../../../../utils/hooks"
import { DateInput, TextArea } from "../../../../../../components/common"

import AddToastSuccessImg from "../../../../../../assets/icons/addtoastadmin.svg"
import { showToast } from "../../../../../../components/common/Toast"

import { offersSchema } from "../../../../../../utils/validation"
import { EditSessionContainer } from "./elements"

import FileInput from "../../../../../FileUploader/FileUploader"

const FIELDS_IN_ORDER = ["startDate", "endDate", "description"]

export const AddOffersModel = ({ onHide, show }) => {
  const dispatch = useDispatch()
  const [imgData, setImg] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)
  const { control, errors, handleSubmit, watch } = useForm({
    defaultValues: {
      startDate: new Date(),
      endDate: new Date(),
      description: "",
    },
    resolver: yupResolver(offersSchema),
  })
  const {
    error: serverError,
    isListLoading,
    isLoading,
  } = useSelector(hotelSelector)

  const clearServerError = useCallback(() => {
    dispatch(setServerError(null))
    dispatch(clearFormError())
  }, [dispatch])

  useErrorMessage(errors, serverError, clearServerError, FIELDS_IN_ORDER)

  const onSubmit = useCallback(
    (data) => {
      const details = {
        ...data,
        imgLoca: imgUrl,
      }
      if (!isLoading) {
        dispatch(
          addOffersToHotel(details, () => {
            showToast(AddToastSuccessImg, `offer added successfully `)
            onHide()
          })
        )
      }
    },
    [dispatch, onHide, isLoading, imgUrl]
  )

  return (
    <EditSessionContainer
      buttonLabel="Publish"
      description="Add offer to your hotel"
      isButtonLoading={isListLoading}
      loadingButtonLabel="Saving"
      onButtonClick={handleSubmit(onSubmit)}
      onHide={onHide}
      show={show}
      title="Add offer details"
      width="40rem"
      backdrop="static"
    >
      <form>
        <div className="form-container">
          <div className="row-container">
            <Controller
              control={control}
              name="description"
              render={(fields) => (
                <TextArea
                  {...fields}
                  label="Offer Description"
                  hasError={!!errors.description}
                  className="mb-3"
                  placeholder="Details"
                  rows="7"
                  onChange={(e) => {
                    fields.onChange(e)
                  }}
                />
              )}
            />
          </div>
          <p className="row-container mb-2">Upload your offer image</p>
          <div className="row-container pb-2">
            <FileInput
              accept="image/*"
              setImgUrl={setImgUrl}
              type="image"
              setImg={setImg}
              upload={imgData}
            />
          </div>
          <div className="row-container pb-4">
            <div className="field-left">
              <Controller
                control={control}
                name="startDate"
                render={(fields) => (
                  <DateInput
                    {...fields}
                    errorMessage={errors.startDate?.message}
                    hasError={!!errors.startDate}
                    label="Start Date"
                    placeholder="-Select-"
                    dateFormat="dd MMMM yyyy"
                  />
                )}
              />
            </div>
            <div className="field-right">
              <Controller
                control={control}
                name="endDate"
                render={(fields) => (
                  <DateInput
                    {...fields}
                    label="End Date"
                    errorMessage={errors.endDate?.message}
                    hasError={!!errors.endDate}
                    placeholder="-Select-"
                    dateFormat="dd MMMM yyyy"
                    minDate={watch("startDate")}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </form>
    </EditSessionContainer>
  )
}

AddOffersModel.propTypes = {
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
