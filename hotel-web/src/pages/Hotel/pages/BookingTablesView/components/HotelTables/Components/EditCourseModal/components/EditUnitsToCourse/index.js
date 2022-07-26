/* eslint-disable react/prop-types */

import { yupResolver } from "@hookform/resolvers/yup"
import { useCallback, useMemo } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { Table } from "../../../../../../../../../../components/common/Table"
import CloseIcon from "../../../../../../../../../../assets/icons/redcross.svg"
import {
  coursesSelector,
  setError as setServerError,
  clearFormError,
} from "../../../../../../../../../../redux/coursesSlice"

import {
  Select,
  TextInput,
} from "../../../../../../../../../../components/common"

import CustomCancel from "../../../../../../../../../../components/shared/Buttons/CustomButton"
import AddIcon from "../../../../../../../../../../assets/icons/addadmin.svg"
import { useErrorMessage } from "../../../../../../../../../../utils/hooks"
import { courseUnitSchema } from "../../../../../../../../../../utils/validation"

import { EditUnitsToCourseContainer, ManualTableStyles } from "./elements"

const FIELDS_IN_ORDER = ["unit", "sessions", "hours"]

export const EditUnitsToCourse = ({ addUnits, setAddUnits }) => {
  const dispatch = useDispatch()

  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      unit: null,
      sessions: "",
      hours: "",
    },
    resolver: yupResolver(courseUnitSchema),
  })

  const { error: serverError, allUnits } = useSelector(coursesSelector)

  const clearServerError = useCallback(() => {
    dispatch(setServerError(null))
    dispatch(clearFormError())
  }, [dispatch])

  useErrorMessage(errors, serverError, clearServerError, FIELDS_IN_ORDER)

  let unitsOptions = useMemo(
    () => [
      ...(allUnits || [])?.map((item) => ({
        label: `${item.orgUnit.unit.tun_title}`,
        value: item.orgUnit.ou_id_orgunit,
        code: item.orgUnit.unit.tun_code,
      })),
    ],
    [allUnits]
  )
  unitsOptions = useMemo(() => {
    const arraysOfUnits = addUnits.map((item) => item.unit.label)
    return unitsOptions.filter((item) => !arraysOfUnits.includes(item.label))
  }, [addUnits, unitsOptions])

  const formatOptionForUnit = ({ code, label }, { context }) =>
    context === "menu" ? (
      <div className="select-option" type="button">
        <div className="label">{label?.split(" # ")?.[0]}</div>
        <div className="code mt-1">{code}</div>
      </div>
    ) : (
      label?.split(" # ")?.[0]
    )

  const onSubmit = useCallback(
    (data) => {
      setAddUnits((state) => [
        ...state,
        {
          unit: data.unit,
          sessions: data.sessions,
          hours: data.hours,
        },
      ])
      setValue("unit", null)
      setValue("sessions", "")
      setValue("hours", "")
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addUnits]
  )
  const removeItems = (position) => {
    setAddUnits((state) =>
      state.filter((item, index) => index !== position.index)
    )
  }
  // Manual flow mapping
  const manualcolumns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "serial",
        className: "serial",
      },
      {
        Header: "Unit Name",
        Cell: ({ value }) => value?.split(" # ")?.[0],
        accessor: "unit.label",
        className: "unit-name",
      },
      {
        Header: "Sessions",
        accessor: "sessions",
        className: "sessions",
      },
      {
        Header: "Hours",
        accessor: "hours",
        className: "hours",
      },

      {
        Header: " ",
        Cell: ({ row: position }) => (
          <button
            type="button"
            onClick={() => {
              removeItems(position)
            }}
            className="closeIconBtn"
          >
            <img src={CloseIcon} alt="close" />
          </button>
        ),
        accessor: "addunits",
        className: "close-row",
      },
    ],

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [addUnits]
  )
  const manualdata = useMemo(
    () => [
      ...addUnits.map((item, index) => ({
        ...item,
        serial: index + 1,
      })),
    ],
    [addUnits]
  )

  return (
    <EditUnitsToCourseContainer>
      <div className="container-unit">
        <div className="courseheading d-flex justify-content-between  mb-2">
          <p className="main-text">
            No. Of Hours for units in the qualification
          </p>
        </div>
        <form>
          <div className="form-box">
            <div className="row-container">
              <div className="field-left">
                <Controller
                  control={control}
                  name="unit"
                  render={(fields) => (
                    <Select
                      {...fields}
                      hasError={!!errors.unit}
                      errorMessage={errors.unit?.message}
                      isLarge={false}
                      label="Unit"
                      formatOptionLabel={formatOptionForUnit}
                      options={unitsOptions}
                      placeholder="Select a Unit"
                      height="10rem"
                      isDisabled={!unitsOptions?.length}
                      id="unit"
                      noOptionsMessage={() => "No more options"}
                    />
                  )}
                />
              </div>
              <div className="field-middle">
                <Controller
                  control={control}
                  name="sessions"
                  render={(fields) => (
                    <TextInput
                      {...fields}
                      autoComplete="off"
                      hasError={!!errors.sessions}
                      label="Sessions"
                      placeholder="No of sessions"
                      type="number"
                      id="sessions"
                    />
                  )}
                />
              </div>
              <div className="field-middle">
                <Controller
                  control={control}
                  name="hours"
                  render={(fields) => (
                    <TextInput
                      {...fields}
                      autoComplete="off"
                      hasError={!!errors.hours}
                      label="Hours"
                      placeholder="No of hours"
                      type="number"
                      id="hours"
                    />
                  )}
                />
              </div>
              <div className="field-right">
                <CustomCancel
                  className="save-changes"
                  bgColor="#fff"
                  padding="0.5rem 0.875rem"
                  onClick={handleSubmit(onSubmit)}
                  id="add-unit-button"
                >
                  <img src={AddIcon} alt="icon" />
                  <span className="add-button-text">Add</span>
                </CustomCancel>
              </div>
            </div>
          </div>
        </form>

        {addUnits?.length ? (
          <ManualTableStyles>
            <Table
              columns={manualcolumns}
              data={manualdata}
              itemName="item added"
              width="52rem"
              isSortedBy
              isWithoutPagination
            />
          </ManualTableStyles>
        ) : null}
      </div>
    </EditUnitsToCourseContainer>
  )
}
