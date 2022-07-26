/* eslint-disable react/prop-types */
import React from "react"
import { MainTextarea, Label } from "./Elements/MainTextarea"

const MainTextareaCont = ({
  label,
  id,
  placeholder,
  register,
  ...textareaProps
}) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <MainTextarea
      id={id}
      className="form-control"
      placeholder={placeholder}
      ref={register}
      {...textareaProps}
    />
  </>
)

export default MainTextareaCont
